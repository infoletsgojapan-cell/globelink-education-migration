import { JapaneseCourse, ExamResource, Destination, FAQItem, SupportedLanguage } from '../types';
import { COMPANY_INFO } from '../data/company';

/**
 * Returns localized course attributes based on selected language.
 */
export function getLocalizedCourse(course: JapaneseCourse, lang: SupportedLanguage): JapaneseCourse & { localizedIntakeStatus: string } {
  let overrides: Partial<JapaneseCourse> = {};
  let localizedStatus = course.intakeStatus;

  if (lang === 'en') {
    overrides = {
      title: course.title,
      level: course.level,
      targetAudience: course.targetAudience,
      duration: course.duration,
      hours: course.hours,
      schedule: course.schedule,
      feeLkr: course.feeLkr,
      highlights: course.highlights,
      syllabusOverview: course.syllabusOverview
    };
    localizedStatus = course.intakeStatus;
  } else if (lang === 'ja') {
    const jaStatus = course.intakeStatusJa || (course.intakeStatus === 'Enrolling Now' ? '受講生募集中' : course.intakeStatus === 'Upcoming Intake' ? '次回開講予定' : '残席わずか');
    overrides = {
      title: course.japaneseTitle || course.titleJa || course.title,
      level: course.levelJa || course.level,
      targetAudience: course.targetAudienceJa || '日本留学、就労、特定技能ビザ取得を目指す方のための専門対策コースです。',
      duration: course.durationJa || course.duration,
      hours: course.hoursJa || course.hours,
      schedule: course.scheduleJa || course.schedule,
      feeLkr: course.feeLkrJa || course.feeLkr,
      highlights: course.highlightsJa || course.highlights,
      syllabusOverview: course.syllabusOverviewJa || course.syllabusOverview,
      intakeStatusJa: jaStatus
    };
    localizedStatus = jaStatus as any;
  } else if (lang === 'si') {
    const siStatus = course.intakeStatusSi || (course.intakeStatus === 'Enrolling Now' ? 'ලියාපදිංචිය විවෘතයි' : course.intakeStatus === 'Upcoming Intake' ? 'ඉදිරි කණ්ඩායම' : 'සීමිත ආසන සංඛ්‍යාවක්');
    overrides = {
      title: course.titleSi || course.title,
      level: course.levelSi || course.level,
      targetAudience: course.targetAudienceSi || 'ජපානයේ උසස් අධ්‍යාපනය, ශිෂ්‍ය වීසා හෝ SSW රැකියා බලාපොරොත්තු වන අය සඳහා.',
      duration: course.durationSi || course.duration,
      hours: course.hoursSi || course.hours,
      schedule: course.scheduleSi || course.schedule,
      feeLkr: course.feeLkrSi || course.feeLkr,
      highlights: course.highlightsSi || course.highlights,
      syllabusOverview: course.syllabusOverviewSi || course.syllabusOverview,
      intakeStatusSi: siStatus
    };
    localizedStatus = siStatus as any;
  } else {
    // Tamil
    const taStatus = course.intakeStatusTa || (course.intakeStatus === 'Enrolling Now' ? 'பதிவு தொடங்கியது' : course.intakeStatus === 'Upcoming Intake' ? 'அடுத்த சேர்க்கை' : 'குறைந்த இடங்கள்');
    overrides = {
      title: course.titleTa || course.title,
      level: course.levelTa || course.level,
      targetAudience: course.targetAudienceTa || 'ஜப்பான் மாணவர் விசா மற்றும் SSW வேலைவாய்ப்பை இலக்காகக் கொண்டவர்களுக்கானது.',
      duration: course.durationTa || course.duration,
      hours: course.hoursTa || course.hours,
      schedule: course.scheduleTa || course.schedule,
      feeLkr: course.feeLkrTa || course.feeLkr,
      highlights: course.highlightsTa || course.highlights,
      syllabusOverview: course.syllabusOverviewTa || course.syllabusOverview,
      intakeStatusTa: taStatus
    };
    localizedStatus = taStatus as any;
  }
  return {
    ...course,
    ...overrides,
    localizedIntakeStatus: localizedStatus
  };
}

/**
 * Returns localized exam attributes based on selected language.
 */
