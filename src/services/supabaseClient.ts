import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { getSupabaseConfig, isSupabaseConfigured } from './inquiryService';
import { InquiryRecord, InquiryStatus, NewsArticle, ExamEntry, AdminUser } from '../types';

let cachedClient: SupabaseClient | null = null;
let lastUsedUrl = '';
let lastUsedKey = '';

export function getSupabaseClient(): SupabaseClient | null {
  const { url, key } = getSupabaseConfig();

  if (!url || !key || !url.startsWith('http') || url.includes('your-project')) {
    return null;
  }

  if (cachedClient && lastUsedUrl === url && lastUsedKey === key) {
    return cachedClient;
  }

  try {
    cachedClient = createClient(url, key, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
    lastUsedUrl = url;
    lastUsedKey = key;
    return cachedClient;
  } catch (err) {
    console.error('Error creating Supabase client:', err);
    return null;
  }
}

// Fallback initial news items for GlobeLink
export const INITIAL_NEWS_ITEMS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'GlobeLink Launches Comprehensive EJU University Preparatory Track',
    slug: 'globelink-eju-university-prep-track',
    summary: 'Sri Lankan students aspiring for Japanese national and prestigious private universities can now access specialized EJU coaching alongside intensive JLPT N2/N1 training.',
    content: 'Colombo, Sri Lanka — GlobeLink Education & Migration Consultants announces the formal launch of its EJU (Examination for Japanese University Admission for International Students) preparatory track. This curriculum bridges the gap between Sri Lankan Advanced Level competencies and Japanese university entrance expectations, covering Japanese as a Foreign Language, Mathematics Course 1 & 2, and Japan and the World (Liberal Arts).\n\nInterested students and parents are invited to schedule an academic counseling session at the GlobeLink Colombo advisory office or via Zoom.',
    image_url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop',
    publication_date: new Date(Date.now() - 86400000 * 3).toISOString(),
    publication_status: 'published',
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
    updated_at: new Date(Date.now() - 86400000 * 3).toISOString()
  },
  {
    id: 'news-2',
    title: 'NAT-TEST and JLPT 2026 Registration Dates Announced',
    slug: 'nat-test-jlpt-2026-registration-schedule',
    summary: 'Official test dates for upcoming JLPT July/December sessions and bi-monthly NAT-TEST rounds have been verified for Sri Lankan candidates.',
    content: 'Candidates preparing for student visa and SSW (Specified Skilled Worker) categories are advised to note registration windows. JLPT July intake registration opens early March, while NAT-TEST test dates run in February, April, June, August, October, and December.\n\nGlobeLink provides mock test simulations, kanji mastery workshops, and official online registration guidance.',
    image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
    publication_date: new Date(Date.now() - 86400000 * 7).toISOString(),
    publication_status: 'published',
    created_at: new Date(Date.now() - 86400000 * 7).toISOString(),
    updated_at: new Date(Date.now() - 86400000 * 7).toISOString()
  },
  {
    id: 'news-3',
    title: 'Career Guidance Notice: Ethical Advisory and Fair Recruitment Standard',
    slug: 'ethical-advisory-fair-recruitment-standard',
    summary: 'GlobeLink reinforces its pledge to zero fraudulent job promises, transparent document handling, and certified language qualifications.',
    content: 'GlobeLink Education & Migration Consultants adheres strictly to ethical international education and career counseling. We clarify that language training and career practice resources do not represent unverified overseas job guarantees. All visa applications are evaluated independently by immigration authorities.',
    image_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    publication_date: new Date(Date.now() - 86400000 * 14).toISOString(),
    publication_status: 'published',
    created_at: new Date(Date.now() - 86400000 * 14).toISOString(),
    updated_at: new Date(Date.now() - 86400000 * 14).toISOString()
  }
];

