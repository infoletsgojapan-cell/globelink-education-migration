import React from 'react';
import { Scale, ShieldAlert, CheckCircle, FileText } from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="Terms and Conditions | GlobeLink Education & Migration Consultants"
        description="Terms and conditions of service for GlobeLink Education and Migration Consultants (Globe Link Edu) and Let's Go Japan courses."
        canonicalPath="/terms-and-conditions"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Terms and Conditions', path: '/terms-and-conditions' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: 'Terms and Conditions' }]}
        onNavigate={onNavigate}
      />

      <section className="bg-slate-900 text-white py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">
            Service Agreement &amp; Legal Framework
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Terms and Conditions of Service
          </h1>
          <p className="mt-2 text-xs text-slate-400">
            Last Updated: October 2026 &middot; GlobeLink Education and Migration Consultants
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-700 space-y-8 leading-relaxed">
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
            <strong>Important Summary:</strong> GlobeLink provides private educational consulting, language training, and documentation guidance. We do not guarantee visa issuance, job placements, or migration outcomes. All decisions are made by respective sovereign authorities.
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">1. Nature of Advisory Services</h2>
            <p>
              GlobeLink Education and Migration Consultants operates as an independent consultancy and language training institute. Our services encompass language instruction (Let&apos;s Go Japan), student profile evaluations, university and language school application assistance, CV/resume preparation (Your Career Partner Program), and documentation auditing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">2. No Guarantee of Outcomes</h2>
            <p>
              Under no circumstances does GlobeLink guarantee or warrant that a candidate will receive a visa, Certificate of Eligibility (COE), employment offer, or permanent residency. Legally and operationally, these outcomes remain within the sole jurisdiction of sovereign foreign immigration authorities (such as the Immigration Services Agency of Japan, UAE MOHRE, and Maldives Immigration) and independent hiring companies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">3. Candidate Responsibility for Document Authenticity</h2>
            <p>
              Candidates agree to provide strictly authentic, accurate, and truthful documentation. GlobeLink maintains a strict zero-tolerance policy towards document falsification, altered bank statements, forged transcripts, or fraudulent claims. Submitting fraudulent materials will result in immediate termination of consulting services without refund.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">4. Course Enrollment &amp; Let&apos;s Go Japan Batches</h2>
            <p>
              For Japanese language courses:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              <li>Course fees must be settled according to agreed milestone or installment schedules.</li>
              <li>Students are required to maintain a minimum of 80% attendance to receive official course completion certificates required for visa filings.</li>
              <li>Requests for batch transfers due to personal exigencies must be communicated in writing and are subject to seat availability in subsequent intakes.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">5. Governing Law and Jurisdiction</h2>
            <p>
              These Terms and Conditions and all agreements entered into with GlobeLink shall be governed by and construed in accordance with the substantive laws of the Democratic Socialist Republic of Sri Lanka. Any disputes arising shall be subject to the exclusive jurisdiction of the competent courts of Sri Lanka.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">6. Contact Information</h2>
            <p>
              If you have any questions regarding these terms, please contact our administrative desk:
            </p>
            <div className="mt-2 text-xs bg-slate-50 p-3 rounded-lg border border-slate-200 text-slate-800">
              <p><strong>GlobeLink Education and Migration Consultants</strong></p>
              <p>No. 33, Janadahara Shopping Complex, Horagolla, Nittambuwa, Sri Lanka</p>
              <p>Hotline: {COMPANY_INFO.hotline} &middot; Email: {COMPANY_INFO.primaryEmail}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
