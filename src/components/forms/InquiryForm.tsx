import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Database, HelpCircle } from 'lucide-react';
import { InquiryFormData } from '../../types';
import { submitInquiry, InquirySubmissionResult, isSupabaseConfigured } from '../../services/inquiryService';

interface InquiryFormProps {
  initialDestination?: string;
  initialService?: string;
  initialInterest?: string;
  onOpenSupabaseModal?: () => void;
  title?: string;
  subtitle?: string;
  id?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialDestination = '',
  initialService = '',
  initialInterest = '',
  onOpenSupabaseModal,
  title = 'Book a Consultation / Send an Inquiry',
  subtitle = 'Get verified, transparent advice from GlobeLink consultants regarding Japanese language batches, international education, and career pathways.',
  id = 'inquiry-section'
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDestination: initialDestination,
    serviceCategory: initialService,
    educationCareerInterest: initialInterest,
    preferredContactMethod: 'WhatsApp',
    message: '',
    consent: true,
    honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [submissionResult, setSubmissionResult] = useState<InquirySubmissionResult | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Contact phone number is required.';
    } else if (!/^[+0-9\s-]{7,18}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number (e.g., +94 76 498 6049).';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.consent) {
      errs.consent = 'You must acknowledge the terms to proceed.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmissionResult(null);

    try {
      const res = await submitInquiry(formData);
      setSubmissionResult(res);

      if (res.success) {
        // Reset non-destination fields on success
        setFormData(prev => ({
          ...prev,
          fullName: '',
          phone: '',
          email: '',
          educationCareerInterest: '',
          message: ''
        }));
      }
    } catch {
      setSubmissionResult({
        success: false,
        isConfigured: false,
        message: 'An unexpected error occurred. Please contact us directly via WhatsApp.'
      });
    } finally {
      setLoading(false);
    }
  };

  const isConfigured = isSupabaseConfigured();

  return (
    <section id={id} className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8 md:p-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-100 rounded-full text-xs font-semibold text-sky-800 mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            Direct Advisory Desk
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Supabase status notice banner */}
        {isConfigured ? (
          <div className="mb-6 px-4 py-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-semibold text-emerald-950">
                Connected to Supabase Project (ktnyyfaufxxoxdxzolya)
              </span>
            </div>
            {onOpenSupabaseModal && (
              <button
                type="button"
                onClick={onOpenSupabaseModal}
                className="text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 underline shrink-0 inline-flex items-center gap-1"
              >
                Database Schema &amp; Status
              </button>
            )}
          </div>
        ) : (
          <div className="mb-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <Database className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-amber-950">
                Notice: Cloud Database Integration (Supabase) Pending
              </p>
              <p className="mt-0.5 text-amber-800">
                Inquiries submitted now are preserved in local storage and can be forwarded to GlobeLink consultants directly via WhatsApp in one tap.
              </p>
            </div>
            {onOpenSupabaseModal && (
              <button
                type="button"
                onClick={onOpenSupabaseModal}
                className="text-xs font-semibold text-sky-800 hover:text-sky-950 underline shrink-0 inline-flex items-center gap-1"
              >
                Setup Guide <HelpCircle className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Success Alert */}
        {submissionResult && submissionResult.success && (
          <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 animate-in fade-in">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-sm text-emerald-950">Inquiry Received Successfully</p>
                  {submissionResult.inquiryId && (
                    <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      Ref: {submissionResult.inquiryId}
                    </span>
                  )}
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  {submissionResult.message}
                </p>
                {submissionResult.whatsappFallbackUrl && (
                  <div className="pt-2">
                    <a
                      href={submissionResult.whatsappFallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Forward Details to WhatsApp Now for Instant Confirmation
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Unconfigured or Error Alert */}
        {submissionResult && !submissionResult.success && (
          <div className="mb-8 p-5 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 animate-in fade-in">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              <div className="space-y-2 flex-1">
                <p className="font-bold text-sm text-rose-950">
                  {submissionResult.isConfigured ? 'Submission Issue' : 'Database Not Yet Configured'}
                </p>
                <p className="text-xs text-rose-800 leading-relaxed">
                  {submissionResult.message}
                </p>
                {submissionResult.whatsappFallbackUrl && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={submissionResult.whatsappFallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Send Direct via WhatsApp Instead (+94 76 498 6049)
                    </a>
                    {onOpenSupabaseModal && !submissionResult.isConfigured && (
                      <button
                        type="button"
                        onClick={onOpenSupabaseModal}
                        className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                      >
                        <Database className="w-3.5 h-3.5" /> View Supabase Setup Instructions
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Honeypot field for anti-spam */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_field">Do not fill this</label>
            <input
              id="hp_field"
              type="text"
              name="hp_field"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Kasun Perera"
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 transition-colors ${
                  errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number (WhatsApp) <span className="text-rose-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+94 7X XXX XXXX"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 transition-colors ${
                  errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 transition-colors ${
                  errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
            </div>

            {/* Preferred Destination */}
            <div>
              <label htmlFor="destination" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Destination
              </label>
              <select
                id="destination"
                value={formData.preferredDestination}
                onChange={e => setFormData({ ...formData, preferredDestination: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:ring-2 focus:ring-sky-500 transition-colors"
              >
                <option value="">Select Destination</option>
                <option value="Japan">Japan (Study / SSW / Work)</option>
                <option value="Dubai">Dubai (Hospitality & Corporate)</option>
                <option value="United Arab Emirates">United Arab Emirates (General)</option>
                <option value="Maldives">Maldives (Resort Hospitality)</option>
                <option value="Undecided">Undecided / Needs Counseling</option>
                <option value="Other">Other Verified Destination</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Service Category */}
            <div>
              <label htmlFor="serviceCategory" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Service Category
              </label>
              <select
                id="serviceCategory"
                value={formData.serviceCategory}
                onChange={e => setFormData({ ...formData, serviceCategory: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:ring-2 focus:ring-sky-500 transition-colors"
              >
                <option value="">Select Service Area</option>
                <option value="Let's Go Japan Language Courses">Let&apos;s Go Japan Japanese Language Courses</option>
                <option value="Higher Education Abroad">Higher Education & Student Visa Guidance</option>
                <option value="Your Career Partner Program">Your Career Partner Program (Professional Guidance)</option>
                <option value="Migration & Visa Documentation">Migration & Visa Documentation Support</option>
                <option value="General Profile Assessment">General Profile Assessment</option>
              </select>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Contact Method
              </label>
              <div className="flex items-center gap-3 pt-1">
                {(['WhatsApp', 'Phone Call', 'Email'] as const).map(method => (
                  <label key={method} className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value={method}
                      checked={formData.preferredContactMethod === method}
                      onChange={() => setFormData({ ...formData, preferredContactMethod: method })}
                      className="text-sky-600 focus:ring-sky-500"
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Education or Career Interest */}
          <div>
            <label htmlFor="interest" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Current Education / Professional Background
            </label>
            <input
              id="interest"
              type="text"
              placeholder="e.g. A/L completed (Commerce stream) or Hotel Front Office 2 years experience"
              value={formData.educationCareerInterest}
              onChange={e => setFormData({ ...formData, educationCareerInterest: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Specific Questions or Message
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Tell us about your target timeline, preferred batch schedule, or destination requirements..."
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 transition-colors"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />
              <span className="text-xs text-slate-600 leading-normal">
                I agree to allow GlobeLink Education and Migration Consultants to contact me regarding my inquiry. I understand that GlobeLink provides independent consultancy, language training, and documentation guidance, and does not guarantee visa approvals or employment outcomes.
              </span>
            </label>
            {errors.consent && <p className="mt-1 text-xs text-rose-600">{errors.consent}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50 active:scale-98"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Processing Inquiry...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-sky-400" />
                  Submit Inquiry
                </>
              )}
            </button>

            <span className="text-xs text-slate-500 text-center sm:text-right">
              Hotline support: <a href="tel:+94764986049" className="font-semibold text-slate-800 hover:underline">+94 76 498 6049</a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};
