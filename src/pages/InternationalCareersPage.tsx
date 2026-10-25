import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  FileText,
  Compass,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { PageId, Destination } from '../types';
import { COMPANY_INFO } from '../data/company';
import { DESTINATIONS } from '../data/destinations';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { getLocalizedDestination } from '../utils/localizedContent';

interface InternationalCareersPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const InternationalCareersPage: React.FC<InternationalCareersPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(DESTINATIONS[0]);

  const locSelected = selectedDestination ? getLocalizedDestination(selectedDestination, language) : null;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title={t.nav.destinations}
        description={language === 'ja' ? '日本、ドバイ、UAE、モルディブへの適正な教育・キャリア進出サポート。' : language === 'si' ? 'ජපානය, ඩුබායි, UAE සහ මාලදිවයින සඳහා නීත්‍යානුකූල අධ්‍යාපන සහ වෘත්තීය ගමන් මඟ.' : language === 'ta' ? 'ஜப்பான், துபாய், யுஏஇ மற்றும் மாலத்தீவுகளுக்கான கல்வி மற்றும் தொழில் வழிகாட்டல்.' : 'Explore legitimate career and education destinations in Japan, Dubai, the United Arab Emirates, and the Maldives with GlobeLink Consultants.'}
        canonicalPath="/international-careers"
        breadcrumbs={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.destinations, path: '/international-careers' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: t.nav.destinations }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
              {language === 'ja' ? '公的検証済みの進出国' : language === 'si' ? 'තහවුරු කළ ගමනාන්ත' : language === 'ta' ? 'சரிபார்க்கப்பட்ட நாடுகள்' : 'Verified Country Pathways'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {language === 'ja' ? '主要渡航先＆国際キャリア機会' : language === 'si' ? 'ජාත්‍යන්තර ගමනාන්ත සහ වෘත්තීය අවස්ථා' : language === 'ta' ? 'சர்வதேச நாடுகள் மற்றும் தொழில் வாய்ப்புகள்' : 'International Destinations & Career Opportunities'}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {language === 'ja'
                ? '国ごとに労働法規、語学要件、ビザ申請枠組みは大きく異なります。GlobeLink が各市場で適法かつ確実なサポートを提供します。'
                : language === 'si'
                ? 'සෑම රටකටම අනන්‍ය වූ රැකියා නීති, භාෂා අවශ්‍යතා සහ වීසා කාණ්ඩ පවතී. GlobeLink ඒ ඒ රටවල් සඳහා නීත්‍යානුකූලව මඟපෙන්වයි.'
                : language === 'ta'
                ? 'ஒவ்வொரு நாட்டிற்கும் தனித்துவமான தொழிலாளர் சட்டங்கள், மொழித் தேவைகள் மற்றும் விசா வகைகள் உள்ளன. GlobeLink நெறிமுறையான வழிகாட்டலை வழங்குகிறது.'
                : 'Every country maintains distinct labor regulations, language benchmarks, and visa entry pathways. Discover how GlobeLink supports candidates ethically in each market.'}
            </p>
          </div>
        </div>
      </section>

      {/* Explicit Destination Notice */}
      <section className="bg-sky-50 border-b border-sky-100 py-3.5 px-4 text-xs text-sky-900">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-2.5">
          <AlertCircle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong>{language === 'ja' ? '国別プログラムに関する注意事項：' : language === 'si' ? 'ගමනාන්ත තෝරාගැනීම පිළිබඳ නිවේදනය:' : language === 'ta' ? 'நாடுகள் தேர்வு பற்றிய அறிவிப்பு:' : 'Selective Destination Notice:'}</strong>{' '}
            {language === 'ja'
              ? 'すべてのプログラムや就労区分が全対象国で同一に適用されるわけではありません。各申請は受入国の出入国法規、本人の公的資格、提携機関の受入枠に基づきます。'
              : language === 'si'
              ? 'සියලුම වැඩසටහන් හෝ රැකියා කාණ්ඩ සෑම රටකටම එක හා සමානව අදාළ නොවේ. එක් එක් අයදුම්පත අදාළ රටේ නීතිරීති සහ සුදුසුකම් මත පදනම් වේ.'
              : language === 'ta'
              ? 'அனைத்து திட்டங்களும் அனைத்து நாடுகளுக்கும் ஒரே மாதிரியாக பொருந்தாது. விண்ணப்பதாரரின் தகுதிகள் மற்றும் அந்நாட்டின் சட்டங்களின்படியே விண்ணப்பங்கள் ஏற்றுக்கொள்ளப்படும்.'
              : 'We do not imply that every program, student visa, or work category is universally available for all destinations. Each application is contingent upon host country immigration regulations, verified qualifications, and authentic sponsor/employer quotas.'}
          </p>
        </div>
      </section>

      {/* Destination Cards Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              {language === 'ja' ? '国別ガイドを閲覧' : language === 'si' ? 'රටවල් පිළිබඳ විස්තර' : language === 'ta' ? 'நாடுகளின் வழிகாட்டல்' : 'Explore Country Guides'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              {language === 'ja' ? '進学・就労対象国を選択してください' : language === 'si' ? 'ජාත්‍යන්තර ගමනාන්තයක් තෝරන්න' : language === 'ta' ? 'ஒரு சர்வதேச நாட்டைத் தேர்ந்தெடுக்கவும்' : 'Select an International Destination'}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {language === 'ja'
                ? '国を選択すると、サポート内容、対応ビザ種別、法令遵守要件などの詳細情報をご確認いただけます。'
                : language === 'si'
                ? 'සවිස්තරාත්මක සේවාවන්, අදාළ වීසා කාණ්ඩ සහ නීතිමය කොන්දේසි පරීක්ෂා කිරීමට රටක් තෝරන්න.'
                : language === 'ta'
                ? 'விவரங்கள், விசா வகைகள் மற்றும் சட்ட வழிகாட்டல்களைப் பார்க்க ஒரு நாட்டைத் தேர்வு செய்யவும்.'
                : 'Click any country to review the detailed scope of services, visa categories, and immigration compliance requirements.'}
            </p>
          </div>

          {/* Destination Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {DESTINATIONS.map(dest => {
              const isSelected = selectedDestination?.id === dest.id;
              const tabLoc = getLocalizedDestination(dest, language);
              return (
                <button
                  key={dest.id}
                  onClick={() => setSelectedDestination(dest)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-sky-500'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="text-2xl">{dest.flagEmoji}</span>
                    {isSelected && <span className="w-2 h-2 rounded-full bg-sky-400"></span>}
                  </div>
                  <div>
                    <h3 className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                      {tabLoc.country}
                    </h3>
                    <p className={`text-[11px] line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {tabLoc.tagline.split('for')[1] || tabLoc.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Destination Full Detail View */}
          {selectedDestination && locSelected && (
            <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
                <img
                  src={selectedDestination.heroImage}
                  alt={`${locSelected.country} pathway`}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white max-w-3xl">
                  <span className="text-3xl mb-1 block">{selectedDestination.flagEmoji}</span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                    {locSelected.country}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 mt-1">
                    {locSelected.tagline}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-8">
                {/* Overview */}
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-2">
                    {language === 'ja' ? '国別概要＆市場動向' : language === 'si' ? 'ගමනාන්තය පිළිබඳ දළ විශ්ලේෂණය' : language === 'ta' ? 'நாட்டின் கண்ணோட்டம் மற்றும் சந்தை நிலவரம்' : 'Country Overview & Market Dynamics'}
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {locSelected.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Supported Services */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                      <Compass className="w-4 h-4 text-sky-600" />
                      {language === 'ja' ? `${locSelected.country} で提供可能なGlobeLinkサービス` : language === 'si' ? `${locSelected.country} සඳහා GlobeLink සේවාවන්` : language === 'ta' ? `${locSelected.country} க்கான GlobeLink சேவைகள்` : `GlobeLink Services Available for ${locSelected.country}`}
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {locSelected.servicesAvailable.map((srv, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visa Categories */}
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-sky-600" />
                      {language === 'ja' ? '対応ビザ・在留資格カテゴリー' : language === 'si' ? 'අදාළ වීසා කාණ්ඩ' : language === 'ta' ? 'பொருத்தமான விசா வகைகள்' : 'Relevant Visa Categories Supported'}
                    </h5>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {selectedDestination.visaCategoriesSupported.map((v, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span>{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h5 className="font-bold text-slate-900 text-sm mb-3">
                    {language === 'ja' ? '現地生活・就労の主な特徴' : language === 'si' ? 'ජීවත්වීම සහ රැකියාවේ ප්‍රධාන අංග' : language === 'ta' ? 'வாழ்வாதார மற்றும் வேலைவாய்ப்பின் முக்கிய அம்சங்கள்' : 'Key Living & Working Highlights'}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                    {locSelected.keyHighlights.map((hl, idx) => (
                      <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0"></span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legal & Regulatory Compliance Notice */}
                <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1">
                  <p className="font-bold text-amber-950 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-700" />
                    {language === 'ja' ? `${locSelected.country} に関する法令順守および検証事項` : language === 'si' ? `${locSelected.country} සඳහා නීතිමය තහවුරු කිරීම්` : language === 'ta' ? `${locSelected.country} க்கான சட்ட சரிபார்ப்பு` : `Regulatory & Compliance Verification for ${locSelected.country}`}
                  </p>
                  <p className="leading-relaxed">
                    {locSelected.complianceNotice}
                  </p>
                </div>

                {/* Action Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500">
                    {language === 'ja'
                      ? `${locSelected.country} への進出に関心がおありですか？専任デスクへ直接ご相談ください。`
                      : language === 'si'
                      ? `${locSelected.country} පිළිබඳව උනන්දුද? අපගේ උපදේශන කවුළුව සමඟ සෘජුව සම්බන්ධ වන්න.`
                      : language === 'ta'
                      ? `${locSelected.country} பற்றி மேலும் அறிய விரும்புகிறீர்களா? எங்கள் ஆலோசனை மையத்தை தொடர்பு கொள்ளவும்.`
                      : `Interested in ${locSelected.country}? Speak directly with our advisory desk.`}
                  </p>
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello GlobeLink, I am inquiring about education and career pathways in ${selectedDestination.country}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    <span>{language === 'ja' ? `${locSelected.country} についてWhatsAppで相談` : language === 'si' ? `${locSelected.country} ගැන WhatsApp හරහා විමසන්න` : language === 'ta' ? `${locSelected.country} பற்றி WhatsApp இல் கேளுங்கள்` : `Inquire about ${locSelected.country} on WhatsApp`}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12">
            <DisclaimerBanner />
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="destination-inquiry"
            title={language === 'ja' ? '渡航先別カウンセリング予約' : language === 'si' ? 'ගමනාන්ත උපදේශනයක් වෙන්කරවා ගන්න' : language === 'ta' ? 'நாடு சார்ந்த ஆலோசனையை பதிவு செய்யுங்கள்' : 'Book a Destination Consultation'}
            subtitle={language === 'ja' ? 'ご希望の国を選択し、現在の学歴や職歴をお知らせください。' : language === 'si' ? 'ඔබ කැමති රට තෝරා ඔබගේ වර්තමාන අධ්‍යාපන හෝ වෘත්තීය තොරතුරු යොමු කරන්න.' : language === 'ta' ? 'நீங்கள் விரும்பும் நாட்டைத் தேர்ந்தெடுத்து உங்கள் பின்னணியைக் குறிப்பிடவும்.' : 'Select your preferred country and describe your current educational or career background.'}
            initialDestination={selectedDestination?.country || 'Japan'}
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};

