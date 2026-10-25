import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useLanguage } from '../contexts/LanguageContext';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

const PRIVACY_CONTENT = {
  en: {
    badge: 'Data Governance & Security',
    title: 'Privacy Policy',
    effectiveDate: 'Effective Date: October 2026 · GlobeLink Education and Migration Consultants',
    s1Title: '1. Introduction',
    s1Desc: 'GlobeLink Education and Migration Consultants ("GlobeLink", "Globe Link Edu", "we", "us") is committed to respecting the privacy and confidentiality of candidate personal information. This Privacy Policy outlines how we collect, use, store, and protect candidate details submitted through our website, telephone hotlines, WhatsApp business communication, or during in-person visits to our office in Nittambuwa, Sri Lanka.',
    s2Title: '2. Information We Collect',
    s2Desc: 'We only collect personal information voluntarily provided by candidates for legitimate educational advisory, language enrollment, and career consulting purposes. This may include:',
    s2Items: [
      'Full name, telephone/WhatsApp contact number, and email address.',
      'Academic qualifications (O/L, A/L, diplomas, university degrees, vocational certificates).',
      'Target country destinations (Japan, Dubai, UAE, Maldives, etc.) and program preferences.',
      'Japanese language proficiency level (JLPT / NAT-TEST / JFT status).',
      'CV / resume data for career profile assessment.'
    ],
    s3Title: '3. Purpose and Use of Data',
    s3Desc: 'Your personal data is used solely to:',
    s3Items: [
      'Evaluate educational or career pathway eligibility.',
      'Coordinate batch schedules, materials, and Zoom links for Let\'s Go Japan courses.',
      'Format and audit application documentation for verified international colleges or employers.',
      'Respond to direct inquiries submitted through our website or WhatsApp.'
    ],
    s3Notice: 'We never sell, rent, trade, or disclose your personal contact information to unauthorized third-party marketing brokers.',
    s4Title: '4. Storage & Database Security',
    s4Desc: 'Candidate leads and inquiries submitted through our website are processed through secure communication protocols. Where cloud persistence is configured via Supabase, data is protected using encrypted connections and strict Row Level Security (RLS) policies accessible solely by authorized GlobeLink administrative personnel.',
    s5Title: '5. Third-Party Links & WhatsApp Forwarding',
    s5Desc: 'Our website provides links to external services such as WhatsApp and Facebook. These third-party platforms have their own independent privacy policies. We encourage users to review those policies when interacting on external applications.',
    s6Title: '6. Your Data Rights & Inquiries',
    s6Desc: 'You have the right to request a copy of the personal information we hold about you, or to request corrections or deletions from our active advisory rosters. For privacy inquiries, please contact our Data Governance Officer at '
  },
  si: {
    badge: 'දත්ත කළමනාකරණය සහ ආරක්ෂාව',
    title: 'පෞද්ගලිකත්ව ප්‍රතිපත්තිය',
    effectiveDate: 'බලාත්මක දිනය: 2026 ඔක්තෝබර් · GlobeLink Education and Migration Consultants',
    s1Title: '1. හැඳින්වීම',
    s1Desc: 'GlobeLink Education and Migration Consultants ("GlobeLink", "අප") අප වෙත පැමිණෙන සිසුන් සහ අපේක්ෂකයින්ගේ පෞද්ගලික තොරතුරුවල රහස්‍යභාවය හා ආරක්ෂාව සුරැකීමට කැපවී සිටී. මෙම ප්‍රතිපත්තිය මඟින් අපගේ වෙබ් අඩවිය, දුරකථන ක්ෂණික ඇමතුම්, WhatsApp හෝ නිට්ටඹුව කාර්යාලය හරහා ලබාගන්නා තොරතුරු කළමනාකරණය කරන ආකාරය පැහැදිලි කරයි.',
    s2Title: '2. අප රැස්කරන තොරතුරු',
    s2Desc: 'අධ්‍යාපනික මඟපෙන්වීම්, ජපන් භාෂා පන්ති ලියාපදිංචිය සහ වෘත්තීය උපදේශනය සඳහා ස්වේච්ඡාවෙන් ලබාදෙන පහත තොරතුරු පමණක් අප රැස්කරනු ලැබේ:',
    s2Items: [
      'සම්පූර්ණ නම, දුරකථන/WhatsApp අංකය සහ විද්‍යුත් තැපැල් ලිපිනය.',
      'අධ්‍යාපන සුදුසුකම් (සා/පෙළ, උ/පෙළ, ඩිප්ලෝමා, උපාධි හෝ වෘත්තීය සහතික).',
      'අපේක්ෂිත රටවල් (ජපානය, ඩුබායි, මාලදිවයින ආදිය) සහ පාඨමාලා මනාපයන්.',
      'ජපන් භාෂා ප්‍රවීණතා මට්ටම (JLPT / NAT-TEST / JFT තත්ත්වය).',
      'වෘත්තීය ඇගයීම සඳහා ලබාදෙන ජීව දත්ත පත්‍රිකා (CV/Resume).'
    ],
    s3Title: '3. තොරතුරු භාවිතයේ අරමුණ',
    s3Desc: 'ඔබේ තොරතුරු පහත කටයුතු සඳහා පමණක් භාවිත කෙරේ:',
    s3Items: [
      'අධ්‍යාපනික හෝ වෘත්තීය අවස්ථා සඳහා ඔබේ සුදුසුකම් ඇගයීම.',
      "Let's Go Japan පන්ති කාලසටහන්, පාඩම් සටහන් සහ සජීවී සබැඳි සම්බන්ධීකරණය.",
      'විදේශීය විශ්වවිද්‍යාල හෝ සේවායෝජකයින් සඳහා නිල ලේඛන සකස් කිරීම.',
      'ඔබගේ විමසීම් සඳහා කඩිනම් සහ නිවැරදි තොරතුරු සැපයීම.'
    ],
    s3Notice: 'අප කිසිදු අවස්ථාවක ඔබේ පෞද්ගලික තොරතුරු තෙවන පාර්ශවීය වෙළෙඳ තැරැව්කරුවන්ට විකිණීම හෝ අනාවරණය කිරීම සිදු නොකරයි.',
    s4Title: '4. දත්ත ගබඩා කිරීම සහ ආරක්ෂාව',
    s4Desc: 'අපගේ වෙබ් අඩවිය හරහා ඉදිරිපත් කෙරෙන විමසීම් ආරක්ෂිත ප්‍රොටෝකෝල මඟින් සකසනු ලබයි. Supabase වලාකුළු දත්ත සමුදාය තුළ දත්ත ගබඩා වන විට Row Level Security (RLS) ආරක්ෂක නීති මඟින් අනවසර ප්‍රවේශ සම්පූර්ණයෙන්ම වළක්වයි.',
    s5Title: '5. බාහිර සබැඳි සහ WhatsApp භාවිතය',
    s5Desc: 'අපගේ වෙබ් අඩවිය WhatsApp සහ Facebook වැනි බාහිර සේවාවන් වෙත සබැඳි සපයයි. එම වේදිකාවලට ආවේණික ස්වාධීන පෞද්ගලිකත්ව ප්‍රතිපත්ති පවතින බව කරුණාවෙන් සලකන්න.',
    s6Title: '6. ඔබගේ අයිතිවාසිකම් සහ විමසීම්',
    s6Desc: 'අප සතුව ඇති ඔබගේ පුද්ගලික තොරතුරු පිළිබඳ විමසීමට හෝ ඒවා යාවත්කාලීන කිරීමට ඔබට පූර්ණ අයිතිය ඇත. කරුණාකර අපගේ දත්ත කළමනාකරණ නිලධාරී අමතන්න: '
  },
  ta: {
    badge: 'தரவு ஆளுகை மற்றும் பாதுகாப்பு',
    title: 'தனியுரிமைக் கொள்கை',
    effectiveDate: 'நடைமுறைக்கு வரும் தேதி: அக்டோபர் 2026 · GlobeLink Education and Migration Consultants',
    s1Title: '1. அறிமுகம்',
    s1Desc: 'GlobeLink Education and Migration Consultants ("GlobeLink", "நாங்கள்") விண்ணப்பதாரர்களின் தனிப்பட்ட தகவல்களின் ரகசியத்தன்மையைப் பேண உறுதிபூண்டுள்ளது. எங்கள் இணையதளம், தொலைபேசி, WhatsApp அல்லது நித்தம்புவ அலுவலகம் மூலம் வழங்கப்படும் தகவல்களை எவ்வாறு பாதுகாக்கிறோம் என்பதை இந்தக் கொள்கை விளக்குகிறது.',
    s2Title: '2. நாங்கள் சேகரிக்கும் தகவல்கள்',
    s2Desc: 'கல்வி வழிகாட்டல், மொழி வகுப்புகள் மற்றும் தொழில் ஆலோசனை நோக்கங்களுக்காக தன்னார்வமாக வழங்கப்படும் தகவல்கள் மட்டுமே சேகரிக்கப்படுகின்றன:',
    s2Items: [
      'முழுப் பெயர், தொலைபேசி/WhatsApp எண் மற்றும் மின்னஞ்சல் முகவரி.',
      'கல்வித் தகுதிகள் (O/L, A/L, டிப்ளோமாக்கள், பட்டங்கள், சான்றிதழ்கள்).',
      'இலக்கு நாடுகள் (ஜப்பான், துபாய், மாலைத்தீவு போன்றவை) மற்றும் விருப்பங்கள்.',
      'ஜப்பானிய மொழி புலமை நிலை (JLPT / NAT-TEST / JFT).',
      'தொழில் தகுதி மதிப்பீட்டிற்கான பயோடேட்டா (CV/Resume) விபரங்கள்.'
    ],
    s3Title: '3. தகவல்களைப் பயன்படுத்துவதன் நோக்கம்',
    s3Desc: 'உங்கள் தனிப்பட்ட தரவு பின்வரும் நோக்கங்களுக்காக மட்டுமே பயன்படுத்தப்படுகிறது:',
    s3Items: [
      'கல்வி அல்லது தொழில் தகுதிகளை மதிப்பீடு செய்தல்.',
      "Let's Go Japan வகுப்பு அட்டவணைகள், குறிப்புகள் மற்றும் Zoom இணைப்புகளை ஒருங்கிணைத்தல்.",
      'சரிபார்க்கப்பட்ட சர்வதேச கல்லூரிகள் அல்லது வேலைவாய்ப்புக்கான ஆவணங்களைத் தயாரித்தல்.',
      'உங்கள் நேரடி விசாரணைகளுக்குப் பதிலளித்தல்.'
    ],
    s3Notice: 'உங்கள் தனிப்பட்ட தகவல்களை அங்கீகரிக்கப்படாத மூன்றாம் தரப்பு தரகர்களுக்கு நாங்கள் ஒருபோதும் விற்கவோ, பகிரவோ மாட்டோம்.',
    s4Title: '4. சேமிப்பகம் மற்றும் தரவுத்தள பாதுகாப்பு',
    s4Desc: 'விசாரணைகள் பாதுகாப்பான குறியாக்க நெறிமுறைகள் மூலம் செயல்படுத்தப்படுகின்றன. Supabase தரவுத்தளம் மூலம் கடுமையான Row Level Security (RLS) கொள்கைகள் செயல்படுத்தப்பட்டு பாதுகாக்கப்படுகின்றன.',
    s5Title: '5. மூன்றாம் தரப்பு இணைப்புகள் & WhatsApp',
    s5Desc: 'எங்கள் இணையதளம் WhatsApp மற்றும் Facebook போன்ற வெளிப்புற தளங்களுக்கான இணைப்புகளைக் கொண்டுள்ளது. இந்த தளங்கள் தங்களுடைய சொந்த தனியுரிமைக் கொள்கைகளைக் கொண்டுள்ளன.',
    s6Title: '6. உங்கள் உரிமைகள் மற்றும் விசாரணைகள்',
    s6Desc: 'எங்களிடம் உள்ள உங்களைப் பற்றிய தனிப்பட்ட தகவல்களை அறிய அல்லது திருத்த உங்களுக்கு உரிமை உண்டு. எங்கள் தரவு பாதுகாப்பு அதிகாரியைத் தொடர்பு கொள்ளவும்: '
  },
  ja: {
    badge: 'データガバナンスとセキュリティ方針',
    title: 'プライバシーポリシー（個人情報保護方針）',
    effectiveDate: '発効日：2026年10月 · GlobeLink Education and Migration Consultants',
    s1Title: '1. はじめに',
    s1Desc: 'GlobeLink Education and Migration Consultants（以下「GlobeLink」「当社」）は、留学希望者および就労希望者の個人情報の重要性を認識し、その適切な保護と管理に努めます。本プライバシーポリシーは、ウェブサイト、電話ホットライン、公式WhatsApp、またはスリランカ・ニッタンブワオフィスにてご提供いただいた情報の取り扱いについて定めたものです。',
    s2Title: '2. 収集する個人情報',
    s2Desc: '当社は、正規の教育カウンセリング、日本語教育（Let\'s Go Japan）、海外キャリア指導の目的において、利用者の同意のもとで以下の情報を取得します：',
    s2Items: [
      '氏名、電話番号・WhatsApp番号、メールアドレス等の連絡先情報。',
      '学歴・保有資格（O/L、A/L、専門学校・大学の学位、公的技能認定証）。',
      '希望渡航先国（日本、ドバイ・UAE、モルディブ等）および希望プログラム。',
      '日本語能力試験等の受験状況・合格レベル（JLPT、NAT-TEST、JFT-Basic等）。',
      'キャリア適性評価および指導のための履歴書・職務経歴書データ。'
    ],
    s3Title: '3. 利用目的',
    s3Desc: 'ご提供いただいた個人情報は、以下の正当な目的にのみ利用いたします：',
    s3Items: [
      '教育・留学・就労パスウェイの適性確認および出願助言。',
      'Let\'s Go Japan日本語講座の受講管理、教材送付、オンライン配信の連絡。',
      '提携教育機関・公式審査機関への提出書類の整備・整合性確認。',
      'ウェブサイトやWhatsAppを通じた直接のお問い合わせへの迅速な回答。'
    ],
    s3Notice: '当社は、法令に基づく正当な開示要請がある場合を除き、お客様の個人情報を第三者の広告ブローカーや営利企業に販売・提供することは決してありません。',
    s4Title: '4. 安全管理措置およびデータベース保護',
    s4Desc: '送信されたお問い合わせデータはSSL暗号化通信により保護されます。Supabaseによるクラウド保管を実施する際も、厳格な行レベルセキュリティ（Row Level Security: RLS）を適用し、認定された管理者のみがアクセス権を保持します。',
    s5Title: '5. 外部リンクおよびWhatsApp連携',
    s5Desc: '当サイトにはWhatsAppや公式SNS等の外部リンクが含まれます。これらの外部プラットフォームにおける個人情報の保護については、各サービスのプライバシー規定をご確認ください。',
    s6Title: '6. 保有個人データの開示・訂正・削除',
    s6Desc: 'ご本人は当社が保有する個人情報の照会、訂正、削除を要求する権利を有します。個人情報の取り扱いに関するご相談は、個人情報管理担当窓口までお問い合わせください：'
  }
};

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const c = PRIVACY_CONTENT[language] || PRIVACY_CONTENT.en;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title={`${c.title} | GlobeLink Education & Migration Consultants`}
        description="Privacy policy and data governance practices of GlobeLink Education and Migration Consultants."
        canonicalPath="/privacy-policy"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: c.title, path: '/privacy-policy' }
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
          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s1Title}</h2>
            <p>{c.s1Desc}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s2Title}</h2>
            <p>{c.s2Desc}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              {c.s2Items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s3Title}</h2>
            <p>{c.s3Desc}</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              {c.s3Items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <p className="mt-3 font-semibold text-slate-900 bg-slate-50 p-3 rounded-lg border border-slate-200">
              {c.s3Notice}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s4Title}</h2>
            <p>{c.s4Desc}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s5Title}</h2>
            <p>{c.s5Desc}</p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-2">{c.s6Title}</h2>
            <p>
              {c.s6Desc}{' '}
              <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="text-sky-600 hover:underline font-semibold">
                {COMPANY_INFO.primaryEmail}
              </a>{' '}
              | Hotline:{' '}
              <a href={`tel:${COMPANY_INFO.hotlineTel}`} className="text-sky-600 hover:underline font-semibold">
                {COMPANY_INFO.hotline}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
