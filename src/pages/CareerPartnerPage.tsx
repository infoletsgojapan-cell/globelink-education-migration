import React from 'react';
import {
  Briefcase,
  UserCheck,
  FileCheck2,
  CheckCircle,
  ShieldAlert,
  Globe2,
  PhoneCall,
  CalendarCheck,
  Compass,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface CareerPartnerPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const CareerPartnerPage: React.FC<CareerPartnerPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="Your Career Partner Program | GlobeLink Education & Migration"
        description="Build Your Future. Expand Your Boundaries. Professional career profile assessment, Gulf and Japanese CV tailoring, and legitimate overseas employment guidance."
        canonicalPath="/career-partner"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Your Career Partner Program', path: '/career-partner' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: 'Your Career Partner Program' }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
              Global Career Development Initiative
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Build Your Future. Expand Your Boundaries.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Strategic career mentoring connecting Sri Lankan talent to international employment standards in Japan, Dubai, the UAE, and the Maldives.
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Ethical Notice Card */}
      <section className="bg-rose-950 text-rose-100 py-3.5 px-4 text-xs border-b border-rose-900">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-2.5">
          <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong>Mandatory Advisory Notice:</strong> GlobeLink Education and Migration Consultants is an independent professional consultancy. We are not an employer or staffing agency, and we do not issue work permits or make promises of guaranteed employment, salary levels, visa approvals, or permanent residency outcomes. All hiring decisions are made exclusively by independent employers, and all visas are issued solely by respective government immigration authorities.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Core Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Strategic Preparation for the Global Workplace
              </h2>

              {/* Exact Provided Content */}
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-sky-600 text-slate-800 space-y-4">
                <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                  &ldquo;Stepping into the international workforce requires more than just a visa—it demands a strategic partner who understands global market standards. The GlobeLink Career Partner Program supports ambitious professionals exploring legitimate overseas employment opportunities.&rdquo;
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  &ldquo;We help candidates align their skills with employer requirements, prepare professional resumes, understand application procedures and navigate relevant documentation. Our support is tailored to each destination and candidate profile.&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                <p>
                  Global recruitment standards vary significantly between regions. For example, employers in <strong>Dubai and the UAE</strong> prioritize applicant tracking system (ATS) compliant executive formats and attested educational credentials. In contrast, employers in <strong>Japan</strong> require dual Japanese resumes (Rirekisho and Shokumu-Keirekisho) along with verified JLPT/JFT-Basic language benchmarks and business etiquette.
                </p>
                <p>
                  In the <strong>Maldives</strong>, luxury resorts look for proven hospitality competencies, English conversational eloquence, and genuine service dedication. The Career Partner Program bridge this knowledge gap so candidates present their qualifications at international standards.
                </p>
              </div>

              <DisclaimerBanner />
            </div>

            {/* Program Components Checklist */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-sky-400" />
                  What the Program Includes
                </h3>

                <ul className="space-y-3.5 text-xs text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Career Profile Assessment</strong>
                      Realistic analysis of current qualifications, vocational history, language abilities, and target job roles.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Resume &amp; Interview Preparation</strong>
                      Tailoring resumes to Gulf/Japanese specifications, plus virtual interview roleplay and behavioral coaching.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Skills &amp; Employer Requirement Matching</strong>
                      Mapping candidate strengths against verified industry criteria in hospitality, engineering, IT, and trades.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">International Destination Guidance</strong>
                      Country-specific advisory for Japan (SSW &amp; Engineering), Dubai &amp; UAE (MOHRE permits), and Maldives (EA permits).
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Work Visa Documentation Guidance</strong>
                      Meticulous checklist support for police clearance, medical exams, Ministry of Foreign Affairs (MOFA) attestation, and certified translations.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Pre-Departure Preparation</strong>
                      Cultural orientation, workplace hierarchy habits, emergency protocols, and adaptation strategies.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quick WhatsApp Consultation Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs space-y-3">
                <p className="font-bold text-slate-900 text-sm">Have Questions Regarding Your Career Profile?</p>
                <p className="text-slate-600">
                  Speak directly with an advisor at our Nittambuwa office or via WhatsApp for initial screening.
                </p>
                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hello GlobeLink, I would like to book a Career Profile Assessment under Your Career Partner Program.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Direct Career WhatsApp &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Hook */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="career-partner-inquiry"
            title="Register for Career Profile Assessment"
            subtitle="Submit your career background to receive honest, structured feedback from GlobeLink career advisors."
            initialService="Your Career Partner Program"
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};
