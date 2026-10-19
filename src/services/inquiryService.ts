import { InquiryFormData } from '../types';
import { COMPANY_INFO } from '../data/company';

export interface InquirySubmissionResult {
  success: boolean;
  isConfigured: boolean;
  message: string;
  inquiryId?: string;
  whatsappFallbackUrl?: string;
}

const DEFAULT_SUPABASE_URL = 'https://ktnyyfaufxxoxdxzolya.supabase.co';
const DEFAULT_SUPABASE_KEY = 'sb_publishable_FBAcmrh-ZP_pavaxs05RYg_aSxXpI1a';

export function getSupabaseConfig(): { url: string; key: string } {
  let url = DEFAULT_SUPABASE_URL;
  let key = DEFAULT_SUPABASE_KEY;

  if (typeof window !== 'undefined') {
    const savedUrl = localStorage.getItem('globelink_supabase_url');
    const savedKey = localStorage.getItem('globelink_supabase_key');
    if (savedUrl) url = savedUrl.trim();
    if (savedKey) key = savedKey.trim();
  }

  if (import.meta.env.VITE_SUPABASE_URL) {
    const envUrl = import.meta.env.VITE_SUPABASE_URL;
    if (!envUrl.includes('your-project') && envUrl.trim().length > 0) {
      url = envUrl.trim();
    }
  }

  if (import.meta.env.VITE_SUPABASE_ANON_KEY) {
    const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    if (!envKey.includes('your-anon') && envKey.trim().length > 0) {
      key = envKey.trim();
    }
  }

  return { url, key };
}

export function isSupabaseConfigured(): boolean {
  const { url, key } = getSupabaseConfig();
  return Boolean(url && key && url.startsWith('http') && !url.includes('your-project'));
}

export function saveSupabaseConfig(url: string, key?: string): void {
  if (typeof window !== 'undefined') {
    if (url) localStorage.setItem('globelink_supabase_url', url.trim());
    if (key) localStorage.setItem('globelink_supabase_key', key.trim());
  }
}

export async function testSupabaseConnection(testUrl: string, testKey: string): Promise<{ success: boolean; message: string }> {
  try {
    const cleanedUrl = testUrl.replace(/\/$/, '');
    const res = await fetch(`${cleanedUrl}/rest/v1/inquiries?select=id&limit=1`, {
      method: 'GET',
      headers: {
        'apikey': testKey,
        'Authorization': `Bearer ${testKey}`
      }
    });

    if (res.ok) {
      return {
        success: true,
        message: 'Successfully connected! The "inquiries" table exists and is accessible.'
      };
    }

    if (res.status === 404) {
      return {
        success: false,
        message: 'Connected to Supabase project, but the "inquiries" table was not found. Please execute the SQL table script in Supabase SQL editor.'
      };
    }

    if (res.status === 401 || res.status === 403) {
      return {
        success: false,
        message: `Authentication / Permission error (${res.status}). Verify that the anon key is valid and Row Level Security policy is enabled for public insert.`
      };
    }

    return {
      success: false,
      message: `Database returned status ${res.status}: ${res.statusText}`
    };
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : 'Unknown network failure';
    return {
      success: false,
      message: `Failed to reach Supabase project: ${errMsg}. Check that the URL is formatted as https://xyz.supabase.co`
    };
  }
}

export function generateWhatsAppMessageUrl(data: InquiryFormData): string {
  const text = `*New Inquiry via GlobeLink Website*
*Name:* ${data.fullName}
*Phone:* ${data.phone}
*Email:* ${data.email}
*Preferred Destination:* ${data.preferredDestination || 'Not specified'}
*Service Category:* ${data.serviceCategory || 'General Inquiry'}
*Interest:* ${data.educationCareerInterest || 'N/A'}
*Preferred Contact:* ${data.preferredContactMethod}
*Message:* ${data.message || 'No additional message'}
*Consent Given:* Yes`;

  return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
}

