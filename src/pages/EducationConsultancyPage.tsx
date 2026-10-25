import React from 'react';
import {
  GraduationCap,
  FileCheck,
  Search,
  Award,
  Languages,
  CalendarCheck,
  Building,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface EducationConsultancyPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const EducationConsultancyPage: React.FC<EducationConsultancyPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const tEdu = t.education;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title={tEdu.pageTitle}
        description={tEdu.pageSubtitle}
        canonicalPath="/education-consultancy"
        breadcrumbs={[
          { name: t.nav.home, path: '/' },
          { name: tEdu.pageTitle, path: '/education-consultancy' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: tEdu.pageTitle }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 block">
              {tEdu.badge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {tEdu.pageTitle}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {tEdu.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {tEdu.overviewTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {tEdu.overviewDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {tEdu.feature1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {tEdu.feature1Desc}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {tEdu.feature2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {tEdu.feature2Desc}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {tEdu.feature3Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {tEdu.feature3Desc}
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {tEdu.feature4Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {tEdu.feature4Desc}
              </p>
            </div>

            {/* Pillar 5 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {language === 'ja' ? '奨学金・学費免除情報の精査' : language === 'si' ? 'ශිෂ්‍යත්ව සහ ගාස්තු සහන පිළිබඳ සත්‍ය තොරතුරු' : language === 'ta' ? 'உண்மையான புலமைப்பரிசில் மற்றும் கட்டண சலுகைகள்' : 'Verified Scholarship Information'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ja'
                  ? '成績優秀者向けの授業料減免、JASSO奨学金、提携校の特別免除枠に関する正確な情報をご提供します。非現実的な100%支給保証等の誇大広告は行いません。'
                  : language === 'si'
                  ? 'දක්ෂතා මත පදනම් වූ පාඨමාලා ගාස්තු සහන, JASSO ශිෂ්‍යත්ව සහ ආයතනික ගාස්තු නිදහස් කිරීම් පිළිබඳ විනිවිදභාවයෙන් යුතු තොරතුරු. ව්‍යාජ ශිෂ්‍යත්ව පොරොන්දු අපි ලබා නොදෙමු.'
                  : language === 'ta'
                  ? 'தகுதி அடிப்படையிலான கட்டணக் குறைப்பு, JASSO புலமைப்பரிசில்கள் பற்றிய வெளிப்படையான தகவல்கள். போலி உத்தரவாதங்களை நாங்கள் வழங்குவதில்லை.'
                  : 'Transparent information regarding genuine merit-based tuition reductions, JASSO scholarships, and institutional fee waivers. We never sell or fabricate scholarship guarantees.'}
              </p>
            </div>

            {/* Pillar 6 */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {language === 'ja' ? '渡航前オリエンテーション＆生活立上げ支援' : language === 'si' ? 'පිටත්වීමට පෙර සහ ළඟාවීමෙන් පසු මඟපෙන්වීම' : language === 'ta' ? 'புறப்படுவதற்கு முந்தைய மற்றும் வருகை வழிகாட்டல்' : 'Pre-Departure & Arrival Orientation'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ja'
                  ? '在留カード受取、区役所での住民登録、国民健康保険加入、銀行口座開設、資格外活動許可（週28時間以内のアルバイト許可）の申請手順を丁寧に案内します。'
                  : language === 'si'
                  ? 'ජපානයට ගිය පසු නේවාසික ලියාපදිංචිය, ජාතික සෞඛ්‍ය රක්ෂණය, බැංකු ගිණුම් විවෘත කිරීම සහ නීත්‍යානුකූල අර්ධකාලීන රැකියා අවසරපත් (Shikakugai Katsudo) පිළිබඳ මඟපෙන්වීම.'
                  : language === 'ta'
                  ? 'ஜப்பானில் வசிப்பிடப் பதிவு, தேசிய சுகாதார காப்பீடு, வங்கி கணக்கு தொடங்குதல் மற்றும் பகுதி நேர வேலை அனுமதி (வாரம் 28 மணி நேரம்) பற்றிய வழிகாட்டல்.'
                  : 'Guidance on Japanese student residence registration, National Health Insurance (Kokumin Kenko Hoken), bank account opening, and legal part-time work permit (Shikakugai Katsudo).'}
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
                {language === 'ja' ? '語学力が第一の関門です' : language === 'si' ? 'භාෂා ප්‍රවීණතාවය පළමු අවශ්‍යතාවයයි' : language === 'ta' ? 'மொழித் திறன் முதன்மையான தேவையாகும்' : 'Language Is The First Gate'}
              </span>
              <h3 className="text-2xl font-bold text-white">
                {language === 'ja' ? '2026年 / 2027年期の日本留学をお考えですか？' : language === 'si' ? '2026 / 2027 වාර සඳහා ජපානයේ අධ්‍යාපනය සැලසුම් කරනවාද?' : language === 'ta' ? '2026 / 2027 சேர்க்கைகளில் ஜப்பானில் படிக்க திட்டமிடுகிறீர்களா?' : 'Planning to Study in Japan for 2026 / 2027 Intakes?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {language === 'ja'
                  ? '日本の出入国在留管理庁では、最低でも JLPT N5 / NAT-TEST 5Q または150時間以上の公式学習証明書が厳格に求められます。Let\'s Go Japan の体系的な対策クラスをご活用ください。'
                  : language === 'si'
                  ? 'ජපන් ආගමන විගමන දෙපාර්තමේන්තුව (Immigration Services Agency) මඟින් JLPT N5 / NAT-TEST 5Q හෝ පැය 150ක නිල සහතිකයක් අනිවාර්ය කර ඇත. අපගේ Let\'s Go Japan පන්ති සමඟ එක්වන්න.'
                  : language === 'ta'
                  ? 'ஜப்பானிய குடிவரவுத் துறை குறைந்தது JLPT N5 / NAT-TEST 5Q அல்லது 150 மணிநேர மொழிச் சான்றிதழை கண்டிப்பாக எதிர்பார்க்கிறது. Let\'s Go Japan வகுப்புகளை ஆராயுங்கள்.'
                  : 'Japanese immigration strictly requires a minimum of JLPT N5 / NAT-TEST 5Q or a certified 150-hour Japanese language certificate. Explore our structured Let\'s Go Japan batches.'}
              </p>
            </div>
            <button
              onClick={() => onNavigate('lets-go-japan')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shrink-0 transition-colors"
            >
              <span>{t.nav.letsGoJapan}</span>
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
            title={language === 'ja' ? '留学カウンセリングの予約' : language === 'si' ? 'අධ්‍යාපනික උපදේශනයක් වෙන්කරවා ගන්න' : language === 'ta' ? 'கல்வி ஆலோசனை அமர்வை பதிவு செய்யுங்கள்' : 'Book an Education Consultation'}
            subtitle={language === 'ja' ? '学歴・希望進路を専門カウンセラーが査定し、確実で透明性の高い進学ルートをご提案します。' : language === 'si' ? 'අපගේ උපදේශකවරුන් ඔබේ අධ්‍යාපන පසුබිම ඇගයීමට ලක්කර පැහැදිලි හා තහවුරු කළ මඟපෙන්වීමක් ලබාදෙනු ඇත.' : language === 'ta' ? 'எங்கள் ஆலோசகர்கள் உங்கள் கல்வித் தகுதியை மதிப்பீடு செய்து தெளிவான வழிகாட்டலை வழங்குவார்கள்.' : 'Let our consultants evaluate your academic profile and provide clear, verified admission pathways.'}
            initialService="Higher Education Abroad"
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};