export function getLocalizedExam(exam: ExamResource, lang: SupportedLanguage): ExamResource {
  if (lang === 'en') {
    return { ...exam };
  }

  if (lang === 'ja') {
    return {
      ...exam,
      name: exam.japaneseName || exam.nameJa || exam.name,
      shortExplanation: exam.shortExplanationJa || exam.shortExplanation,
      levelsOrSectors: exam.levelsOrSectorsJa || exam.levelsOrSectors,
      globeLinkPreparation: exam.globeLinkPreparationJa || 'GlobeLink / Let\'s Go Japan では、日本人講師および専門講師による模擬試験・リスニング特訓・文法徹底指導を行っております。',
      badgeLabel: exam.badgeLabelJa || exam.badgeLabel,
      complianceDisclaimer: exam.complianceDisclaimerJa || exam.complianceDisclaimer,
      eligibilityNotes: exam.eligibilityNotesJa || exam.eligibilityNotes
    };
  }

  if (lang === 'si') {
    return {
      ...exam,
      name: exam.nameSi || exam.name,
      shortExplanation: exam.shortExplanationSi || exam.shortExplanation,
      levelsOrSectors: exam.levelsOrSectorsSi || exam.levelsOrSectors,
      globeLinkPreparation: exam.globeLinkPreparationSi || 'Let\'s Go Japan මගින් විශේෂිත සජීවී මාර්ගගත පන්ති, පසුගිය විභාග ප්‍රශ්න පත්‍ර සාකච්ඡා සහ කන්ජි පුහුණුව ලබාදේ.',
      badgeLabel: exam.badgeLabelSi || exam.badgeLabel,
      complianceDisclaimer: exam.complianceDisclaimerSi || exam.complianceDisclaimer,
      eligibilityNotes: exam.eligibilityNotesSi || exam.eligibilityNotes
    };
  }

  // Tamil
  return {
    ...exam,
    name: exam.nameTa || exam.name,
    shortExplanation: exam.shortExplanationTa || exam.shortExplanation,
    levelsOrSectors: exam.levelsOrSectorsTa || exam.levelsOrSectors,
    globeLinkPreparation: exam.globeLinkPreparationTa || 'GlobeLink நேரடி இணைய வகுப்புகள், மாதிரி வினாத்தாள்கள் மற்றும் விரிவான பயிற்சி வழிகாட்டலை வழங்குகிறது.',
    badgeLabel: exam.badgeLabelTa || exam.badgeLabel,
    complianceDisclaimer: exam.complianceDisclaimerTa || exam.complianceDisclaimer,
    eligibilityNotes: exam.eligibilityNotesTa || exam.eligibilityNotes
  };
}

/**
 * Returns localized destination attributes based on selected language.
 */
export function getLocalizedDestination(dest: Destination, lang: SupportedLanguage) {
  if (lang === 'en') {
    return {
      country: dest.country,
      tagline: dest.tagline,
      overview: dest.overview,
      servicesAvailable: dest.servicesAvailable,
      keyHighlights: dest.keyHighlights,
      complianceNotice: dest.complianceNotice
    };
  }

  if (lang === 'ja') {
    const jaCountryMap: Record<string, string> = {
      'Japan': '日本',
      'Dubai': 'ドバイ',
      'United Arab Emirates': 'アラブ首長国連邦（UAE）',
      'Maldives': 'モルディブ',
      'United Kingdom': 'イギリス',
      'Canada': 'カナダ',
      'Australia': 'オーストラリア'
    };

    return {
      country: jaCountryMap[dest.country] || dest.countryJa || dest.country,
      tagline: dest.taglineJa || dest.tagline,
      overview: dest.overviewJa || dest.overview,
      servicesAvailable: dest.servicesAvailableJa || dest.servicesAvailable,
      keyHighlights: dest.keyHighlightsJa || dest.keyHighlights,
      complianceNotice: dest.complianceNoticeJa || dest.complianceNotice
    };
  }

  if (lang === 'si') {
    const siCountryMap: Record<string, string> = {
      'Japan': 'ජපානය',
      'Dubai': 'ඩුබායි',
      'United Arab Emirates': 'එක්සත් අරාබි එමීර් රාජ්‍යය (UAE)',
      'Maldives': 'මාලදිවයින',
      'United Kingdom': 'එක්සත් රාජධානිය (UK)',
      'Canada': 'කැනඩාව',
      'Australia': 'ඕස්ට්‍රේලියාව'
    };

    return {
      country: siCountryMap[dest.country] || dest.countrySi || dest.country,
      tagline: dest.taglineSi || dest.tagline,
      overview: dest.overviewSi || dest.overview,
      servicesAvailable: dest.servicesAvailableSi || dest.servicesAvailable,
      keyHighlights: dest.keyHighlightsSi || dest.keyHighlights,
      complianceNotice: dest.complianceNoticeSi || dest.complianceNotice
    };
  }

  // Tamil
  const taCountryMap: Record<string, string> = {
    'Japan': 'ஜப்பான்',
    'Dubai': 'துபாய்',
    'United Arab Emirates': 'ஐக்கிய அரபு எமிரேட்ஸ் (UAE)',
    'Maldives': 'மாலத்தீவு',
    'United Kingdom': 'ஐக்கிய இராச்சியம் (UK)',
    'Canada': 'கனடா',
    'Australia': 'ஆஸ்திரேலியா'
  };

  return {
    country: taCountryMap[dest.country] || dest.countryTa || dest.country,
    tagline: dest.taglineTa || dest.tagline,
    overview: dest.overviewTa || dest.overview,
    servicesAvailable: dest.servicesAvailableTa || dest.servicesAvailable,
    keyHighlights: dest.keyHighlightsTa || dest.keyHighlights,
    complianceNotice: dest.complianceNoticeTa || dest.complianceNotice
  };
}

