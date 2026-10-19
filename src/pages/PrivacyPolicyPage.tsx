import React from 'react';
import { ShieldCheck, Lock, Eye, Database, FileText } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="Privacy Policy | GlobeLink Education & Migration Consultants"
        description="Privacy policy and data governance practices of GlobeLink Education and Migration Consultants (Globe Link Edu)."
        canonicalPath="/privacy-policy"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: 'Privacy Policy' }]}
        onNavigate={onNavigate}
      />

      <section className="bg-slate-900 text-white py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">
            Data Governance &amp; Security
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-slate-400">
            Effective Date: October 2026 &middot; GlobeLink Education and Migration Consultants
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-700 space-y-8 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Introduction</h2>
            <p>
              GlobeLink Education and Migration Consultants (&ldquo;GlobeLink&rdquo;, &ldquo;Globe Link Edu&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is committed to respecting the privacy and confidentiality of candidate personal information. This Privacy Policy outlines how we collect, use, store, and protect candidate details submitted through our website (<a href={`https://${COMPANY_INFO.website}`} className="text-sky-600 hover:underline">{COMPANY_INFO.website}</a>), telephone hotlines, WhatsApp business communication, or during in-person visits to our office in Nittambuwa, Sri Lanka.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Collect</h2>
            <p>We only collect personal information voluntarily provided by candidates for legitimate educational advisory, language enrollment, and career consulting purposes. This may include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              <li>Full name, telephone/WhatsApp contact number, and email address.</li>
              <li>Academic qualifications (O/L, A/L, diplomas, university degrees, vocational certificates).</li>
              <li>Target country destinations (Japan, Dubai, UAE, Maldives, etc.) and program preferences.</li>
              <li>Japanese language proficiency level (JLPT / NAT-TEST / JFT status).</li>
              <li>CV / resume data for career profile assessment.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Purpose and Use of Data</h2>
            <p>Your personal data is used solely to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              <li>Evaluate educational or career pathway eligibility.</li>
              <li>Coordinate batch schedules, materials, and Zoom links for Let&apos;s Go Japan courses.</li>
              <li>Format and audit application documentation for verified international colleges or employers.</li>
              <li>Respond to direct inquiries submitted through our website or WhatsApp.</li>
            </ul>
            <p className="mt-2 font-medium text-slate-900">
              We never sell, rent, trade, or disclose your personal contact information to unauthorized third-party marketing brokers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Storage &amp; Database Security</h2>
            <p>
              Candidate leads and inquiries submitted through our website are processed through secure communication protocols. Where cloud persistence is configured via Supabase, data is protected using encrypted connections and strict Row Level Security (RLS) policies accessible solely by authorized GlobeLink administrative personnel.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Third-Party Links &amp; WhatsApp Forwarding</h2>
            <p>
              Our website provides links to external services such as WhatsApp and Facebook. These third-party platforms have their own independent privacy policies. We encourage users to review those policies when interacting on external applications.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">6. Your Data Rights &amp; Inquiries</h2>
            <p>
              You have the right to request a copy of the personal information we hold about you, or to request corrections or deletions from our active advisory rosters. For privacy inquiries, please contact our Data Governance Officer at <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-sky-600 hover:underline">{COMPANY_INFO.primaryEmail}</a> or call our hotline at <a href={`tel:${COMPANY_INFO.hotlineTel}`} className="text-sky-600 hover:underline">{COMPANY_INFO.hotline}</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
