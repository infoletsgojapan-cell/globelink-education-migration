import React, { useState } from 'react';
import {
  Languages,
  BookOpen,
  Calendar,
  Clock,
  Laptop,
  CheckCircle2,
  FileCheck2,
  MessageCircle,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PageId, JapaneseCourse } from '../types';
import { COMPANY_INFO } from '../data/company';
import { JAPANESE_COURSES, JAPAN_ONLINE_LEARNING_FEATURES } from '../data/courses';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { getLocalizedCourse, getLocalizedLearningFeatures } from '../utils/localizedContent';

interface LetsGoJapanPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const LetsGoJapanPage: React.FC<LetsGoJapanPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].letsGoJapan;
  const tCourses = TRANSLATIONS[language].courses;
  const tExams = TRANSLATIONS[language].exams;

  const [selectedCourse, setSelectedCourse] = useState<JapaneseCourse | null>(null);

  const getWhatsAppCourseUrl = (course: JapaneseCourse) => {
    const loc = getLocalizedCourse(course, language);
    const text = `Hello GlobeLink / Let's Go Japan! I am interested in enrolling in the ${loc.title} (${course.code}). Please share current batch start dates, timetable, and registration details.`;
    return `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title="Let's Go Japan | Japanese Language Classes & Education Division"
        description="Let's Go Japan by GlobeLink: JLPT N5, N4, N3, JFT-Basic, NAT-TEST, Kanji mastery, and spoken Japanese classes for Sri Lankan students and SSW candidates."
        canonicalPath="/lets-go-japan"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: "Let's Go Japan", path: '/lets-go-japan' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: "Let's Go Japan" }]}
        onNavigate={onNavigate}
      />

      {/* Hero Banner with Japanese Aesthetic Touch */}
      <section className="bg-slate-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-950/80 border border-rose-800/80 rounded-full text-xs font-bold text-rose-300">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>{t.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.pageTitle}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {t.pageSubtitle}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400" /> JLPT N5, N4, N3
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400" /> JFT-Basic (SSW)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400" /> NAT-TEST (5Q / 4Q / 3Q)
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-400" /> Live Interactive Batches
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Japanese Examination & University Entrance Resource Centre Announcement Bar */}
      <section className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white py-4 px-4 border-b border-rose-900/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <p className="text-slate-200">
              <strong className="text-white">
                {language === 'ja'
                  ? '公式試験情報センター:'
                  : language === 'si'
                  ? 'ජපන් විභාග සහ ලියාපදිංචි මධ්‍යස්ථානය:'
                  : language === 'ta'
                  ? 'ஜப்பானிய தேர்வுகள் மற்றும் பதிவு மையம்:'
                  : 'Japanese Exams & Registration Centre:'}
              </strong>{' '}
              {tExams.pageSubtitle}
            </p>
          </div>
          <button
            onClick={() => onNavigate('japanese-exams')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shrink-0 transition-colors shadow-2xs"
          >
            <span>{tExams.viewOfficial}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Conflicting Information Notice Banner */}
      <section className="bg-amber-50 border-b border-amber-200 py-3 px-4 text-xs text-amber-900">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>
              {language === 'ja'
                ? '出願要件・認証に関する注意:'
                : language === 'si'
                ? 'විශ්වාසනීය තහවුරු කිරීමේ නිවේදනය:'
                : language === 'ta'
                ? 'சரிபார்ப்பு அறிவிப்பு:'
                : 'Client Verification Notice:'}
            </strong>{' '}
            {COMPANY_INFO.disclaimers.clientVerificationNotice}
          </p>
        </div>
      </section>

      {/* Course Catalog Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              {tCourses.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              {tCourses.pageTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {tCourses.pageSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {JAPANESE_COURSES.map(course => {
              const locCourse = getLocalizedCourse(course, language);
              return (
                <div
                  key={course.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Card Header */}
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="font-mono font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                        {locCourse.code}
                      </span>
                      <span className="text-slate-500 font-medium">
                        {locCourse.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {locCourse.title}
                    </h3>

                    {locCourse.japaneseTitle && (
                      <p className="text-xs font-medium text-rose-600 mt-1 mb-3">
                        {locCourse.japaneseTitle}
                      </p>
                    )}

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {locCourse.targetAudience}
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                      {locCourse.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Meta Specs */}
                    <div className="bg-slate-50 rounded-xl p-3 space-y-1.5 text-xs text-slate-600 border border-slate-100">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" /> {tCourses.durationLabel}
                        </span>
                        <span className="font-semibold text-slate-900">{locCourse.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" /> {tCourses.hoursLabel}
                        </span>
                        <span className="font-semibold text-slate-900">{locCourse.hours}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 flex items-center gap-1">
                          <Laptop className="w-3 h-3 text-slate-400" /> {tCourses.modeLabel}
                        </span>
                        <span className="font-semibold text-sky-700">{locCourse.mode}</span>
                      </div>
                      <div className="flex items-center justify-between pt-1 border-t border-slate-200/60">
                        <span className="text-slate-500 font-medium">{tCourses.tuitionFeeLabel}</span>
                        <span className="font-bold text-slate-900">{locCourse.feeLkr.split('(')[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-0 space-y-2">
                    <a
                      href={getWhatsAppCourseUrl(course)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{tCourses.enrollWhatsApp}</span>
                    </a>

                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="w-full py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs text-center transition-colors"
                    >
                      {tCourses.viewSyllabus}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Online Learning Information Showcase */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">
              {language === 'ja' ? 'デジタル学習エコシステム' : language === 'si' ? 'ඩිජිටල් ඉගෙනුම් පද්ධතිය' : language === 'ta' ? 'டிஜிட்டல் கற்றல் அமைப்பு' : 'Digital Learning Ecosystem'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              {language === 'ja' ? 'Let\'s Go Japan のオンライン学習の特長' : language === 'si' ? 'Let\'s Go Japan මාර්ගගත ඉගෙනුම ක්‍රියාත්මක වන ආකාරය' : language === 'ta' ? 'Let\'s Go Japan ஆன்லைன் கற்றல் முறை' : 'How Online Learning Works at Let\'s Go Japan'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
              {language === 'ja' ? 'スリランカ全土および海外にお住まいの方へ、日本の高品質な日本語指導をデバイスへお届けします。' : language === 'si' ? 'ශ්‍රී ලංකාවේ හෝ විදේශයක සිටියත්, උසස් ජපන් භාෂා ඉගෙනුම ඔබගේ පරිගණකයට හෝ දුරකථනයට ගෙන එනු ලැබේ.' : language === 'ta' ? 'இலங்கையில் அல்லது வெளிநாட்டில் எங்கிருந்தாலும் உயர்தர ஜப்பானிய மொழிக் கல்வியை உங்கள் சாதனத்திற்கே கொண்டு வருகிறோம்.' : 'We bring high-touch Japanese pedagogy straight to your device, wherever you reside in Sri Lanka or abroad.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getLocalizedLearningFeatures(language).map((feature, idx) => (
              <div key={idx} className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700">
                <div className="w-9 h-9 rounded-xl bg-sky-950 text-sky-400 border border-sky-800/80 flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">{feature.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}

            <div className="bg-gradient-to-br from-rose-950/70 to-slate-900 p-6 rounded-2xl border border-rose-800/60 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 rounded-xl bg-rose-900 text-rose-300 flex items-center justify-center mb-3">
                  <Languages className="w-4 h-4" />
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">
                  {language === 'ja' ? '公式 JLPT & NAT-TEST 出願サポート' : language === 'si' ? 'නිල JLPT සහ NAT විභාග ලියාපදිංචිය' : language === 'ta' ? 'அதிகாரப்பூர்வ JLPT & NAT பதிவு' : 'Official JLPT & NAT Registration'}
                </h3>
                <p className="text-xs text-rose-200 leading-relaxed">
                  {language === 'ja' ? 'コロンボでの公式試験申込み期間に合わせ、受講生の願書出願を丁寧にサポートします。' : language === 'si' ? 'කොළඹ පැවැත්වෙන නිල විභාග ලියාපදිංචි වාරයන්හිදී ගැටලුවකින් තොරව අයදුම් කිරීමට අප සිසුන්ට මඟපෙන්වයි.' : language === 'ta' ? 'கொழும்பில் நடைபெறும் அதிகாரப்பூர்வ தேர்வு சுழற்சிகளில் குழப்பமின்றி பதிவு செய்ய மாணவர்களுக்கு வழிகாட்டுகிறோம்.' : 'We guide students through official Japanese embassy and test center registration cycles in Colombo with zero confusion.'}
                </p>
              </div>
              <div className="pt-4">
                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hello GlobeLink, I need assistance registering for the upcoming JLPT / NAT-TEST examination.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-rose-300 hover:text-white inline-flex items-center gap-1"
                >
                  {language === 'ja' ? '試験サポート相談デスク →' : language === 'si' ? 'විභාග සහය කවුළුව →' : language === 'ta' ? 'தேர்வு உதவி மையம் →' : 'Exam Assistance Desk →'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (() => {
        const locSelected = getLocalizedCourse(selectedCourse, language);
        return (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="p-6 bg-slate-900 text-white flex items-start justify-between">
                <div>
                  <span className="text-xs font-mono text-sky-400">{selectedCourse.code} &middot; {locSelected.level}</span>
                  <h3 className="text-xl font-bold text-white mt-1">{locSelected.title}</h3>
                  {selectedCourse.japaneseTitle && language !== 'ja' && (
                    <p className="text-xs text-rose-400 font-medium">{selectedCourse.japaneseTitle}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-slate-400 hover:text-white p-1 rounded-md"
                >
                  &times;
                </button>
              </div>

              <div className="p-6 space-y-4 text-xs text-slate-700 max-h-[70vh] overflow-y-auto">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">{tCourses.courseDetailsModal}</h4>
                  <p className="text-slate-600 leading-relaxed">{locSelected.targetAudience}</p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{tCourses.durationLabel}:</span>
                    <span className="font-semibold text-slate-900">{locSelected.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{tCourses.hoursLabel}:</span>
                    <span className="font-semibold text-slate-900">{locSelected.hours}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{tCourses.scheduleLabel}:</span>
                    <span className="font-semibold text-slate-900">{locSelected.schedule}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{tCourses.tuitionFeeLabel}:</span>
                    <span className="font-semibold text-slate-900">{locSelected.feeLkr}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{tCourses.detailedSyllabus}</h4>
                  <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                    {locSelected.syllabusOverview.map((item, idx) => (
                      <li key={idx} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{tCourses.keyHighlightsLabel}</h4>
                  <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
                    {locSelected.highlights.map((hl, idx) => (
                      <li key={idx} className="leading-relaxed">{hl}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 text-[11px]">
                  {language === 'ja'
                    ? '※ 各期の開講日程・学費は募集要項に準じます。WhatsApp窓口より最新の空席状況をご確認の上、お手続きください。'
                    : language === 'si'
                    ? '* පන්ති වේලාවන් සහ ගාස්තු එක් එක් කණ්ඩායම අනුව වෙනස් විය හැක. ඉදිරි කණ්ඩායමට ආසනයක් වෙන්කර ගැනීමට WhatsApp හරහා තහවුරු කරගන්න.'
                    : language === 'ta'
                    ? '* வகுப்பு அட்டவணைகள் மற்றும் கட்டணங்கள் சேர்க்கைக்கேற்ப மாறுபடலாம். அடுத்த குழுவில் உங்கள் இடத்தை உறுதிப்படுத்த WhatsApp இல் தொடர்பு கொள்ளவும்.'
                    : '* Schedules and fees are editable per intake. Direct WhatsApp confirmation ensures you are enrolled in the next upcoming batch.'}
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-4 py-2 bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors"
                >
                  {tCourses.close}
                </button>
                <a
                  href={getWhatsAppCourseUrl(selectedCourse)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {tCourses.enrollWhatsApp}
                </a>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Inquiry Form */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="letsgojapan-inquiry"
            title={language === 'ja' ? 'Let\'s Go Japan 受講申込み・学習相談' : language === 'si' ? 'Let\'s Go Japan පන්ති සඳහා ලියාපදිංචි වන්න' : language === 'ta' ? 'Let\'s Go Japan வகுப்புகளில் இணையுங்கள்' : 'Enroll in Let\'s Go Japan Classes'}
            subtitle={language === 'ja' ? 'あなたの学習目標とご希望の受講時間帯を専任コーディネーターへお知らせください。' : language === 'si' ? 'ඔබගේ භාෂා ඉලක්ක සහ කැමති වේලාවන් අපගේ අධ්‍යයන සම්බන්ධීකාරකවරුන් වෙත යොමු කරන්න.' : language === 'ta' ? 'உங்கள் மொழி கற்றல் இலக்குகள் மற்றும் விருப்பமான நேரங்களை எங்கள் ஒருங்கிணைப்பாளர்களுக்கு அனுப்பவும்.' : 'Send your language goals and preferred batch timings to our academic coordinators.'}
            initialDestination="Japan"
            initialService="Let's Go Japan Language Courses"
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};