/**
 * Returns localized FAQ question and answer based on selected language.
 */
export function getLocalizedFaq(faq: FAQItem, lang: SupportedLanguage): { question: string; answer: string } {
  if (lang === 'ja' && faq.questionJa && faq.answerJa) {
    return { question: faq.questionJa, answer: faq.answerJa };
  }
  if (lang === 'si' && faq.questionSi && faq.answerSi) {
    return { question: faq.questionSi, answer: faq.answerSi };
  }
  if (lang === 'ta' && faq.questionTa && faq.answerTa) {
    return { question: faq.questionTa, answer: faq.answerTa };
  }
  return { question: faq.question, answer: faq.answer };
}

/**
 * Returns localized Company Info disclaimers and operating hours.
 */
export function getLocalizedCompanyInfo(lang: SupportedLanguage) {
  if (lang === 'ja') {
    return {
      tagline: '世界への扉を開く、あなたのキャリアパートナー',
      headline: '誠実な個別カウンセリングを通じて、世界水準の教育と合法的なキャリア機会へ導きます。',
      operatingHours: '月曜〜土曜：8:30〜17:30（日曜・スリランカ祝日休業）',
      disclaimerGeneral: 'GlobeLink Education and Migration Consultants は独立した教育研修・留学支援機関です。ビザの発給権限や100%の採用保証は提供しておりません。すべてのビザ審査・発給決定は関係国の出入国管理庁および大使館の専管事項です。',
      complianceNotice: '受入機関および提携校の基準は募集期ごとに個別に検証されます。登録前に透明性の高い公式書類をご提示いたします。'
    };
  }

  if (lang === 'si') {
    return {
      tagline: 'ඔබව ලොවට සම්බන්ධ කරන විශ්වාසනීය වෘත්තීය සහකරු',
      headline: 'පුද්ගලීකෘත මඟපෙන්වීම තුළින් ජාත්‍යන්තර අධ්‍යාපනය සහ නීත්‍යානුකූල වෘත්තීය අවස්ථා වෙත ඔබව යොමු කිරීම.',
      operatingHours: 'සඳුදා – සෙනසුරාදා: පෙ.ව. 8:30 – ප.ව. 5:30 (ඉරිදා සහ රජයේ නිවාඩු දිනවල වසා ඇත)',
      disclaimerGeneral: 'GlobeLink Education and Migration Consultants යනු අධ්‍යාපනික සහ භාෂා පුහුණු උපදේශන ආයතනයකි. අපි වීසා නිකුත් කිරීම හෝ රැකියා/වැටුප් සහතික කිරීම් සිදු නොකරමු. වීසා තීරණ සම්පූර්ණයෙන්ම අදාළ රජයන් සතු වේ.',
      complianceNotice: 'සියලු වැඩසටහන් නීත්‍යානුකූල රාමුව තුළ ක්‍රියාත්මක වන අතර ලියාපදිංචියට පෙර තහවුරු කළ ලියකියවිලි ලබාදේ.'
    };
  }

  if (lang === 'ta') {
    return {
      tagline: 'உங்களை உலகத்துடன் இணைக்கும் உங்கள் தொழில் பங்குதாரர்',
      headline: 'தனிப்பயனாக்கப்பட்ட வழிகாட்டல் மூலம் சர்வதேச கல்வி மற்றும் முறையான தொழில் வாய்ப்புகளுடன் உங்களை இணைக்கிறோம்.',
      operatingHours: 'திங்கள் – சனி: காலை 8:30 – மாலை 5:30 (ஞாயிறு மற்றும் பொது விடுமுறை நாட்களில் மூடப்படும்)',
      disclaimerGeneral: 'GlobeLink ஒரு சுயாதீன கல்வி மற்றும் விசா ஆவண ஆலோசனை நிறுவனமாகும். நாங்கள் விசாக்களை வழங்குவதோ வேலை வாய்ப்புகளை உத்தரவாதம் செய்வதோ இல்லை. அனைத்து முடிவுகளும் அந்தந்த நாடுகளின் குடிவரவுத் துறையினரால் எடுக்கப்படுகின்றன.',
      complianceNotice: 'அனைத்து திட்டங்களும் சட்டப்பூர்வ வழிகாட்டுதல்களுக்கு உட்பட்டவை. பதிவு செய்வதற்கு முன் சரிபார்க்கப்பட்ட ஆவணங்கள் வழங்கப்படும்.'
    };
  }

  return {
    tagline: COMPANY_INFO.tagline,
    headline: COMPANY_INFO.headline,
    operatingHours: COMPANY_INFO.operatingHours,
    disclaimerGeneral: COMPANY_INFO.disclaimers.general,
    complianceNotice: COMPANY_INFO.disclaimers.clientVerificationNotice
  };
}

