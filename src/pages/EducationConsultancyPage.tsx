import React from 'react';
import {
  GraduationCap,
  FileCheck,
  Search,
  Award,
  Languages,
  CheckCircle,
  HelpCircle,
  CalendarCheck,
  Building,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface EducationConsultancyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const EducationConsultancyPage: React.FC<EducationConsultancyPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="Education Consultancy Solutions | GlobeLink Education"
        description="Comprehensive international education consulting: student profile assessment, institutional research, application documentation, and Japanese language pathways."
        canonicalPath="/education-consultancy"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Education Consultancy', path: '/education-consultancy' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: 'Education Consultancy' }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 block">
              Global Academic Pathways
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Education Consultancy Solutions
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Navigating global university, vocational, and language school admissions with rigorous academic assessment, authentic document curation, and personalized mentoring.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our End-to-End Educational Guidance Framework
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Each student profile is evaluated individually to identify verified academic programs and accredited colleges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Student Profile Assessment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluation of G.C.E. O/L and A/L results, vocational diplomas, financial sponsorship feasibility, and personal career goals to determine realistic admission pathways.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Course &amp; Institution Research</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Objective curation of recognized institutions: Japanese Language Schools in Tokyo/Osaka/Nagoya, Senmon Gakko (vocational colleges), and English-taught international universities.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Application Documentation Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Step-by-step assistance with Statement of Purpose (SOP), certified translations, financial sponsor affidavits, bank balance certificates, and family relationship registries.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Integrated Japanese Language Training</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct enrollment in Let&apos;s Go Japan courses (JLPT N5/N4 or NAT-TEST). Fulfills mandatory 150-hour study certificates required by Japanese immigration (Immigration Services Agency).
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Verified Scholarship Information</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent information regarding genuine merit-based tuition reductions, JASSO scholarships, and institutional fee waivers. We never sell or fabricate scholarship guarantees.
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Pre-Departure &amp; Arrival Orientation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guidance on Japanese student residence registration, National Health Insurance (Kokumin Kenko Hoken), bank account opening, and legal part-time work permit (Shikakugai Katsudo).
              </p>
            </div>
          </div>

          <div className="mt-12">
            <DisclaimerBanner />
          </div>
        </div>
      </section>

      {/* Japanese Language Integration Callout */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Language Is The First Gate
              </span>
              <h3 className="text-2xl font-bold text-white">
                Planning to Study in Japan for 2026 / 2027 Intakes?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Japanese immigration strictly requires a minimum of JLPT N5 / NAT-TEST 5Q or a certified 150-hour Japanese language certificate. Explore our structured Let&apos;s Go Japan batches.
              </p>
            </div>
            <button
              onClick={() => onNavigate('lets-go-japan')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shrink-0 transition-colors"
            >
              <span>Explore Let&apos;s Go Japan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Inquiry Form Hook */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="education-inquiry"
            title="Book an Education Consultation"
            subtitle="Let our consultants evaluate your academic profile and provide clear, verified admission pathways."
            initialService="Higher Education Abroad"
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};
