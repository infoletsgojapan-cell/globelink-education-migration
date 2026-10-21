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
        title="Japanese Exams & Registration Resource Centre | GlobeLink Sri Lanka"
        description="Comprehensive official examination guidelines, EJU Japanese university admission, JLPT, Prometric SSW Agriculture, NAT-TEST, JFT-Basic, and exam registration resources."
        canonicalPath="/japanese-exams"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: "Let's Go Japan", path: '/lets-go-japan' },
          { name: 'Japanese Exams & Registration', path: '/japanese-exams' }
        ]}
      />

      <Breadcrumbs
        items={[
          { name: "Let's Go Japan", pageId: 'lets-go-japan' },
          { name: 'Japanese Exams & Registration' }
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
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> EJU University Admission
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> Prometric SSW (Agriculture & Skills)
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
                'Hello GlobeLink! I want to ask for guidance regarding Japanese examination registrations and batch schedules.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shrink-0 shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask About Exam Registration</span>
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
                Specialized University Preparation Division
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
                  <span>Official University Entrance Reference</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
                    'Hello GlobeLink! I want to ask about EJU examination preparation and Japanese university entrance requirements.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask About EJU Preparation</span>
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
                      Upcoming Examination &amp; Registration Schedule
                    </h2>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      Live Dynamic Schedule
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Official test dates and registration deadlines managed by GlobeLink Let's Go Japan coordinators
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
                        <span className="text-slate-500">Exam Date:</span>
                        <span className="font-semibold text-slate-900">{exam.exam_date}</span>
                      </div>
                    )}

                    {exam.registration_deadline && (
                      <div className="flex items-center justify-between text-rose-700">
                        <span className="font-medium">Registration:</span>
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
                        <span>Official Registration Portal</span>
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
              Standardized Japanese Examinations &amp; Assessments
            </h2>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredExams.length} Resources
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
                Occupational Assessment Framework
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                {t.sswSpecialTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.sswSpecialDesc}
              </p>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
                <p>
                  <strong>Verified Prometric Exam Resources:</strong>
                </p>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="https://share.google/CRH2CYSYcu6nlio5e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-900 underline font-semibold"
                  >
                    Official Prometric Exam List <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-slate-300">|</span>
                  <a
                    href="https://share.google/uXXts35IqiTr2nFp1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-700 hover:text-sky-900 underline font-semibold"
                  >
                    Agriculture Skill Assessment Test Level 1 <ExternalLink className="w-3 h-3" />
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
              Direct Guidance Desk
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
              Need Personal Advice on Japanese Exams or University Admissions?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Submit your inquiry below. Our Japanese education coordinators will contact you with batch schedules, exam dates, and registration steps.
            </p>
          </div>

          <InquiryForm
            id="exams-inquiry"
            title="Japanese Education Consultation"
            subtitle="Connect with GlobeLink's Let's Go Japan coordinators for verified exam guidance and class schedules."
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </section>
      </div>
    </div>
  );
};