export async function submitInquiry(data: InquiryFormData): Promise<InquirySubmissionResult> {
  // 1. Spam honeypot check
  if (data.honeypot && data.honeypot.trim().length > 0) {
    return {
      success: false,
      isConfigured: true,
      message: 'Spam detected. Submission rejected.'
    };
  }

  // 2. Format WhatsApp fallback URL in all cases
  const whatsappUrl = generateWhatsAppMessageUrl(data);

  // 3. Save to browser local cache so client never loses inquiry details
  try {
    const existing = JSON.parse(localStorage.getItem('globelink_local_inquiries') || '[]');
    const newEntry = {
      ...data,
      id: 'INQ-' + Date.now(),
      submittedAt: new Date().toISOString()
    };
    localStorage.setItem('globelink_local_inquiries', JSON.stringify([newEntry, ...existing]));
  } catch {
    // ignore local storage error if restricted
  }

  // 4. Check if Supabase credentials are configured
  const { url: supabaseUrl, key: supabaseAnonKey } = getSupabaseConfig();

  if (!isSupabaseConfigured() || !supabaseUrl) {
    return {
      success: false,
      isConfigured: false,
      message: 'Supabase Project URL is not configured yet. Your inquiry is saved locally and can be forwarded to GlobeLink via WhatsApp.',
      whatsappFallbackUrl: whatsappUrl
    };
  }

  // 5. Ensure consent is boolean true (as required by RLS: WITH CHECK (consent_given = true))
  const consentGiven = Boolean(data.consent);
  if (!consentGiven) {
    return {
      success: false,
      isConfigured: true,
      message: 'Consent is required to submit an inquiry.',
      whatsappFallbackUrl: whatsappUrl
    };
  }

  // 6. Submit to Supabase REST endpoint with Prefer: return=minimal
  try {
    const cleanedUrl = supabaseUrl.replace(/\/$/, '');
    const payload = {
      full_name: data.fullName.trim(),
      phone: data.phone.trim(),
      email: data.email.trim(),
      preferred_destination: data.preferredDestination?.trim() || null,
      service_category: data.serviceCategory?.trim() || null,
      education_career_interest: data.educationCareerInterest?.trim() || null,
      preferred_contact_method: data.preferredContactMethod || 'WhatsApp',
      message: data.message?.trim() || null,
      consent_given: consentGiven
    };

    const response = await fetch(`${cleanedUrl}/rest/v1/inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
        'Authorization': `Bearer ${supabaseAnonKey}`,
        // Using return=minimal avoids evaluating SELECT RLS policies on INSERT for anonymous callers
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Supabase submission failed:', response.status, errText);

      let parsedMessage = '';
      try {
        const errJson = JSON.parse(errText);
        if (errJson.message) {
          parsedMessage = errJson.message;
          if (errJson.details) parsedMessage += ` (${errJson.details})`;
          if (errJson.hint) parsedMessage += ` - Hint: ${errJson.hint}`;
        }
      } catch {
        parsedMessage = errText;
      }

      let helpfulMsg = parsedMessage
        ? `Supabase error (${response.status}): ${parsedMessage}`
        : `Database response error (${response.status}).`;

      if (response.status === 404) {
        helpfulMsg = 'Connected to Supabase, but the "inquiries" table was not found in the public schema. Please create the table in Supabase SQL editor.';
      } else if (response.status === 401 || response.status === 403) {
        if (parsedMessage.includes('violates row-level security policy')) {
          helpfulMsg = 'Supabase RLS Policy error: The insert was rejected by the table security policy. Ensure consent_given is true and anonymous insert is permitted.';
        } else {
          helpfulMsg = `Supabase authorization error (${response.status}): ${parsedMessage || 'Verify API key and public table permissions.'}`;
        }
      }

      return {
        success: false,
        isConfigured: true,
        message: `${helpfulMsg} You can also forward this inquiry immediately via WhatsApp.`,
        whatsappFallbackUrl: whatsappUrl
      };
    }

    // 201 Created / 204 No Content with return=minimal
    const refId = 'GLB-' + Date.now().toString(36).toUpperCase();
    return {
      success: true,
      isConfigured: true,
      message: 'Thank you! Your inquiry has been securely received by GlobeLink Consultants. Our team will contact you shortly.',
      inquiryId: refId,
      whatsappFallbackUrl: whatsappUrl
    };
  } catch (error) {
    const errorDetails = error instanceof Error ? error.message : 'Network error';
    console.error('Network error during Supabase submission:', error);
    return {
      success: false,
      isConfigured: true,
      message: `Network error communicating with Supabase (${errorDetails}). Please contact us via WhatsApp or hotline.`,
      whatsappFallbackUrl: whatsappUrl
    };
  }
}