// Fallback initial exams items
export const INITIAL_EXAM_ENTRIES: ExamEntry[] = [
  {
    id: 'exam-entry-1',
    exam_name: 'JLPT (Japanese-Language Proficiency Test)',
    exam_level: 'N5, N4, N3, N2, N1',
    exam_date: '2026-07-05 / 2026-12-06',
    registration_deadline: '2026-03-31 (July round) / 2026-09-15 (Dec round)',
    description: 'The worldwide benchmark qualification for non-native Japanese speakers, managed jointly by Japan Foundation and JEES. Essential for student visas and career migration.',
    registration_url: 'https://www.jlpt.jp/e/application/overseas_list.html',
    publication_status: 'published'
  },
  {
    id: 'exam-entry-2',
    exam_name: 'NAT-TEST (Nihongo Assessment Test)',
    exam_level: '5Q, 4Q, 3Q, 2Q, 1Q',
    exam_date: 'Bi-Monthly (Feb, Apr, Jun, Aug, Oct, Dec 2026)',
    registration_deadline: 'Typically 4 weeks prior to each examination date',
    description: 'Administered 6 times annually with identical scoring standard to JLPT. Rapid score turnaround within 3 weeks makes it popular for rapid visa application deadlines.',
    registration_url: 'https://www.nat-test.com/',
    publication_status: 'published'
  },
  {
    id: 'exam-entry-3',
    exam_name: 'EJU (Examination for Japanese University Admission)',
    exam_level: 'University Entrance (Undergraduate & Masters)',
    exam_date: '2026-06-21 (Session 1) / 2026-11-08 (Session 2)',
    registration_deadline: 'Session 1: March 6, 2026 | Session 2: July 24, 2026',
    description: 'Mandatory standard examination administered by JASSO for international students seeking entrance into Japanese universities and colleges.',
    registration_url: 'https://www.jasso.go.jp/en/ryugaku/eju/index.html',
    publication_status: 'published'
  },
  {
    id: 'exam-entry-4',
    exam_name: 'JFT-Basic (Japan Foundation Test for Basic Japanese)',
    exam_level: 'A2 Level (CBT Computer-Based Testing)',
    exam_date: 'Continuous Computer Based Testing (CBT)',
    registration_deadline: 'Scheduled individually via Prometric test centers',
    description: 'Computer-based assessment to verify A2 language competence required for the Specified Skilled Worker (SSW (i)) residence status.',
    registration_url: 'https://www.jpf.go.jp/jft-basic/e/',
    publication_status: 'published'
  },
  {
    id: 'exam-entry-5',
    exam_name: 'SSW Prometric Skill Assessment Tests',
    exam_level: 'Sector-specific: Caregiving, Food Service, Hospitality, Construction',
    exam_date: 'Continuous Scheduling via Prometric Center',
    registration_deadline: 'Book at least 3 business days in advance',
    description: 'Official sector competency examinations evaluating practical job knowledge for Tokutei Ginou (Specified Skilled Worker) status in Japan.',
    registration_url: 'https://www.prometric-jp.com/en/ssw/',
    publication_status: 'published'
  }
];

// AUTHORIZED ADMIN CHECK
// Pre-designated official administrators
export const DESIGNATED_ADMIN_EMAILS = [
  'info.letsgojapan@gmail.com',
  'info@globelinkedu.com',
  'admin@globelinkedu.com',
  'admin@letsgojapan.lk'
];

export async function checkIsAuthorizedAdmin(user: User | null): Promise<{
  isAuthorized: boolean;
  role: string;
  reason?: string;
}> {
  if (!user || !user.email) {
    return { isAuthorized: false, role: 'none', reason: 'No active session found.' };
  }

  const normalizedEmail = user.email.trim().toLowerCase();

  // 1. Check if user email is explicitly designated
  if (DESIGNATED_ADMIN_EMAILS.includes(normalizedEmail)) {
    return { isAuthorized: true, role: 'Super Administrator' };
  }

  // 2. Check metadata
  const appMeta = user.app_metadata || {};
  const userMeta = user.user_metadata || {};
  if (appMeta.role === 'admin' || appMeta.role === 'administrator' || userMeta.is_admin === true) {
    return { isAuthorized: true, role: 'Administrator' };
  }

  // 3. Query app_admins table in Supabase
  const client = getSupabaseClient();
  if (client) {
    try {
      const { data, error } = await client
        .from('app_admins')
        .select('role')
        .or(`id.eq.${user.id},email.eq.${normalizedEmail}`)
        .maybeSingle();

      if (!error && data) {
        return { isAuthorized: true, role: data.role || 'Administrator' };
      }
    } catch {
      // ignore table query error
    }
  }

  return {
    isAuthorized: false,
    role: 'Unauthorized User',
    reason: `User account "${user.email}" is authenticated, but not registered in the authorized administrator directory. Please contact the administrator to grant CMS access.`
  };
}

