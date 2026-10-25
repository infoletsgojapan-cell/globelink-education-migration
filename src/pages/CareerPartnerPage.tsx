import React from 'react';
import {
  Briefcase,
  CheckCircle,
  ShieldAlert,
  MessageCircle,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { InterviewPracticeLibrary } from '../components/career/InterviewPracticeLibrary';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../data/translations';
import { getLocalizedCareerModules } from '../utils/localizedContent';

interface CareerPartnerPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const CareerPartnerPage: React.FC<CareerPartnerPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const tCareer = t.careerPartner;
  const modules = getLocalizedCareerModules(language);

  const careerGuidanceWhatsAppUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    language === 'ja'
      ? 'GlobeLink Career Partner プログラムおよびキャリア相談についてお伺いします。'
      : language === 'si'
      ? 'GlobeLink Career Partner වැඩසටහන සහ වෘත්තීය මඟපෙන්වීම පිළිබඳව විමසීමට කැමැත්තෙමි.'
      : language === 'ta'
      ? 'GlobeLink Career Partner திட்டம் மற்றும் தொழில் வழிகாட்டல் பற்றி அறிய விரும்புகிறேன்.'
      : 'Hello GlobeLink, I would like to ask about the GlobeLink Career Partner Program and career guidance.'
  )}`;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title={tCareer.pageTitle}
        description={tCareer.pageSubtitle}
        canonicalPath="/career-partner"
        breadcrumbs={[
          { name: t.nav.home, path: '/' },
          { name: tCareer.pageTitle, path: '/career-partner' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: tCareer.pageTitle }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-950/80 border border-sky-800/80 rounded-full text-xs font-bold text-sky-400">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
              <span>{tCareer.badge}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {language === 'ja' ? (
                <>未来を築き、<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-white">可能性を世界へ広げる。</span></>
              ) : language === 'si' ? (
                <>ඔබගේ අනාගතය ගොඩනඟන්න. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-white">දැනුම හා සීමාවන් පුළුල් කරන්න.</span></>
              ) : language === 'ta' ? (
                <>உங்கள் எதிர்காலத்தை உருவாக்குங்கள். <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-white">எல்லைகளை விரிவுபடுத்துங்கள்.</span></>
              ) : (
                <>Build Your Future. <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-white">Expand Your Boundaries.</span></>
              )}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {tCareer.pageSubtitle}
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="#interview-qa-section"
                className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs shadow-md transition-colors inline-flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-slate-950" />
                <span>{language === 'ja' ? '面接質問＆模範回答ライブラリ' : language === 'si' ? 'සම්මුඛ පරීක්ෂණ Q&A පුස්තකාලය' : language === 'ta' ? 'நேர்காணல் வினா-விடை நூலகம்' : 'Interview Q&A Library'}</span>
              </a>

              <a
                href={careerGuidanceWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>{language === 'ja' ? 'WhatsAppでキャリア相談' : language === 'si' ? 'වෘත්තීය මඟපෙන්වීම විමසන්න' : language === 'ta' ? 'தொழில் வழிகாட்டல் பற்றி கேளுங்கள்' : 'Ask About Career Guidance'}</span>
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
            <strong>{language === 'ja' ? '法令順守に関する重要事項：' : language === 'si' ? 'අනිවාර්ය නීතිමය නිවේදනය:' : language === 'ta' ? 'முக்கிய சட்ட அறிவிப்பு:' : 'Mandatory Advisory Notice:'}</strong> {tCareer.disclaimerNotice}
          </p>
        </div>
      </section>

      {/* Core Philosophy & Client Brief Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold text-sky-800 uppercase tracking-widest block">
                {language === 'ja' ? '国際基準のプロフェッショナル人材育成' : language === 'si' ? 'වෘත්තීය ජාත්‍යන්තර මානව සම්පත් සංවර්ධනය' : language === 'ta' ? 'சர்வதேச பணியாளர் திறன் மேம்பாடு' : 'Professional International Workforce Development'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {tCareer.overviewTitle}
              </h2>

              {/* Exact Provided Content */}
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-sky-600 text-slate-800 space-y-4 shadow-xs">
                <p className="text-base sm:text-lg font-medium text-slate-900 leading-relaxed">
                  {tCareer.overviewDesc}
                </p>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
                <p>
                  {language === 'ja'
                    ? 'グローバルな採用基準では厳格な職業規律が求められます。ドバイやUAE向けには定量的成果を示したATS最適化英文CVが必要であり、日本の企業では伝統的な履歴書・職務経歴書と「報連相」の徹底が期待されます。'
                    : language === 'si'
                    ? 'ගෝලීය බඳවාගැනීම් ප්‍රමිතීන් දැඩි වෘත්තීය විනයක් අපේක්ෂා කරයි. ඩුබායි සහ එක්සත් අරාබි එමීර් රාජ්‍යය සඳහා ATS-ප්‍රශස්ත CV අවශ්‍ය වන අතර, ජපානයේ සේවායෝජකයන් සම්ප්‍රදායික ද්විත්ව ලියකියවිලි (රිරෙකිෂෝ සහ ෂොකුමු-කෙයිරෙකිෂෝ) සහ කාර්යාලීය විනය (Hou-Ren-Sou) බලාපොරොත්තු වේ.'
                    : language === 'ta'
                    ? 'சர்வதேச வேலைவாய்ப்பு தரநிலைகளுக்கு தொழில்முறை ஒழுக்கம் அவசியம். துபாய்/யுஏஇ நாடுகளுக்கு ATS-உகந்த CV தேவைப்படுகிறது, அதேசமயம் ஜப்பானிய முதலாளிகள் பாரம்பரிய விண்ணப்பப் படிவங்களையும் (Rirekisho & Shokumu-Keirekisho) மற்றும் பணி ஒழுக்கத்தையும் எதிர்பார்க்கிறார்கள்.'
                    : 'Global recruitment standards require strict professional discipline. Candidates targeting Dubai and the UAE need clean, quantitative ATS-optimized CVs, whereas employers in Japan expect traditional dual formats (Rirekisho & Shokumu-Keirekisho) along with demonstrated etiquette and the "Hou-Ren-Sou" communication discipline.'}
                </p>
                <p>
                  {language === 'ja'
                    ? 'モルディブの高級リゾートでは、洗練された英語での対話力、異文化共感力、おもてなしの精神が重視されます。キャリアパートナープログラムは、個別メンタリングと模擬面接を通じてこの架け橋となります。'
                    : language === 'si'
                    ? 'මාලදිවයිනේ සුඛෝපභෝගී හෝටල් ක්ෂේත්‍රය තුළ කථන ඉංග්‍රීසි, ආගන්තුක සත්කාරය සහ සංස්කෘතික අවබෝධය අගය කරයි. අපගේ වැඩසටහන මඟින් මේ සඳහා අවශ්‍ය නිසි පුහුණුව ලබාදේ.'
                    : language === 'ta'
                    ? 'மாலத்தீவு சொகுசு விடுதிகள் தகவல் தொடர்புத் திறன், கலாச்சார புரிதல் மற்றும் விருந்தோம்பல் பண்புகளை முதன்மையாகக் கொண்டுள்ளன. எங்கள் திட்டம் இதற்கான கட்டமைக்கப்பட்ட பயிற்சிகளை வழங்குகிறது.'
                    : 'In the Maldives, luxury resorts prioritize conversational poise, cross-cultural empathy, and guest hospitality acumen. The Career Partner Program bridges this gap with structured mentoring and interview drills.'}
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
                  <h3 className="text-base font-bold text-white">
                    {language === 'ja' ? 'キャリア個別プロファイル評価' : language === 'si' ? 'වෘත්තීය පැතිකඩ ඇගයීම' : language === 'ta' ? 'தொழில் சுயவிவர மதிப்பீடு' : 'Career Profile Assessment'}
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    {language === 'ja' ? 'GlobeLink 専門カウンセラーによる1対1相談' : language === 'si' ? 'GlobeLink උපදේශකවරුන් සමඟ පුද්ගලික සාකච්ඡාව' : language === 'ta' ? 'GlobeLink ஆலோசகர்களுடன் நேரடி உரையாடல்' : 'One-on-one consultation with GlobeLink mentors'}
                  </p>
                </div>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{language === 'ja' ? '学歴・職歴・語学レベルの総合的査定' : language === 'si' ? 'අධ්‍යාපනික සහ වෘත්තීය සුදුසුකම් පූර්ණ ඇගයීම' : language === 'ta' ? 'கல்வி மற்றும் தொழில் தகுதிகளின் முழுமையான மதிப்பீடு' : 'Comprehensive evaluation of academic & vocational credentials'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{language === 'ja' ? '湾岸向けおよび日本向けレジュメの最適化' : language === 'si' ? 'ගල්ෆ් සහ ජපන් රැකියා සඳහා CV සකස් කිරීම' : language === 'ta' ? 'வளைகுடா மற்றும் ஜப்பான் தேவைகளுக்கு ஏற்ப CV தயாரித்தல்' : 'Gulf & Japanese resume formatting and keyword alignment'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{language === 'ja' ? 'フィードバック付きオンライン模擬面接' : language === 'si' ? 'ප්‍රතිපෝෂණ සහිත ආදර්ශ මාර්ගගත සම්මුඛ පරීක්ෂණ' : language === 'ta' ? 'வழிகாட்டலுடன் கூடிய மாதிரி இணைய நேர்காணல்' : 'Mock virtual interview drills with constructive critique'}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{language === 'ja' ? '渡航前ビジネスマナー＆異文化適応オリエンテーション' : language === 'si' ? 'විදේශගත වීමට පෙර කාර්යාලීය හැසිරීම් සහ සංස්කෘතික හුරුව' : language === 'ta' ? 'வெளிநாடு செல்வதற்கு முன் பணியிட நடத்தை மற்றும் கலாச்சார பயிற்சி' : 'Pre-departure workplace manners & cultural adaptation'}</span>
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
                  <span>{language === 'ja' ? 'WhatsAppでキャリア相談' : language === 'si' ? 'වෘත්තීය මඟපෙන්වීම විමසන්න' : language === 'ta' ? 'தொழில் வழிகாட்டல் பற்றி கேளுங்கள்' : 'Ask About Career Guidance'}</span>
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
              {language === 'ja' ? '中核トレーニングの柱' : language === 'si' ? 'ප්‍රධාන පුහුණු අංශ' : language === 'ta' ? 'முக்கிய பயிற்சித் தூண்கள்' : 'Core Training Pillars'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              {language === 'ja' ? 'キャリア準備リソース＆研修モジュール' : language === 'si' ? 'වෘත්තීය සූදානම් කිරීමේ සම්පත් සහ මොඩියුල' : language === 'ta' ? 'தொழில் தயார்படுத்தல் வளங்கள் மற்றும் தொகுதிகள்' : 'Career Preparation Resources & Modules'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === 'ja'
                ? '実用的なCV作成、プロフェッショナルなコミュニケーション、国際面接のテクニックを身につけます。'
                : language === 'si'
                ? 'ප්‍රායෝගික CV සැකසීම, වෘත්තීය සන්නිවේදනය සහ ජාත්‍යන්තර සම්මුඛ පරීක්ෂණ ක්‍රමවේද පිළිබඳව පුහුණු කිරීම.'
                : language === 'ta'
                ? 'நடைமுறை CV தயாரிப்பு, தொழில்முறை தகவல் தொடர்பு மற்றும் சர்வதேச நேர்காணல் நுட்பங்களை வழங்குதல்.'
                : 'Equipping Sri Lankan professionals with practical CV formatting, professional communication, and international interview techniques.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map(module => (
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
                      {language === 'ja' ? '主な重点実践項目：' : language === 'si' ? 'ප්‍රධාන ප්‍රායෝගික අංශ:' : language === 'ta' ? 'முக்கிய நடைமுறை பகுதிகள்:' : 'Key Practical Focus Areas:'}
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
                    <span>{language === 'ja' ? 'このモジュールについてWhatsAppで問い合わせる' : language === 'si' ? 'මෙම පුහුණු මොඩියුලය පිළිබඳව WhatsApp හරහා විමසන්න' : language === 'ta' ? 'இந்த தொகுதி பற்றி WhatsApp இல் விசாரிக்கவும்' : 'Inquire about this training module on WhatsApp'}</span>
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
            title={language === 'ja' ? 'キャリア個別相談・査定セッション予約' : language === 'si' ? 'වෘත්තීය මඟපෙන්වීම සහ ඇගයීමක් වෙන්කරවා ගන්න' : language === 'ta' ? 'தொழில் வழிகாட்டல் அமர்வை முன்பதிவு செய்யுங்கள்' : 'Book a Career Guidance & Assessment Session'}
            subtitle={language === 'ja' ? '職務経歴をお送りいただくことで、GlobeLink のアドバイザーより率直で客観的なアドバイスをお届けします。' : language === 'si' ? 'ඔබගේ වෘත්තීය පසුබිම ඉදිරිපත් කර GlobeLink උපදේශකවරුන්ගෙන් වටිනා මඟපෙන්වීමක් ලබාගන්න.' : language === 'ta' ? 'GlobeLink ஆலோசகர்களிடமிருந்து நேர்மையான கருத்துக்களைப் பெற உங்கள் தொழில் பின்னணியைச் சமர்ப்பிக்கவும்.' : 'Submit your career background to receive honest, structured feedback from GlobeLink career advisors.'}
            initialService="Your Career Partner Program"
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};

