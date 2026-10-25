import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useLanguage } from '../contexts/LanguageContext';

interface TermsPageProps {
  onNavigate: (page: PageId) => void;
}

const TERMS_CONTENT = {
  en: {
    badge: 'Service Agreement & Legal Framework',
    title: 'Terms and Conditions of Service',
    effectiveDate: 'Last Updated: October 2026 · GlobeLink Education and Migration Consultants',
    summaryBoxTitle: 'Important Summary:',
    summaryBoxText: 'GlobeLink provides private educational consulting, language training, and documentation guidance. We do not guarantee visa issuance, job placements, or migration outcomes. All decisions are made by respective sovereign authorities.',
    s1Title: '1. Nature of Advisory Services',
    s1Desc: 'GlobeLink Education and Migration Consultants operates as an independent consultancy and language training institute. Our services encompass language instruction (Let\'s Go Japan), student profile evaluations, university and language school application assistance, CV/resume preparation (Your Career Partner Program), and documentation auditing.',
    s2Title: '2. No Guarantee of Outcomes',
    s2Desc: 'Under no circumstances does GlobeLink guarantee or warrant that a candidate will receive a visa, Certificate of Eligibility (COE), employment offer, or permanent residency. Legally and operationally, these outcomes remain within the sole jurisdiction of sovereign foreign immigration authorities (such as the Immigration Services Agency of Japan, UAE MOHRE, and Maldives Immigration) and independent hiring companies.',
    s3Title: '3. Candidate Responsibility for Document Authenticity',
    s3Desc: 'Candidates agree to provide strictly authentic, accurate, and truthful documentation. GlobeLink maintains a strict zero-tolerance policy towards document falsification, altered bank statements, forged transcripts, or fraudulent claims. Submitting fraudulent materials will result in immediate termination of consulting services without refund.',
    s4Title: '4. Course Enrollment & Let\'s Go Japan Batches',
    s4Desc: 'For Japanese language courses:',
    s4Items: [
      'Course fees must be settled according to agreed milestone or installment schedules.',
      'Students are required to maintain a minimum of 80% attendance to receive official course completion certificates required for visa filings.',
      'Requests for batch transfers due to personal exigencies must be communicated in writing and are subject to seat availability in subsequent intakes.'
    ],
    s5Title: '5. Governing Law and Jurisdiction',
    s5Desc: 'These Terms and Conditions and all agreements entered into with GlobeLink shall be governed by and construed in accordance with the substantive laws of the Democratic Socialist Republic of Sri Lanka. Any disputes arising shall be subject to the exclusive jurisdiction of the competent courts of Sri Lanka.',
    s6Title: '6. Contact Information',
    s6Desc: 'If you have any questions regarding these terms, please contact our administrative desk:'
  },
  si: {
    badge: 'සේවා ගිවිසුම සහ නීතිමය රාමුව',
    title: 'සේවා නියමයන් සහ කොන්දේසි',
    effectiveDate: 'අවසන් වරට යාවත්කාලීන කළේ: 2026 ඔක්තෝබර් · GlobeLink Education and Migration Consultants',
    summaryBoxTitle: 'වැදගත් සාරාංශය:',
    summaryBoxText: 'GlobeLink පුද්ගලික අධ්‍යාපනික උපදේශනය, භාෂා පුහුණුව සහ ලේඛන මඟපෙන්වීම් ලබාදෙයි. අප කිසිවිටෙකත් වීසා නිකුත් කිරීම්, රැකියා සහතික කිරීම් හෝ සංක්‍රමණික තීරණ ලබාදීමට පොරොන්දු නොවේ. සියලුම තීරණ අදාළ ස්වෛරී රාජ්‍ය බලධාරීන් සතුය.',
    s1Title: '1. උපදේශන සේවාවන්හි ස්වභාවය',
    s1Desc: 'GlobeLink Education and Migration Consultants ස්වාධීන උපදේශන සහ භාෂා පුහුණු ආයතනයක් ලෙස ක්‍රියාත්මක වේ. අපගේ සේවාවන්ට ජපන් භාෂා පුහුණුව (Let\'s Go Japan), ශිෂ්‍ය සුදුසුකම් ඇගයීම, විශ්වවිද්‍යාල සහ භාෂා පාසල් අයදුම්පත් සහාය, CV/Resume සැකසීම සහ ලේඛන නිරවද්‍යතා පරීක්ෂාව ඇතුළත් වේ.',
    s2Title: '2. අවසන් ප්‍රතිඵල පිළිබඳ සහතික නොවීම',
    s2Desc: 'කිසිදු අවස්ථාවක අපේක්ෂකයෙකුට වීසා බලපත්‍රයක්, Certificate of Eligibility (COE), රැකියා පිරිනැමීමක් හෝ ස්ථිර පදිංචියක් හිමිවන බවට GlobeLink සහතික නොකරයි. නීතිමය හා ක්‍රියාකාරී වශයෙන්, මෙම තීරණ අදාළ විදේශීය ආගමන විගමන බලධාරීන් (ජපන් ආගමන සේවා ඒජන්සිය වැනි) සහ සේවායෝජක සමාගම් සතු පරමාධිපත්‍යමය අයිතියකි.',
    s3Title: '3. ලේඛනවල සත්‍යතාව පිළිබඳ අපේක්ෂකයාගේ වගකීම',
    s3Desc: 'අපේක්ෂකයින් විසින් ලබාදෙන සියලුම ලේඛන 100% ක් සත්‍ය, නිවැරදි සහ ව්‍යාජ නොවන ඒවා විය යුතුය. ව්‍යාජ ලේඛන, වෙනස් කළ බැංකු ප්‍රකාශන හෝ වංචනික තොරතුරු සම්බන්ධයෙන් GlobeLink ශුන්‍ය ඉවසීමේ (zero-tolerance) ප්‍රතිපත්තියක් අනුගමනය කරයි.',
    s4Title: '4. පාඨමාලා ලියාපදිංචිය සහ Let\'s Go Japan කණ්ඩායම්',
    s4Desc: 'ජපන් භාෂා පාඨමාලා සඳහා:',
    s4Items: [
      'පාඨමාලා ගාස්තු එකඟ වූ වාරික ක්‍රමවේදය අනුව නියමිත දිනට පෙර ගෙවිය යුතුය.',
      'වීසා ලිපිගොනු සඳහා අවශ්‍ය නිල පාඨමාලා සහතිකය ලබාගැනීමට සිසුන් 80% ක අවම පැමිණීමක් පවත්වා ගත යුතුය.',
      'කණ්ඩායම් මාරු කිරීම් ලිඛිතව දැනුම් දිය යුතු අතර ඒවා ඊළඟ කණ්ඩායම්වල පවතින ආසන සංඛ්‍යාව මත තීරණය වේ.'
    ],
    s5Title: '5. පාලක නීතිය සහ අධිකරණ බලය',
    s5Desc: 'මෙම සේවා නියමයන් ශ්‍රී ලංකා ප්‍රජාතාන්ත්‍රික සමාජවාදී ජනරජයේ නීති පද්ධතියට අනුකූලව පාලනය වන අතර ඕනෑම නීතිමය ආරවුලක් ශ්‍රී ලංකාවේ අධිකරණ බල ප්‍රදේශයට යටත් වේ.',
    s6Title: '6. පරිපාලන කාර්යාල තොරතුරු',
    s6Desc: 'මෙම කොන්දේසි පිළිබඳ විමසීම් සඳහා කරුණාකර අපගේ පරිපාලන අංශය අමතන්න:'
  },
  ta: {
    badge: 'சேவை ஒப்பந்தம் மற்றும் சட்டக் கட்டமைப்பு',
    title: 'சேவை விதிமுறைகள் மற்றும் நிபந்தனைகள்',
    effectiveDate: 'கடைசியாக புதுப்பிக்கப்பட்டது: அக்டோபர் 2026 · GlobeLink Education and Migration Consultants',
    summaryBoxTitle: 'முக்கிய சுருக்கம்:',
    summaryBoxText: 'GlobeLink தனியார் கல்வி ஆலோசனை, மொழிப் பயிற்சி மற்றும் ஆவண வழிகாட்டலை வழங்குகிறது. விசா வழங்கல், வேலைவாய்ப்பு அல்லது குடியேற்ற முடிவுகளுக்கு நாங்கள் உத்தரவாதம் அளிக்க மாட்டோம். அனைத்து முடிவுகளும் சம்பந்தப்பட்ட நாடுகளின் அரசாங்க அதிகாரிகளாலேயே எடுக்கப்படுகின்றன.',
    s1Title: '1. ஆலோசனை சேவைகளின் தன்மை',
    s1Desc: 'GlobeLink Education and Migration Consultants ஒரு சுயாதீன ஆலோசனை மற்றும் மொழிப் பயிற்சி நிறுவனமாக செயல்படுகிறது. எங்கள் சேவைகளில் மொழிப் பயிற்சி (Let\'s Go Japan), தகுதி மதிப்பீடு, கல்லூரி விண்ணப்ப உதவி, மற்றும் CV/Resume தயாரிப்பு ஆகியவை அடங்கும்.',
    s2Title: '2. முடிவுகளுக்கு உத்தரவாதம் இல்லை',
    s2Desc: 'விண்ணப்பதாரருக்கு விசா, COE அல்லது வேலைவாய்ப்பு கிடைக்கும் என்று GlobeLink எந்த சூழ்நிலையிலும் உத்தரவாதம் அளிக்காது. சட்டப்பூர்வமாகவும் செயல்பாட்டு ரீதியாகவும், இந்த முடிவுகள் வெளிநாட்டு குடிவரவு அதிகாரிகளின் தனிப்பட்ட அதிகார வரம்பிற்கு உட்பட்டவை.',
    s3Title: '3. ஆவண நம்பகத்தன்மைக்கான பொறுப்பு',
    s3Desc: 'விண்ணப்பதாரர்கள் முற்றிலும் உண்மையான ஆவணங்களை மட்டுமே வழங்க ஒப்புக்கொள்கிறார்கள். ஆவண மோசடிக்கு எதிராக GlobeLink பூஜ்ஜிய சகிப்புத்தன்மை கொள்கையைப் பின்பற்றுகிறது.',
    s4Title: '4. Let\'s Go Japan மொழிப் பயிற்சிகள்',
    s4Desc: 'ஜப்பானிய மொழிப் படிப்புகளுக்கு:',
    s4Items: [
      'பாடநெறி கட்டணங்கள் ஒப்புக்கொள்ளப்பட்ட தவணை அட்டவணையின்படி செலுத்தப்பட வேண்டும்.',
      'அதிகாரப்பூர்வ பாடநெறி நிறைவு சான்றிதழைப் பெற மாணவர்கள் குறைந்தபட்சம் 80% வருகையைப் பராமரிக்க வேண்டும்.',
      'வகுப்பு மாற்றக் கோரிக்கைகள் எழுத்துப்பூர்வமாக சமர்ப்பிக்கப்பட வேண்டும்.'
    ],
    s5Title: '5. ஆளும் சட்டம் மற்றும் அதிகார வரம்பு',
    s5Desc: 'இந்த விதிமுறைகள் இலங்கை ஜனநாயக சோசலிசக் குடியரசின் சட்டங்களுக்கு உட்பட்டு நிர்வகிக்கப்படும்.',
    s6Title: '6. தொடர்பு தகவல்',
    s6Desc: 'இந்த விதிமுறைகள் குறித்த கேள்விகளுக்கு எங்கள் நிர்வாகப் பிரிவைத் தொடர்பு கொள்ளவும்:'
  },
  ja: {
    badge: '利用規約・法規範および免責事項',
    title: '利用規約（サービス提供条件）',
    effectiveDate: '最終更新日：2026年10月 · GlobeLink Education and Migration Consultants',
    summaryBoxTitle: '重要事項の要約:',
    summaryBoxText: 'GlobeLinkは、正規の教育カウンセリング、日本語指導、および公的書類の整備助言を提供する機関です。査証（ビザ）の発行、在留資格認定証明書（COE）の交付、雇用確約、および最終的な移住許可を保証するものではありません。すべての審査判断は、各国主権機関に専属します。',
    s1Title: '1. 提供サービスの性質',
    s1Desc: 'GlobeLink Education and Migration Consultants（以下「当社」）は、独立した教育助言機関および語学研修センターとして運営されています。業務内容には、実践日本語教育（Let\'s Go Japan）、出願プロファイル査定、大学・日本語学校出願支援、英文履歴書・職務経歴書の最適化、提出書類の整合性確認が含まれます。',
    s2Title: '2. 結果の非保証および法的免責',
    s2Desc: '当社はいかなる場合においても、ビザ発給、在留資格認定証明書（COE）交付、採用選考の通過、または永住許可を法的に保証いたしません。これらの決定は、出入国在留管理庁等の公的機関および採用企業の専権事項です。',
    s3Title: '3. 提出書類の真正性に関する受講者の義務',
    s3Desc: '受講生および申請者は、虚偽のない真正な書類のみを提出することに同意するものとします。書類の改ざん、経歴詐称、偽造書類の提出に対して当社は一切容認せず、発覚した場合は即時に支援を終了いたします。',
    s4Title: '4. Let\'s Go Japan 講座受講規則',
    s4Desc: '日本語受講に関して：',
    s4Items: [
      '受講料は定められた期日または分割規定に従い納入するものとします。',
      '在留資格申請等に用いる正規修了証明書の発行には、80%以上の出席率が必須となります。',
      '個人の事情による受講クラスの変更希望は、書面による事前連絡と次期クラスの空席状況によります。'
    ],
    s5Title: '5. 準拠法および管轄裁判所',
    s5Desc: '本規約の準拠法はスリランカ民主社会主義共和国法とし、生じた紛争はスリランカの管轄裁判所を専属管轄とします。',
    s6Title: '6. お問い合わせ窓口',
    s6Desc: '本規約に関するお問い合わせは、当社の総合管理窓口までご連絡ください：'
  }
};

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const c = TERMS_CONTENT[language] || TERMS_CONTENT.en;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title={`${c.title} | GlobeLink Education & Migration Consultants`}
        description="Terms and conditions of service for GlobeLink Education and Migration Consultants and Let's Go Japan courses."
        canonicalPath="/terms-and-conditions"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: c.title, path: '/terms-and-conditions' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: c.title }]}
        onNavigate={onNavigate}
      />

      <section className="bg-slate-900 text-white py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">
            {c.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {c.title}
          </h1>
          <p className="mt-2 text-xs text-slate-400">
            {c.effectiveDate}
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-700 space-y-8 leading-relaxed">
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
            <strong>{c.summaryBoxTitle}</strong> {c.summaryBoxText}
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s1Title}</h2>
            <p>{c.s1Desc}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s2Title}</h2>
            <p>{c.s2Desc}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s3Title}</h2>
            <p>{c.s3Desc}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s4Title}</h2>
            <p>{c.s4Desc}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              {c.s4Items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s5Title}</h2>
            <p>{c.s5Desc}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s6Title}</h2>
            <p>{c.s6Desc}</p>
            <div className="mt-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200 text-slate-800 space-y-1">
              <p className="font-bold text-slate-900">{COMPANY_INFO.brandName}</p>
              <p>{COMPANY_INFO.officeAddress}</p>
              <p>Hotline: {COMPANY_INFO.hotline} &middot; Email: {COMPANY_INFO.primaryEmail}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