// ----------------------------------------------------
// INQUIRIES MANAGEMENT
// ----------------------------------------------------
export async function fetchInquiries(): Promise<{
  data: InquiryRecord[];
  source: 'database' | 'local';
  error?: string;
}> {
  const client = getSupabaseClient();
  let dbInquiries: InquiryRecord[] = [];
  let dbError: string | undefined = undefined;

  if (client) {
    try {
      const { data, error } = await client
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        dbError = error.message;
      } else if (data) {
        dbInquiries = data as InquiryRecord[];
      }
    } catch (err) {
      dbError = err instanceof Error ? err.message : 'Database query failed';
    }
  }

  // Also read local inquiries to preserve all submissions
  let localInquiries: InquiryRecord[] = [];
  try {
    const raw = localStorage.getItem('globelink_local_inquiries');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        localInquiries = parsed.map((item: any) => ({
          id: item.id || `loc-${Math.random()}`,
          created_at: item.submittedAt || item.created_at || new Date().toISOString(),
          full_name: item.fullName || item.full_name || 'Anonymous',
          phone: item.phone || '',
          email: item.email || '',
          preferred_destination: item.preferredDestination || item.preferred_destination || '',
          service_category: item.serviceCategory || item.service_category || '',
          education_career_interest: item.educationCareerInterest || item.education_career_interest || '',
          preferred_contact_method: item.preferredContactMethod || item.preferred_contact_method || 'WhatsApp',
          message: item.message || '',
          consent_given: Boolean(item.consent ?? item.consent_given),
          status: item.status || 'New'
        }));
      }
    }
  } catch {
    // local parse error ignored
  }

  // Merge database and local inquiries avoiding duplicates
  const seenIds = new Set<string>();
  const combined: InquiryRecord[] = [];

  for (const item of dbInquiries) {
    if (!seenIds.has(item.id)) {
      seenIds.add(item.id);
      combined.push(item);
    }
  }

  for (const item of localInquiries) {
    if (!seenIds.has(item.id)) {
      seenIds.add(item.id);
      combined.push(item);
    }
  }

  // Sort descending by created_at
  combined.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  return {
    data: combined,
    source: dbInquiries.length > 0 ? 'database' : 'local',
    error: dbError
  };
}

export async function updateInquiryStatus(
  id: string,
  newStatus: InquiryStatus
): Promise<{ success: boolean; message: string }> {
  // Update in local cache
  try {
    const raw = localStorage.getItem('globelink_local_inquiries');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const updated = parsed.map((item: any) =>
          item.id === id ? { ...item, status: newStatus } : item
        );
        localStorage.setItem('globelink_local_inquiries', JSON.stringify(updated));
      }
    }
  } catch {
    // ignore
  }

  const client = getSupabaseClient();
  if (!client) {
    return { success: true, message: 'Status updated locally (Supabase offline).' };
  }

  try {
    const { error } = await client
      .from('inquiries')
      .update({ status: newStatus })
      .eq('id', id);

    if (error) {
      return { success: false, message: error.message };
    }
    return { success: true, message: `Status updated to ${newStatus}.` };
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : 'Failed to update status'
    };
  }
}

export async function deleteInquiryRecord(id: string): Promise<{ success: boolean; message: string }> {
  // Remove from local cache
  try {
    const raw = localStorage.getItem('globelink_local_inquiries');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        const filtered = parsed.filter((item: any) => item.id !== id);
        localStorage.setItem('globelink_local_inquiries', JSON.stringify(filtered));
      }
    }
  } catch {
    // ignore
  }

  const client = getSupabaseClient();
  if (!client) {
    return { success: true, message: 'Deleted from local records.' };
  }

  try {
    const { error } = await client.from('inquiries').delete().eq('id', id);
    if (error) {
      return { success: false, message: error.message };
    }
    return { success: true, message: 'Inquiry record deleted successfully.' };
  } catch (err) {
    return {
      success: false,
      message: err instanceof Error ? err.message : 'Failed to delete record'
    };
  }
}

