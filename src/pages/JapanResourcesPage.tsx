import React, { useState } from 'react';
import {
  Globe,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  BookOpen,
  GraduationCap,
  Briefcase,
  AlertTriangle,
  MessageSquare,
  HelpCircle,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InstallmentTrackerSection } from '../components/common/InstallmentTrackerSection';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface JapanResourcesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

interface ResourceItem {
  id: string;
  name: string;
  japaneseName?: string;
  category: string;
  sourceType: 'official' | 'external_edu' | 'external_lang' | 'external_recruit';
  sourceLabel: string;
  url: string;
  description: string;
  highlights: string[];
  disclaimer?: string;
  verifiedDate: string;
}

export const JapanResourcesPage: React.FC<JapanResourcesPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].japanResources;

  const [activeCategory, setActiveCategory] = useState<'all' | 'official' | 'education' | 'recruitment'>('all');

  const LINE_URL = 'https://line.me/ti/p/XPFcMlyXYp';

  // Verified curated resources based on user specifications
  const RESOURCES: ResourceItem[] = [
    // Resource A: Official SSW Information
    {
      id: 'resource-ssw',
      name: 'Official SSW Information Portal (Immigration Services Agency of Japan)',
      japaneseName: '特定技能総合支援サイト（出入国在留管理庁）',
      category: 'Specified Skilled Worker (SSW)',
      sourceType: 'official',
      sourceLabel: t.officialGovBadge,
      url: 'https://www.ssw.go.jp/en/',
      description: 'The authoritative official portal maintained by the Immigration Services Agency of Japan (MOJ). Explains the legal framework for the Specified Skilled Worker (SSW 1 and SSW 2) residency statuses, testing requirements, employment contracts, and bilateral Memorandums of Cooperation (MOC) between Japan and partner countries including Sri Lanka.',
      highlights: [
        'Detailed specifications for SSW 1 (12 authorized industry sectors) and SSW 2 (indefinite renewals)',
        'Statutory requirements for Prometric occupational skill tests and JFT-Basic / JLPT N4 language benchmarks',
        'Official bilateral Memorandum of Cooperation (MOC) compliance standards and registered support organization (RSO) duties',
        'Transparent legal guidelines on wages, social insurance, and trainee rights protection under Japanese law'
      ],
      disclaimer: 'Official Japanese Government Resource. Testing dates, eligibility criteria, and visa issuance requirements are governed exclusively by Japanese immigration authorities.',
      verifiedDate: 'October 2026'
    },

    // Resource B: NBAC Education Resource
    {
      id: 'resource-nbac',
      name: 'NBAC Education Resource & Academic Preparatory Portal',
      japaneseName: 'NBAC 教育・進学支援ポータル',
      category: 'Higher Education & Language Prep',
      sourceType: 'external_edu',
      sourceLabel: t.externalEduBadge,
      url: 'https://nbac-edu.com/',
      description: 'External specialized educational guidance resource providing information on Japanese academic preparatory curricula, university entry pathways, and specialized training institutions.',
      highlights: [
        'Curricular structure for Japanese university and vocational college preparatory studies',
        'Academic guidance and institutional profiling for international applicants',
        'Exploration of scholastic criteria and foundational language milestones'
      ],
      disclaimer: 'External Education Resource: Provided solely for educational reference. GlobeLink does not claim unverified exclusive partnerships or commercial representations.',
      verifiedDate: 'October 2026'
    },

    // Resource C: Kashikoi
    {
      id: 'resource-kashikoi',
      name: 'Kashikoi Japanese Language & Educational Portal',
      japaneseName: 'Kashikoi 日本語学習プラットフォーム',
      category: 'Language Learning & Exam Practice',
      sourceType: 'external_lang',
      sourceLabel: t.externalLangBadge,
      url: 'https://kashikoi.lk/',
      description: 'Sri Lankan external Japanese language and educational platform providing structured study materials, vocabulary drills, Kanji aids, and examination practice resources for Sri Lankan students.',
      highlights: [
        'Sri Lanka focused Japanese language learning tools and self-study drills',
        'Kanji flashcard references, vocabulary lists, and grammar practice modules',
        'Complementary reference materials for JLPT and JFT candidates'
      ],
      disclaimer: 'External Educational Resource: Independent Sri Lankan educational website. GlobeLink provides this external reference for supplementary student study convenience.',
      verifiedDate: 'October 2026'
    },

    // Resource D: Japan Agriculture & Livestock Information
    {
      id: 'resource-agriculture',
      name: 'Japan Agriculture & Livestock Career & Sector Information',
      japaneseName: '日本 農業・畜産キャリア情報・産業概要',
      category: 'Agriculture & Livestock Career Info',
      sourceType: 'external_recruit',
      sourceLabel: t.externalRecruitBadge,
      url: 'https://talentmobility.world/japan-agriculture-livestock',
      description: 'External recruitment and program information platform detailing career tracks, operational practices, and workplace conditions in Japan’s agricultural and livestock sectors (including greenhouse cultivation, open-field farming, and livestock management).',
      highlights: [
        'Overview of work practices across crop cultivation, livestock rearing, and dairy farm facilities in Japan',
        'Descriptions of working environments, seasonal shifts, and machinery handling protocols',
        'Insights into industrial demand and vocational pathways for international trainees and workers'
      ],
      disclaimer: 'Notice & Compliance Directive: This is external recruitment/program information and does not constitute an official government source. Candidates must refer to the official SSW portal (ssw.go.jp) and authorized Prometric examination bodies for statutory skill requirements, mandatory test schedules, and visa criteria.',
      verifiedDate: 'October 2026'
    }
  ];

  const filteredResources = RESOURCES.filter(res => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'official') return res.sourceType === 'official';
    if (activeCategory === 'education') return res.sourceType === 'external_edu' || res.sourceType === 'external_lang';
    if (activeCategory === 'recruitment') return res.sourceType === 'external_recruit';
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="Japan Education & Career Resources | Official SSW, Universities & Training | GlobeLink"
        description="Verified directory of official Japanese government portals (SSW/MOJ), Japanese university entrance pathways, educational practice platforms, agriculture career info, and direct advisory channels."
        canonicalPath="/japan-resources"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: "Let's Go Japan", path: '/lets-go-japan' },
          { name: 'Japan Resources & Tools', path: '/japan-resources' }
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Breadcrumbs
            items={[
              { name: "Let's Go Japan", pageId: 'lets-go-japan' },
              { name: 'Japan Resources' }
            ]}
            onNavigate={onNavigate}
          />

          <div className="mt-6 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-950 text-rose-300 border border-rose-800">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
              <span>{t.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {t.pageTitle}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.pageSubtitle}
            </p>
          </div>

          {/* Quick Direct LINE Consultation Card (Added ONCE as required) */}
          <div id="line-contact" className="mt-8 bg-slate-900/90 border border-emerald-500/40 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center shrink-0 text-emerald-400">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Bilingual Advisory Desk
                  </span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800">
                    Direct Official Support
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Direct LINE Support Channel for Japan Aspirants
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                  {t.lineDesc}
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-900/40 transition-all transform active:scale-95"
              >
                <span>{t.contactLine}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Resource Directory */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              {t.categoriesTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {language === 'ja'
                ? 'カテゴリーを選択して、公的機関ポータル、教育サイト、特定技能産業情報を絞り込みます。'
                : language === 'si'
                ? 'නිල රජයේ තොරතුරු, අධ්‍යාපනික අඩවි හෝ රැකියා ක්ෂේත්‍ර තොරතුරු පෙරීමට කාණ්ඩයක් තෝරන්න.'
                : language === 'ta'
                ? 'அதிகாரப்பூர்வ அரசு இணையதளங்கள், கல்வி தளங்கள் அல்லது தொழில் துறை தகவல்களை வடிகட்ட ஒரு பிரிவைத் தேர்ந்தெடுக்கவும்.'
                : 'Select a category to filter official government portals, education sites, or industry information.'}
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-colors shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {language === 'ja' ? `すべてのリソース (${RESOURCES.length})` : language === 'si' ? `සියලුම සම්පත් (${RESOURCES.length})` : language === 'ta' ? `அனைத்து வளங்கள் (${RESOURCES.length})` : `All Resources (${RESOURCES.length})`}
            </button>
            <button
              onClick={() => setActiveCategory('official')}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-colors shrink-0 ${
                activeCategory === 'official'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {language === 'ja' ? '日本政府公式' : language === 'si' ? 'නිල රජයේ මූලාශ්‍ර' : language === 'ta' ? 'அதிகாரப்பூர்வ அரசு' : 'Official Government'}
            </button>
            <button
              onClick={() => setActiveCategory('education')}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-colors shrink-0 ${
                activeCategory === 'education'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {language === 'ja' ? '進学・語学ポータル' : language === 'si' ? 'අධ්‍යාපනික සහ භාෂා' : language === 'ta' ? 'கல்வி மற்றும் மொழி' : 'Academic & Language'}
            </button>
            <button
              onClick={() => setActiveCategory('recruitment')}
              className={`px-3.5 py-2 rounded-xl font-semibold transition-colors shrink-0 ${
                activeCategory === 'recruitment'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {language === 'ja' ? '農業・特定技能情報' : language === 'si' ? 'කෘෂිකාර්මික හා රැකියා තොරතුරු' : language === 'ta' ? 'விவசாயம் & துறை தகவல்' : 'Agriculture & Sector Info'}
            </button>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredResources.map(resource => (
            <article
              key={resource.id}
              id={resource.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-7 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header: Source Tag & Category */}
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold ${
                      resource.sourceType === 'official'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : resource.sourceType === 'external_recruit'
                        ? 'bg-amber-50 text-amber-800 border border-amber-200'
                        : 'bg-sky-50 text-sky-800 border border-sky-200'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{resource.sourceLabel}</span>
                  </span>

                  <span className="text-[11px] text-slate-500 font-medium">
                    {language === 'ja' ? '公的検証済' : language === 'si' ? 'තහවුරු කළ දිනය' : language === 'ta' ? 'சரிபார்க்கப்பட்டது' : 'Verified'}: {resource.verifiedDate}
                  </span>
                </div>

                {/* Title & Japanese title */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {language === 'ja' && resource.japaneseName ? resource.japaneseName : resource.name}
                  </h3>
                  {resource.japaneseName && language !== 'ja' && (
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {resource.japaneseName}
                    </p>
                  )}
                  <p className="text-xs font-semibold text-sky-600 mt-1">
                    {language === 'ja' ? '区分：' : language === 'si' ? 'කාණ්ඩය: ' : language === 'ta' ? 'பிரிவு: ' : 'Category: '}
                    {resource.category}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {resource.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                    {language === 'ja' ? '主な特徴・対象範囲：' : language === 'si' ? 'ප්‍රධාන අංග සහ විෂය පථය:' : language === 'ta' ? 'முக்கிய அம்சங்கள் மற்றும் நோக்கம்:' : 'Key Features & Scope:'}
                  </p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {resource.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specific Disclaimer */}
                {resource.disclaimer && (
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2 leading-relaxed">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <p>{resource.disclaimer}</p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-[11px] text-slate-400 truncate">
                  {resource.url.replace('https://', '')}
                </span>

                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-bold text-xs shadow-sm transition-colors shrink-0"
                >
                  <span>{t.visitResource}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Advisory Guidance & Gemini Context Notice */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0 text-sky-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-slate-900">
                {t.disclaimerTitle}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.disclaimerDesc} {language === 'ja'
                  ? '透明性の高い相談原則に基づき、本ポータル掲載のリソース情報は理解促進および参考のために提供されています。出入国在留管理庁、JASSO、および認定試験実施団体の公式発表に代わるものではありません。'
                  : language === 'si'
                  ? 'විනිවිදභාවයෙන් යුතු උපදේශන ප්‍රතිපත්තිවලට අනුකූලව, මෙම තොරතුරු අධ්‍යාපනික අවබෝධය සඳහා පමණක් ලබාදී ඇත. ජපන් ආගමන විගමන ආයතන හෝ නිල විභාග මණ්ඩලවල තීරණ වලට මෙය ආදේශකයක් නොවේ.'
                  : language === 'ta'
                  ? 'வெளிப்படையான ஆலோசனை விதிகளின்படி, இந்த தகவல்கள் கற்றல் பயன்பாட்டிற்கு மட்டுமே வழங்கப்படுகின்றன. ஜப்பானிய குடிவரவுத் துறை மற்றும் அதிகாரப்பூர்வ அமைப்புகளின் சட்டப்பூர்வ அறிவிப்புகளுக்கு இது மாற்றாகாது.'
                  : 'In accordance with transparent advisory principles, reference context notes (including guidance summaries) are intended for educational workflow understanding and applicant orientation only. They do not substitute for official statutory notices issued by the Immigration Services Agency of Japan, JASSO, or authorized examination councils.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Class Fees Installment Tracker Section */}
      <InstallmentTrackerSection />

      {/* Cross-Navigation Footer CTA */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-slate-900">
            {language === 'ja' ? '試験対策・日本語総合学習のご案内' : language === 'si' ? 'විභාග සහ භාෂා සූදානම් කිරීම් පිළිබඳ සොයාබලන්න' : language === 'ta' ? 'தேர்வு மற்றும் மொழிப் பயிற்சிகளை ஆராயுங்கள்' : 'Explore Comprehensive Examination & Language Preparation'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            {language === 'ja'
              ? 'JLPT N5〜N3、EJU日本留学試験、Prometric特定技能評価試験対策クラスの詳細をご確認いただけます。'
              : language === 'si'
              ? 'JLPT N5-N3, EJU විභාගය, SSW නිපුණතා පරීක්ෂණ හෝ අපගේ පන්ති කාලසටහන බලන්න.'
              : language === 'ta'
              ? 'JLPT N5-N3, EJU பல்கலைக்கழக நுழைவு, Prometric SSW திறன் தேர்வுகள் அல்லது எங்கள் வகுப்பு அட்டவணையைப் பாருங்கள்.'
              : 'Prepare for JLPT N5-N3, EJU university admission, Prometric SSW skill tests, or view our complete course timetable.'}
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <button
              onClick={() => onNavigate('japanese-exams')}
              className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>{TRANSLATIONS[language].nav.japaneseExams}</span>
            </button>
            <button
              onClick={() => onNavigate('japanese-language-courses')}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-sky-600" />
              <span>{TRANSLATIONS[language].nav.japaneseCourses}</span>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-colors flex items-center gap-1.5"
            >
              <span>{TRANSLATIONS[language].nav.contact}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
