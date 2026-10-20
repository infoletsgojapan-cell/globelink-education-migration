import React from 'react';
import {
  Briefcase,
  FileCheck2,
  CheckCircle,
  ShieldAlert,
  Globe2,
  MessageCircle,
  CalendarCheck,
  Compass,
  ArrowRight,
  Sparkles,
  BookOpen,
  GraduationCap,
  Users2,
  FileText,
  Clock,
  Layers
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { CAREER_GUIDANCE_MODULES } from '../data/interviewQuestions';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { InterviewPracticeLibrary } from '../components/career/InterviewPracticeLibrary';

interface CareerPartnerPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const CareerPartnerPage: React.FC<CareerPartnerPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  const careerGuidanceWhatsAppUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Hello GlobeLink, I would like to ask about the GlobeLink Career Partner Program and career guidance.'
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="GlobeLink Career Partner Program | Career Preparation & Interview Library"
        description="Build Your Future. Expand Your Boundaries. Professional career preparation, CV and resume tips, and searchable interview questions with Sinhala and Japanese translations."
        canonicalPath="/career-partner"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Career Preparation & Partner Program', path: '/career-partner' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: 'Career Preparation' }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-950/80 border border-sky-800/80 rounded-full text-xs font-bold text-sky-400">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>GlobeLink Career Partner Program</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Build Your Future. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-white">
                Expand Your Boundaries.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Strategic career guidance, professional CV preparation, and bilingual interview readiness connecting Sri Lankan talent to international career standards.
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#interview-qa-section"
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-colors inline-flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-slate-950" />
                <span>Interview Q&amp;A Library</span>
              </a>

              <a
                href={careerGuidanceWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Ask About Career Guidance</span>
              </a>
            </div>
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

      {/* Core Philosophy & Client Brief Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest block">
                Professional International Workforce Development
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Stepping into the International Workforce with Strategic Readiness
              </h2>

              {/* Exact Provided Content */}
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-sky-600 text-slate-800 space-y-4 shadow-xs">
                <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                  &ldquo;Stepping into the international workforce requires more than just a visa—it demands a strategic partner who understands global market standards. The GlobeLink Career Partner Program supports ambitious professionals exploring legitimate overseas employment opportunities.&rdquo;
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  &ldquo;We help candidates align their skills with employer requirements, prepare professional resumes, understand application procedures and navigate relevant documentation. Our support is tailored to each destination and candidate profile.&rdquo;
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
                <p>
                  Global recruitment standards require strict professional discipline. Candidates targeting <strong>Dubai and the UAE</strong> need clean, quantitative ATS-optimized CVs, whereas employers in <strong>Japan</strong> expect traditional dual formats (Rirekisho &amp; Shokumu-Keirekisho) along with demonstrated etiquette and the &ldquo;Hou-Ren-Sou&rdquo; communication discipline.
                </p>
                <p>
                  In the <strong>Maldives</strong>, luxury resorts prioritize conversational poise, cross-cultural empathy, and guest hospitality acumen. The Career Partner Program bridges this gap with structured mentoring and interview drills.
                </p>
              </div>
            </div>

            {/* Quick Action / Contact Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-5">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-sky-950 border border-sky-800/80 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Career Profile Assessment</h3>
                  <p className="text-[11px] text-slate-400">One-on-one consultation with GlobeLink mentors</p>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Comprehensive evaluation of academic &amp; vocational credentials</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Gulf &amp; Japanese resume formatting and keyword alignment</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Mock virtual interview drills with constructive critique</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Pre-departure workplace manners &amp; cultural adaptation</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-slate-800">
                <a
                  href={careerGuidanceWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Ask About Career Guidance</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE 1: CAREER PREPARATION MODULES */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              Core Training Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Career Preparation Resources &amp; Modules
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Equipping Sri Lankan professionals with practical CV formatting, professional communication, and international interview techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CAREER_GUIDANCE_MODULES.map(module => (
              <div
                key={module.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded border border-sky-100">
                      {module.subtitle}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">
                    {module.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {module.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <span className="text-xs font-bold text-slate-800 block">
                      Key Practical Focus Areas:
                    </span>
                    <ul className="text-xs text-slate-600 space-y-1.5">
                      {module.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <a
                    href={careerGuidanceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-sky-700 hover:text-sky-900 inline-flex items-center gap-1.5"
                  >
                    <span>Inquire about this training module on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE 2 & 3: SEARCHABLE INTERVIEW Q&A LIBRARY & PRACTICE MODE */}
      <section className="py-16 bg-white border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InterviewPracticeLibrary />
        </div>
      </section>

      {/* Compliance Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        <DisclaimerBanner />
      </div>

      {/* FEATURE 4: INQUIRY FORM */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="career-preparation-inquiry"
            title="Book a Career Guidance & Assessment Session"
            subtitle="Submit your career background to receive honest, structured feedback from GlobeLink career advisors."
            initialService="Your Career Partner Program"
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};
