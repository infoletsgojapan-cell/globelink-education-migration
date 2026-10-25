import { SearchResultItem, SearchCategory, SupportedLanguage } from '../types';
import { JAPANESE_COURSES } from '../data/courses';
import { EXAM_RESOURCES } from '../data/examResources';
import { INTERVIEW_QUESTIONS } from '../data/interviewQuestions';
import { INITIAL_ANNOUNCEMENTS } from '../data/announcements';
import { VERIFIED_VACANCIES } from '../data/vacancies';

// Build the comprehensive static search index combining all core site resources
export const SEARCH_INDEX: SearchResultItem[] = [
  // --- 1. Japanese Courses and Class Fees ---
  ...JAPANESE_COURSES.map(course => ({
    id: `course-${course.id}`,
    title: `${course.title} (${course.code})`,
    titleJa: course.japaneseTitle || course.title,
    category: 'Courses & Fees' as SearchCategory,
    description: `Fee: ${course.feeLkr} • Duration: ${course.duration} (${course.hours}) • Mode: ${course.mode}. Schedule: ${course.schedule}`,
    targetPage: 'japanese-language-courses' as const,
    targetHash: `course-${course.id}`,
    badge: course.level,
    keywords: [
      course.title,
      course.code,
      course.level,
      'fee',
      'fees',
      'installment',
      'course fee',
      'lkr',
      'tuition',
      course.targetAudience,
      ...course.highlights,
      ...course.syllabusOverview,
      course.japaneseTitle || '',
      'පාඨමාලා',
      'ගාස්තු',
      'වාරික',
      'பாடநெறி',
      'கட்டணம்',
      'படிப்புகள்',
      '受講料',
      '学費',
      'コース'
    ]
  })),

  // --- 2. Japanese Exams & Registration (JLPT, EJU, NAT, JLCT, JFT, SSW) ---
  ...EXAM_RESOURCES.map(exam => ({
    id: `exam-${exam.id}`,
    title: `${exam.name} (${exam.acronym})`,
    titleJa: exam.japaneseName,
    category: 'Exams & EJU' as SearchCategory,
    description: exam.shortExplanation,
    targetPage: 'japanese-exams' as const,
    targetHash: exam.id,
    badge: exam.badgeLabel || exam.acronym,
    externalUrl: exam.registrationLink?.url || exam.officialReferenceLinks[0]?.url,
    keywords: [
      exam.name,
      exam.acronym,
      exam.japaneseName,
      'registration',
      'exam dates',
      'past papers',
      'test',
      ...exam.levelsOrSectors,
      exam.globeLinkPreparation,
      'විභාග',
      'ලියාපදිංචිය',
      'தேர்வு',
      'பதிவு',
      '試験',
      '出願',
      '受験'
    ]
  })),

  // --- 3. EJU Special Resource ---
  {
    id: 'eju-special-guidance',
    title: 'EJU — Examination for Japanese University Admission Preparation',
    titleSi: 'EJU — ජපන් විශ්වවිද්‍යාල ප්‍රවේශ විභාග මඟපෙන්වීම',
    titleTa: 'EJU — ஜப்பானிய பல்கலைக்கழக சேர்க்கை தேர்வு வழிகாட்டல்',
    titleJa: '日本留学試験（EJU）大学進学準備ガイダンス',
    category: 'Exams & EJU',
    description: 'Academic Japanese proficiency, science, general studies & mathematics preparation for Sri Lankan international students entering Japanese universities. Official entrance reference included.',
    descriptionSi: 'ජපානයේ විශ්වවිද්‍යාල වෙත ඇතුළත් වීමට බලාපොරොත්තු වන සිසුන් සඳහා EJU විෂයයන්, ශාස්ත්‍රීය ජපන් භාෂාව සහ ලේඛන සකස් කිරීමේ මඟපෙන්වීම.',
    descriptionTa: 'ஜப்பான் பல்கலைக்கழகங்களில் உயர்கல்வி பயில விரும்பும் சர்வதேச மாணவர்களுக்கான EJU தேர்வு தயாரிப்பு மற்றும் வழிகாட்டல்.',
    descriptionJa: '国公立・私立大学進学を目指す留学生のためのEJU対策（日本語、総合科目、理科、数学）および出願・面接対策指導。',
    targetPage: 'japanese-exams',
    targetHash: 'exam-eju',
    externalUrl: 'https://share.google/lYlVRmLIDBw3YHReI',
    badge: 'University Entrance Gateway',
    keywords: [
      'eju',
      'university admission',
      'japan university',
      'degree in japan',
      'mext',
      'jasso',
      'undergraduate',
      'sop',
      'விශ්වවිද්‍යාල',
      'பல்கலைக்கழகம்',
      '大学進学',
      '留学試験'
    ]
  },

  // --- 4. SSW Skill Assessment Exams & Topics ---
  {
    id: 'ssw-agriculture-livestock',
    title: 'SSW Agriculture & Livestock Skill Assessment Examination',
    titleSi: 'SSW කෘෂිකාර්මික හා පශු සම්පත් නිපුණතා විභාගය',
    titleTa: 'SSW விவசாயம் மற்றும் கால்நடை பராமரிப்பு திறன் தேர்வு',
    titleJa: '特定技能 農業・畜産技能測定試験（プロメトリック）',
    category: 'SSW & Visas',
    description: 'Crop cultivation, livestock rearing, agricultural terminology in Japanese, Prometric CBT format, and testing guidelines for Specified Skilled Worker candidates.',
    targetPage: 'japanese-exams',
    targetHash: 'exam-ssw',
    externalUrl: 'https://www.ssw.go.jp/en/',
    badge: 'SSW Specified Sector',
    keywords: [
      'agriculture',
      'livestock',
      'crop',
      'farming',
      'prometric',
      'cbt',
      'ssw',
      'tokutei ginou',
      'nogyo',
      'chikusann',
      'කෘෂිකර්ම',
      'පශු සම්පත්',
      'விவசாயம்',
      'கால்நடை',
      '農業',
      '畜産'
    ]
  },
  {
    id: 'ssw-nursing-care',
    title: 'SSW Nursing Care (Kaigo) Skill Assessment & Japanese Evaluation',
    titleSi: 'SSW සාත්තු සේවය (Kaigo) නිපුණතා හා ජපන් භාෂා පරීක්ෂණය',
    titleTa: 'SSW முதியோர் பராமரிப்பு (Kaigo) திறன் தேர்வு',
    titleJa: '特定技能 介護技能評価試験・介護日本語評価試験',
    category: 'SSW & Visas',
    description: 'Prometric-administered Nursing Care Skills evaluation test and Nursing Care Japanese language test for aged care institutions in Japan.',
    targetPage: 'japanese-exams',
    targetHash: 'exam-ssw',
    externalUrl: 'https://www.ssw.go.jp/en/',
    badge: 'High Demand Sector',
    keywords: [
      'nursing care',
      'kaigo',
      'caregiver',
      'elderly care',
      'healthcare',
      'hospital',
      'සාත්තු සේවය',
      'பராமரிப்பு',
      '介護',
      '介護日本語'
    ]
  },
  {
    id: 'ssw-food-service',
    title: 'SSW Food Service Industry & Food Processing Skills Test',
    titleSi: 'SSW ආහාර සේවා හා ආහාර සැකසුම් නිපුණතා විභාගය',
    titleTa: 'SSW உணவு சேவை மற்றும் உணவு பதப்படுத்துதல் திறன் தேர்வு',
    titleJa: '特定技能 外食業・飲食料品製造業技能測定試験',
    category: 'SSW & Visas',
    description: 'Hygiene management, food safety standards (HACCP), customer service in Japanese, and restaurant operations assessment.',
    targetPage: 'japanese-exams',
    targetHash: 'exam-ssw',
    badge: 'SSW Hospitality',
    keywords: [
      'food service',
      'restaurant',
      'food processing',
      'gaishoku',
      'haccp',
      'kitchen',
      'waiter',
      'ආහාර සේවා',
      'உணவு சேவை',
      '外食業',
      '飲食料品製造業'
    ]
  },
  {
    id: 'ssw-construction',
    title: 'SSW Construction & Building Maintenance Skills Test',
    titleSi: 'SSW ඉදිකිරීම් හා ගොඩනැගිලි පිරිසිදු කිරීමේ නිපුණතා විභාගය',
    titleTa: 'SSW கட்டுமானம் மற்றும் கட்டிட பராமரிப்பு திறன் தேர்வு',
    titleJa: '特定技能 建設分野・ビルクリーニング技能測定試験',
    category: 'SSW & Visas',
    description: 'Civil engineering, carpentry, formwork, scaffolding, electrical installation, and industrial safety compliance testing.',
    targetPage: 'japanese-exams',
    targetHash: 'exam-ssw',
    badge: 'SSW Technical',
    keywords: [
      'construction',
      'building maintenance',
      'scaffolding',
      'carpentry',
      'civil engineering',
      'kensetsu',
      'ඉදිකිරීම්',
      'கட்டுமானம்',
      '建設',
      'ビルクリーニング'
    ]
  },

  // --- 5. Confirmed Visa Pathways: TITP, SSW, HSP, Student ---
  {
    id: 'visa-titp',
    title: 'TITP — Technical Intern Training Program Compliance & Standards',
    titleSi: 'TITP — කාර්මික පුහුණුලාභී වැඩසටහන සහ නීතිමය උපදේශනය',
    titleTa: 'TITP — தொழில்நுட்ப பயிற்சி திட்டம் மற்றும் சட்ட விதிமுறைகள்',
    titleJa: '技能実習制度（TITP / OTIT）適正管理と法令遵守ガイダンス',
    category: 'SSW & Visas',
    description: 'Detailed explanation of Technical Intern Training Program supervised by OTIT. Focuses on bilateral standards, skill transfer, contract verification, and protection of trainee rights.',
    targetPage: 'migration-visa-support',
    targetHash: 'titp-pathway',
    badge: 'OTIT Supervised',
    keywords: [
      'titp',
      'technical intern',
      'trainee',
      'otit',
      'jiko',
      'ginou jisshuu',
      'training visa',
      'කාර්මික පුහුණු',
      'தொழில்நுட்ப பயிற்சி',
      '技能実習',
      '外国人技能実習機構'
    ]
  },
  {
    id: 'visa-ssw-framework',
    title: 'SSW — Specified Skilled Worker (Category 1 & 2) Residence Status',
    titleSi: 'SSW — නිශ්චිත නිපුණතා ශ්‍රමික (කාණ්ඩ 1 සහ 2) පදිංචි තත්ත්වය',
    titleTa: 'SSW — குறிப்பிட்ட திறன் தொழிலாளர் (வகை 1 மற்றும் 2) விசா நிலை',
    titleJa: '特定技能（1号・2号）在留資格制度・受入基準',
    category: 'SSW & Visas',
    description: 'Immigration Services Agency of Japan regulations for SSW (i) and SSW (ii). Direct employment contract conditions, social insurance, and equal pay standards.',
    targetPage: 'migration-visa-support',
    targetHash: 'ssw-pathway',
    badge: 'Residence Status',
    keywords: [
      'ssw',
      'specified skilled worker',
      'tokutei ginou 1',
      'tokutei ginou 2',
      'work visa japan',
      'status of residence',
      'immigration japan',
      'නිශ්චිත නිපුණතා',
      'குறிப்பிட்ட திறன்',
      '特定技能1号',
      '特定技能2号',
      '在留資格'
    ]
  },
  {
    id: 'visa-hsp-framework',
    title: 'HSP — Highly Skilled Professional Point-Based Immigration to Japan',
    titleSi: 'HSP — ඉහළ නිපුණතා වෘත්තිකයන් සඳහා ලකුණු ක්‍රමය මත පදනම් වූ වීසා',
    titleTa: 'HSP — உயர் திறன் தொழில் வல்லுநர்களுக்கான புள்ளி அடிப்படையிலான விசா',
    titleJa: '高度専門職（HSP）ポイント制優遇制度・永住申請要件',
    category: 'SSW & Visas',
    description: 'Accelerated permanent residency, point calculation for academic degrees, professional experience, high annual income, and Japanese language bonuses.',
    targetPage: 'migration-visa-support',
    targetHash: 'hsp-pathway',
    badge: 'Points-Based Pathway',
    keywords: [
      'hsp',
      'highly skilled professional',
      'points system',
      'permanent residency japan',
      'fast track pr',
      'kodo senmon shoku',
      'ඉහළ නිපුණතා',
      'உயர் திறன்',
      '高度専門職',
      '高度人材'
    ]
  },

  // --- 6. Career Questions & Answers ---
  ...INTERVIEW_QUESTIONS.map(q => ({
    id: `qa-${q.id}`,
    title: q.questionEn,
    titleSi: q.questionSi,
    titleTa: q.questionTa,
    titleJa: q.questionJa,
    category: 'Career Q&A' as SearchCategory,
    description: `Category: ${q.category}. Sample answer: "${q.sampleAnswerEn.substring(0, 110)}..."`,
    descriptionSi: q.sampleAnswerSi ? `පිළිතුර: "${q.sampleAnswerSi.substring(0, 100)}..."` : undefined,
    descriptionTa: q.sampleAnswerTa ? `பதில்: "${q.sampleAnswerTa.substring(0, 100)}..."` : undefined,
    descriptionJa: q.sampleAnswerJa ? `回答例: 「${q.sampleAnswerJa.substring(0, 100)}...」` : undefined,
    targetPage: 'career-preparation' as const,
    targetHash: `q-${q.id}`,
    badge: q.category,
    keywords: [
      q.questionEn,
      q.questionJa || '',
      q.questionSi || '',
      q.questionTa || '',
      q.category,
      q.sampleAnswerEn,
      q.personalizationTip,
      'interview',
      'questions',
      'answers',
      'hr',
      'job interview',
      'japanese manners',
      'keigo',
      'jikoshoukai',
      'workplace communication',
      'සම්මුඛ පරීක්ෂණ',
      'ප්‍රශ්නෝත්තර',
      'நேர்காணல்',
      'கேள்வி பதில்',
      '面接',
      '自己紹介',
      '志望動機',
      '長所'
    ]
  })),

  // --- 7. Upcoming Events & Announcements ---
  ...INITIAL_ANNOUNCEMENTS.map(ann => ({
    id: `ann-${ann.id}`,
    title: ann.title,
    titleSi: ann.titleSi,
    titleTa: ann.titleTa,
    titleJa: ann.titleJa,
    category: 'Events & Vacancies' as SearchCategory,
    description: `${ann.description} • Status: ${ann.status} • Format: ${ann.format}`,
    descriptionSi: ann.descriptionSi,
    descriptionTa: ann.descriptionTa,
    descriptionJa: ann.descriptionJa,
    targetPage: 'japanese-exams' as const,
    targetHash: 'announcements-section',
    badge: ann.status,
    externalUrl: ann.officialUrl,
    keywords: [
      ann.title,
      ann.category,
      ann.description,
      ann.status,
      ann.format,
      ann.titleSi || '',
      ann.titleTa || '',
      ann.titleJa || '',
      'seminar',
      'webinar',
      'announcement',
      'dates',
      'intake',
      'deadline',
      'සම්මන්ත්‍රණ',
      'නිවේදන',
      'கருத்தரங்கு',
      'அறிவிப்பு',
      '説明会',
      'セミナー',
      '募集'
    ]
  })),

  // --- 8. Vacancies ---
  ...VERIFIED_VACANCIES.map(v => ({
    id: `vacancy-${v.id}`,
    title: `${v.title} (${v.country} - ${v.sector})`,
    category: 'Events & Vacancies' as SearchCategory,
    description: `${v.description} • Deadline: ${v.deadline} • Requirement: ${v.languageRequirements}`,
    targetPage: 'international-careers' as const,
    targetHash: `vacancy-${v.id}`,
    badge: v.verificationLabel,
    keywords: [
      v.title,
      v.country,
      v.sector,
      v.description,
      v.languageRequirements,
      'job',
      'vacancy',
      'career',
      'employment',
      'රැකියා',
      'புரප්පාඩු',
      'வேலைவாய்ப்பு',
      '求人',
      '募集'
    ]
  })),

  // --- 9. Student Registration & Official Reference Resources ---
  {
    id: 'resource-installment-tracker',
    title: 'Class Fees Installment Tracker',
    titleSi: 'පන්ති ගාස්තු වාරික ලුහුබැඳීමේ පද්ධතිය',
    titleTa: 'வகுப்பு கட்டண தவணை கண்காணிப்பு தளம்',
    titleJa: '受講料分割納付管理ポータル（Tracker）',
    category: 'Resources & Tools',
    description: 'Official verified tracking portal for GlobeLink / Let\'s Go Japan students to submit payment slips, track course fee installments, and receive digital receipts.',
    descriptionSi: 'GlobeLink සිසුන්ට තම පාඨමාලා ගාස්තු වාරික ගෙවීම් වාර්තා කිරීමට සහ රිසිට්පත් ලබාගැනීමට ඇති නිල පද්ධතිය.',
    descriptionTa: 'மாணவர்கள் தங்கள் பாடநெறி கட்டண தவணைகளை பதிவு செய்து ரசீதுகளைப் பெற உதவும் உத்தியோகபூர்வ தளம்.',
    descriptionJa: 'GlobeLink受講生のための分割納付申請・振込明細照合・公式領収書発行ポータル。',
    targetPage: 'japan-resources',
    targetHash: 'installment-tracker',
    externalUrl: 'https://forms.gle/Ct3Kd2KSeLwDsxNf9',
    badge: 'Verified Student Tool',
    keywords: [
      'installment tracker',
      'class fees',
      'fee tracker',
      'payment slip',
      'bank deposit',
      'receipt',
      'balance',
      'forms.gle',
      'පාඨමාලා ගාස්තු',
      'වාරික ලුහුබැඳීම',
      'රිසිට්පත්',
      'கட்டண தவணை',
      'வங்கி ரசீது',
      '受講料',
      '分割払い',
      '納付管理',
      '振込明細'
    ]
  },
  {
    id: 'resource-ssw-official-portal',
    title: 'Official SSW Information Portal (Immigration Services Agency of Japan)',
    titleSi: 'SSW නිල තොරතුරු ද්වාරය (ජපන් ආගමන සේවා ඒජන්සිය)',
    titleTa: 'அதிகாரப்பூர்வ SSW தகவல் தளம் (ஜப்பான் குடிவரவு சேவை நிறுவனம்)',
    titleJa: '特定技能総合支援サイト（出入国在留管理庁 公式ポータル）',
    category: 'Resources & Tools',
    description: 'Official government portal with comprehensive requirements, testing regulations, Bilateral MOC standards, and application procedures for Specified Skilled Workers in Japan.',
    targetPage: 'japan-resources',
    targetHash: 'resource-ssw',
    externalUrl: 'https://www.ssw.go.jp/en/',
    badge: 'Official Government Resource',
    keywords: [
      'ssw portal',
      'ssw.go.jp',
      'immigration services agency',
      'moj',
      'official japan government',
      'tokutei ginou official',
      'නිල රාජ්‍ය සම්පත',
      'அரசு தளம்',
      '出入国在留管理庁',
      '特定技能総合支援'
    ]
  },
  {
    id: 'resource-nbac-education',
    title: 'NBAC Education Resource & Academic Preparatory Portal',
    titleSi: 'NBAC අධ්‍යාපනික සම්පත් ද්වාරය',
    titleTa: 'NBAC கல்வி மற்றும் உயர்கல்வி வழிகாட்டல் தளம்',
    titleJa: 'NBAC 教育・進学支援リソースポータル',
    category: 'Resources & Tools',
    description: 'External specialized educational guidance resource for Japanese language education and academic preparation pathways.',
    targetPage: 'japan-resources',
    targetHash: 'resource-nbac',
    externalUrl: 'https://nbac-edu.com/',
    badge: 'External Education Resource',
    keywords: [
      'nbac',
      'nbac-edu.com',
      'academic preparation',
      'japan college',
      'japanese study resource',
      'අධ්‍යාපනික සම්පත',
      'கல்வி தளம்',
      '進学支援'
    ]
  },
  {
    id: 'resource-kashikoi-portal',
    title: 'Kashikoi Japanese Language & Learning Platform',
    titleSi: 'Kashikoi ජපන් භාෂා ඉගෙනුම් ද්වාරය',
    titleTa: 'Kashikoi ஜப்பானிய மொழி கற்றல் தளம்',
    titleJa: 'Kashikoi スリランカ向け日本語学習支援プラットフォーム',
    category: 'Resources & Tools',
    description: 'Sri Lankan dedicated Japanese language learning portal providing exam preparation drills, vocabulary aids, and grammar reference tools.',
    targetPage: 'japan-resources',
    targetHash: 'resource-kashikoi',
    externalUrl: 'https://kashikoi.lk/',
    badge: 'External Japanese Language & Education Resource',
    keywords: [
      'kashikoi',
      'kashikoi.lk',
      'japanese language sri lanka',
      'online japanese',
      'kanji tool',
      'nihongo learning',
      'ජපන් භාෂා ඉගෙනුම',
      'ஜப்பானிய மொழி',
      '日本語学習'
    ]
  },
  {
    id: 'resource-agriculture-livestock-info',
    title: 'Japan Agriculture & Livestock Career & Sector Information',
    titleSi: 'ජපානයේ කෘෂිකාර්මික හා පශු සම්පත් වෘත්තීය තොරතුරු',
    titleTa: 'ஜப்பான் விவசாயம் மற்றும் கால்நடை தொழில் வழிகாட்டல்',
    titleJa: '日本 農業・畜産キャリア情報・産業概要',
    category: 'Resources & Tools',
    description: 'External recruitment and program information regarding Japan’s agricultural and livestock sectors. Refer to official SSW guidelines for statutory test registration.',
    targetPage: 'japan-resources',
    targetHash: 'resource-agriculture',
    externalUrl: 'https://talentmobility.world/japan-agriculture-livestock',
    badge: 'External Recruitment / Program Info',
    keywords: [
      'agriculture livestock info',
      'talent mobility',
      'farming in japan',
      'greenhouse',
      'dairy farming',
      'livestock japan',
      'කෘෂිකාර්මික තොරතුරු',
      'விவசாய தகவல்',
      '農業情報',
      '畜産キャリア'
    ]
  },
  {
    id: 'resource-line-consultation',
    title: 'Direct LINE Advisory Channel (GlobeLink Bilingual Support)',
    titleSi: 'සෘජු LINE උපදේශන සේවාව (GlobeLink)',
    titleTa: 'நேரடி LINE ஆலோசனை சேவை (GlobeLink)',
    titleJa: '公式LINE個別相談窓口（バイリンガル対応）',
    category: 'Resources & Tools',
    description: 'Connect directly with our bilingual coordinators on LINE for real-time document advice, visa guidance, and Japan education inquiries.',
    targetPage: 'japan-resources',
    targetHash: 'line-contact',
    externalUrl: 'https://line.me/ti/p/XPFcMlyXYp',
    badge: 'Direct Official Support',
    keywords: [
      'line',
      'line app',
      'contact line',
      'chat',
      'messenger',
      'bilingual',
      'japanese counselor',
      'line.me',
      'සම්බන්ධ වන්න',
      'தொடர்புகொள்ள',
      'LINE相談',
      '公式ライン'
    ]
  }
];

// Search execution function supporting multi-word queries and multilingual match
export function searchWebsite(
  query: string,
  categoryFilter: SearchCategory | 'All' = 'All',
  lang: SupportedLanguage = 'en'
): SearchResultItem[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return [];

  const queryTerms = cleanQuery.split(/\s+/).filter(Boolean);

  return SEARCH_INDEX.filter(item => {
    // Category filtering
    if (categoryFilter !== 'All' && item.category !== categoryFilter) {
      return false;
    }

    // Build unified searchable text blob
    const fieldsToSearch = [
      item.title,
      item.titleSi || '',
      item.titleTa || '',
      item.titleJa || '',
      item.description,
      item.descriptionSi || '',
      item.descriptionTa || '',
      item.descriptionJa || '',
      item.badge || '',
      item.category,
      ...item.keywords
    ].join(' ').toLowerCase();

    // Check if every query term appears in the search text
    return queryTerms.every(term => fieldsToSearch.includes(term));
  });
}