export function getLocalizedLearningFeatures(lang: SupportedLanguage) {
  if (lang === 'ja') {
    return [
      {
        title: '双方向ライブ講義',
        description: 'ZoomおよびGoogle Meetを使用したリアルタイム講義。画面共有や小テスト、日本人・有資格講師による即時フィードバック。'
      },
      {
        title: '講義アーカイブ見逃し配信',
        description: '欠席した場合も安心。すべての授業が高画質で録画され、受講生専用ポータルからいつでも復習可能です。'
      },
      {
        title: '厳選オリジナル教材＆問題集',
        description: 'PDF教科書レジュメ、漢字書き取り練習帳、語彙フラッシュカード、過去問解説集を無料配布。'
      },
      {
        title: '専任講師によるWhatsApp質疑応答',
        description: '講師直通の受講生グループで24時間いつでも質問受付。宿題の添削や発音チェックにも個別対応。'
      },
      {
        title: 'JLPT・NAT-TEST願書出願サポート',
        description: 'スリランカ国内の公式試験センター（コロンボ）への受験申込み・願書記入を日本語専門スタッフが完全支援。'
      }
    ];
  }

  if (lang === 'si') {
    return [
      {
        title: 'සජීවී අන්තර්ක්‍රියාකාරී වීඩියෝ පන්ති',
        description: 'Zoom සහ Google Meet ඔස්සේ තත්‍ය කාලීනව පැවැත්වෙන පන්ති, අභ්‍යාස සහ ගුරුවරුන්ගේ ක්ෂණික මඟපෙන්වීම් සහිතයි.'
      },
      {
        title: 'පටිගත කළ පන්ති නැරඹීමේ පහසුකම',
        description: 'පන්තියක් මඟහැරුණාද? සෑම පන්තියක්ම උසස් තත්ත්වයෙන් පටිගත කර සිසුන්ට නැවත බැලීමට ලබාදේ.'
      },
      {
        title: 'සම්පූර්ණ අධ්‍යයන නිබන්ධන',
        description: 'බාගත හැකි PDF සටහන්, කන්ජි අභ්‍යාස පොත්, වචන මාලා සහ පසුගිය විභාග ප්‍රශ්න පත්‍ර කට්ටල නොමිලේ.'
      },
      {
        title: 'WhatsApp හරහා ගැටලු නිරාකරණය',
        description: 'පැය 24 පුරා ගුරුවරුන් සමඟ සෘජුව සම්බන්ධ වී ප්‍රශ්න ඇසීමට, ගෙදර වැඩ පරීක්ෂා කර ගැනීමට සහ උච්චාරණ පුහුණුවට.'
      },
      {
        title: 'JLPT සහ NAT විභාග ලියාපදිංචි සහය',
        description: 'ශ්‍රී ලංකාවේ පැවැත්වෙන නිල විභාග සඳහා නිවැරදිව අයදුම් කිරීමට පූර්ණ පරිපාලන මඟපෙන්වීම.'
      }
    ];
  }

  if (lang === 'ta') {
    return [
      {
        title: 'நேரலை ஊடாடும் வீடியோ வகுப்புகள்',
        description: 'Zoom மற்றும் Google Meet மூலம் நிகழ்நேர திரைப் பகிர்வு, தேர்வுகள் மற்றும் ஆசிரியரின் நேரடி வழிகாட்டலுடன் நடக்கும் வகுப்புகள்.'
      },
      {
        title: 'பதிவு செய்யப்பட்ட வகுப்புகள்',
        description: 'வகுப்பை தவறவிட்டீர்களா? ஒவ்வொரு வகுப்பும் பதிவு செய்யப்பட்டு மாணவர்களின் பாதுகாப்பான மறுபார்வைக்கு வழங்கப்படுகிறது.'
      },
      {
        title: 'முழுமையான கற்றல் கையேடுகள்',
        description: 'பதிவிறக்கம் செய்யக்கூடிய PDF பாடக் குறிப்புகள், கஞ்சி பயிற்சிகள் மற்றும் முந்தைய தேர்வு வினாத்தாள்கள்.'
      },
      {
        title: 'WhatsApp மூலம் சந்தேக தீர்வு',
        description: 'மாணவர்-ஆசிரியர் குழுக்கள் மூலம் 24 மணி நேரமும் சந்தேகங்களை தெளிவுபடுத்திக் கொள்ளும் நேரடி வசதி.'
      },
      {
        title: 'JLPT & NAT தேர்வு பதிவு உதவி',
        description: 'இலங்கையில் அதிகாரப்பூர்வ தேர்வு மையங்களுக்கான விண்ணப்ப நடைமுறைகளில் முழுமையான வழிகாட்டல்.'
      }
    ];
  }

  return [
    {
      title: 'Live Interactive Video Classes',
      description: 'Classes are conducted live via Zoom and Google Meet with real-time screen sharing, interactive quizzes, and instant teacher feedback.'
    },
    {
      title: 'Class Recordings & Catch-up Access',
      description: 'Missed a session? Every class is recorded in high definition and made available to registered students through a secure portal.'
    },
    {
      title: 'Comprehensive Study Materials',
      description: 'Students receive downloadable PDF textbook summaries, Kanji workbooks, vocabulary flashcard decks, and official question booklets.'
    },
    {
      title: 'Dedicated WhatsApp Doubt Clearance',
      description: 'Direct student-lecturer WhatsApp groups for 24/7 question clarification, homework corrections, and pronunciation guidance.'
    },
    {
      title: 'Exam Registration Assistance',
      description: 'Full administrative guidance for JLPT (Japanese Language Proficiency Test) and NAT-TEST registrations in Sri Lanka.'
    }
  ];
}

