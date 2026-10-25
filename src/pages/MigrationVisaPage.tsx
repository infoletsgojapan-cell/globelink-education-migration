import React from 'react';
import {
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Building,
  Scale
} from 'lucide-react';
import { PageId } from '../types';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { InquiryForm } from '../components/forms/InquiryForm';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface MigrationVisaPageProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const MigrationVisaPage: React.FC<MigrationVisaPageProps> = ({
  onNavigate,
  onOpenSupabaseModal
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const tVisa = t.migrationVisa;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title={tVisa.pageTitle}
        description={tVisa.pageSubtitle}
        canonicalPath="/migration-visa-support"
        breadcrumbs={[
          { name: t.nav.home, path: '/' },
          { name: tVisa.pageTitle, path: '/migration-visa-support' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: tVisa.pageTitle }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
              {tVisa.badge}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {tVisa.pageTitle}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {tVisa.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mandatory Boundary Banner */}
      <section className="bg-slate-950 text-slate-300 py-4 px-4 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3">
          <Scale className="w-5 h-5 text-sky-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="text-white">
              {language === 'ja' ? '公的権限に関する境界事項：' : language === 'si' ? 'බලතල පැහැදිලිව වෙන්කර හඳුනාගැනීම:' : language === 'ta' ? 'அதிகார வரம்புகள் பற்றிய தெளிவுபடுத்தல்:' : 'Clear Distinction of Authority:'}
            </strong>{' '}
            {tVisa.complianceNotice}
          </p>
        </div>
      </section>

      {/* Support Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest">
              {language === 'ja' ? 'サポート領域' : language === 'si' ? 'අප සිදුකරන සේවාවන්' : language === 'ta' ? 'எங்கள் சேவைகள்' : 'What We Do'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              {tVisa.overviewTitle}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {tVisa.overviewDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {language === 'ja' ? '公認翻訳＆アポスティーユ認証支援' : language === 'si' ? 'සහතික කළ පරිවර්තන සහ නීතිගත කිරීම්' : language === 'ta' ? 'சான்றளிக்கப்பட்ட மொழிபெயர்ப்புகள் & சட்டப்பூர்வ அத்தாட்சி' : 'Certified Translations & Legalization'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ja'
                  ? '出生証明書、学歴証明書、無犯罪証明書の正確な日本語・英語への宣誓公認翻訳および外務省公証手続きを案内します。'
                  : language === 'si'
                  ? 'උප්පැන්න සහතික, අධ්‍යාපනික සහතික සහ පොලිස් වාර්තා නිවැරදිව ජපන් හෝ ඉංග්‍රීසි භාෂාවට පරිවර්තනය කිරීම සහ විදේශ කටයුතු අමාත්‍යාංශ සහතික කිරීම්.'
                  : language === 'ta'
                  ? 'பிறப்பு சான்றிதழ், கல்வி சான்றிதழ்கள் மற்றும் பொலிஸ் அறிக்கைகளை ஜப்பானிய அல்லது ஆங்கிலத்தில் மொழிபெயர்த்து சான்றளிக்கும் வழிகாட்டல்.'
                  : 'Guidance on acquiring sworn translations of birth certificates, educational transcripts, and police clearance reports into Japanese or English.'}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {language === 'ja' ? '経費支弁者・資金立証書類の整備' : language === 'si' ? 'මූල්‍ය අනුග්‍රාහක ලියකියවිලි සකස් කිරීම' : language === 'ta' ? 'நிதி ஆதரவாளர் ஆவணங்களை தயார் செய்தல்' : 'Financial Sponsor Documentation'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ja'
                  ? '日本の在留資格認定証明書（COE）および大使館基準に適合した銀行残高証明、所得課税証明、親族関係証明の整合性を精査します。'
                  : language === 'si'
                  ? 'ජපන් COE සහ තානාපති කාර්යාල ප්‍රමිතීන්ට අනුව බැංකු ශේෂ සහතික, බදු වාර්තා සහ ඥාතීත්ව දිවුරුම් ප්‍රකාශ නීත්‍යානුකූලව සකස් කිරීම.'
                  : language === 'ta'
                  ? 'ஜப்பானிய COE மற்றும் தூதரகத் தேவைகளுக்கு ஏற்ப வங்கி இருப்பு சான்றிதழ்கள், வரி அறிக்கைகள் மற்றும் உறவுமுறை ஆவணங்களை முறைப்படுத்துதல்.'
                  : 'Structuring lawful proof of financial sponsorship (bank balance verification, tax returns, and relationship affidavits) meeting Japanese COE and embassy criteria.'}
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">
                {language === 'ja' ? '出願前クオリティ多重監査' : language === 'si' ? 'ඉදිරිපත් කිරීමට පෙර සිදුකරන නිරවද්‍යතා පරීක්ෂාව' : language === 'ta' ? 'விண்ணப்ப சமர்ப்பிப்பிற்கு முந்தைய முழுமையான தணிக்கை' : 'Pre-Submission Quality Audits'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {language === 'ja'
                  ? '海外の専門学校・日本語学校・受入機関への出願前に、記載漏れや矛盾がないか専任スタッフが厳格にチェックします。'
                  : language === 'si'
                  ? 'විදේශීය ආයතන, භාෂා පාසල් හෝ සේවා යෝජකයන් වෙත අයදුම්පත් යොමු කිරීමට පෙර අඩුපාඩු අවම කරගැනීමට සිදුකරන පූර්ණ පරීක්ෂාව.'
                  : language === 'ta'
                  ? 'வெளிநாட்டு கல்லூரிகள், மொழி பள்ளிகள் அல்லது முதலாளிகளிடம் சமர்ப்பிப்பதற்கு முன் படிவங்களை பிழையின்றி சரிபார்த்தல்.'
                  : 'Rigorous multi-point checking of all application forms before submission to foreign colleges, Japanese language institutions, or employer HR portals.'}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <DisclaimerBanner />
          </div>
        </div>
      </section>

      {/* Ethical Code of Conduct */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
              {language === 'ja' ? '私たちの職業誓約' : language === 'si' ? 'අපගේ වෘත්තීය ප්‍රතිඥාව' : language === 'ta' ? 'எங்கள் தொழில்முறை உறுதிமொழி' : 'Our Professional Pledge'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {tVisa.antiFraudTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-400">
              {tVisa.antiFraudDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-xs text-slate-300">
            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <p className="font-bold text-white text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {language === 'ja' ? '不当な100%保証の排除' : language === 'si' ? 'ව්‍යාජ සහතික කිරීම් නොමැත' : language === 'ta' ? 'போலி உத்தரவாதங்கள் இல்லை' : 'Zero Fake Guarantees'}
              </p>
              <p className="leading-relaxed">
                {language === 'ja'
                  ? '「100%ビザ発給保証」や「直接永住権獲得」といった誇大広告は行いません。これらは欺瞞的であり職業倫理に反します。'
                  : language === 'si'
                  ? 'අපි කිසිවිටෙක "100% වීසා සහතික" හෝ "සෘජු ස්ථිර පදිංචිය" ලබාදෙන බව පවසමින් රැවටීම් නොකරමු. එය වෘත්තීය ආචාරධර්මවලට පටහැනිය.'
                  : language === 'ta'
                  ? '"100% விசா உத்தரவாதம்" போன்ற போலி வாக்குறுதிகளை நாங்கள் வழங்குவதில்லை. இது தொழில்முறை ஒழுக்கத்திற்கு எதிரானது.'
                  : 'We will never advertise "100% Guaranteed Visas" or "Direct Permanent Residency." Such statements are deceptive and violate professional codes of ethics.'}
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <p className="font-bold text-white text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {language === 'ja' ? '公文書偽造・不正の完全排除' : language === 'si' ? 'ව්‍යාජ ලේඛන දැඩිව ප්‍රතික්ෂේප කිරීම' : language === 'ta' ? 'போலி ஆவணங்களை முற்றிலும் நிராகரித்தல்' : 'Anti-Document Fabrication'}
              </p>
              <p className="leading-relaxed">
                {language === 'ja'
                  ? '偽造書類、改ざんされた証明書、虚偽の銀行残高証明書の取扱いは一切お断りします。真正な書類のみを扱います。'
                  : language === 'si'
                  ? 'ව්‍යාජ ලියකියවිලි, වෙනස් කළ සහතික හෝ ව්‍යාජ බැංකු වාර්තා අපි දැඩිව ප්‍රතික්ෂේප කරමු. සියලු ලිපිගොනු 100% සත්‍ය ඒවා විය යුතුය.'
                  : language === 'ta'
                  ? 'போலி ஆவணங்கள், திருத்தப்பட்ட சான்றிதழ்கள் அல்லது போலி வங்கி அறிக்கைகளை நாங்கள் முற்றாக நிராகரிக்கிறோம்.'
                  : 'We strictly reject any fraudulent documentation, altered educational certificates, or fake bank statements. All materials submitted must be 100% authentic.'}
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <p className="font-bold text-white text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {language === 'ja' ? '明朗で透明な料金体系' : language === 'si' ? 'විනිවිදභාවයෙන් යුතු ගාස්තු' : language === 'ta' ? 'வெளிப்படையான கட்டண விபரம்' : 'Transparent Billing'}
              </p>
              <p className="leading-relaxed">
                {language === 'ja'
                  ? 'カウンセリング費用、語学講義料、翻訳費用は、手続開始前に書面にて明瞭にご案内します。不当な追加請求はありません。'
                  : language === 'si'
                  ? 'සියලුම උපදේශන ගාස්තු, භාෂා පන්ති ගාස්තු සහ පරිවර්තන වියදම් වැඩකටයුතු ආරම්භ කිරීමට පෙර ලිඛිතව දැනුම් දෙනු ලැබේ.'
                  : language === 'ta'
                  ? 'அனைத்து ஆலோசனை கட்டணங்கள், மொழி வகுப்புக் கட்டணங்கள் மற்றும் மொழிபெயர்ப்பு செலவுகள் தொடங்குவதற்கு முன்பே எழுத்துப்பூர்வமாக தெரிவிக்கப்படும்.'
                  : 'All consulting fees, language tuition, and translation costs are disclosed upfront in writing before you begin.'}
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 space-y-2">
              <p className="font-bold text-white text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {language === 'ja' ? '専任アドバイザーによる直接進捗共有' : language === 'si' ? 'සෘජු සන්නිවේදනය' : language === 'ta' ? 'நேரடி தொடர்பு' : 'Direct Communication'}
              </p>
              <p className="leading-relaxed">
                {language === 'ja'
                  ? '申請者は専任のケースアドバイザーと直接連絡を取り、申請状況をいつでも透明に確認することができます。'
                  : language === 'si'
                  ? 'අයදුම්කරුවන්ට තමන්ගේ උපදේශකවරයා සමඟ සෘජුව සම්බන්ධ වී තම ලිපිගොනුවේ ප්‍රගතිය නිරන්තරයෙන් දැනගැනීමේ හැකියාව ඇත.'
                  : language === 'ta'
                  ? 'விண்ணப்பதாரர்கள் தங்கள் விண்ணப்ப நிலையை அறிந்து கொள்ள நியமிக்கப்பட்ட வழிகாட்டியுடன் நேரடியாக தொடர்பு கொள்ளலாம்.'
                  : 'Candidates maintain continuous direct access to their assigned case advisor with complete visibility over their application progress.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm
            id="migration-inquiry"
            title={language === 'ja' ? '公的書類査定・相談の予約' : language === 'si' ? 'ලියකියවිලි ඇගයීමක් වෙන්කරවා ගන්න' : language === 'ta' ? 'ஆவண மதிப்பீட்டு அமர்வை பதிவு செய்யுங்கள்' : 'Book a Documentation Assessment'}
            subtitle={language === 'ja' ? 'ビザ申請書類のチェックリスト、翻訳、手続き要件について専門スタッフがご案内します。' : language === 'si' ? 'වීසා ලියකියවිලි පරීක්ෂා කිරීම, පරිවර්තන සහ නීතිමය අවශ්‍යතා පිළිබඳ අපගේ උපදේශකවරුන්ගෙන් විමසන්න.' : language === 'ta' ? 'விசா ஆவணங்கள், மொழிபெயர்ப்பு மற்றும் நடைமுறை தேவைகள் பற்றி எங்கள் நிபுணர்களிடம் ஆலோசனை பெறுங்கள்.' : 'Consult our documentation specialists regarding your visa checklist, translations, and procedural requirements.'}
            initialService="Migration & Visa Documentation"
            onOpenSupabaseModal={onOpenSupabaseModal}
          />
        </div>
      </section>
    </div>
  );
};

