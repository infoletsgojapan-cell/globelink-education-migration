import { SupportedLanguage } from '../types';

export interface TranslationDictionary {
  // Navigation
  nav: {
    home: string;
    about: string;
    letsGoJapan: string;
    japaneseExams: string;
    japaneseCourses: string;
    careerPrep: string;
    educationConsultancy: string;
    destinations: string;
    visaCompliance: string;
    contact: string;
    bookConsultation: string;
    allLanguages: string;
    selectLanguage: string;
    hotline: string;
    officeLocation: string;
    intakeOpen: string;
  };
  // Exam Centre
  exams: {
    pageTitle: string;
    pageSubtitle: string;
    badge: string;
    searchPlaceholder: string;
    filterAll: string;
    viewOfficial: string;
    registerNow: string;
    askWhatsApp: string;
    globeLinkPrepTitle: string;
    availableLevels: string;
    officialLinksTitle: string;
    ejuSpecialTitle: string;
    ejuSpecialDesc: string;
    ejuDisclaimer: string;
    sswSpecialTitle: string;
    sswSpecialDesc: string;
    sswDisclaimer: string;
    verifiedReference: string;
  };
  // Announcements & Events
  announcements: {
    sectionTitle: string;
    sectionSubtitle: string;
    filterAll: string;
    emptyTitle: string;
    emptyDesc: string;
    statusUpcoming: string;
    statusOpen: string;
    statusClosingSoon: string;
    statusCompleted: string;
    statusPostponed: string;
    deadlineLabel: string;
    opensLabel: string;
    formatOnline: string;
    formatOffline: string;
    formatHybrid: string;
    viewLink: string;
  };
  // Vacancies
  vacancies: {
    sectionTitle: string;
    sectionSubtitle: string;
    noVacanciesTitle: string;
    noVacanciesDesc: string;
    contactCareerPartner: string;
    verifiedBadge: string;
    eligibility: string;
    languageReq: string;
    deadline: string;
  };
  // Career Q&A
  careerQA: {
    title: string;
    subtitle: string;
    titleSubtitle?: string;
    browseTab: string;
    practiceTab: string;
    searchPlaceholder: string;
    allCategories: string;
    showAnswer: string;
    hideAnswer: string;
    copyAnswer: string;
    copied: string;
    questionOf: string;
    previous: string;
    next: string;
    personalizeNotice: string;
    askGuidance: string;
    educationalNotice: string;
  };
  // Forms & Common
  common: {
    name: string;
    phone: string;
    email: string;
    destination: string;
    serviceCategory: string;
    interest: string;
    preferredContact: string;
    message: string;
    consentText: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
    whatsappFallback: string;
    privacyNotice: string;
    close: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      letsGoJapan: "Let's Go Japan",
      japaneseExams: 'Japanese Exams & Registration',
      japaneseCourses: 'Japanese Courses',
      careerPrep: 'Career Preparation',
      educationConsultancy: 'Education Consultancy',
      destinations: 'Destinations',
      visaCompliance: 'Visa & Compliance',
      contact: 'Contact',
      bookConsultation: 'Book a Consultation',
      allLanguages: 'All Languages',
      selectLanguage: 'Select Language',
      hotline: 'Hotline',
      officeLocation: 'Nittambuwa Office: Horagolla, Sri Lanka',
      intakeOpen: '2026/2027 Japanese Intake Batches Open'
    },
    exams: {
      pageTitle: 'Japanese Examination Resource Centre',
      pageSubtitle: 'Comprehensive examination guidelines, university entrance (EJU) paths, Prometric SSW skills assessments, and official registration references for Sri Lankan candidates.',
      badge: "Let's Go Japan • Examination & University Prep",
      searchPlaceholder: 'Search exams (JLPT, EJU, NAT, Prometric, Agriculture, SSW)...',
      filterAll: 'All Exams & Pathways',
      viewOfficial: 'View Official Resource',
      registerNow: 'Registration Guide',
      askWhatsApp: 'Ask About Exam Preparation',
      globeLinkPrepTitle: 'GlobeLink Preparation Guidance:',
      availableLevels: 'Target Levels / Sectors:',
      officialLinksTitle: 'Official Links & Portals:',
      ejuSpecialTitle: 'EJU — Examination for Japanese University Admission',
      ejuSpecialDesc: 'The EJU is the standardized testing mechanism utilized by national, public, and prestigious private Japanese universities to evaluate international candidates in Japanese academic proficiency, basic mathematics, and science/general studies.',
      ejuDisclaimer: 'Important Note: Passing or scoring in the EJU does not guarantee admission into Japanese universities. Each university faculty enforces independent screening criteria, document verification, interview standards, and minimum score thresholds.',
      sswSpecialTitle: 'Specified Skilled Worker (SSW Tokutei Ginou) Skill Tests',
      sswSpecialDesc: 'Prometric-administered occupational assessments evaluate professional competence across regulated industries including Agriculture, Nursing Care, Food Service, and Construction.',
      sswDisclaimer: 'Legal Notice: Test registration and passing a skills exam do not guarantee job placement or visa issuance. Candidates must secure verified employment contracts and comply with Immigration Services Agency of Japan regulations.',
      verifiedReference: 'Verified Resource'
    },
    announcements: {
      sectionTitle: 'Announcements & Upcoming Events',
      sectionSubtitle: 'Stay updated with upcoming exam dates, official registration windows, free online guidance webinars, and verified language workshops.',
      filterAll: 'All Announcements',
      emptyTitle: 'No Upcoming Announcements Right Now',
      emptyDesc: 'Official exam schedules and seminar dates are posted immediately following verified notification from testing bodies. Check back soon or contact our advisory desk.',
      statusUpcoming: 'Upcoming',
      statusOpen: 'Registration Open',
      statusClosingSoon: 'Closing Soon',
      statusCompleted: 'Completed',
      statusPostponed: 'Postponed',
      deadlineLabel: 'Registration Deadline:',
      opensLabel: 'Registration Opens:',
      formatOnline: 'Online Live',
      formatOffline: 'Classroom / In-Person',
      formatHybrid: 'Hybrid',
      viewLink: 'Official Notice'
    },
    vacancies: {
      sectionTitle: 'Career Opportunities & Vacancies',
      sectionSubtitle: 'Verified international opportunities with zero hidden charges or fabricated promises.',
      noVacanciesTitle: 'No Verified Vacancies Available At The Moment',
      noVacanciesDesc: 'GlobeLink adheres strictly to legal, ethical migration standards. We never publish unverified job leads, fabricated salaries, or fake placement offers. Please connect with our Career Partner guidance team for upcoming employer interview drives.',
      contactCareerPartner: 'Ask About Career Guidance',
      verifiedBadge: 'Verified Regulatory Standard',
      eligibility: 'Eligibility Criteria:',
      languageReq: 'Language Requirement:',
      deadline: 'Deadline:'
    },
    careerQA: {
      title: 'Career Questions & Answers Library',
      titleSubtitle: 'Learn how to answer essential interview questions for international careers and Japanese workplace communication.',
      subtitle: 'Prepare thoroughly for HR interviews, Japanese workplace communication, and global career opportunities.',
      browseTab: 'Browse Question Bank',
      practiceTab: 'Practice Mode (1 by 1)',
      searchPlaceholder: 'Search questions by keyword...',
      allCategories: 'All Categories',
      showAnswer: 'Show Answer',
      hideAnswer: 'Hide Answer',
      copyAnswer: 'Copy Answer',
      copied: 'Copied!',
      questionOf: 'Question',
      previous: 'Previous Question',
      next: 'Next Question',
      personalizeNotice: 'Important: This is a sample educational response. You must customize your answer truthfully with your authentic background, real skills, and genuine experiences.',
      askGuidance: 'Ask About Career Guidance',
      educationalNotice: 'Educational Disclaimer: These practice materials are intended solely for personal interview preparation and communication practice. GlobeLink does not sell job placements and does not guarantee employment or visa approval.'
    },
    common: {
      name: 'Full Name',
      phone: 'Phone / WhatsApp Number',
      email: 'Email Address',
      destination: 'Preferred Destination',
      serviceCategory: 'Service Category',
      interest: 'Career or Education Interest',
      preferredContact: 'Preferred Contact Method',
      message: 'Message / Question',
      consentText: 'I consent to GlobeLink collecting my details to provide educational and career consultation.',
      submit: 'Submit Inquiry',
      submitting: 'Submitting...',
      success: 'Inquiry Submitted Successfully',
      error: 'Submission Error',
      whatsappFallback: 'Send via WhatsApp',
      privacyNotice: 'Your privacy is protected. We will never share your personal information.',
      close: 'Close'
    }
  },
  si: {
    nav: {
      home: 'මුල් පිටුව',
      about: 'අප ගැන',
      letsGoJapan: "Let's Go Japan",
      japaneseExams: 'ජපන් විභාග සහ ලියාපදිංචිය',
      japaneseCourses: 'ජපන් භාෂා පාඨමාලා',
      careerPrep: 'වෘත්තීය සූදානම (Q&A)',
      educationConsultancy: 'අධ්‍යාපනික උපදේශනය',
      destinations: 'ගමනාන්ත',
      visaCompliance: 'වීසා සහ නීතිමය උපදේශනය',
      contact: 'සම්බන්ධ වන්න',
      bookConsultation: 'උපදේශනයක් වෙන්කරගන්න',
      allLanguages: 'සියලු භාෂා (Languages)',
      selectLanguage: 'භාෂාව තෝරන්න',
      hotline: 'ක්ෂණික ඇමතුම්',
      officeLocation: 'නිට්ටඹුව කාර්යාලය: හොරගොල්ල, ශ්‍රී ලංකාව',
      intakeOpen: '2026/2027 ජපන් ඇතුළත් කිරීම් ආරම්භ විය'
    },
    exams: {
      pageTitle: 'ජපන් විභාග සහ විශ්වවිද්‍යාල පිවිසුම් සම්පත් කේන්ද්‍රය',
      pageSubtitle: 'JLPT, EJU විශ්වවිද්‍යාල ප්‍රවේශ විභාගය, NAT-TEST, JLCT, JFT-Basic සහ Prometric SSW වෘත්තීය නිපුණතා විභාග සඳහා නිල මාර්ගෝපදේශ.',
      badge: "Let's Go Japan • ජපන් විභාග සහ උසස් අධ්‍යාපන මඟපෙන්වීම",
      searchPlaceholder: 'විභාග සොයන්න (JLPT, EJU, NAT, Prometric, කෘෂිකාර්මික, SSW)...',
      filterAll: 'සියලු විභාග සහ මාර්ග',
      viewOfficial: 'නිල මූලාශ්‍රය බලන්න',
      registerNow: 'ලියාපදිංචි මඟපෙන්වීම',
      askWhatsApp: 'විභාග සූදානම ගැන විමසන්න',
      globeLinkPrepTitle: 'GlobeLink / Let\'s Go Japan සූදානම් කිරීමේ මඟපෙන්වීම:',
      availableLevels: 'අදාළ මට්ටම් / ක්ෂේත්‍ර:',
      officialLinksTitle: 'නිල සබැඳි සහ ද්වාර:',
      ejuSpecialTitle: 'EJU — ජපන් විශ්වවිද්‍යාල ප්‍රවේශ විභාගය',
      ejuSpecialDesc: 'EJU යනු ජපානයේ ජාතික, රාජ්‍ය හා ප්‍රමුඛ පෙළේ පෞද්ගලික විශ්වවිද්‍යාල වෙත විදේශීය සිසුන් බඳවා ගැනීමේදී ඔවුන්ගේ ජපන් භාෂා ශාස්ත්‍රීය නිපුණතාව හා මූලික අධ්‍යාපන සුදුසුකම් ඇගයීම සඳහා භාවිත කරන ප්‍රධාන විභාගයයි.',
      ejuDisclaimer: 'වැදගත් නිවේදනය: EJU විභාගය සමත්වීම හෝ ඉහළ ලකුණු ලබාගැනීමෙන් පමණක් විශ්වවිද්‍යාල ප්‍රවේශය සහතික නොවේ. සෑම විශ්වවිද්‍යාලයකම පීඨය අනුව වෙන වෙනම සම්මුඛ පරීක්ෂණ, ලේඛන පරීක්ෂාව සහ අවම සුදුසුකම් සම්පූර්ණ කළ යුතුය.',
      sswSpecialTitle: 'නිශ්චිත නිපුණතා ශ්‍රමික (SSW Tokutei Ginou) නිපුණතා පරීක්ෂණ',
      sswSpecialDesc: 'Prometric හරහා පැවැත්වෙන මෙම පරීක්ෂණ මගින් කෘෂිකර්මාන්තය, සාත්තු සේවය, ආහාර සැපයුම් සහ ඉදිකිරීම් ඇතුළු අංශවල වෘත්තීය නිපුණතාව පරීක්ෂා කෙරේ.',
      sswDisclaimer: 'නීතිමය දැනුම්දීම: විභාගයක් ලිවීම හෝ සමත්වීමෙන් ජපානයේ රැකියාවක් හෝ වීසා ලබාදීම සහතික නොවේ. අපේක්ෂකයන් පිළිගත් සේවා ගිවිසුමක් ලබාගත යුතු අතර ජපන් ආගමන නීතිවලට අනුකූල විය යුතුය.',
      verifiedReference: 'තහවුරු කළ මූලාශ්‍රය'
    },
    announcements: {
      sectionTitle: 'නිවේදන සහ ඉදිරි වැඩසටහන්',
      sectionSubtitle: 'ඉදිරි විභාග දින, නිල ලියාපදිංචි කාලසීමාවන්, නොමිලේ පැවැත්වෙන මාර්ගගත සම්මන්ත්‍රණ සහ භාෂා වැඩමුළු පිළිබඳ නිල තොරතුරු.',
      filterAll: 'සියලු නිවේදන',
      emptyTitle: 'මේ මොහොතේ ඉදිරි නිවේදන නොමැත',
      emptyDesc: 'විභාග මණ්ඩල මගින් තහවුරු කළ නිල දින ප්‍රකාශයට පත් කළ වහාම මෙහි පළ කෙරේ. වැඩිදුර තොරතුරු සඳහා GlobeLink උපදේශක කණ්ඩායම අමතන්න.',
      statusUpcoming: 'ඉදිරියට පැවැත්වෙන',
      statusOpen: 'ලියාපදිංචිය විවෘතයි',
      statusClosingSoon: 'ළඟදීම අවසන් වේ',
      statusCompleted: 'අවසන් විය',
      statusPostponed: 'කල් දැමින',
      deadlineLabel: 'ලියාපදිංචි අවසන් දිනය:',
      opensLabel: 'ලියාපදිංචිය ඇරඹෙන දිනය:',
      formatOnline: 'මාර්ගගත (Online)',
      formatOffline: 'කාර්යාලයේදී (In-Person)',
      formatHybrid: 'ද්විත්ව (Hybrid)',
      viewLink: 'නිල නිවේදනය'
    },
    vacancies: {
      sectionTitle: 'වෘත්තීය අවස්ථා සහ පුරප්පාඩු',
      sectionSubtitle: 'සැඟවුණු ගාස්තු හෝ ව්‍යාජ පොරොන්දු රහිත, නීත්‍යානුකූල ජාත්‍යන්තර රැකියා මඟපෙන්වීම.',
      noVacanciesTitle: 'මේ මොහොතේ තහවුරු කළ පුරප්පාඩු නොමැත',
      noVacanciesDesc: 'GlobeLink ආයතනය නීත්‍යානුකූල හා සදාචාරාත්මක උපදේශන ප්‍රතිපත්ති දැඩිව අනුගමනය කරයි. අපි තහවුරු නොකළ රැකියා දැන්වීම් හෝ ව්‍යාජ වීසා පොරොන්දු පළ නොකරමු. ඉදිරි සේවායෝජක සම්මුඛ පරීක්ෂණ පිළිබඳ දැනුවත් වීමට අප හා සම්බන්ධ වන්න.',
      contactCareerPartner: 'වෘත්තීය උපදේශනය විමසන්න',
      verifiedBadge: 'තහවුරු කළ නීතිමය ප්‍රමිතිය',
      eligibility: 'සුදුසුකම් නිර්ණායක:',
      languageReq: 'භාෂා අවශ්‍යතාවය:',
      deadline: 'අවසන් දිනය:'
    },
    careerQA: {
      title: 'සම්මුඛ පරීක්ෂණ ප්‍රශ්නෝත්තර පුස්තකාලය',
      titleSubtitle: 'ජාත්‍යන්තර රැකියා සහ ජපන් සේවා ස්ථාන සන්නිවේදනය සඳහා නිවැරදිව මුහුණ දීමට පුහුණු වන්න.',
      subtitle: 'ජාත්‍යන්තර සම්මුඛ පරීක්ෂණ සහ ජපන් ආයතනික සන්නිවේදනය සඳහා සාර්ථකව සූදානම් වන්න.',
      browseTab: 'ප්‍රශ්නාවලිය බලන්න',
      practiceTab: 'පුහුණු ප්‍රකාරය (එකින් එක)',
      searchPlaceholder: 'ප්‍රශ්න සොයන්න...',
      allCategories: 'සියලු කාණ්ඩ',
      showAnswer: 'පිළිතුර පෙන්වන්න',
      hideAnswer: 'පිළිතුර සඟවන්න',
      copyAnswer: 'පිළිතුර පිටපත් කරන්න',
      copied: 'පිටපත් විය!',
      questionOf: 'ප්‍රශ්නය',
      previous: 'පෙර ප්‍රශ්නය',
      next: 'මීළඟ ප්‍රශ්නය',
      personalizeNotice: 'වැදගත් උපදෙස: මෙය නියැදි පිළිතුරකි. ඔබගේ සැබෑ අධ්‍යාපනය, සැබෑ සේවා පළපුරුද්ද සහ සත්‍ය තොරතුරු ඇතුළත් කර පිළිතුර සකස් කරගත යුතුය.',
      askGuidance: 'වෘත්තීය මඟපෙන්වීම විමසන්න',
      educationalNotice: 'අධ්‍යාපනික නිවේදනය: මෙම ප්‍රශ්න සහ පිළිතුරු පුද්ගලික සූදානම් වීම සඳහා පමණක් වන අධ්‍යාපනික සම්පත් වේ. GlobeLink ආයතනය රැකියා විකිණීම හෝ රැකියා/වීසා සහතික කිරීම් සිදු නොකරයි.'
    },
    common: {
      name: 'සම්පූර්ණ නම',
      phone: 'දුරකථන / WhatsApp අංකය',
      email: 'විද්‍යුත් තැපෑල',
      destination: 'කැමති ගමනාන්තය',
      serviceCategory: 'සේවා කාණ්ඩය',
      interest: 'අධ්‍යාපනික හෝ වෘත්තීය උනන්දුව',
      preferredContact: 'සම්බන්ධ වීමට කැමති ක්‍රමය',
      message: 'පණිවිඩය / විමසීම',
      consentText: 'උපදේශන සේවා ලබාදීම සඳහා මගේ තොරතුරු ලබාගැනීමට එකඟ වෙමි.',
      submit: 'විමසීම යොමු කරන්න',
      submitting: 'යොමු වෙමින් පවතී...',
      success: 'විමසීම සාර්ථකව ලැබිණි',
      error: 'දෝෂයක් සිදුවිය',
      whatsappFallback: 'WhatsApp මගින් යවන්න',
      privacyNotice: 'ඔබේ පෞද්ගලිකත්වය සුරක්ෂිත වේ. තොරතුරු බාහිර පාර්ශව වෙත ලබා නොදේ.',
      close: 'වසන්න'
    }
  },
  ta: {
    nav: {
      home: 'முகப்பு',
      about: 'எங்களை பற்றி',
      letsGoJapan: "Let's Go Japan",
      japaneseExams: 'ஜப்பானிய தேர்வுகள் மற்றும் பதிவு',
      japaneseCourses: 'ஜப்பானிய மொழி படிப்புகள்',
      careerPrep: 'தொழில் வழிகாட்டல் (Q&A)',
      educationConsultancy: 'கல்வி ஆலோசனை',
      destinations: 'இலக்கு நாடுகள்',
      visaCompliance: 'விசா மற்றும் சட்ட ஆலோசனை',
      contact: 'தொடர்புகொள்ள',
      bookConsultation: 'ஆலோசனை முன்பதிவு',
      allLanguages: 'அனைத்து மொழிகள் (Languages)',
      selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
      hotline: 'அவசர உதவி எண்',
      officeLocation: 'நிட்டம்புவ அலுவலகம்: ஹொரகொல்ல, இலங்கை',
      intakeOpen: '2026/2027 ஜப்பான் சேர்க்கை ஆரம்பமானது'
    },
    exams: {
      pageTitle: 'ஜப்பானிய தேர்வு மற்றும் பல்கலைக்கழக வள மையம்',
      pageSubtitle: 'JLPT, EJU பல்கலைக்கழக நுழைவுத் தேர்வு, NAT-TEST, JLCT, JFT-Basic மற்றும் Prometric SSW திறன் மதிப்பீட்டு தேர்வுகள் வழிகாட்டல்.',
      badge: "Let's Go Japan • ஜப்பானிய தேர்வு மற்றும் உயர்கல்வி வழிகாட்டல்",
      searchPlaceholder: 'தேர்வுகளைத் தேடுங்கள் (JLPT, EJU, NAT, Prometric, விவசாயம், SSW)...',
      filterAll: 'அனைத்து தேர்வுகள்',
      viewOfficial: 'அதிகாரப்பூர்வ இணைப்பைப் பார்க்கவும்',
      registerNow: 'பதிவு வழிகாட்டி',
      askWhatsApp: 'தேர்வு தயாரிப்பு பற்றி விசாரிக்கவும்',
      globeLinkPrepTitle: 'GlobeLink தயாரிப்பு வழிகாட்டல்:',
      availableLevels: 'பொருத்தமான நிலைகள் / துறைகள்:',
      officialLinksTitle: 'அதிகாரப்பூர்வ இணைப்புகள்:',
      ejuSpecialTitle: 'EJU — ஜப்பானிய பல்கலைக்கழக சேர்க்கை தேர்வு',
      ejuSpecialDesc: 'ஜப்பானின் தேசிய, அரச மற்றும் முன்னணி தனியார் பல்கலைக்கழகங்களில் சர்வதேச மாணவர்களைச் சேர்க்கும் போது அவர்களின் ஜப்பானிய மொழித் திறனையும் அடிப்படை கல்வித் திறனையும் மதிப்பீடு செய்ய EJU தேர்வு பயன்படுத்தப்படுகிறது.',
      ejuDisclaimer: 'முக்கிய அறிவிப்பு: EJU தேர்வில் தேர்ச்சி பெறுவது மட்டுமே பல்கலைக்கழக சேர்க்கையை உத்தரவாதம் செய்யாது. ஒவ்வொரு பல்கலைக்கழகத்திற்கும் தனித்தனி நேர்காணல்கள், ஆவண சரிபார்ப்பு மற்றும் தகுதி தேவைகள் உள்ளன.',
      sswSpecialTitle: 'குறிப்பிட்ட திறன் வாய்ந்த தொழிலாளர் (SSW) திறன் தேர்வுகள்',
      sswSpecialDesc: 'Prometric மூலம் நடத்தப்படும் இத்தேர்வுகள் விவசாயம், முதியோர் பராமரிப்பு, உணவு சேவை மற்றும் கட்டுமானம் போன்ற துறைகளில் தொழில்முறை திறனை மதிப்பிடுகின்றன.',
      sswDisclaimer: 'சட்டப்பூர்வ அறிவிப்பு: தேர்வெழுதுவது அல்லது தேர்ச்சி பெறுவது வேலைவாய்ப்பையோ விசாவையோ உத்தரவாதம் செய்யாது. விண்ணப்பதாரர்கள் செல்லுபடியாகும் வேலை ஒப்பந்தத்தைப் பெற வேண்டும்.',
      verifiedReference: 'சரிபார்க்கப்பட்ட ஆதாரம்'
    },
    announcements: {
      sectionTitle: 'அறிவிப்புகள் மற்றும் வரவிருக்கும் நிகழ்வுகள்',
      sectionSubtitle: 'வரவிருக்கும் தேர்வு தேதிகள், உத்தியோகபூர்வ பதிவு காலங்கள் மற்றும் இலவச இணையதள கருத்தரங்குகள் பற்றிய தகவல்கள்.',
      filterAll: 'அனைத்து அறிவிப்புகள்',
      emptyTitle: 'தற்போது வரவிருக்கும் அறிவிப்புகள் எதுவும் இல்லை',
      emptyDesc: 'தேர்வு வாரியங்களால் உறுதிப்படுத்தப்பட்ட தேதிகள் அறிவிக்கப்பட்டவுடன் இங்கு வெளியிடப்படும். மேலும் விவரங்களுக்கு எங்களை தொடர்பு கொள்ளவும்.',
      statusUpcoming: 'வரவிருப்பது',
      statusOpen: 'பதிவு தொடங்கியது',
      statusClosingSoon: 'விரைவில் முடிவடைகிறது',
      statusCompleted: 'முடிவடைந்தது',
      statusPostponed: 'ஒத்திவைக்கப்பட்டது',
      deadlineLabel: 'கடைசி தேதி:',
      opensLabel: 'பதிவு தொடங்கும் தேதி:',
      formatOnline: 'ஆன்லைன் நேரலை',
      formatOffline: 'நேரடி வகுப்பு',
      formatHybrid: 'கலப்பு முறை',
      viewLink: 'அதிகாரப்பூர்வ அறிவிப்பு'
    },
    vacancies: {
      sectionTitle: 'தொழில் வாய்ப்புகள் மற்றும் காலியிடங்கள்',
      sectionSubtitle: 'மறைமுக கட்டணங்கள் அல்லது பொய்யான வாக்குறுதிகள் இல்லாத வெளிப்படையான வழிகாட்டல்.',
      noVacanciesTitle: 'தற்போது சரிபார்க்கப்பட்ட வேலை வாய்ப்புகள் இல்லை',
      noVacanciesDesc: 'GlobeLink சட்டப்பூர்வ மற்றும் நேர்மையான வழிகாட்டல் கொள்கைகளை கண்டிப்பாக பின்பற்றுகிறது. நாங்கள் சரிபார்க்கப்படாத வேலை விளம்பரங்களையோ போலி விசா வாக்குறுதிகளையோ வெளியிடுவதில்லை.',
      contactCareerPartner: 'தொழில் ஆலோசனை கேட்கவும்',
      verifiedBadge: 'சரிபார்க்கப்பட்ட தரம்',
      eligibility: 'தகுதி அளவுகோல்கள்:',
      languageReq: 'மொழி தேவை:',
      deadline: 'கடைசி தேதி:'
    },
    careerQA: {
      title: 'நேர்காணல் கேள்வி-பதில் நூலகம்',
      titleSubtitle: 'சர்வதேச வேலைவாய்ப்புகள் மற்றும் ஜப்பானிய பணியிட தொடர்பாடலுக்கு வெற்றிகரமாக தயாராகுங்கள்.',
      subtitle: 'HR நேர்காணல்கள் மற்றும் சர்வதேச தொழில் வாய்ப்புகளுக்கு முழுமையாக தயாராகுங்கள்.',
      browseTab: 'கேள்விகளைப் பார்க்க',
      practiceTab: 'பயிற்சி முறை (ஒவ்வொன்றாக)',
      searchPlaceholder: 'கேள்விகளைத் தேடவும்...',
      allCategories: 'அனைத்து பிரிவுகள்',
      showAnswer: 'பதிலைக் காட்டு',
      hideAnswer: 'பதிலை மறைக்கவும்',
      copyAnswer: 'பதிலை நகலெடு',
      copied: 'நகலெடுக்கப்பட்டது!',
      questionOf: 'கேள்வி',
      previous: 'முந்தைய கேள்வி',
      next: 'அடுத்த கேள்வி',
      personalizeNotice: 'முக்கிய குறிப்பு: இது ஒரு மாதிரி பதில் மட்டுமே. உங்கள் உண்மையான கல்வி, உண்மையான பணி அனுபவம் மற்றும் திறன்களைக் கொண்டு உங்கள் பதிலை தனிப்பயனாக்க வேண்டும்.',
      askGuidance: 'தொழில் வழிகாட்டல் கேட்கவும்',
      educationalNotice: 'கல்விசார் மறுப்பு: இப்பயிற்சிப் பொருட்கள் தனிப்பட்ட நேர்காணல் தயாரிப்பிற்காக மட்டுமே. GlobeLink வேலை வாய்ப்புகளை விற்பனை செய்வதோ வேலை/விசா உத்தரவாதங்களை வழங்குவதோ இல்லை.'
    },
    common: {
      name: 'முழு பெயர்',
      phone: 'தொலைபேசி / WhatsApp எண்',
      email: 'மின்னஞ்சல் முகவரி',
      destination: 'விருப்பமான நாடு',
      serviceCategory: 'சேவை பிரிவு',
      interest: 'கல்வி அல்லது தொழில் ஆர்வம்',
      preferredContact: 'தொடர்புகொள்ளும் முறை',
      message: 'செய்தி / கேள்வி',
      consentText: 'ஆலோசனை சேவைகளைப் பெற எனது தகவல்களை வழங்க ஒப்புக்கொள்கிறேன்.',
      submit: 'விசாரணையை சமர்ப்பிக்கவும்',
      submitting: 'சமர்ப்பிக்கப்படுகிறது...',
      success: 'வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது',
      error: 'பிழை ஏற்பட்டது',
      whatsappFallback: 'WhatsApp மூலம் அனுப்பவும்',
      privacyNotice: 'உங்கள் தனியுரிமை பாதுகாக்கப்படுகிறது.',
      close: 'மூடுக'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: '会社概要',
      letsGoJapan: "Let's Go Japan",
      japaneseExams: '日本語試験・大学進学情報',
      japaneseCourses: '日本語教育コース',
      careerPrep: 'キャリア準備・面接対策',
      educationConsultancy: '留学コンサルティング',
      destinations: '渡航先・対象国',
      visaCompliance: 'ビザ・法規遵守',
      contact: 'お問い合わせ',
      bookConsultation: '個別カウンセリング予約',
      allLanguages: '言語選択 (All Languages)',
      selectLanguage: '言語を選択してください',
      hotline: 'ホットライン',
      officeLocation: 'スリランカ・ニッタンブワ事務所（ホラゴッラ）',
      intakeOpen: '2026/2027年 日本向け募集開始'
    },
    exams: {
      pageTitle: '日本語試験および日本大学進学リソースセンター',
      pageSubtitle: 'JLPT（日本語能力試験）、EJU（日本留学試験）、NAT-TEST、JLCT、JFT-Basic、および特定技能（SSW）Prometric試験の公式情報と対策ガイド。',
      badge: "Let's Go Japan • 日本語教育・進学・特定技能対策",
      searchPlaceholder: '試験を検索（JLPT, EJU, NAT, Prometric, 農業, 特定技能）...',
      filterAll: 'すべての試験・パスウェイ',
      viewOfficial: '公式情報・要項を見る',
      registerNow: '受験登録ガイド',
      askWhatsApp: '試験対策について相談する',
      globeLinkPrepTitle: 'GlobeLink / Let\'s Go Japan の対策指導：',
      availableLevels: '対象レベル・分野：',
      officialLinksTitle: '公式リンク・ポータル：',
      ejuSpecialTitle: 'EJU — 日本留学試験（大学進学）',
      ejuSpecialDesc: 'EJUは、日本の国公立大学および有力私立大学が外国人留学生の日本語力および基礎学力を評価するために活用する統一試験です。',
      ejuDisclaimer: '重要事項：EJUを受験・高得点を取得すること自体が日本の大学合格を保証するものではありません。各大学・学部が定める出願基準、書類選考、面接試験を個別に満たす必要があります。',
      sswSpecialTitle: '特定技能（SSW 1号）技能測定試験（プロメトリック）',
      sswSpecialDesc: '農業、介護、外食業、建設などの特定技能指定分野における実務能力を客観的に評価する公式試験です。',
      sswDisclaimer: '法規上の注意：試験の受験・合格は日本での就労やビザ発給を保証するものではありません。受入機関との正式な雇用契約締結および出入国在留管理庁の審査が必要です。',
      verifiedReference: '確認済み公式情報'
    },
    announcements: {
      sectionTitle: 'お知らせ・開催予定イベント',
      sectionSubtitle: '試験日程、願書受付期間、無料オンライン進学セミナー、日本語ワークショップの最新公式情報。',
      filterAll: 'すべてのお知らせ',
      emptyTitle: '現在、予定されている新しいお知らせはありません',
      emptyDesc: '実施機関より公式な日程が発表され次第、速やかに掲載いたします。最新情報はお問い合わせ窓口でもご案内しております。',
      statusUpcoming: '開催予定',
      statusOpen: '受付中',
      statusClosingSoon: 'まもなく締切',
      statusCompleted: '終了',
      statusPostponed: '延期',
      deadlineLabel: '申込締切日：',
      opensLabel: '受付開始日：',
      formatOnline: 'オンライン生配信',
      formatOffline: '対面・教室受講',
      formatHybrid: 'ハイブリッド形式',
      viewLink: '公式案内を見る'
    },
    vacancies: {
      sectionTitle: 'キャリア・求人情報（合法・確認済み）',
      sectionSubtitle: '不透明な費用請求や誇大広告を排除した、法令遵守の国際キャリアガイダンス。',
      noVacanciesTitle: '現在、公開可能な確認済み求人はございません',
      noVacanciesDesc: 'GlobeLinkでは倫理的かつ適法な人材・留学支援を徹底しております。未確認の求人情報や虚偽の採用保証は一切掲載いたしません。今後の企業選考会に関する情報はキャリアパートナー窓口までお問い合わせください。',
      contactCareerPartner: 'キャリア相談窓口に問い合わせる',
      verifiedBadge: '法令遵守・確認済み基準',
      eligibility: '応募資格・基準：',
      languageReq: '必要語学要件：',
      deadline: '応募締切：'
    },
    careerQA: {
      title: '面接質問・模範回答ライブラリ',
      titleSubtitle: '国際的キャリアおよび日本企業の職場コミュニケーションに向けた実践的対策。',
      subtitle: '人事面接、日本企業のビジネスマナー、国際的キャリア機会に向けた徹底指導。',
      browseTab: '質問一覧を見る',
      practiceTab: '1問1答 模擬練習モード',
      searchPlaceholder: 'キーワードで質問を検索...',
      allCategories: 'すべてのカテゴリー',
      showAnswer: '回答例を表示',
      hideAnswer: '回答例を隠す',
      copyAnswer: '回答をコピー',
      copied: 'コピーしました！',
      questionOf: '質問',
      previous: '前の質問へ',
      next: '次の質問へ',
      personalizeNotice: '重要事項：これは学習用の模範例です。ご自身の実際の学歴、職歴、真実のスキルに基づいて誠実にカスタマイズして回答してください。',
      askGuidance: 'キャリア指導について相談する',
      educationalNotice: '教育免責事項：本練習教材は個人の面接対策およびコミュニケーション練習を目的とした教育資料です。GlobeLinkは求人の販売や採用・ビザ発給の保証は行っておりません。'
    },
    common: {
      name: '氏名（ローマ字）',
      phone: '電話番号 / WhatsApp',
      email: 'メールアドレス',
      destination: '希望渡航先',
      serviceCategory: '希望サービス',
      interest: '進路・専攻分野',
      preferredContact: '希望連絡方法',
      message: 'ご相談内容',
      consentText: '教育・キャリア相談サービスの提供のため、個人情報の取扱いに同意します。',
      submit: '相談を送信する',
      submitting: '送信中...',
      success: '送信が完了しました',
      error: '送信エラーが発生しました',
      whatsappFallback: 'WhatsAppで直接連絡',
      privacyNotice: '個人情報は厳重に管理され、第三者に無断で提供されることはありません。',
      close: '閉じる'
    }
  }
};