// ----------------------------------------------------
// NEWS & ANNOUNCEMENTS MANAGEMENT
// ----------------------------------------------------
export async function fetchNewsArticles(
  onlyPublished = false
): Promise<{ data: NewsArticle[]; fromDb: boolean; error?: string }> {
  const client = getSupabaseClient();

  if (client) {
    try {
      let query = client.from('news').select('*').order('publication_date', { ascending: false });
      if (onlyPublished) {
        query = query.eq('publication_status', 'published');
      }
      const { data, error } = await query;

      if (!error && data && data.length > 0) {
        return { data: data as NewsArticle[], fromDb: true };
      }
    } catch {
      // fallback to local storage or initial items
    }
  }

  // Local storage fallback
  try {
    const saved = localStorage.getItem('globelink_news_cms');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const filtered = onlyPublished
          ? parsed.filter((n: NewsArticle) => n.publication_status === 'published')
          : parsed;
        return { data: filtered, fromDb: false };
      }
    }
  } catch {
    // ignore
  }

  const initial = onlyPublished
    ? INITIAL_NEWS_ITEMS.filter((n) => n.publication_status === 'published')
    : INITIAL_NEWS_ITEMS;

  return { data: initial, fromDb: false };
}

export async function saveNewsArticle(
  article: Partial<NewsArticle> & { title: string; content: string }
): Promise<{ success: boolean; data?: NewsArticle; message: string }> {
  const isEditing = Boolean(article.id);
  const now = new Date().toISOString();

  const slug = (
    article.slug ||
    article.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  ).slice(0, 100);

  const payload: NewsArticle = {
    id: article.id || `news-${Date.now()}`,
    title: article.title.trim(),
    slug: slug || `news-${Date.now()}`,
    summary: article.summary?.trim() || article.content.slice(0, 150) + '...',
    content: article.content.trim(),
    image_url: article.image_url?.trim() || null,
    publication_date: article.publication_date || now,
    publication_status: article.publication_status || 'draft',
    created_at: article.created_at || now,
    updated_at: now
  };

  // Sync to local storage
  try {
    const current = await fetchNewsArticles(false);
    let list = current.data;
    if (isEditing) {
      list = list.map((item) => (item.id === payload.id ? payload : item));
    } else {
      list = [payload, ...list];
    }
    localStorage.setItem('globelink_news_cms', JSON.stringify(list));
  } catch {
    // ignore
  }

  // Sync to Supabase
  const client = getSupabaseClient();
  if (client) {
    try {
      if (isEditing) {
        const { error } = await client
          .from('news')
          .update({
            title: payload.title,
            slug: payload.slug,
            summary: payload.summary,
            content: payload.content,
            image_url: payload.image_url,
            publication_date: payload.publication_date,
            publication_status: payload.publication_status,
            updated_at: now
          })
          .eq('id', payload.id);

        if (error) {
          return {
            success: true,
            data: payload,
            message: `Updated locally. Supabase note: ${error.message} (Execute SQL migration to enable cloud table).`
          };
        }
      } else {
        const { error } = await client.from('news').insert([payload]);
        if (error) {
          return {
            success: true,
            data: payload,
            message: `Created locally. Supabase note: ${error.message} (Execute SQL migration to enable cloud table).`
          };
        }
      }
    } catch (err) {
      return {
        success: true,
        data: payload,
        message: 'Saved in local storage. Supabase connection error.'
      };
    }
  }

  return {
    success: true,
    data: payload,
    message: isEditing ? 'Article updated successfully!' : 'Article created successfully!'
  };
}

export async function deleteNewsArticle(id: string): Promise<{ success: boolean; message: string }> {
  // Local storage
  try {
    const saved = localStorage.getItem('globelink_news_cms');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        const filtered = parsed.filter((item: any) => item.id !== id);
        localStorage.setItem('globelink_news_cms', JSON.stringify(filtered));
      }
    }
  } catch {
    // ignore
  }

  const client = getSupabaseClient();
  if (client) {
    try {
      const { error } = await client.from('news').delete().eq('id', id);
      if (error) {
        return { success: true, message: `Removed locally. Supabase notice: ${error.message}` };
      }
    } catch {
      // ignore
    }
  }

  return { success: true, message: 'News article deleted successfully.' };
}

