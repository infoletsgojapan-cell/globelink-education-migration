import React, { useState, useMemo } from 'react';
import {
  GraduationCap,
  Search,
  BookOpen,
  Calendar,
  ExternalLink,
  ShieldAlert,
  ShieldCheck,
  MessageCircle,
  HelpCircle,
  Sparkles,
  Info,
  CheckCircle2,
  FileCheck2,
  ChevronRight
} from 'lucide-react';
import { PageId, ExamCategory, ExamEntry } from '../types';
import { EXAM_RESOURCES } from '../data/examResources';
import { COMPANY_INFO } from '../data/company';
import { fetchExamEntries } from '../services/supabaseClient';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ExamResourceCard } from '../components/exams/ExamResourceCard';
import { AnnouncementsSection } from '../components/exams/AnnouncementsSection';
import { VacanciesSection } from '../components/exams/VacanciesSection';
import { InquiryForm } from '../components/forms/InquiryForm';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface JapaneseExamsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

const CATEGORIES: Array<ExamCategory | 'All'> = [
  'All',
  'JLPT',
  'EJU',
  'NAT-TEST',
  'JLCT',
  'JFT-Basic',
  'SSW Skills Assessment'
];

export const JapaneseExamsPage: React.FC<JapaneseExamsPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].exams;

  const [selectedCategory, setSelectedCategory] = useState<ExamCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [publishedExams, setPublishedExams] = useState<ExamEntry[]>([]);

  React.useEffect(() => {
    fetchExamEntries(true).then((res) => {
      if (res.data) setPublishedExams(res.data);
    });
  }, []);

  const filteredExams = useMemo(() => {
    return EXAM_RESOURCES.filter(exam => {
      const matchesCategory = selectedCategory === 'All' || exam.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        exam.name.toLowerCase().includes(q) ||
        exam.acronym.toLowerCase().includes(q) ||
        exam.japaneseName.toLowerCase().includes(q) ||
        exam.shortExplanation.toLowerCase().includes(q) ||
        exam.levelsOrSectors.some(lvl => lvl.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title={t.pageTitle}
        description={t.pageSubtitle}
        canonicalPath="/japanese-exams"
        breadcrumbs={[
          { name: t.filterAll === 'All' ? 'Home' : (language === 'ja' ? 'ホーム' : language === 'si' ? 'මුල් පිටුව' : 'முகப்பு'), path: '/' },
          { name: "Let's Go Japan", path: '/lets-go-japan' },
          { name: t.pageTitle, path: '/japanese-exams' }
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Let's Go Japan", pageId: 'lets-go-japan' },
          { name: t.pageTitle }
        ]}
        onNavigate={onNavigate}
      />

      {/* Hero Header: Premium Japanese Education & Examination Style */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Subtle Japanese geometric grid & red accent circle */}
        <div className="absolute inset-0 bg-grid-pattern opacity-25"></div>
        <div className="absolute -top-24 right-10 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-950/80 border border-rose-800/80 rounded-full text-xs font-bold text-rose-300">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              <span>{t.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.pageTitle}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.pageSubtitle}
            </p>

            {/* Quick Quicklinks Badges */}
            <div className="pt-2 flex flex-wrap gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> JLPT N5-N1
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> {language === 'ja' ? 'EJU 日本留学試験' : language === 'si' ? 'EJU විශ්වවිද්‍යාල ප්‍රවේශ' : language === 'ta' ? 'EJU பல்கலைக்கழக சேர்க்கை' : 'EJU University Admission'}
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> Prometric SSW ({language === 'ja' ? '特定技能・農業' : language === 'si' ? 'කෘෂිකාර්මික හා කුසලතා' : language === 'ta' ? 'விவசாயம் & திறன்கள்' : 'Agriculture & Skills'})
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> JFT-Basic &amp; NAT-TEST
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        {/* Search & Category Filter Controls */}
        <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              />
            </div>

            {/* Direct WhatsApp Guidance Button */}
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
                language === 'ja'
                  ? 'GlobeLink公式窓口へ：日本の公式試験申込みや開講日程について教えてください。'
                  : language === 'si'
                  ? 'GlobeLink වෙත: ජපන් විභාග ලියාපදිංචිය සහ පන්ති කාලසටහන පිළිබඳව විමසීමට කැමැත්තෙමි.'
                  : language === 'ta'
                  ? 'GlobeLink: ஜப்பானிய தேர்வு பதிவு மற்றும் வகுப்பு அட்டவணை பற்றி அறிய விரும்புகிறேன்.'
                  : 'Hello GlobeLink! I want to ask for guidance regarding Japanese examination registrations and batch schedules.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shrink-0 shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{language === 'ja' ? '試験登録・日程を相談する' : language === 'si' ? 'විභාග ලියාපදිංචිය විමසන්න' : language === 'ta' ? 'தேர்வு பதிவு பற்றி கேளுங்கள்' : 'Ask About Exam Registration'}</span>
            </a>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-colors ${
                  selectedCategory === cat
                    ? 'bg-rose-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'All' ? t.filterAll : cat}
              </button>
            ))}
          </div>
        </div>

        {/* EJU University Entrance Special Advisory Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-sm relative overflow-hidden space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-600/20 border border-rose-500/30 flex items-center justify-center shrink-0 text-rose-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-[11px] font-bold text-rose-400 uppercase tracking-wider">
                {language === 'ja' ? '大学・大学院進学指導部門' : language === 'si' ? 'විශේෂිත විශ්වවිද්‍යාල සූදානම් කිරීමේ අංශය' : language === 'ta' ? 'பல்கலைக்கழக தயார்படுத்தல் பிரிவு' : 'Specialized University Preparation Division'}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                {t.ejuSpecialTitle}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {t.ejuSpecialDesc}
              </p>
              <p className="text-xs text-amber-300 bg-amber-950/60 p-3 rounded-xl border border-amber-800/60 leading-relaxed">
                {t.ejuDisclaimer}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="https://share.google/lYlVRmLIDBw3YHReI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs transition-colors"
                >
                  <span>{language === 'ja' ? '公式大学進学リファレンス' : language === 'si' ? 'නිල විශ්වවිද්‍යාල ප්‍රවේශ මූලාශ්‍ර' : language === 'ta' ? 'அதிகாரப்பூர்வ பல்கலைக்கழக நுழைவு குறிப்பு' : 'Official University Entrance Reference'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
                    language === 'ja'
                      ? 'GlobeLink公式窓口へ：EJU日本留学試験対策および大学出願について相談希望です。'
                      : language === 'si'
                      ? 'GlobeLink වෙත: EJU විභාගය සහ ජපන් විශ්වවිද්‍යාල ප්‍රවේශ අවශ්‍යතා පිළිබඳව විමසීමට කැමැත්තෙමි.'
                      : language === 'ta'
                      ? 'GlobeLink: EJU தேர்வு மற்றும் ஜப்பானிய பல்கலைக்கழக தேவைகள் பற்றி அறிய விரும்புகிறேன்.'
                      : 'Hello GlobeLink! I want to ask about EJU examination preparation and Japanese university entrance requirements.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{language === 'ja' ? 'EJU対策について相談する' : language === 'si' ? 'EJU සූදානම ගැන විමසන්න' : language === 'ta' ? 'EJU பயிற்சி பற்றி கேளுங்கள்' : 'Ask About EJU Preparation'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic CMS Published Exam Schedules */}
        {publishedExams.length > 0 && (
          <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold text-slate-900">
                      {language === 'ja' ? '実施予定の公式試験・願書受付日程' : language === 'si' ? 'ඉදිරි විභාග සහ ලියාපදිංචි කාලසටහන' : language === 'ta' ? 'வரவிருக்கும் தேர்வு மற்றும் பதிவு அட்டவணை' : 'Upcoming Examination & Registration Schedule'}
                    </h2>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {language === 'ja' ? '最新動的スケジュール' : language === 'si' ? 'යාවත්කාලීන කාලසටහන' : language === 'ta' ? 'நேரடி அட்டவணை' : 'Live Dynamic Schedule'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {language === 'ja' ? 'GlobeLink Let\'s Go Japan 専門スタッフが管理する公式試験期および出願締切日' : language === 'si' ? 'GlobeLink Let\'s Go Japan සම්බන්ධීකාරකවරුන් විසින් කළමනාකරණය කරන නිල විභාග දින සහ ලියාපදිංචි අවසන් දින' : language === 'ta' ? 'GlobeLink ஒருங்கிணைப்பாளர்களால் நிர்வகிக்கப்படும் அதிகாரப்பூர்வ தேர்வு தேதிகள் மற்றும் காலக்கெடு' : 'Official test dates and registration deadlines managed by GlobeLink Let\'s Go Japan coordinators'}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {publishedExams.map((exam) => (
                <div
                  key={exam.id}
                  className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-sky-300 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                        {exam.exam_level || 'All Levels'}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-slate-900 line-clamp-1">
                      {exam.exam_name}
                    </h3>

                    {exam.description && (
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {exam.description}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
                    {exam.exam_date && (
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">{language === 'ja' ? '試験日：' : language === 'si' ? 'විභාග දිනය:' : language === 'ta' ? 'தேர்வு தேதி:' : 'Exam Date:'}</span>
                        <span className="font-semibold text-slate-900">{exam.exam_date}</span>
                      </div>
                    )}

                    {exam.registration_deadline && (
                      <div className="flex items-center justify-between text-rose-700">
                        <span className="font-medium">{language === 'ja' ? '締切日：' : language === 'si' ? 'අවසන් දිනය:' : language === 'ta' ? 'காலக்கெடு:' : 'Registration:'}</span>
                        <span className="font-bold">{exam.registration_deadline}</span>
                      </div>
                    )}

                    {exam.registration_url && (
                      <a
                        href={exam.registration_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full mt-2 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-center font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <span>{language === 'ja' ? '公式出願・受験ポータル' : language === 'si' ? 'නිල ලියාපදිංචි පෝරමය' : language === 'ta' ? 'அதிகாரப்பூர்வ பதிவு தளம்' : 'Official Registration Portal'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Exam Cards Grid */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {language === 'ja' ? '公式日本語能力試験＆技能評価試験一覧' : language === 'si' ? 'ප්‍රමිතිගත ජපන් විභාග සහ ඇගයීම්' : language === 'ta' ? 'ஜப்பானிய தேர்வுகள் மற்றும் மதிப்பீடுகள்' : 'Standardized Japanese Examinations & Assessments'}
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              {language === 'ja' ? `${filteredExams.length} 件の試験情報を表示中` : language === 'si' ? `සම්පත් ${filteredExams.length} ක් පෙන්වයි` : language === 'ta' ? `${filteredExams.length} வளங்கள் காட்டப்படுகின்றன` : `Showing ${filteredExams.length} Resources`}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredExams.map(exam => (
              <ExamResourceCard key={exam.id} exam={exam} />
            ))}
          </div>
        </section>

        {/* SSW Prometric Skill Assessment Deep Dive Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center shrink-0 text-sky-600">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <div className="space-y-2 flex-1">
              <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                {language === 'ja' ? '特定技能職業評価フレームワーク' : language === 'si' ? 'වෘත්තීය ඇගයීම් රාමුව' : language === 'ta' ? 'தொழில் மதிப்பீட்டு கட்டமைப்பு' : 'Occupational Assessment Framework'}
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {t.sswSpecialTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.sswSpecialDesc}
              </p>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <p>
                  <strong>{language === 'ja' ? '検証済み Prometric 試験リソース：' : language === 'si' ? 'තහවුරු කළ Prometric විභාග මූලාශ්‍ර:' : language === 'ta' ? 'சரிபார்க்கப்பட்ட Prometric தேர்வு வளங்கள்:' : 'Verified Prometric Exam Resources:'}</strong>
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="https://share.google/CRH2CYSYcu6nlio5e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-900 underline font-semibold"
                  >
                    {language === 'ja' ? '公式 Prometric 試験リスト' : language === 'si' ? 'නිල Prometric විභාග ලැයිස්තුව' : language === 'ta' ? 'அதிகாரப்பூர்வ Prometric தேர்வு பட்டியல்' : 'Official Prometric Exam List'} <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-slate-300">|</span>
                  <a
                    href="https://share.google/uXXts35IqiTr2nFp1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-900 underline font-semibold"
                  >
                    {language === 'ja' ? '特定技能 農業技能測定試験 1号' : language === 'si' ? 'කෘෂිකාර්මික කුසලතා ඇගයීම් විභාගය 1 වන මට්ටම' : language === 'ta' ? 'விவசாய திறன் மதிப்பீட்டு தேர்வு நிலை 1' : 'Agriculture Skill Assessment Test Level 1'} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic leading-relaxed pt-1">
                {t.sswDisclaimer}
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: Announcements & Upcoming Events */}
        <div className="pt-6 border-t border-slate-200">
          <AnnouncementsSection />
        </div>

        {/* SECTION 6: Career Opportunities & Vacancies */}
        <div className="pt-6 border-t border-slate-200">
          <VacanciesSection />
        </div>

        {/* Inquiry Form Section */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
              {language === 'ja' ? '個別相談窓口' : language === 'si' ? 'සෘජු මඟපෙන්වීම් කවුළුව' : language === 'ta' ? 'நேரடி வழிகாட்டல் மையம்' : 'Direct Guidance Desk'}
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
              {language === 'ja' ? '日本の各種試験または大学進学について個別相談が必要ですか？' : language === 'si' ? 'ජපන් විභාග හෝ විශ්වවිද්‍යාල ප්‍රවේශය පිළිබඳ පෞද්ගලික උපදෙස් අවශ්‍යද?' : language === 'ta' ? 'ஜப்பானிய தேர்வுகள் அல்லது பல்கலைக்கழக சேர்க்கை குறித்த ஆலோசனை தேவையா?' : 'Need Personal Advice on Japanese Exams or University Admissions?'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              {language === 'ja'
                ? '以下のフォームよりお問い合わせください。専任の日本語教育コーディネーターが開講日程、試験期、出願手順をご案内します。'
                : language === 'si'
                ? 'ඔබගේ විමසීම පහතින් යොමු කරන්න. අපගේ ජපන් අධ්‍යාපන සම්බන්ධීකාරකවරුන් පන්ති කාලසටහන්, විභාග දින සහ ලියාපදිංචි පියවර පිළිබඳව ඔබට මඟපෙන්වනු ඇත.'
                : language === 'ta'
                ? 'உங்கள் வினவலை கீழே சமர்ப்பிக்கவும். எங்கள் ஒருங்கிணைப்பாளர்கள் வகுப்பு அட்டவணைகள் மற்றும் தேர்வு வழிகாட்டலுடன் உங்களை தொடர்புகொள்வார்கள்.'
                : 'Submit your inquiry below. Our Japanese education coordinators will contact you with batch schedules, exam dates, and registration steps.'}
            </p>
          </div>

          <InquiryForm
            id="exams-inquiry"
            title={language === 'ja' ? '日本留学・試験個別カウンセリング' : language === 'si' ? 'ජපන් අධ්‍යාපන උපදේශනය' : language === 'ta' ? 'ஜப்பானிய கல்வி ஆலோசனை' : 'Japanese Education Consultation'}
            subtitle={language === 'ja' ? 'GlobeLink Let\'s Go Japan 専門スタッフが公式試験情報や受講クラスをご案内します。' : language === 'si' ? 'තහවුරු කළ විභාග මඟපෙන්වීම සහ පන්ති කාලසටහන් සඳහා GlobeLink Let\'s Go Japan සම්බන්ධීකාරකවරුන් සමඟ සම්බන්ධ වන්න.' : language === 'ta' ? 'தேர்வு வழிகாட்டல் மற்றும் வகுப்பு அட்டவணைகளுக்கு GlobeLink இன் Let\'s Go Japan ஒருங்கிணைப்பாளர்களுடன் இணையுங்கள்.' : 'Connect with GlobeLink\'s Let\'s Go Japan coordinators for verified exam guidance and class schedules.'}
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </section>
      </div>
    </div>
  );
};
