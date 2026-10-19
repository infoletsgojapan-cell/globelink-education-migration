import React from 'react';
import {
  FileCheck2,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  HelpCircle,
  FileText,
  Building,
  Scale,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface MigrationVisaPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const MigrationVisaPage: React.FC<MigrationVisaPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="Migration & Visa Support | Compliance & Documentation | GlobeLink"
        description="Ethical migration and visa documentation support: certified translations, financial proofs, COE audit, and transparent compliance for Japan, UAE, and the Maldives."
        canonicalPath="/migration-visa-support"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Migration & Visa Support', path: '/migration-visa-support' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: 'Migration & Visa Support' }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
              Ethical Advisory &amp; Documentation Standards
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Migration &amp; Visa Documentation Support
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Transparent, compliance-first guidance ensuring all applicant portfolios satisfy foreign immigration laws and embassy documentation standards.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Boundary Banner */}
      <section className="bg-slate-950 text-slate-300 py-4 px-4 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3">
          <Scale className="w-5 h-5 text-sky-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="text-white">Clear Distinction of Authority:</strong> GlobeLink is an independent advisory and language training consultancy. We are NOT an embassy, consulate, or government visa processing authority. We do not approve or issue visas. Our services are strictly confined to administrative document preparation, certified translation oversight, linguistic assessment, and procedural counseling.
          </p>
        </div>
      </section>

      {/* Support Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Comprehensive Documentation Guidance
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Immigration refusals often occur due to minor paperwork inaccuracies, unverified translations, or incomplete financial sponsor proofs. We safeguard your application integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Certified Translations &amp; Legalization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guidance on acquiring sworn translations of birth certificates, educational transcripts, and police clearance reports into Japanese or English.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Financial Sponsor Documentation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structuring lawful proof of financial sponsorship (bank balance verification, tax returns, and relationship affidavits) meeting Japanese COE and embassy criteria.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Pre-Submission Quality Audits</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Rigorous multi-point checking of all application forms before submission to foreign colleges, Japanese language institutions, or employer HR portals.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <DisclaimerBanner />
          </div>
        </div>
      </section>

      {/* Ethical Code of Conduct */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              Our Professional Pledge
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              GlobeLink Ethical Code of Conduct
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-xs text-slate-300">
            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <p className="font-bold text-white text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Fake Guarantees
              </p>
              <p className="leading-relaxed">
                We will never advertise &ldquo;100% Guaranteed Visas&rdquo; or &ldquo;Direct Permanent Residency.&rdquo; Such statements are deceptive and violate professional codes of ethics.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <p className="font-bold text-white text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Anti-Document Fabrication
              </p>
              <p className="leading-relaxed">
                We strictly reject any fraudulent documentation, altered educational certificates, or fake bank statements. All materials submitted must be 100% authentic.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <p className="font-bold text-white text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Transparent Billing
              </p>
              <p className="leading-relaxed">
                All consulting fees, language tuition, and translation costs are disclosed upfront in writing before you begin.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <p className="font-bold text-white text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Direct Communication
              </p>
              <p className="leading-relaxed">
                Candidates maintain continuous direct access to their assigned case advisor with complete visibility over their application progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="migration-inquiry"
            title="Book a Documentation Assessment"
            subtitle="Consult our documentation specialists regarding your visa checklist, translations, and procedural requirements."
            initialService="Migration & Visa Documentation"
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};