// ----------------------------------------------------
// EXAMS & REGISTRATION MANAGEMENT
// ----------------------------------------------------
export async function fetchExamEntries(
  onlyPublished = false
): Promise<{ data: ExamEntry[]; fromDb: boolean; error?: string }> {
  const client = getSupabaseClient();

  if (client) {
    try {
      let query = client.from('exams').select('*').order('exam_name', { ascending: true });
      if (onlyPublished) {
        query = query.eq('publication_status', 'published');
      }
      const { data, error } = await query;

      if (!error && data && data.length > 0) {
        return { data: data as ExamEntry[], fromDb: true };
      }
    } catch {
      // fallback
    }
  }

  // Local storage fallback
  try {
    const saved = localStorage.getItem('globelink_exams_cms');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const filtered = onlyPublished
          ? parsed.filter((e: ExamEntry) => e.publication_status === 'published')
          : parsed;
        return { data: filtered, fromDb: false };
      }
    }
  } catch {
    // ignore
  }

  const initial = onlyPublished
    ? INITIAL_EXAM_ENTRIES.filter((e) => e.publication_status === 'published')
    : INITIAL_EXAM_ENTRIES;

  return { data: initial, fromDb: false };
}

export async function saveExamEntry(
  entry: Partial<ExamEntry> & { exam_name: string }
): Promise<{ success: boolean; data?: ExamEntry; message: string }> {
  const isEditing = Boolean(entry.id);
  const now = new Date().toISOString();

  const payload: ExamEntry = {
    id: entry.id || `exam-${Date.now()}`,
    exam_name: entry.exam_name.trim(),
    exam_level: entry.exam_level?.trim() || null,
    exam_date: entry.exam_date?.trim() || null,
    registration_deadline: entry.registration_deadline?.trim() || null,
    description: entry.description?.trim() || null,
    registration_url: entry.registration_url?.trim() || null,
    publication_status: entry.publication_status || 'published',
    created_at: entry.created_at || now,
    updated_at: now
  };

  // Sync to local storage
  try {
    const current = await fetchExamEntries(false);
    let list = current.data;
    if (isEditing) {
      list = list.map((item) => (item.id === payload.id ? payload : item));
    } else {
      list = [payload, ...list];
    }
    localStorage.setItem('globelink_exams_cms', JSON.stringify(list));
  } catch {
    // ignore
  }

  const client = getSupabaseClient();
  if (client) {
    try {
      if (isEditing) {
        const { error } = await client
          .from('exams')
          .update({
            exam_name: payload.exam_name,
            exam_level: payload.exam_level,
            exam_date: payload.exam_date,
            registration_deadline: payload.registration_deadline,
            description: payload.description,
            registration_url: payload.registration_url,
            publication_status: payload.publication_status,
            updated_at: now
          })
          .eq('id', payload.id);

        if (error) {
          return {
            success: true,
            data: payload,
            message: `Updated locally. Supabase note: ${error.message}`
          };
        }
      } else {
        const { error } = await client.from('exams').insert([payload]);
        if (error) {
          return {
            success: true,
            data: payload,
            message: `Created locally. Supabase note: ${error.message}`
          };
        }
      }
    } catch {
      return {
        success: true,
        data: payload,
        message: 'Saved in local storage. Cloud table pending SQL migration.'
      };
    }
  }

  return {
    success: true,
    data: payload,
    message: isEditing ? 'Exam record updated!' : 'Exam record created!'
  };
}

export async function deleteExamEntry(id: string): Promise<{ success: boolean; message: string }> {
  try {
    const saved = localStorage.getItem('globelink_exams_cms');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        const filtered = parsed.filter((item: any) => item.id !== id);
        localStorage.setItem('globelink_exams_cms', JSON.stringify(filtered));
      }
    }
  } catch {
    // ignore
  }

  const client = getSupabaseClient();
  if (client) {
    try {
      const { error } = await client.from('exams').delete().eq('id', id);
      if (error) {
        return { success: true, message: `Removed locally. Supabase notice: ${error.message}` };
      }
    } catch {
      // ignore
    }
  }

  return { success: true, message: 'Exam entry removed successfully.' };
}

