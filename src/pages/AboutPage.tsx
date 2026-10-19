import React from 'react';
import {
  ShieldCheck,
  Target,
  Award,
  Users2,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="About Us | GlobeLink Education & Migration Consultants"
        description="Learn about GlobeLink Education & Migration Consultants (Globe Link Edu), our ethical consulting philosophy, Let's Go Japan program, and international pathways."
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: 'About Us' }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 block">
              About GlobeLink Education and Migration Consultants
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Bridging Local Ambition with Global Opportunity
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Transparent, trusted, and end-to-end guidance connecting Sri Lankan talent to international education and legitimate career pathways.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section with Client Supplied Text */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Who We Are &amp; What Drives Us
              </h2>

              {/* Exact Provided Content Block */}
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-sky-600 text-slate-800 space-y-4 shadow-xs">
                <p className="text-base sm:text-lg leading-relaxed font-medium text-slate-900">
                  &ldquo;At GlobeLink, we turn international ambitions into achievable realities. We specialize in bridging the gap between local talent and global opportunities. Whether your goal is studying abroad or advancing your profession overseas, our mission is to provide transparent, trusted, and end-to-end guidance every step of the way.&rdquo;
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  &ldquo;While renowned for our specialized study and language programs, such as Let&apos;s Go Japan, our expertise extends beyond the classroom. We guide students and professionals exploring destinations including Japan, Dubai, the UAE and the Maldives. With GlobeLink, you gain a dedicated team committed to ethical consulting, compliance and your long-term success.&rdquo;
                </p>
              </div>

              {/* Detailed Operational Context */}
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed pt-2">
                <p>
                  Established in Nittambuwa, Sri Lanka, GlobeLink Education and Migration Consultants was founded on a fundamental conviction: candidate success requires ethical clarity rather than false shortcuts. Many overseas candidates face misinformation and inflated promises; our approach provides verifiable factual requirements for every program.
                </p>
                <p>
                  Through our specialized <strong>Let&apos;s Go Japan</strong> program, we combine rigorous Japanese Language Proficiency Test (JLPT) training, JFT-Basic preparation, and cultural readiness with personalized student visa and Specified Skilled Worker (SSW) guidance. In addition, our <strong>Your Career Partner Program</strong> assists qualified professionals targeting Dubai, the UAE, and the Maldives with CV modernization, employer benchmark matching, and authentication support.
                </p>
              </div>

              <DisclaimerBanner />
            </div>

            {/* Side Highlights & Verification Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-sky-400" />
                  Our Core Pillars of Practice
                </h3>

                <ul className="space-y-4 text-xs text-slate-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Integrity &amp; Realistic Expectations</strong>
                      We never guarantee visa outcomes or job offers. We present candid eligibility evaluations before any commitments.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Specialized Japanese Pedagogy</strong>
                      Our Let&apos;s Go Japan instructors teach through structured interactive curriculums, mock exams, and real-world audio drills.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Regulatory Compliance</strong>
                      Strict adherence to Sri Lankan laws and target host nation immigration codes (Japan Immigration Services Agency, UAE MOHRE, etc.).
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block text-sm">Lifelong Mentorship</strong>
                      From your first N5 Hiragana character or CV draft to your safe arrival and airport transition.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Office & Direct Contact Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">Visit or Contact Our Office</h4>
                <div className="text-xs text-slate-600 space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.officeAddress}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                    <a href={`tel:${COMPANY_INFO.hotlineTel}`} className="hover:text-slate-900 font-medium">
                      {COMPANY_INFO.hotline} / {COMPANY_INFO.additionalPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                    <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-slate-900">
                      {COMPANY_INFO.primaryEmail}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-2.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Schedule an In-Person Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Ethical Principles Governing Our Consulting
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600">
              Clear commitments ensuring every candidate receives fair, transparent, and accurate guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5">No Unverified Claims</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never claim institutional partnerships, accreditation, or government authorization unless explicitly verified for the specific program.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5">Transparent Fee Structure</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every service fee and course tuition is openly communicated in advance. We do not engage in unexpected surcharges or hidden costs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-3">
                <Users2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1.5">Candidate-Centric Guidance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We match candidates with pathways suitable for their genuine profile and career trajectory, rather than pushing unsuitable routes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
