import React, { useState } from 'react';
import {
  ArrowRight,
  GraduationCap,
  Briefcase,
  Globe2,
  CheckCircle,
  FileText,
  HelpCircle,
  ChevronDown,
  Sparkles,
  PhoneCall,
  Clock,
  Compass,
  Building2,
  Calendar
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { JAPANESE_COURSES } from '../data/courses';
import { DESTINATIONS } from '../data/destinations';
import { FAQS } from '../data/faqs';
import { SEOHead } from '../components/common/SEOHead';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenSupabaseModal }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const scrollToInquiry = () => {
    const el = document.getElementById('home-inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEOHead
        title="GlobeLink Education and Migration Consultants | Your Career Partner"
        description="Connecting candidates to international education, legitimate career opportunities and global pathways through personalized guidance in Japan, Dubai, UAE, and the Maldives."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Subtle geometric grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Clean Kicker */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 bg-sky-950/80 border border-sky-800/80 px-3 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>Sri Lanka&apos;s Trusted Pathway &amp; Language Partner</span>
              </div>

              {/* Required Exact Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Your Career Partner <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-white">
                  Connecting You to the World
                </span>
              </h1>

              {/* Required Exact Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Connecting candidates to international education, legitimate career opportunities and global pathways through personalized guidance.
              </p>

              {/* Value stats / Highlights without pills */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Let&apos;s Go Japan Language Training</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Direct Gulf &amp; Island Career Guidance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Transparent &amp; Ethical Consulting</span>
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={scrollToInquiry}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg hover:shadow-sky-500/25 transition-all duration-200 active:scale-98"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Book a Consultation</span>
                </button>

                <button
                  onClick={() => onNavigate('education-consultancy')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all duration-200"
                >
                  <span>Explore Our Programs</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </button>
              </div>

              {/* Direct Quick Contact */}
              <div className="pt-4 flex items-center gap-4 text-xs text-slate-400 border-t border-slate-800">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                  Hotline: <a href={`tel:${COMPANY_INFO.hotlineTel}`} className="text-white font-medium hover:underline">{COMPANY_INFO.hotline}</a>
                </span>
                <span>&middot;</span>
                <span>Horagolla, Nittambuwa Office</span>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xs">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                      Specialized Division
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">Let&apos;s Go Japan</h3>
                  </div>
                  <span className="text-xs font-mono bg-slate-900 text-sky-300 px-2.5 py-1 rounded-md border border-slate-700">
                    JLPT N5 &middot; N4 &middot; N3
                  </span>
                </div>

                <div className="py-4 space-y-3 text-xs text-slate-300">
                  <p className="leading-relaxed">
                    Sri Lanka&apos;s dedicated Japanese language and student visa pathway training. Live online interactive batches with native audio and exam question drill.
                  </p>
                  <div className="space-y-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                    <div className="flex items-center justify-between text-slate-200">
                      <span className="font-semibold text-white">Next JLPT N5 Batch:</span>
                      <span className="text-emerald-400 font-medium">Enrolling Now</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Delivery:</span>
                      <span>Zoom / Google Meet (Live + Recorded)</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Materials:</span>
                      <span>Textbooks, Kanji Packs &amp; Mock Exams</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate('lets-go-japan')}
                    className="w-full py-2.5 px-4 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Let&apos;s Go Japan Courses</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hello GlobeLink, I would like to inquire about Let\'s Go Japan Japanese language courses.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 rounded-lg bg-slate-700/70 hover:bg-slate-700 text-slate-200 text-xs font-medium text-center transition-colors"
                  >
                    Direct WhatsApp Course Inquiry &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Disclaimer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <DisclaimerBanner compact />
      </div>

      {/* Section 1: About GlobeLink Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-widest">
                <span>About GlobeLink Education &amp; Migration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Turning International Ambitions into Achievable Realities
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                At GlobeLink, we turn international ambitions into achievable realities. We specialize in bridging the gap between local talent and global opportunities. Whether your goal is studying abroad or advancing your profession overseas, our mission is to provide transparent, trusted, and end-to-end guidance every step of the way.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                While renowned for our specialized study and language programs, such as Let&apos;s Go Japan, our expertise extends beyond the classroom. We guide students and professionals exploring destinations including Japan, Dubai, the UAE and the Maldives. With GlobeLink, you gain a dedicated team committed to ethical consulting, compliance and your long-term success.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 group"
                >
                  <span>Learn more about our philosophy &amp; ethics</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">Education Consultancy</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Institutional selection, application documentation, and Japanese language pathways.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">Let&apos;s Go Japan</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    JLPT, NAT-TEST, JFT-Basic classes, Kanji workshops, and spoken Japanese mastery.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">Career Partner Program</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strategic profile evaluation, international resume curation, and interview preparation.
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">Visa Documentation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Accurate translations, sponsor documents, and COE checklist audits without false claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Let's Go Japan Feature Showcase */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400 uppercase tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                Specialized Japanese Language Division
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let&apos;s Go Japan Education &amp; Training
              </h2>
              <p className="mt-2 text-slate-400 text-sm max-w-xl">
                Structured language preparation for JLPT N5, N4, N3, JFT-Basic, and NAT-TEST with flexible online schedules and live interactive sessions.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => onNavigate('japanese-language-courses')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
              >
                <span>View All 8 Courses &amp; Syllabi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JAPANESE_COURSES.slice(0, 3).map(course => (
              <div
                key={course.id}
                className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-mono text-sky-400 font-bold">{course.code}</span>
                    <span className="text-slate-300">{course.level}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {course.title}
                  </h3>
                  {course.japaneseTitle && (
                    <p className="text-xs text-rose-400 font-medium mb-3">
                      {course.japaneseTitle}
                    </p>
                  )}
                  <p className="text-xs text-slate-300 mb-4 line-clamp-2">
                    {course.targetAudience}
                  </p>

                  <div className="space-y-2 py-3 border-t border-b border-slate-700/80 text-xs text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Duration:</span>
                      <span className="font-medium text-white">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Class Hours:</span>
                      <span className="font-medium text-white">{course.hours}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Delivery:</span>
                      <span className="text-sky-300">{course.mode}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-y-2">
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello GlobeLink, I want to enroll in ${course.title} (${course.code}). Please send batch schedules.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs text-center transition-colors block"
                  >
                    Inquire via WhatsApp &rarr;
                  </a>
                  <button
                    onClick={() => onNavigate('japanese-language-courses')}
                    className="w-full py-2 px-3 text-xs text-slate-400 hover:text-white text-center transition-colors"
                  >
                    View Syllabus &amp; Fees
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            * Class schedules, fees, and installment plans are editable per intake. Direct inquiries verify current batch timings.
          </div>
        </div>
      </section>

      {/* Section 3: Your Career Partner Program */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              GlobeLink Career Development
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Build Your Future. Expand Your Boundaries.
            </h2>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              Stepping into the international workforce requires more than just a visa—it demands a strategic partner who understands global market standards. The GlobeLink Career Partner Program supports ambitious professionals exploring legitimate overseas employment opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Career Profile Assessment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thorough audit of academic qualifications, vocational certifications, language competencies, and target country match.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Resume &amp; Interview Prep</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transformation of resumes into Gulf standard executive formats or Japanese Rirekisho &amp; Shokumu-Keirekisho standards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Skills &amp; Requirement Matching</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Guidance on employer benchmarks across hospitality, customer relations, technical trades, and professional fields.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Destination-Specific Guidance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tailored advisory for Japan, Dubai, United Arab Emirates, and the Maldives, clarifying legitimate entry channels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Work Visa Documentation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Legalization, Ministry of Foreign Affairs (MOFA) attestation guidance, and employer quota verification checks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Pre-Departure Preparation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cultural etiquette, workplace communication habits (Hou-Ren-Sou in Japan), and living cost adaptation briefings.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('career-partner')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
            >
              <span>Explore Career Partner Program Details</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 4: International Destinations Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              Global Pathways
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Explore Our International Destinations
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Each country has specific visa categories, eligibility benchmarks, and language prerequisites. We guide candidates ethically according to individual profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map(dest => (
              <div
                key={dest.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img
                      src={dest.heroImage}
                      alt={`${dest.country} education and career opportunities`}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                      <span className="font-bold text-lg flex items-center gap-1.5">
                        <span>{dest.flagEmoji}</span>
                        <span>{dest.country}</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {dest.overview}
                    </p>
                    <div className="space-y-1 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-slate-700 block">Key Support:</span>
                      <ul className="text-[11px] text-slate-500 space-y-1">
                        {dest.servicesAvailable.slice(0, 2).map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-sky-500">&bull;</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <button
                    onClick={() => onNavigate('international-careers')}
                    className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-sky-50 text-sky-800 font-semibold text-xs text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Destination Guide &amp; Visas</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-500 border border-slate-200/80">
            <strong>Important Notice:</strong> Not every program or visa category is available for every destination. Inquiries are assessed on individual merits and verified institutional/employer requirements.
          </div>
        </div>
      </section>

      {/* Section 5: Consultation Process (4 Steps) */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              Ethical Guidance Pathway
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              Our 4-Step Consultation Process
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              We eliminate guesswork with a transparent, structured pathway from initial profile assessment to pre-departure briefing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative">
              <span className="text-3xl font-extrabold text-sky-400/40 mb-2 block font-mono">01</span>
              <h3 className="font-bold text-white text-base mb-2">Profile Assessment</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Initial evaluation of your educational background, vocational history, language abilities, and realistic budget feasibility.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative">
              <span className="text-3xl font-extrabold text-sky-400/40 mb-2 block font-mono">02</span>
              <h3 className="font-bold text-white text-base mb-2">Pathway &amp; Language</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Selection of suitable programs (e.g., Let&apos;s Go Japan JLPT training, institutional applications, or Gulf career alignment).
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative">
              <span className="text-3xl font-extrabold text-sky-400/40 mb-2 block font-mono">03</span>
              <h3 className="font-bold text-white text-base mb-2">Documentation Support</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Meticulous guidance through certified translations, financial proofs, sponsor documentation, and Certificate of Eligibility filing.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative">
              <span className="text-3xl font-extrabold text-sky-400/40 mb-2 block font-mono">04</span>
              <h3 className="font-bold text-white text-base mb-2">Pre-Departure Briefing</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Comprehensive orientation covering overseas banking, airport logistics, accommodation, cultural norms, and local emergency support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose GlobeLink */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              Client Trust &amp; Integrity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              Why Choose GlobeLink Education &amp; Migration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                Transparent &amp; Ethical Consulting
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never make deceptive promises or claim 100% visa guarantees. You receive honest, verified advice based on actual immigration regulations.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-sky-600" />
                Specialized Language Division
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our Let&apos;s Go Japan program combines certified Japanese syllabus training, mock examinations, and spoken Japanese under one dedicated roof.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-rose-600" />
                Physical &amp; Virtual Accessibility
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Visit our physical office in Nittambuwa or follow interactive live courses from anywhere across Sri Lanka or overseas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              Got Questions?
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear answers regarding courses, career consulting, destinations, and compliance standards.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map(faq => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-5 py-4 bg-slate-50/50 hover:bg-slate-100/60 flex items-center justify-between text-sm font-bold text-slate-900 transition-colors"
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-sky-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 8: Lead Generation Inquiry Form */}
      <section id="home-inquiry" className="py-16 sm:py-20 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="home-inquiry-form"
            title="Book a Consultation with GlobeLink"
            subtitle="Fill in your details below. Our education and career consultants will assess your requirements and contact you via your preferred communication channel."
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};