// ----------------------------------------------------
// COMPLETE SQL MIGRATION GENERATOR
// ----------------------------------------------------
export function getCompleteAdminSqlMigration(): string {
  return `-- ====================================================================
-- GlobeLink Education & Migration Consultants
-- Complete Admin CMS & Website Data Schema (PostgreSQL / Supabase)
-- Safe, Idempotent Migration with Row Level Security (RLS)
-- Run this in your Supabase SQL Editor: https://app.supabase.com
-- ====================================================================

-- 1. PUBLIC.INQUIRIES TABLE
CREATE TABLE IF NOT EXISTS public.inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  preferred_destination TEXT,
  service_category TEXT,
  education_career_interest TEXT,
  preferred_contact_method TEXT DEFAULT 'WhatsApp',
  message TEXT,
  consent_given BOOLEAN DEFAULT true,
  status TEXT DEFAULT 'New'
);

-- Ensure status column exists
ALTER TABLE public.inquiries ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'New';

-- Enable RLS on inquiries
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Anonymous visitors can submit leads (INSERT only)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'inquiries' AND policyname = 'Allow anonymous lead insert'
  ) THEN
    CREATE POLICY "Allow anonymous lead insert"
      ON public.inquiries
      FOR INSERT
      TO anon
      WITH CHECK (consent_given = true);
  END IF;
END $$;

-- Policy: Authenticated staff can view inquiries
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'inquiries' AND policyname = 'Allow authenticated staff read inquiries'
  ) THEN
    CREATE POLICY "Allow authenticated staff read inquiries"
      ON public.inquiries
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;

-- Policy: Authenticated staff can update inquiries (e.g. status)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'inquiries' AND policyname = 'Allow authenticated staff update inquiries'
  ) THEN
    CREATE POLICY "Allow authenticated staff update inquiries"
      ON public.inquiries
      FOR UPDATE
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Policy: Authenticated staff can delete inquiries
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'inquiries' AND policyname = 'Allow authenticated staff delete inquiries'
  ) THEN
    CREATE POLICY "Allow authenticated staff delete inquiries"
      ON public.inquiries
      FOR DELETE
      TO authenticated
      USING (true);
  END IF;
END $$;


-- 2. PUBLIC.NEWS TABLE (News & Announcements)
CREATE TABLE IF NOT EXISTS public.news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  summary TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  publication_date TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  publication_status TEXT DEFAULT 'draft' NOT NULL
);

-- Enable RLS on news
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published news
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'news' AND policyname = 'Allow public read published news'
  ) THEN
    CREATE POLICY "Allow public read published news"
      ON public.news
      FOR SELECT
      TO anon, authenticated
      USING (publication_status = 'published');
  END IF;
END $$;

-- Policy: Authenticated staff can manage news
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'news' AND policyname = 'Allow authenticated staff manage news'
  ) THEN
    CREATE POLICY "Allow authenticated staff manage news"
      ON public.news
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;


-- 3. PUBLIC.EXAMS TABLE (Exams & Registration Schedule)
CREATE TABLE IF NOT EXISTS public.exams (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  exam_name TEXT NOT NULL,
  exam_level TEXT,
  exam_date TEXT,
  registration_deadline TEXT,
  description TEXT,
  registration_url TEXT,
  publication_status TEXT DEFAULT 'published' NOT NULL
);

-- Enable RLS on exams
ALTER TABLE public.exams ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can read published exams
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'exams' AND policyname = 'Allow public read published exams'
  ) THEN
    CREATE POLICY "Allow public read published exams"
      ON public.exams
      FOR SELECT
      TO anon, authenticated
      USING (publication_status = 'published');
  END IF;
END $$;

-- Policy: Authenticated staff can manage exams
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'exams' AND policyname = 'Allow authenticated staff manage exams'
  ) THEN
    CREATE POLICY "Allow authenticated staff manage exams"
      ON public.exams
      FOR ALL
      TO authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;


-- 4. PUBLIC.APP_ADMINS (Authorized Administrator Registry)
CREATE TABLE IF NOT EXISTS public.app_admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  role TEXT DEFAULT 'admin' NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on app_admins
ALTER TABLE public.app_admins ENABLE ROW LEVEL SECURITY;

-- Authenticated users can query admin list to verify rights
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE tablename = 'app_admins' AND policyname = 'Allow authenticated read app_admins'
  ) THEN
    CREATE POLICY "Allow authenticated read app_admins"
      ON public.app_admins
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;

-- Seed default initial administrator
INSERT INTO public.app_admins (email, role)
VALUES ('info.letsgojapan@gmail.com', 'Super Administrator')
ON CONFLICT (email) DO NOTHING;

-- Complete! All tables created with safe RLS policies.
`;
}
