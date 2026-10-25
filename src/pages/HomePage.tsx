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
  Calendar,
  MessageCircle
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { JAPANESE_COURSES } from '../data/courses';
import { DESTINATIONS } from '../data/destinations';
import { FAQS } from '../data/faqs';
import { SEOHead } from '../components/common/SEOHead';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { getLocalizedCourse, getLocalizedDestination, getLocalizedFaq } from '../utils/localizedContent';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenSupabaseModal }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const tHero = t.hero;
  const tHome = t.home;
  const tLGJ = t.letsGoJapan;
  const tCourses = t.courses;
  const tExams = t.exams;
  const tCareer = t.careerPartner;
  const tCareerQA = t.careerQA;

  const careerPillars = [
    { title: tCareer.pillar1Title, desc: tCareer.pillar1Desc },
    { title: tCareer.pillar2Title, desc: tCareer.pillar2Desc },
    { title: tCareer.pillar3Title, desc: tCareer.pillar3Desc }
  ];

  const consultationSteps = [
    { title: tHome.step1Title, desc: tHome.step1Desc },
    { title: tHome.step2Title, desc: tHome.step2Desc },
    { title: tHome.step3Title, desc: tHome.step3Desc },
    { title: tHome.step4Title, desc: tHome.step4Desc }
  ];

  const whyReasons = [
    { title: tHome.why1Title, desc: tHome.why1Desc },
    { title: tHome.why2Title, desc: tHome.why2Desc },
    { title: tHome.why3Title, desc: tHome.why3Desc }
  ];

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
                <span>{tHero.kicker}</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {tHero.titleLine1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-white">
                  {tHero.titleLine2}
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {tHero.subtitle}
              </p>

              {/* Value stats / Highlights without pills */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{tHero.highlight1}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{tHero.highlight2}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{tHero.highlight3}</span>
                </div>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={scrollToInquiry}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-lg hover:shadow-sky-500/25 transition-all duration-200 active:scale-98"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>{tHero.ctaConsult}</span>
                </button>

                <button
                  onClick={() => onNavigate('education-consultancy')}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-all duration-200"
                >
                  <span>{tHero.ctaExplore}</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </button>
              </div>

              {/* Direct Quick Contact */}
              <div className="pt-4 flex items-center gap-4 text-xs text-slate-400 border-t border-slate-800">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <PhoneCall className="w-3.5 h-3.5 text-sky-400" />
                  {t.nav.hotline}: <a href={`tel:${COMPANY_INFO.hotlineTel}`} className="text-white font-medium hover:underline">{COMPANY_INFO.hotline}</a>
                </span>
                <span>&middot;</span>
                <span>{COMPANY_INFO.officeAddress}</span>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 shadow-2xl backdrop-blur-xs">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-rose-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                      {tLGJ.badge}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">{tLGJ.pageTitle}</h3>
                  </div>
                  <span className="text-xs font-mono bg-slate-900 text-sky-300 px-2.5 py-1 rounded-md border border-slate-700">
                    JLPT N5 &middot; N4 &middot; N3
                  </span>
                </div>

                <div className="py-4 space-y-3 text-xs text-slate-300">
                  <p className="leading-relaxed">
                    {tLGJ.introDesc}
                  </p>
                  <div className="space-y-2 bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                    <div className="flex items-center justify-between text-slate-200">
                      <span className="font-semibold text-white">
                        {language === 'ja' ? '次回開講予定:' : language === 'si' ? 'ඊළඟ කණ්ඩායම:' : language === 'ta' ? 'அடுத்த சேர்க்கை:' : 'Next Intake:'}
                      </span>
                      <span className="text-emerald-400 font-medium">
                        {language === 'ja' ? '受講生募集中' : language === 'si' ? 'ලියාපදිංචිය විවෘතයි' : language === 'ta' ? 'பதிவு தொடங்கியது' : 'Enrolling Now'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>{tCourses.modeLabel}</span>
                      <span>{language === 'ja' ? 'オンライン生配信・対面' : language === 'si' ? 'සජීවී ඔන්ලයින් සහ භෞතික' : language === 'ta' ? 'நேரடி இணையம் மற்றும் வகுப்பறை' : 'Interactive Live & Hybrid'}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span>{language === 'ja' ? '教材・サポート:' : language === 'si' ? 'අධ්‍යයන කට්ටල:' : language === 'ta' ? 'கற்றல் பொருட்கள்:' : 'Study Packs:'}</span>
                      <span>{language === 'ja' ? 'オリジナル問題集・過去問' : language === 'si' ? 'විභාග ප්‍රශ්න පත්‍ර සහ පොත්පත්' : language === 'ta' ? 'மாதிரி தாள்கள் மற்றும் பாடப்புத்தகங்கள்' : 'Past Papers & Digital Packs'}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    onClick={() => onNavigate('lets-go-japan')}
                    className="w-full py-2.5 px-4 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{tCourses.viewSyllabus}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hello GlobeLink, I would like to inquire about Let\'s Go Japan Japanese language courses.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-4 rounded-lg bg-slate-700/70 hover:bg-slate-700 text-slate-200 text-xs font-medium text-center transition-colors"
                  >
                    {tCourses.enrollWhatsApp} &rarr;
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
                <span>{t.about.kicker}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {t.about.storyTitle}
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {t.about.storyP1}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.about.storyP2}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 group"
                >
                  <span>{tHome.explorePathways}</span>
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
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">{tHome.eduCardTitle}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tHome.eduCardDesc}
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">{tHome.lgjCardTitle}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tHome.lgjCardDesc}
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">{tHome.careerCardTitle}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tHome.careerCardDesc}
                  </p>
                </div>

                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">{t.migrationVisa.pageTitle}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.migrationVisa.pageSubtitle}
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
                {tLGJ.badge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {tLGJ.pageTitle}
              </h2>
              <p className="mt-2 text-slate-400 text-sm max-w-xl">
                {tLGJ.pageSubtitle}
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('japanese-exams')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors shadow-sm"
              >
                <span>{tExams.viewOfficial}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('japanese-language-courses')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors py-1.5"
              >
                <span>{tCourses.badge}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JAPANESE_COURSES.slice(0, 3).map(course => {
              const locCourse = getLocalizedCourse(course, language);
              return (
                <div
                  key={course.id}
                  className="bg-slate-800/90 border border-slate-700 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-600 transition-all shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-mono text-sky-400 font-bold">{locCourse.code}</span>
                      <span className="text-slate-300">{locCourse.level}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {locCourse.title}
                    </h3>
                    {locCourse.japaneseTitle && (
                      <p className="text-xs text-rose-400 font-medium mb-3">
                        {locCourse.japaneseTitle}
                      </p>
                    )}
                    <p className="text-xs text-slate-300 mb-4 line-clamp-2">
                      {locCourse.targetAudience}
                    </p>

                    <div className="space-y-2 py-3 border-t border-b border-slate-700/80 text-xs text-slate-300">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">{tCourses.durationLabel}:</span>
                        <span className="font-medium text-white">{locCourse.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">{tCourses.hoursLabel}:</span>
                        <span className="font-medium text-white">{locCourse.hours}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">{tCourses.modeLabel}:</span>
                        <span className="text-sky-300">{locCourse.mode}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 space-y-2">
                    <a
                      href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello GlobeLink, I want to enroll in ${locCourse.title} (${locCourse.code}). Please send batch schedules.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs text-center transition-colors block"
                    >
                      {tCourses.enrollWhatsApp} &rarr;
                    </a>
                    <button
                      onClick={() => onNavigate('japanese-language-courses')}
                      className="w-full py-2 px-3 text-xs text-slate-400 hover:text-white text-center transition-colors"
                    >
                      {tCourses.viewSyllabus}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            {COMPANY_INFO.disclaimers.clientVerificationNotice}
          </div>
        </div>
      </section>

      {/* Section 3: Your Career Partner Program */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              {tCareer.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              {tCareer.pageTitle}
            </h2>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              {tCareer.pageSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPillars.map((pillar, idx) => {
              const icons = [Compass, FileText, Building2, Globe2, CheckCircle, Clock];
              const IconComp = icons[idx % icons.length];
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('career-partner')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
            >
              <span>{tHome.explorePathways}</span>
              <ArrowRight className="w-4 h-4 text-sky-400" />
            </button>
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hello GlobeLink, I would like to ask about the GlobeLink Career Partner Program and career guidance.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>{tCareerQA.askGuidance}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 4: International Destinations Cards */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              {tHome.destKicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              {tHome.destTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {tHome.destSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map(dest => {
              const locDest = getLocalizedDestination(dest, language);
              return (
                <div
                  key={dest.id}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden bg-slate-100">
                      <img
                        src={dest.heroImage}
                        alt={`${locDest.country} education and career opportunities`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <span className="font-bold text-lg flex items-center gap-1.5">
                          <span>{dest.flagEmoji}</span>
                          <span>{locDest.country}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {locDest.overview}
                      </p>
                      <div className="space-y-1 pt-2 border-t border-slate-100">
                        <span className="text-[11px] font-semibold text-slate-700 block">
                          {language === 'ja'
                            ? '主な進学・キャリア支援:'
                            : language === 'si'
                            ? 'ප්‍රධාන මඟපෙන්වීම් සහ වැඩසටහන්:'
                            : language === 'ta'
                            ? 'முக்கிய ஆதரவு மற்றும் திட்டங்கள்:'
                            : 'Key Support & Programs:'}
                        </span>
                        <ul className="text-[11px] text-slate-500 space-y-1">
                          {locDest.servicesAvailable.slice(0, 2).map((item, i) => (
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
                      <span>
                        {language === 'ja'
                          ? '渡航ガイド・要件を見る'
                          : language === 'si'
                          ? 'විස්තර සහ මාර්ගෝපදේශය'
                          : language === 'ta'
                          ? 'வழிகாட்டல் மற்றும் விபரங்கள்'
                          : 'View Destination Guide'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-4 bg-slate-50 rounded-xl text-center text-xs text-slate-500 border border-slate-200/80">
            {tHome.destNotice}
          </div>
        </div>
      </section>

      {/* Section 5: Consultation Process (4 Steps) */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              {tHome.stepKicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
              {tHome.stepTitle}
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              {tHome.stepSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {consultationSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative">
                <span className="text-3xl font-extrabold text-sky-400/40 mb-2 block font-mono">0{idx + 1}</span>
                <h3 className="font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose GlobeLink */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              {tHome.whyKicker}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              {tHome.whyTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyReasons.map((reason, idx) => {
              const colors = ['text-emerald-600', 'text-sky-600', 'text-rose-600'];
              return (
                <div key={idx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <CheckCircle className={`w-5 h-5 ${colors[idx % colors.length]}`} />
                    {reason.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7: FAQs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              {tHome.faqKicker}
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              {tHome.faqTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {tHome.faqSubtitle}
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map(faq => {
              const locFaq = getLocalizedFaq(faq, language);
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
                    <span className="pr-4">{locFaq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-sky-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 py-4 bg-white text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                      {locFaq.answer}
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
            title={tHome.inquiryTitle}
            subtitle={tHome.inquirySubtitle}
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};