export function getLocalizedCareerModules(lang: SupportedLanguage) {
  if (lang === 'ja') {
    return [
      {
        id: 'mod-1',
        title: '英文CV・日本式履歴書の近代化作成',
        subtitle: '湾岸基準ATS最適化 ＆ 日本式履歴書・職務経歴書',
        description: '従来型の古いバイオデータから脱却し、アラブ首長国連邦（UAE/ドバイ）やモルディブ向けのATS対応英文レジュメ、および日本の採用基準に即した履歴書・職務経歴書を作成します。',
        points: [
          '時代遅れのフォーマットを排し、業務実績を数値化するアクション動詞の採用',
          '日本企業の書類選考を突破する「履歴書」と「職務経歴書」の二刀流作成指導',
          '採用担当者の求めるキーワードを盛り込んだ職務要約のブラッシュアップ'
        ]
      },
      {
        id: 'mod-2',
        title: '国際ビジネスコミュニケーション特訓',
        subtitle: '異文化適応とグローバル職場マナー',
        description: '外国人採用担当者に好印象を与えるビジネスマナー、敬語表現・丁寧な英語表現、および日本企業の基礎である「報・連・相（ほうれんそう）」を習得します。',
        points: [
          '日本企業のチームワークの基本「報連相（報告・連絡・相談）」の徹底指導',
          'オンライン面接における適切な照明・カメラアングル・入退室マナー',
          '言葉の壁を乗り越える積極的傾聴法と確認質問の技術'
        ]
      },
      {
        id: 'mod-3',
        title: '模擬面接とフィードバック特訓',
        subtitle: 'コンピテンシー面接・行動特性質問対策',
        description: 'STAR法（状況、課題、行動、成果）に基づく論理的な回答構成力を養い、想定質問への模擬インタビューと実践的なフィードバックを実施します。',
        points: [
          'STAR法（Situation, Task, Action, Result）による具体的回答フレームワーク',
          '録画による振り返りと講師による個別アドバイス',
          '自身の強みと弱みを前向きに伝える面接回答技術の確立'
        ]
      },
      {
        id: 'mod-4',
        title: '海外進出・ビザ書類整合性指導',
        subtitle: '合法的な就労ビザ要件と公的書類準備',
        description: '日本（特定技能・技術人文知識国際業務）、ドバイ・UAE、モルディブにおける適正な就労ビザ申請に必要な学歴・職歴・資格証明書の整備手順を学びます。',
        points: [
          '特定技能（SSW）評価試験と日本語基準の適合性チェック',
          '湾岸諸国就労ビザのための外務省（MOFA）公証および英訳書類準備',
          'モルディブリゾート業界におけるホスピタリティ適性要件の確認'
        ]
      }
    ];
  }

  if (lang === 'si') {
    return [
      {
        id: 'mod-1',
        title: 'නවීන CV සහ අයදුම්පත් සකස් කිරීම',
        subtitle: 'ගල්ෆ් ATS ප්‍රමිතීන් සහ ජපන් රිරෙකිෂෝ ආකෘති',
        description: 'සාම්ප්‍රදායික බයෝඩේටා වෙනුවට, ඩුබායි/UAE සහ මාලදිවයින් සඳහා ගැළපෙන නවීන ATS-ප්‍රශස්ත CV සහ ජපානය සඳහා ද්විභාෂා අයදුම්පත් සකස් කිරීම.',
        points: [
          'පැරණි අනවශ්‍ය විස්තර ඉවත් කර ජාත්‍යන්තර ප්‍රමිතීන්ට අනුව සකස් කිරීම',
          'ජපන් ආයතන සඳහා Rirekisho සහ Shokumu-Keirekisho ලියකියවිලි සම්පාදනය',
          'සේවා යෝජකයන් සොයන ප්‍රධාන සුදුසුකම් සහ වෘත්තීය වචන නිසි ලෙස ඇතුළත් කිරීම'
        ]
      },
      {
        id: 'mod-2',
        title: 'වෘත්තීය සන්නිවේදන කුසලතා',
        subtitle: 'විවිධ සංස්කෘතීන් තුළ කාර්යාලීය හැසිරීම්',
        description: 'ජාත්‍යන්තර සම්මුඛ පරීක්ෂකවරුන් ආකර්ෂණය කරගත හැකි ආචාරශීලී ඉංග්‍රීසි, ජපන් ගෞරවාර්ථ සහ කාර්යාලීය විනය පුහුණු කිරීම.',
        points: [
          'ජපන් ආයතනික සන්නිවේදනයේ පදනම වන "Hou-Ren-Sou" (වාර්තා කිරීම, සන්නිවේදනය, විමසීම) පුහුණුව',
          'මාර්ගගත (Online) සම්මුඛ පරීක්ෂණ හැසිරීම් සහ ආචාරශීලී බව',
          'භාෂා බාධක ජයගැනීමට අවශ්‍ය සාවධානව සවන්දීමේ කුසලතා'
        ]
      },
      {
        id: 'mod-3',
        title: 'සම්මුඛ පරීක්ෂණ පුහුණුව සහ ආදර්ශ පරීක්ෂණ',
        subtitle: 'STAR ක්‍රමවේදය ඔස්සේ විශ්වාසයෙන් පිළිතුරු සැපයීම',
        description: 'STAR (Situation, Task, Action, Result) ක්‍රමය ඔස්සේ තාර්කිකව පිළිතුරු සකස් කර ගැනීම සහ වීඩියෝ මඟින් සිදුකරන ආදර්ශ සම්මුඛ පරීක්ෂණ.',
        points: [
          'STAR ක්‍රමවේදය ප්‍රගුණ කර නිවැරදි ව්‍යුහගත පිළිතුරු සැපයීම',
          'පටිගත කරන ලද ආදර්ශ සම්මුඛ පරීක්ෂණ හරහා අඩුපාඩු නිවැරදි කරගැනීම',
          'දුෂ්කර චර්යාත්මක ප්‍රශ්නවලට අවංකව සහ දක්ෂ ලෙස මුහුණදීම'
        ]
      },
      {
        id: 'mod-4',
        title: 'ජාත්‍යන්තර අවස්ථා සහ වීසා ලියකියවිලි සූදානම',
        subtitle: 'නීත්‍යානුකූල වීසා අවශ්‍යතා සහ ලිපිලේඛන පෙළගැස්ම',
        description: 'ජපානය, ඩුබායි/UAE සහ මාලදිවයින තුළ නීත්‍යානුකූල වෘත්තීය ගමන් මඟ සඳහා අවශ්‍ය නිවැරදි අධ්‍යාපනික සහ සේවා ලියකියවිලි තහවුරු කරගැනීම.',
        points: [
          'ජපානයේ SSW (Tokutei Ginou) විභාග සහ භාෂා සුදුසුකම් පරීක්ෂාව',
          'විදේශ කටයුතු අමාත්‍යාංශ (MOFA) සහතික කිරීම් සහ පරිවර්තන උපදෙස්',
          'මාලදිවයින් සංචාරක හෝටල් ක්ෂේත්‍රයේ රැකියා අවශ්‍යතා හඳුනාගැනීම'
        ]
      }
    ];
  }

  if (lang === 'ta') {
    return [
      {
        id: 'mod-1',
        title: 'நவீன CV மற்றும் விண்ணப்பப் படிவங்கள்',
        subtitle: 'வளைகுடா ATS தரம் & ஜப்பானிய விண்ணப்ப வடிவங்கள்',
        description: 'பழைய பயோடேட்டா முறைகளை மாற்றி, துபாய்/யுஏஇ மற்றும் மாலத்தீவுகளுக்கான சர்வதேச தரத்திலான CV மற்றும் ஜப்பானிய விண்ணப்பங்களை உருவாக்குதல்.',
        points: [
          'சர்வதேச முதலாளிகளை கவரும் வகையில் சாதனைகளை முன்னிலைப்படுத்துதல்',
          'ஜப்பானிய Rirekisho மற்றும் பணி வரலாற்று ஆவணங்களை தயாரித்தல்',
          'வேலைவாய்ப்புத் துறைகளுக்கு தேவையான முக்கிய திறன்களை சரியாக இணைத்தல்'
        ]
      },
      {
        id: 'mod-2',
        title: 'தொழில்முறை தகவல் தொடர்புத் திறன்',
        subtitle: 'சர்வதேச பணியிட நடத்தை மற்றும் ஒழுங்குமுறை',
        description: 'நேர்காணல் செய்பவர்களை கவரும் வகையில் மரியாதையான மொழிப் பயன்பாடு, உடல் மொழி மற்றும் ஜப்பானிய பணி நெறிமுறைகளை கற்பித்தல்.',
        points: [
          'ஜப்பானிய "Hou-Ren-Sou" (அறிக்கை-தொடர்பு-ஆலோசனை) ஒழுங்குமுறை',
          'நேரலை வீடியோ நேர்காணல் பழக்கவழக்கங்கள்',
          'மொழி தடைகளை சமாளிக்கும் பொறுமையான கவனிக்கும் திறன்'
        ]
      },
      {
        id: 'mod-3',
        title: 'நேர்காணல் பயிற்சி மற்றும் மாதிரி நேர்காணல்',
        subtitle: 'STAR முறையில் தன்னம்பிக்கையுடன் பதிலளித்தல்',
        description: 'STAR (Situation, Task, Action, Result) அணுகுமுறையைப் பயன்படுத்தி பதிலளிக்கும் திறன் மற்றும் வீடியோ மாதிரி நேர்காணல்கள்.',
        points: [
          'STAR முறையை சிறப்பாக பயன்படுத்தி தெளிவான பதில்களை வழங்குதல்',
          'மாதிரி நேர்காணல் மூலம் தவறுகளை திருத்துதல்',
          'சிக்கலான நடத்தை வினாக்களுக்கு நேர்மையாகவும் புத்திசாலித்தனமாகவும் பதிலளித்தல்'
        ]
      },
      {
        id: 'mod-4',
        title: 'சர்வதேச வாய்ப்புகள் மற்றும் விசா ஆவண தயார்படுத்தல்',
        subtitle: 'சட்டப்பூர்வ விசா தேவைகள் மற்றும் சான்றிதழ் வழிகாட்டல்',
        description: 'ஜப்பான், துபாய்/யுஏஇ, மாலத்தீவு ஆகியவற்றில் சட்டப்பூர்வ வேலைவாய்ப்பிற்கான கல்வி, அனுபவ ஆவணங்களை தயார் செய்யும் வழிகாட்டல்.',
        points: [
          'ஜப்பான் SSW திறன் மற்றும் மொழித் தகுதி வழிகாட்டல்',
          'வெளியுறவு அமைச்சக (MOFA) அத்தாட்சி மற்றும் மொழிபெயர்ப்பு நடைமுறைகள்',
          'மாலத்தீவு விருந்தோம்பல் துறைக்கான சுயவிவர மேம்பாடு'
        ]
      }
    ];
  }

  return [
    {
      id: 'mod-1',
      title: 'CV & Resume Modernization',
      subtitle: 'Gulf Standard & Japanese Rirekisho Formats',
      description: 'Transform traditional biodatas into modern, ATS-friendly executive CVs tailored specifically for Gulf employers (UAE/Dubai, Maldives) and dual-language Japanese application forms.',
      points: [
        'Removal of outdated biodata formatting and excessive personal trivia',
        'Action-verb bullet points quantifying achievements and responsibilities',
        'Japanese Rirekisho & Shokumu-Keirekisho dual document preparation',
        'Targeted keyword alignment with verified employer requirements'
      ]
    },
    {
      id: 'mod-2',
      title: 'Professional Communication Skills',
      subtitle: 'Cross-Cultural Workplace Fluency',
      description: 'Master interpersonal workplace communication that impresses international interviewers, including polite Japanese business honorifics, courteous English diction, and workplace etiquette.',
      points: [
        'The Japanese Hou-Ren-Sou (Report-Communicate-Consult) discipline',
        'Proper virtual meeting etiquette, lighting, and camera presence',
        'Professional email writing, polite inquiries, and follow-ups',
        'Active listening skills to overcome language barrier misunderstandings'
      ]
    },
    {
      id: 'mod-3',
      title: 'Interview Preparation & Mock Drills',
      subtitle: 'Competency-Based Interview Readiness',
      description: 'Prepare thoroughly for behavioral, technical, and situational interviews with simulated video calls, feedback sessions, and proven structured answering frameworks.',
      points: [
        'STAR Framework mastery: Situation, Task, Action, Result',
        'Roleplay simulations with recorded review and feedback',
        'Handling tricky behavioral questions with honesty and grace',
        'Salary expectation negotiation etiquette within legal local benchmarks'
      ]
    },
    {
      id: 'mod-4',
      title: 'International Opportunity Alignment',
      subtitle: 'Destinations & Visa Document Preparedness',
      description: 'Understand the exact prerequisites, skill criteria, and authentic documentation steps required for legal career avenues in Japan, Dubai, the UAE, and the Maldives.',
      points: [
        'Education and experience verification for Gulf employment visas',
        'Specified Skilled Worker (SSW) Tokutei Ginou skill and language benchmark matching',
        'Maldives luxury resort hospitality profile alignment',
        'Ministry of Foreign Affairs (MOFA) attestation and certified translations'
      ]
    }
  ];
}


