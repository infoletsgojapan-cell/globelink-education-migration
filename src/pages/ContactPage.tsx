import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  Globe,
  Share2,
  Navigation
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="Contact Us | GlobeLink Education & Migration Consultants"
        description="Contact GlobeLink Education and Migration Consultants in Nittambuwa, Sri Lanka. Hotlines: +94 76 498 6049 / +94 77 112 9703. Let's Go Japan language queries & consultations."
        canonicalPath="/contact"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: 'Contact Us' }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
              We&apos;re Here to Help
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Contact GlobeLink Consultants
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Reach our advisory team for Japanese language admissions, university placement counseling, and international career pathway guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone & Hotline Card */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">Direct Hotlines</h3>
                <p className="text-xs text-slate-500 mb-3">Call during office hours for direct voice consultation:</p>
                <div className="space-y-1 text-sm font-semibold">
                  <a
                    href={`tel:${COMPANY_INFO.hotlineTel}`}
                    className="block text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    {COMPANY_INFO.hotline} <span className="text-xs text-sky-600 font-normal">(Primary)</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.additionalPhoneTel}`}
                    className="block text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    {COMPANY_INFO.additionalPhone}
                  </a>
                </div>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-200">
                <a
                  href={`tel:${COMPANY_INFO.hotlineTel}`}
                  className="text-xs font-bold text-sky-700 hover:underline inline-flex items-center gap-1"
                >
                  Call Hotline Now &rarr;
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 bg-emerald-50/70 rounded-2xl border border-emerald-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">Instant WhatsApp</h3>
                <p className="text-xs text-slate-600 mb-3">Instant answers for course batches and appointments:</p>
                <div className="text-sm font-semibold text-emerald-950">
                  {COMPANY_INFO.whatsapp}
                </div>
              </div>
              <div className="pt-4 mt-3 border-t border-emerald-200">
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1"
                >
                  Open WhatsApp Chat &rarr;
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">Email Inquiries</h3>
                <p className="text-xs text-slate-500 mb-3">Official correspondence &amp; document submissions:</p>
                <div className="space-y-1 text-xs">
                  <a
                    href={`mailto:${COMPANY_INFO.primaryEmail}`}
                    className="block font-semibold text-slate-900 hover:text-sky-600 transition-colors"
                  >
                    {COMPANY_INFO.primaryEmail}
                  </a>
                  <a
                    href={`mailto:${COMPANY_INFO.additionalEmail}`}
                    className="block text-slate-600 hover:text-sky-600 transition-colors"
                  >
                    {COMPANY_INFO.additionalEmail}
                  </a>
                </div>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-200">
                <a
                  href={`mailto:${COMPANY_INFO.primaryEmail}`}
                  className="text-xs font-bold text-sky-700 hover:underline inline-flex items-center gap-1"
                >
                  Send an Email &rarr;
                </a>
              </div>
            </div>

            {/* Office & Hours Card */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">Office Location</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-2 font-medium">
                  {COMPANY_INFO.officeAddress}
                </p>
                <p className="text-[11px] text-slate-500 leading-tight">
                  {COMPANY_INFO.operatingHours}
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-200">
                <a
                  href={COMPANY_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-sky-700 hover:underline inline-flex items-center gap-1"
                >
                  Get Driving Directions <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Social Communities Bar */}
          <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-bold text-base text-white flex items-center justify-center md:justify-start gap-2">
                <Share2 className="w-4 h-4 text-sky-400" />
                Official Facebook Communities
              </h4>
              <p className="text-xs text-slate-300">
                Follow our official social pages for batch announcements, visa approvals, and Japanese exam notices.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={COMPANY_INFO.socials.facebookLetsGoJapan}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Let&apos;s Go Japan ({COMPANY_INFO.socials.facebookDisplay1})</span>
                <ExternalLink className="w-3 h-3 text-sky-400" />
              </a>
              <a
                href={COMPANY_INFO.socials.facebookGlobeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>GlobeLink ({COMPANY_INFO.socials.facebookDisplay2})</span>
                <ExternalLink className="w-3 h-3 text-sky-400" />
              </a>
            </div>
          </div>

          {/* Map and Address section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-xl font-bold text-slate-900">
                Visit Our Nittambuwa Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Located conveniently in the Janadahara Shopping Complex, Horagolla, Nittambuwa. Accessible directly via the Colombo-Kandy (A1) Highway.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-2">
                <p>
                  <strong>Physical Address:</strong><br />
                  No. 33, Janadahara Shopping Complex,<br />
                  Horagolla, Nittambuwa, Sri Lanka.
                </p>
                <p>
                  <strong>Office Working Hours:</strong><br />
                  Monday &ndash; Saturday: 8:30 AM &ndash; 5:30 PM (IST)<br />
                  Sundays &amp; Poya Days: Closed (Online inquiries active via WhatsApp)
                </p>
              </div>

              <div>
                <a
                  href={COMPANY_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
                >
                  <Navigation className="w-4 h-4 text-sky-400" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 h-80 relative shadow-inner">
              <iframe
                title="GlobeLink Office Location Map"
                src={COMPANY_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <DisclaimerBanner />
        </div>
      </section>

      {/* Embedded Lead Generation Form */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="contact-page-inquiry"
            title="Send an Inquiry / Consultation Request"
            subtitle="Please complete the form below. A GlobeLink education or career advisor will follow up promptly."
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};
