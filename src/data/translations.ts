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
    japanResources: string;
    contact: string;
    bookConsultation: string;
    allLanguages: string;
    selectLanguage: string;
    hotline: string;
    officeLocation: string;
    intakeOpen: string;
  };
  // Hero Section
  hero: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    highlight1: string;
    highlight2: string;
    highlight3: string;
    ctaExplore: string;
    ctaConsult: string;
  };
  // Home Page Sections
  home: {
    servicesKicker: string;
    servicesTitle: string;
    servicesSubtitle: string;
    lgjCardTitle: string;
    lgjCardDesc: string;
    careerCardTitle: string;
    careerCardDesc: string;
    eduCardTitle: string;
    eduCardDesc: string;
    explorePathways: string;
    stepKicker: string;
    stepTitle: string;
    stepSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    whyKicker: string;
    whyTitle: string;
    why1Title: string;
    why1Desc: string;
    why2Title: string;
    why2Desc: string;
    why3Title: string;
    why3Desc: string;
    destKicker: string;
    destTitle: string;
    destSubtitle: string;
    destNotice: string;
    viewAllDestinations: string;
    faqKicker: string;
    faqTitle: string;
    faqSubtitle: string;
    inquiryTitle: string;
    inquirySubtitle: string;
  };
  // About Page
  about: {
    pageTitle: string;
    pageSubtitle: string;
    kicker: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    valuesTitle: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
    val4Title: string;
    val4Desc: string;
    complianceTitle: string;
    complianceDesc: string;
  };
  // Japanese Courses Page
  courses: {
    pageTitle: string;
    pageSubtitle: string;
    badge: string;
    filterAll: string;
    filterFoundation: string;
    filterIntermediate: string;
    filterExamPrep: string;
    filterSkills: string;
    tuitionFeeLabel: string;
    durationLabel: string;
    hoursLabel: string;
    scheduleLabel: string;
    modeLabel: string;
    keyHighlightsLabel: string;
    viewSyllabus: string;
    enrollWhatsApp: string;
    close: string;
    courseDetailsModal: string;
    detailedSyllabus: string;
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
  // Career Partner Page
  careerPartner: {
    pageTitle: string;
    pageSubtitle: string;
    badge: string;
    overviewTitle: string;
    overviewDesc: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    disclaimerNotice: string;
  };
  // Education Consultancy Page
  education: {
    pageTitle: string;
    pageSubtitle: string;
    badge: string;
    overviewTitle: string;
    overviewDesc: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    feature4Title: string;
    feature4Desc: string;
  };
  // Let's Go Japan Page
  letsGoJapan: {
    pageTitle: string;
    pageSubtitle: string;
    badge: string;
    introTitle: string;
    introDesc: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    coeTitle: string;
    coeDesc: string;
  };
  // Migration & Visa Support Page
  migrationVisa: {
    pageTitle: string;
    pageSubtitle: string;
    badge: string;
    overviewTitle: string;
    overviewDesc: string;
    titpTitle: string;
    titpDesc: string;
    sswTitle: string;
    sswDesc: string;
    hspTitle: string;
    hspDesc: string;
    complianceNotice: string;
    antiFraudTitle: string;
    antiFraudDesc: string;
  };
  // Contact Page
  contact: {
    pageTitle: string;
    pageSubtitle: string;
    badge: string;
    hotlineLabel: string;
    emailLabel: string;
    officeLabel: string;
    hoursLabel: string;
    openHours: string;
    getDirections: string;
    formTitle: string;
    formSubtitle: string;
  };
  // Footer
  footer: {
    letsGoJapanTitle: string;
    letsGoJapanDesc: string;
    careerPartnerTitle: string;
    careerPartnerDesc: string;
    ethicalTitle: string;
    ethicalDesc: string;
    corePages: string;
    letsGoJapanSection: string;
    officeHotlines: string;
    complianceNotice: string;
    rightsReserved: string;
    privacyPolicy: string;
    termsConditions: string;
    sitemap: string;
    staffPortal: string;
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
    homeBreadcrumb: string;
    whatsappUs: string;
    whatsappTeam: string;
    whatsappTeamDesc: string;
    cookieTitle: string;
    cookieDesc: string;
    cookieAcknowledge: string;
    modalConsultationTitle: string;
    modalConsultationSubtitle: string;
    optSelectDestination: string;
    optSelectService: string;
    errNameRequired: string;
    errPhoneRequired: string;
    errPhoneInvalid: string;
    errEmailRequired: string;
    errEmailInvalid: string;
    errConsentRequired: string;
  };
  // Global Search
  search: {
    placeholder: string;
    buttonLabel: string;
    modalTitle: string;
    noResults: string;
    noResultsDesc: string;
    resultsFound: string;
    quickCategories: string;
    clear: string;
    close: string;
    openResource: string;
    allFilter: string;
    coursesFilter: string;
    examsFilter: string;
    visasFilter: string;
    careerQAFilter: string;
    eventsFilter: string;
    resourcesFilter: string;
  };
  // Class Fees Installment Tracker
  installmentTracker: {
    sectionTitle: string;
    sectionSubtitle: string;
    badge: string;
    openTrackerBtn: string;
    howItWorksTitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    privacyNotice: string;
    ethicalSafeguard: string;
    contactSupport: string;
    verifiedResource: string;
  };
  // Japan Education & Career Resources
  japanResources: {
    pageTitle: string;
    pageSubtitle: string;
    badge: string;
    officialGovBadge: string;
    externalEduBadge: string;
    externalLangBadge: string;
    externalRecruitBadge: string;
    visitResource: string;
    contactLine: string;
    lineDesc: string;
    disclaimerTitle: string;
    disclaimerDesc: string;
    categoriesTitle: string;
  };
}

export const TRANSLATIONS: Record<SupportedLanguage, TranslationDictionary> = {
  // ==========================================
  // ENGLISH (DEFAULT)
  // ==========================================
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
      japanResources: 'Japan Resources & Tools',
      contact: 'Contact',
      bookConsultation: 'Book a Consultation',
      allLanguages: 'All Languages',
      selectLanguage: 'Select Language',
      hotline: 'Hotline',
      officeLocation: 'Nittambuwa Office: Horagolla, Sri Lanka',
      intakeOpen: '2026/2027 Japanese Intake Batches Open'
    },
    hero: {
      kicker: "Sri Lanka's Trusted Pathway & Language Partner",
      titleLine1: 'Your Career Partner',
      titleLine2: 'Connecting You to the World',
      subtitle: 'Connecting candidates to international education, legitimate career opportunities and global pathways through personalized guidance.',
      highlight1: "Let's Go Japan Language Training",
      highlight2: 'Direct Gulf & Island Career Guidance',
      highlight3: 'Transparent & Ethical Consulting',
      ctaExplore: 'Explore Programs',
      ctaConsult: 'Book Consultation'
    },
    home: {
      servicesKicker: 'Core Advisory Disciplines',
      servicesTitle: 'Comprehensive Global Mobility Services',
      servicesSubtitle: 'Structured language training, international higher education advisory, and transparent career pathway consulting under one roof.',
      lgjCardTitle: "Let's Go Japan Language Academy",
      lgjCardDesc: 'Intensive JLPT (N5–N3), JFT-Basic, NAT-TEST, and Spoken Japanese training designed specifically for student visa and SSW work applicants.',
      careerCardTitle: 'Your Career Partner Program',
      careerCardDesc: 'Strategic CV tailoring, interview readiness coaching, and legitimate pathway matching for Gulf and international career opportunities.',
      eduCardTitle: 'International Education Consultancy',
      eduCardDesc: 'End-to-end higher education advisory for Japanese language schools, universities, and worldwide academic degree programs.',
      explorePathways: 'Explore Pathway & Details',
      stepKicker: 'Ethical Guidance Pathway',
      stepTitle: 'Our 4-Step Consultation Process',
      stepSubtitle: 'We eliminate guesswork with a transparent, structured pathway from initial profile assessment to pre-departure briefing.',
      step1Title: 'Profile Assessment',
      step1Desc: 'Initial evaluation of your educational background, vocational history, language abilities, and realistic budget feasibility.',
      step2Title: 'Pathway & Language Plan',
      step2Desc: 'Mapping appropriate study intakes or career streams, followed by enrollment in specialized JLPT or interview coaching.',
      step3Title: 'Application & Verification',
      step3Desc: 'Careful compilation of certified academic dossiers, financial proofing, SOP drafting, and official submission compliance.',
      step4Title: 'Pre-Departure Briefing',
      step4Desc: 'Comprehensive orientation covering overseas banking, airport logistics, accommodation, cultural norms, and local emergency support.',
      whyKicker: 'Client Trust & Integrity',
      whyTitle: 'Why Choose GlobeLink Education & Migration',
      why1Title: 'Transparent & Ethical Consulting',
      why1Desc: 'We never make deceptive promises or claim 100% visa guarantees. You receive honest, verified advice based on actual immigration regulations.',
      why2Title: 'Specialized Language Division',
      why2Desc: 'Our Let\'s Go Japan program combines certified Japanese syllabus training, mock examinations, and spoken Japanese under one dedicated roof.',
      why3Title: 'Physical & Virtual Accessibility',
      why3Desc: 'Visit our physical office in Nittambuwa or follow interactive live courses from anywhere across Sri Lanka or overseas.',
      destKicker: 'Worldwide Horizons',
      destTitle: 'Explore International Study & Career Destinations',
      destSubtitle: 'Direct, authenticated guidance for higher education and professional career pathways across leading global destinations.',
      destNotice: 'Important Notice: Not every program or visa category is available for every destination. Inquiries are assessed on individual merits and verified institutional/employer requirements.',
      viewAllDestinations: 'View All Destinations & Guides',
      faqKicker: 'Got Questions?',
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Clear answers regarding courses, career consulting, destinations, and compliance standards.',
      inquiryTitle: 'Book a Consultation with GlobeLink',
      inquirySubtitle: 'Fill in your details below. Our education and career consultants will assess your requirements and contact you via your preferred communication channel.'
    },
    about: {
      pageTitle: 'About GlobeLink Education & Migration Consultants',
      pageSubtitle: 'Bridging Local Ambition with Global Opportunity Through Principled Advisory and Japanese Language Excellence.',
      kicker: 'Our Mission & Story',
      storyTitle: 'Principled Consulting for Sri Lankan Candidates',
      storyP1: 'GlobeLink Education and Migration Consultants was established to provide aspiring Sri Lankan students and professionals with transparent, authentic guidance toward international education and career horizons.',
      storyP2: 'Through our flagship division, Let\'s Go Japan, we have created an academic benchmark in Japanese language education, empowering students with the linguistic fluency and cultural competence necessary to thrive in Japan.',
      missionTitle: 'Our Mission',
      missionDesc: 'To provide candid, ethical, and legally authenticated education and migration consulting that protects candidate welfare and ensures sustainable global success.',
      visionTitle: 'Our Vision',
      visionDesc: 'To be Sri Lanka’s most trusted global mobility partner, recognized for exceptional language education, zero deceptive claims, and enduring student outcomes.',
      valuesTitle: 'Our Core Operating Principles',
      val1Title: 'Absolute Ethical Transparency',
      val1Desc: 'Zero hidden fees, zero false job promises, and zero fabricated visa guarantees. Every recommendation is grounded in real statutory standards.',
      val2Title: 'Rigorous Academic Standards',
      val2Desc: 'Specialized curriculum aligned with the official Japan Foundation and JLPT benchmarks, taught by proven instructors.',
      val3Title: 'Individualized Guidance',
      val3Desc: 'We assess each candidate’s unique scholastic record, financial background, and career aspirations before proposing any pathway.',
      val4Title: 'Candidate Welfare Protection',
      val4Desc: 'Full transparency regarding foreign labor laws, living expenses, and genuine institutional accreditations.',
      complianceTitle: 'Official Regulatory & Legal Stance',
      complianceDesc: 'GlobeLink operates strictly within national and foreign legal frameworks. We do not act as an unverified labor recruiter or consular authority.'
    },
    courses: {
      pageTitle: 'Japanese Language Courses & Exam Preparation',
      pageSubtitle: 'Master Hiragana, Katakana, Kanji, grammar, and workplace Kaiwa with certified Let\'s Go Japan instructors.',
      badge: "Let's Go Japan • Language Academy",
      filterAll: 'All Courses',
      filterFoundation: 'Foundation (N5)',
      filterIntermediate: 'Intermediate (N4 / N3)',
      filterExamPrep: 'Past Papers & JFT',
      filterSkills: 'Kanji & Spoken (Kaiwa)',
      tuitionFeeLabel: 'Tuition Fee:',
      durationLabel: 'Duration:',
      hoursLabel: 'Live Hours:',
      scheduleLabel: 'Schedule:',
      modeLabel: 'Delivery Mode:',
      keyHighlightsLabel: 'Key Course Highlights:',
      viewSyllabus: 'View Detailed Syllabus',
      enrollWhatsApp: 'Enroll via WhatsApp',
      close: 'Close',
      courseDetailsModal: 'Course Details & Syllabus Overview',
      detailedSyllabus: 'Detailed Syllabus Overview:'
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
    careerPartner: {
      pageTitle: 'Your Career Partner Program',
      pageSubtitle: 'Tailored career profiling, executive resume adaptation, and HR interview coaching for global opportunities.',
      badge: 'Professional Career Advisory',
      overviewTitle: 'Strategic Career Elevation',
      overviewDesc: 'We equip candidates with international-standard professional portfolios, culturally nuanced interview responses, and genuine sector insights.',
      pillar1Title: 'International CV Restructuring',
      pillar1Desc: 'Reformatting your professional achievements to meet Japanese and Gulf executive recruitment standards.',
      pillar2Title: 'Behavioral & HR Interview Coaching',
      pillar2Desc: 'Simulated panel interviews, competency-based questions, and cross-cultural communication techniques.',
      pillar3Title: 'Verified Requirement Alignment',
      pillar3Desc: 'Matching your qualifications against real employer criteria and authenticated statutory visa standards.',
      disclaimerNotice: 'Career Partner services are educational and consultative. GlobeLink does not sell jobs or guarantee employment.'
    },
    education: {
      pageTitle: 'International Higher Education Consultancy',
      pageSubtitle: 'Connecting Sri Lankan scholars to prestigious universities, government scholarships, and academic pathways worldwide.',
      badge: 'Global Academic Advisory',
      overviewTitle: 'Your Bridge to World-Class Academia',
      overviewDesc: 'From selecting the right faculty to crafting winning Statements of Purpose and securing student visas, we guide you at every milestone.',
      feature1Title: 'University & College Selection',
      feature1Desc: 'Guidance across national, public, and leading private universities in Japan, the UK, Canada, Australia, and New Zealand.',
      feature2Title: 'Scholarship Advisory (MEXT & Institutional)',
      feature2Desc: 'Assistance with government scholarship requirements, application documents, and research proposals.',
      feature3Title: 'Statement of Purpose (SOP) Mentorship',
      feature3Desc: 'Personalized review to articulate your academic aspirations convincingly and authentically.',
      feature4Title: 'Visa Dossier & COE Processing',
      feature4Desc: 'Meticulous document compilation ensuring compliance with embassy and immigration standards.'
    },
    letsGoJapan: {
      pageTitle: "Let's Go Japan Division",
      pageSubtitle: 'Our Flagship Japanese Language Academy & Comprehensive Japan Pathway Consultancy.',
      badge: 'Flagship Japan Program',
      introTitle: 'Why Study Japanese with Let’s Go Japan?',
      introDesc: 'A complete Japanese learning ecosystem combining native teaching methodologies, JLPT N5–N3 mastery, and university/work visa transition support.',
      pillar1Title: 'Interactive Live Batches',
      pillar1Desc: 'Weekday evenings and weekend batches with recorded lectures, live Q&A, and digital flashcard packs.',
      pillar2Title: 'EJU & University Pathways',
      pillar2Desc: 'Foundational academic Japanese training specifically tailored for candidates targeting Japanese degree programs.',
      pillar3Title: 'SSW Specified Skilled Worker Preparation',
      pillar3Desc: 'Prometric CBT test preparation for Nursing Care, Agriculture, Food Service, and Construction sectors.',
      coeTitle: 'Transparent COE & Student Visa Roadmap',
      coeDesc: 'Step-by-step guidance through Certificate of Eligibility (COE) filing, sponsorship proofing, and embassy visa stamping.'
    },
    migrationVisa: {
      pageTitle: 'Migration & Visa Compliance Guidance',
      pageSubtitle: 'Legal frameworks, authenticated documentation standards, and ethical mobility advisory.',
      badge: 'Statutory Compliance',
      overviewTitle: 'Understanding Sovereign Visa Regulations',
      overviewDesc: 'Visa issuance is the exclusive legal authority of sovereign governments. GlobeLink provides transparent, document-level procedural support.',
      titpTitle: 'Technical Intern Training Program (TITP)',
      titpDesc: 'Supervised skill-transfer program governed by OTIT. Focuses on workplace safety, standard employment contracts, and trainee welfare.',
      sswTitle: 'Specified Skilled Worker (SSW 1 & 2)',
      sswDesc: 'Direct employment status under Japan’s Immigration Services Agency with equal wage protections and social insurance coverage.',
      hspTitle: 'Highly Skilled Professional (HSP)',
      hspDesc: 'Point-based preferential immigration pathway for engineers, researchers, and corporate executives offering fast-track permanent residency.',
      complianceNotice: 'Official Disclosure: GlobeLink Education and Migration Consultants does not issue visas and cannot influence government decisions.',
      antiFraudTitle: 'Anti-Fraud & Ethical Warning',
      antiFraudDesc: 'Never pay fees for guaranteed visa approvals or fabricated employment letters. GlobeLink operates strictly with verified documentation.'
    },
    contact: {
      pageTitle: 'Contact GlobeLink Consultants',
      pageSubtitle: 'Visit our Nittambuwa office or connect directly with our advisory desk via phone, email, or WhatsApp.',
      badge: 'Get in Touch',
      hotlineLabel: 'Primary Hotlines:',
      emailLabel: 'Official Email Inquiries:',
      officeLabel: 'Headquarters Address:',
      hoursLabel: 'Operating Hours:',
      openHours: 'Monday – Saturday: 8:30 AM – 5:30 PM (IST) · Closed Sundays & Holidays',
      getDirections: 'Open Google Maps Directions',
      formTitle: 'Send a Message / Inquire Now',
      formSubtitle: 'Fill out our inquiry form. An education coordinator will contact you promptly.'
    },
    footer: {
      letsGoJapanTitle: "Let's Go Japan Program",
      letsGoJapanDesc: 'JLPT N5/N4/N3, JFT-Basic, NAT-TEST, Kanji mastery & online interactive classes for Sri Lankan candidates.',
      careerPartnerTitle: 'Your Career Partner Program',
      careerPartnerDesc: 'Strategic profile alignment, Gulf and Japanese CV tailoring, and legitimate employer requirement matching.',
      ethicalTitle: 'Ethical Consulting Standards',
      ethicalDesc: 'Transparent milestones, zero false guarantees, authenticated documentation, and verified client guidance.',
      corePages: 'Core Pages',
      letsGoJapanSection: "Let's Go Japan",
      officeHotlines: 'Office & Hotlines',
      complianceNotice: 'Regulatory & Ethical Notice: GlobeLink Education and Migration Consultants is an independent private consultancy providing educational advisory, language training, and documentation support. We do not issue visas or guarantee employment, salaries, or migration outcomes. All visa issuance decisions rest solely with government embassies and immigration departments.',
      rightsReserved: 'All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms and Conditions',
      sitemap: 'XML Sitemap',
      staffPortal: 'Staff Portal / Admin CMS'
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
      close: 'Close',
      homeBreadcrumb: 'Home',
      whatsappUs: 'WhatsApp Us',
      whatsappTeam: 'GlobeLink Advisory Team',
      whatsappTeamDesc: 'Have questions about Let\'s Go Japan or overseas career pathways? Chat on WhatsApp.',
      cookieTitle: 'Privacy & Transparent Advisory',
      cookieDesc: 'We use essential browser storage for navigation performance and consultation inquiries in accordance with our Privacy Policy.',
      cookieAcknowledge: 'Acknowledge',
      modalConsultationTitle: 'Book an Advisory Session',
      modalConsultationSubtitle: 'Provide your contact details. A GlobeLink consultant will connect with you via WhatsApp or phone.',
      optSelectDestination: 'Select Destination...',
      optSelectService: 'Select Service Category...',
      errNameRequired: 'Full name is required.',
      errPhoneRequired: 'Contact phone number is required.',
      errPhoneInvalid: 'Please provide a valid phone number (e.g., +94 76 498 6049).',
      errEmailRequired: 'Email address is required.',
      errEmailInvalid: 'Please provide a valid email address.',
      errConsentRequired: 'You must acknowledge the terms to proceed.'
    },
    search: {
      placeholder: 'Search courses, fees, JLPT/EJU, SSW topics, career Q&A, events...',
      buttonLabel: 'Search',
      modalTitle: 'Global Website Search',
      noResults: 'No Matching Results Found',
      noResultsDesc: 'We could not find any indexed content matching your search terms. Try searching for "JLPT", "N5 fees", "EJU", "SSW", "Interview", or "Agriculture".',
      resultsFound: 'results found',
      quickCategories: 'Browse by Category:',
      clear: 'Clear search query',
      close: 'Close search',
      openResource: 'Open Page',
      allFilter: 'All Results',
      coursesFilter: 'Courses & Fees',
      examsFilter: 'Exams & EJU',
      visasFilter: 'SSW & Visas',
      careerQAFilter: 'Career Q&A',
      eventsFilter: 'Events & Vacancies',
      resourcesFilter: 'Resources & Tools'
    },
    installmentTracker: {
      sectionTitle: 'Class Fees Installment Tracker',
      sectionSubtitle: 'Official verified tracking portal for GlobeLink / Let\'s Go Japan students to record course fee installments, attach bank transfer deposit slips, and request receipt confirmation.',
      badge: 'Student Fee Management • Transparent Reconciliations',
      openTrackerBtn: 'Open Class Fees Installment Tracker',
      howItWorksTitle: 'How to Submit Your Installment Records:',
      step1: 'Complete your bank transfer or cash deposit using the official GlobeLink bank account details provided during enrollment.',
      step2: 'Click "Open Class Fees Installment Tracker" to launch the verified Google Form reconciliation portal.',
      step3: 'Enter your Full Name, Student Index Number, Batch Code (e.g., LGJ-N5), Installment Number (1st, 2nd, or Final), and upload a clear photo or PDF of your bank slip.',
      step4: 'Our accounts team reconciles your payment within 1-2 business days and issues your official digital receipt and updated balance statement via WhatsApp / email.',
      privacyNotice: 'Data Privacy Assurance: In accordance with student privacy protection, individual student names, balances, payment histories, and banking records are never displayed publicly. All submissions are processed privately by GlobeLink accounts staff.',
      ethicalSafeguard: 'Zero Hidden Fees: GlobeLink adheres to transparent fee schedules. Installment timelines and amounts are fixed at enrollment. No unverified penalties or unexpected surcharges are ever applied.',
      contactSupport: 'Need assistance with your installment submission or bank details?',
      verifiedResource: 'Verified GlobeLink Official Student Tool'
    },
    japanResources: {
      pageTitle: 'Japan Education & Career Resources',
      pageSubtitle: 'Verified directory of official government portals, academic entrance references, educational study tools, sector recruitment information, and direct support channels.',
      badge: "Let's Go Japan • Verified Information Hub",
      officialGovBadge: 'Official Government Resource',
      externalEduBadge: 'External Education Resource',
      externalLangBadge: 'External Japanese Language & Education Resource',
      externalRecruitBadge: 'External Recruitment / Program Information',
      visitResource: 'Visit Resource',
      contactLine: 'Contact Us on LINE',
      lineDesc: 'Connect directly with our bilingual advisory coordinators via LINE for study in Japan inquiries, application assistance, and document guidance.',
      disclaimerTitle: 'Independent Advisory & Verification Standard',
      disclaimerDesc: 'GlobeLink Education and Migration Consultants provides this curated directory for applicant guidance. Official government criteria, statutory testing requirements, and visa regulations are established exclusively by the relevant Japanese authorities.',
      categoriesTitle: 'Curated Resource Hub'
    }
  },

  // ==========================================
  // SINHALA (සිංහල)
  // ==========================================
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
      japanResources: 'ජපන් සම්පත් සහ මෙවලම්',
      contact: 'සම්බන්ධ වන්න',
      bookConsultation: 'උපදේශනයක් වෙන්කරගන්න',
      allLanguages: 'සියලු භාෂා (Languages)',
      selectLanguage: 'භාෂාව තෝරන්න',
      hotline: 'ක්ෂණික ඇමතුම්',
      officeLocation: 'නිට්ටඹුව කාර්යාලය: හොරගොල්ල, ශ්‍රී ලංකාව',
      intakeOpen: '2026/2027 ජපන් ඇතුළත් කිරීම් ආරම්භ විය'
    },
    hero: {
      kicker: 'ශ්‍රී ලංකාවේ විශ්වාසනීය ජපන් භාෂා සහ විදේශ අධ්‍යාපන සහකරු',
      titleLine1: 'ඔබේ වෘත්තීය සහකරු',
      titleLine2: 'ඔබව ලොවට සම්බන්ධ කරයි',
      subtitle: 'පුද්ගලීකෘත හා සත්‍යගරුක මඟපෙන්වීම තුළින් ජාත්‍යන්තර උසස් අධ්‍යාපනය, නීත්‍යානුකූල වෘත්තීය අවස්ථා සහ ගෝලීය දොරටු වෙත ඔබව යොමු කිරීම.',
      highlight1: "Let's Go Japan ජපන් භාෂා පුහුණුව",
      highlight2: 'ගල්ෆ් සහ ජාත්‍යන්තර වෘත්තීය මඟපෙන්වීම',
      highlight3: 'විනිවිදභාවයෙන් යුතු නීත්‍යානුකූල උපදේශනය',
      ctaExplore: 'වැඩසටහන් පිරික්සන්න',
      ctaConsult: 'උපදේශනයක් වෙන්කරගන්න'
    },
    home: {
      servicesKicker: 'ප්‍රධාන උපදේශන අංශ',
      servicesTitle: 'විස්තීර්ණ ගෝලීය අවස්ථා සහ උපදේශන සේවා',
      servicesSubtitle: 'විධිමත් භාෂා පුහුණුව, ජාත්‍යන්තර උසස් අධ්‍යාපන උපදේශනය සහ විනිවිදභාවයෙන් යුතු වෘත්තීය මඟපෙන්වීම එකම වහලක් යටින්.',
      lgjCardTitle: "Let's Go Japan ජපන් භාෂා ඇකඩමිය",
      lgjCardDesc: 'ශිෂ්‍ය වීසා සහ SSW රැකියා අපේක්ෂකයන් සඳහා විශේෂිත වූ JLPT (N5–N3), JFT-Basic, NAT-TEST සහ කථන ජපන් පුහුණුව.',
      careerCardTitle: 'Your Career Partner වෘත්තීය වැඩසටහන',
      careerCardDesc: 'ගල්ෆ් සහ ජාත්‍යන්තර රැකියා සඳහා CV සකස් කිරීම, සම්මුඛ පරීක්ෂණ පුහුණුව සහ නීත්‍යානුකූල මඟපෙන්වීම.',
      eduCardTitle: 'ජාත්‍යන්තර උසස් අධ්‍යාපන උපදේශනය',
      eduCardDesc: 'ජපානයේ භාෂා පාසල්, විශ්වවිද්‍යාල සහ ලොව පුරා උසස් අධ්‍යාපන උපාධි වැඩසටහන් සඳහා සම්පූර්ණ මඟපෙන්වීම.',
      explorePathways: 'වැඩිදුර විස්තර බලන්න',
      stepKicker: 'නීත්‍යානුකූල උපදේශන ක්‍රමවේදය',
      stepTitle: 'අපගේ පියවර 4ක උපදේශන ක්‍රියාවලිය',
      stepSubtitle: 'පැතිකඩ ඇගයීමේ සිට විදේශගත වීමේ පූර්ව දැනුවත් කිරීම දක්වා විනිවිදභාවයෙන් යුතු පැහැදිලි මඟපෙන්වීම.',
      step1Title: 'පැතිකඩ ඇගයීම (Assessment)',
      step1Desc: 'ඔබේ අධ්‍යාපනික සුදුසුකම්, සේවා පළපුරුද්ද, භාෂා හැකියාව සහ මූල්‍ය ශක්‍යතාව පිළිබඳ මූලික ඇගයීම.',
      step2Title: 'මාර්ගය සහ භාෂා සැලැස්ම',
      step2Desc: 'ගැලපෙන පාඨමාලා හෝ වෘත්තීය මාර්ගය තෝරාගෙන JLPT හෝ සම්මුඛ පරීක්ෂණ පුහුණුව සඳහා ලියාපදිංචි වීම.',
      step3Title: 'අයදුම්පත් සහ ලේඛන සත්‍යාපනය',
      step3Desc: 'සහතික කළ ලේඛන සකස් කිරීම, මූල්‍ය ලියකියවිලි, SOP කෙටුම්පත් කිරීම සහ නීත්‍යානුකූලව අයදුම්පත් ඉදිරිපත් කිරීම.',
      step4Title: 'පූර්ව විදේශගතවීමේ දැනුවත් කිරීම',
      step4Desc: 'විදේශීය බැංකු කටයුතු, ගුවන්තොටුපල ලොජිස්ටික්ස්, නවාතැන්, සංස්කෘතික නීති සහ හදිසි සහාය පිළිබඳ පුහුණුව.',
      whyKicker: 'සේවාදායක විශ්වාසය සහ සදාචාරය',
      whyTitle: 'GlobeLink Education & Migration තෝරාගත යුත්තේ ඇයි?',
      why1Title: 'විනිවිදභාවයෙන් යුතු උපදේශනය',
      why1Desc: 'අපි කිසිවිටෙකත් ව්‍යාජ පොරොන්දු හෝ 100% වීසා සහතික ලබා නොදෙමු. සැබෑ ආගමන නීති මත පදනම් වූ අවංක උපදෙස් ඔබට ලැබේ.',
      why2Title: 'විශේෂිත ජපන් භාෂා අංශය',
      why2Desc: 'Let\'s Go Japan වැඩසටහන මගින් සහතික ලත් විෂය නිර්දේශය, ආදර්ශ විභාග සහ කථන ජපන් පුහුණුව එකම තැනකින් ලබාදේ.',
      why3Title: 'සෘජු සහ මාර්ගගත ප්‍රවේශය',
      why3Desc: 'නිට්ටඹුවේ පිහිටි අපගේ කාර්යාලයට පැමිණීමට හෝ දිවයිනේ ඕනෑම තැනක සිට සජීවී මාර්ගගත පන්තිවලට සහභාගී වීමට හැකිය.',
      destKicker: 'ජාත්‍යන්තර අවස්ථා',
      destTitle: 'අධ්‍යාපනික සහ වෘත්තීය ගමනාන්ත ගවේෂණය කරන්න',
      destSubtitle: 'ජපානය, එක්සත් අරාබි එමීර් රාජ්‍යය, මාලදිවයින සහ ප්‍රමුඛ රටවල් සඳහා සත්‍යාපිත මඟපෙන්වීම.',
      destNotice: 'වැදගත් නිවේදනය: සෑම රටක් සඳහාම සෑම වීසා වර්ගයක්ම නොපවතී. පුද්ගලික සුදුසුකම් සහ සේවායෝජක අවශ්‍යතා අනුව අයදුම්පත් පරීක්ෂා කෙරේ.',
      viewAllDestinations: 'සියලු ගමනාන්ත සහ මාර්ගෝපදේශ බලන්න',
      faqKicker: 'ප්‍රශ්න තිබේද?',
      faqTitle: 'නිතර අසන ප්‍රශ්න (FAQ)',
      faqSubtitle: 'පාඨමාලා, වෘත්තීය උපදේශනය, ගමනාන්ත සහ නීතිමය ප්‍රමිතීන් පිළිබඳ පැහැදිලි පිළිතුරු.',
      inquiryTitle: 'GlobeLink සමඟ උපදේශනයක් වෙන්කරගන්න',
      inquirySubtitle: 'ඔබේ තොරතුරු පහතින් ඇතුළත් කරන්න. අපගේ අධ්‍යාපනික සහ වෘත්තීය උපදේශකවරුන් ඔබ හා කඩිනමින් සම්බන්ධ වනු ඇත.'
    },
    about: {
      pageTitle: 'GlobeLink Education & Migration Consultants පිළිබඳව',
      pageSubtitle: 'විශ්වාසනීය උපදේශනය සහ උසස් ජපන් භාෂා අධ්‍යාපනය තුළින් දේශීය හැකියාවන් ජාත්‍යන්තර තලයට ඔසවා තැබීම.',
      kicker: 'අපගේ මෙහෙවර සහ කතාව',
      storyTitle: 'ශ්‍රී ලාංකික අපේක්ෂකයන් උදෙසා ප්‍රතිපත්තිගරුක උපදේශනය',
      storyP1: 'GlobeLink Education and Migration Consultants ආයතනය ආරම්භ කරන ලද්දේ ශ්‍රී ලාංකික සිසුන්ට සහ වෘත්තිකයන්ට ජාත්‍යන්තර අධ්‍යාපනය සහ වෘත්තීය මාර්ග වෙත ළඟාවීම සඳහා විනිවිද පෙනෙන අව්‍යාජ මඟපෙන්වීමක් ලබාදීමේ අරමුණෙනි.',
      storyP2: 'අපගේ ප්‍රමුඛතම අංශය වන Let\'s Go Japan හරහා, ජපානයේ ජීවත්වීමට හා රැකියාවල නිරතවීමට අවශ්‍ය භාෂා ප්‍රවීණතාව සහ සංස්කෘතික දැනුම සිසුන් වෙත ලබාදීමට අපි කටයුතු කර ඇත්තෙමු.',
      missionTitle: 'අපගේ මෙහෙවර',
      missionDesc: 'අපේක්ෂකයන්ගේ අයිතිවාසිකම් සහ සුබසාධනය ආරක්ෂා කරමින්, තිරසාර ගෝලීය ජයග්‍රහණ සඳහා නීත්‍යානුකූල සහ සදාචාරාත්මක උපදේශනයක් සැපයීම.',
      visionTitle: 'අපගේ දැක්ම',
      visionDesc: 'විශිෂ්ට භාෂා අධ්‍යාපනය, ව්‍යාජ පොරොන්දු රහිත අවංකභාවය සහ සාර්ථක ශිෂ්‍ය ප්‍රතිඵල වෙනුවෙන් ශ්‍රී ලංකාවේ වඩාත්ම විශ්වාසනීය ගෝලීය සහකරු බවට පත්වීම.',
      valuesTitle: 'අපගේ මූලික මෙහෙයුම් ප්‍රතිපත්ති',
      val1Title: 'පූර්ණ විනිවිදභාවය',
      val1Desc: 'සැඟවුණු ගාස්තු නැත, ව්‍යාජ රැකියා පොරොන්දු නැත, ව්‍යාජ වීසා සහතික නැත. සෑම උපදෙසක්ම සැබෑ ආගමන නීති මත පදනම් වේ.',
      val2Title: 'උසස් අධ්‍යාපනික ප්‍රමිතිය',
      val2Desc: 'ජපන් පදනම (Japan Foundation) සහ JLPT නිර්ණායකයන්ට අනුකූලව සකස් කළ විශේෂිත විෂය නිර්දේශය ප්‍රවීණ ගුරුවරුන් විසින් මෙහෙයවනු ලැබේ.',
      val3Title: 'පුද්ගලීකෘත මඟපෙන්වීම',
      val3Desc: 'ඕනෑම පාඨමාලාවක් යෝජනා කිරීමට පෙර එක් එක් අපේක්ෂකයාගේ අධ්‍යාපනික පසුබිම, මූල්‍ය ශක්‍යතාව සහ අරමුණු හොඳින් විමසා බලමු.',
      val4Title: 'අපේක්ෂක සුබසාධනය',
      val4Desc: 'විදේශීය කම්කරු නීති, ජීවන වියදම් සහ පිළිගත් අධ්‍යාපන ආයතන පිළිබඳව සම්පූර්ණ හා සත්‍ය තොරතුරු ලබාදීම.',
      complianceTitle: 'නිල නීතිමය ස්ථාවරය',
      complianceDesc: 'GlobeLink ආයතනය සම්පූර්ණයෙන්ම දේශීය සහ විදේශීය නීති රාමුව තුළ ක්‍රියාත්මක වන අතර ව්‍යාජ රැකියා නියෝජිතායතනයක් ලෙස කටයුතු නොකරයි.'
    },
    courses: {
      pageTitle: 'ජපන් භාෂා පාඨමාලා සහ විභාග සූදානම',
      pageSubtitle: 'හිරගනා, කතකනා, කන්ජි, ව්‍යාකරණ සහ සේවා ස්ථාන සංවාද (Kaiwa) ප්‍රවීණ Let\'s Go Japan ආචාර්ය මණ්ඩලය සමඟ ප්‍රගුණ කරන්න.',
      badge: "Let's Go Japan • භාෂා ඇකඩමිය",
      filterAll: 'සියලු පාඨමාලා',
      filterFoundation: 'ආරම්භක පදනම (N5)',
      filterIntermediate: 'මධ්‍යම මට්ටම (N4 / N3)',
      filterExamPrep: 'පසුගිය ප්‍රශ්න පත්‍ර සහ JFT',
      filterSkills: 'කන්ජි සහ කථන පුහුණුව (Kaiwa)',
      tuitionFeeLabel: 'පාඨමාලා ගාස්තුව:',
      durationLabel: 'කාලසීමාව:',
      hoursLabel: 'සජීවී පැය ගණන:',
      scheduleLabel: 'පන්ති වේලාවන්:',
      modeLabel: 'පැවැත්වෙන ආකාරය:',
      keyHighlightsLabel: 'පාඨමාලාවේ විශේෂතා:',
      viewSyllabus: 'සම්පූර්ණ විෂය නිර්දේශය බලන්න',
      enrollWhatsApp: 'WhatsApp මගින් ලියාපදිංචි වන්න',
      close: 'වසන්න',
      courseDetailsModal: 'පාඨමාලා විස්තර සහ විෂය නිර්දේශය',
      detailedSyllabus: 'සවිස්තරාත්මක විෂය නිර්දේශය:'
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
    careerPartner: {
      pageTitle: 'Your Career Partner වෘත්තීය වැඩසටහන',
      pageSubtitle: 'ජාත්‍යන්තර අවස්ථා සඳහා වෘත්තීය පැතිකඩ ඇගයීම, CV සැකසීම සහ HR සම්මුඛ පරීක්ෂණ පුහුණුව.',
      badge: 'වෘත්තීය උපදේශන සේවාව',
      overviewTitle: 'උපායමාර්ගික වෘත්තීය දියුණුව',
      overviewDesc: 'ජාත්‍යන්තර ප්‍රමිතීන්ට අනුකූල වෘත්තීය ලිපිගොනු සහ සංස්කෘතික සන්නිවේදන ශක්තියෙන් අපේක්ෂකයන් සන්නද්ධ කරමු.',
      pillar1Title: 'ජාත්‍යන්තර CV ප්‍රතිව්‍යුහගත කිරීම',
      pillar1Desc: 'ජපන් සහ ගල්ෆ් ආයතනික ප්‍රමිතීන්ට ගැළපෙන පරිදි ඔබගේ ජයග්‍රහණ සහ පළපුරුද්ද පෙළගැස්වීම.',
      pillar2Title: 'HR සහ චර්යාත්මක සම්මුඛ පරීක්ෂණ පුහුණුව',
      pillar2Desc: 'ආදර්ශ සම්මුඛ පරීක්ෂණ මණ්ඩල, නිපුණතා පදනම් කරගත් ප්‍රශ්න සහ ආයතනික සන්නිවේදන ශිල්පක්‍රම.',
      pillar3Title: 'තහවුරු කළ අවශ්‍යතා සමඟ ගැලපීම',
      pillar3Desc: 'සේවායෝජකයන්ගේ සැබෑ සුදුසුකම් සහ නීත්‍යානුකූල වීසා ප්‍රමිතීන්ට අනුකූලව ඔබේ සුදුසුකම් පෙළගැස්වීම.',
      disclaimerNotice: 'Career Partner සේවාවන් උපදේශන හා අධ්‍යාපනික සේවාවන් වන අතර රැකියා විකිණීම හෝ සහතික කිරීම් සිදු නොකරයි.'
    },
    education: {
      pageTitle: 'ජාත්‍යන්තර උසස් අධ්‍යාපන උපදේශනය',
      pageSubtitle: 'ශ්‍රී ලාංකික සිසුන් ලොව කීර්තිමත් විශ්වවිද්‍යාල, ශිෂ්‍යත්ව සහ උසස් උපාධි පාඨමාලා සමඟ සම්බන්ධ කිරීම.',
      badge: 'ගෝලීය අධ්‍යාපන මඟපෙන්වීම',
      overviewTitle: 'ලෝක මට්ටමේ උසස් අධ්‍යාපනයට ඔබේ දොරටුව',
      overviewDesc: 'නිවැරදි ආයතනය තෝරාගැනීමේ සිට Statement of Purpose සැකසීම සහ ශිෂ්‍ය වීසා ලේඛන දක්වා සම්පූර්ණ මඟපෙන්වීම.',
      feature1Title: 'විශ්වවිද්‍යාල සහ උසස් අධ්‍යාපන ආයතන තේරීම',
      feature1Desc: 'ජපානය, එක්සත් රාජධානිය, කැනඩාව, ඕස්ට්‍රේලියාව සහ නවසීලන්තයේ පිළිගත් විශ්වවිද්‍යාල පිළිබඳ මඟපෙන්වීම.',
      feature2Title: 'ශිෂ්‍යත්ව උපදේශනය (MEXT සහ ආයතනික)',
      feature2Desc: 'රජයේ සහ ආයතනික ශිෂ්‍යත්ව අවශ්‍යතා, අයදුම්පත් සහ පර්යේෂණ යෝජනා සකස් කිරීමේ සහාය.',
      feature3Title: 'Statement of Purpose (SOP) මඟපෙන්වීම',
      feature3Desc: 'ඔබේ අධ්‍යාපනික අරමුණු විශ්වාසදායක ලෙස ඉදිරිපත් කිරීම සඳහා පුද්ගලීකෘත ලේඛන සමාලෝචනය.',
      feature4Title: 'වීසා ලේඛන සහ COE සැකසීම',
      feature4Desc: 'තානාපති කාර්යාල සහ ආගමන විගමන ප්‍රමිතීන්ට අනුකූලව ලේඛන සකස් කිරීමේ නිරවද්‍ය සහාය.'
    },
    letsGoJapan: {
      pageTitle: "Let's Go Japan අංශය",
      pageSubtitle: 'අපගේ ප්‍රමුඛතම ජපන් භාෂා ඇකඩමිය සහ විස්තීර්ණ ජපන් අධ්‍යාපන හා වෘත්තීය උපදේශන මධ්‍යස්ථානය.',
      badge: 'විශේෂිත ජපන් වැඩසටහන',
      introTitle: "Let's Go Japan සමඟ ජපන් භාෂාව ඉගෙනගත යුත්තේ ඇයි?",
      introDesc: 'දේශීය හා විදේශීය ප්‍රවීණ ආචාර්යවරුන්, JLPT N5–N3 පුහුණුව සහ ජපානයට ඇතුළුවීමේ සම්පූර්ණ ක්‍රමවේදය.',
      pillar1Title: 'සජීවී අන්තර්ක්‍රියාකාරී පන්ති',
      pillar1Desc: 'සතියේ දින සන්ධ්‍යා සහ සති අන්ත පන්ති, පටිගත කළ දේශන සහ ඩිජිටල් අධ්‍යයන කට්ටල.',
      pillar2Title: 'EJU සහ විශ්වවිද්‍යාල පිවිසුම් මඟපෙන්වීම',
      pillar2Desc: 'ජපානයේ උපාධි පාඨමාලා බලාපොරොත්තු වන සිසුන් සඳහා ශාස්ත්‍රීය ජපන් භාෂා පදනම.',
      pillar3Title: 'SSW නිශ්චිත නිපුණතා ශ්‍රමික සූදානම',
      pillar3Desc: 'සාත්තු සේවය, කෘෂිකර්මාන්තය, ආහාර සැපයුම් සහ ඉදිකිරීම් අංශ සඳහා Prometric විභාග සූදානම.',
      coeTitle: 'විනිවිද පෙනෙන COE සහ ශිෂ්‍ය වීසා පියවර',
      coeDesc: 'Certificate of Eligibility (COE) අයදුම් කිරීම, මූල්‍ය අනුග්‍රාහක ලේඛන සහ තානාපති වීසා පියවරෙන් පියවර මඟපෙන්වීම.'
    },
    migrationVisa: {
      pageTitle: 'වීසා සහ නීතිමය උපදේශනය',
      pageSubtitle: 'නීතිමය රාමු, සහතික කළ ලේඛන ප්‍රමිතීන් සහ සදාචාරාත්මක සංක්‍රමණික මඟපෙන්වීම.',
      badge: 'නීත්‍යානුකූල අනුකූලතාව',
      overviewTitle: 'රාජ්‍ය ආගමන නීති සහ රෙගුලාසි අවබෝධ කරගැනීම',
      overviewDesc: 'වීසා නිකුත් කිරීම අදාළ රටවල රජයන්ගේ පරමාධිපත්‍යමය අයිතියකි. GlobeLink ආයතනය නීත්‍යානුකූල ලේඛන සකස් කිරීමේ සහාය ලබාදේ.',
      titpTitle: 'කාර්මික පුහුණුලාභී වැඩසටහන (TITP)',
      titpDesc: 'OTIT අධීක්ෂණය යටතේ ක්‍රියාත්මක වන නිපුණතා හුවමාරු වැඩසටහන. සේවා කොන්ත්‍රාත්තු සහ පුහුණුලාභීන්ගේ සුබසාධනය ආරක්ෂා කරයි.',
      sswTitle: 'නිශ්චිත නිපුණතා ශ්‍රමික (SSW 1 සහ 2)',
      sswDesc: 'ජපන් ආගමන සේවා ඒජන්සිය යටතේ සෘජු සේවා නියුක්තිය, සමාන වැටුප් සහ සමාජ ආරක්ෂණ අයිතිවාසිකම් සහිත නේවාසික තත්ත්වය.',
      hspTitle: 'ඉහළ නිපුණතා වෘත්තිකයන් (HSP)',
      hspDesc: 'ඉංජිනේරුවන්, පර්යේෂකයන් සහ ආයතනික විධායකයින් සඳහා ලකුණු ක්‍රමය මත පදනම් වූ කඩිනම් ස්ථිර පදිංචිය ලබාදෙන වීසා ක්‍රමවේදය.',
      complianceNotice: 'නිල නිවේදනය: GlobeLink ආයතනය වීසා නිකුත් කිරීම හෝ රජයේ තීරණවලට බලපෑම් කිරීම සිදු නොකරයි.',
      antiFraudTitle: 'වංචාවන්ට එරෙහි අනතුරු ඇඟවීම',
      antiFraudDesc: 'සහතික කළ වීසා හෝ ව්‍යාජ රැකියා ලිපි සඳහා කිසිවිටෙකත් මුදල් නොගෙවන්න. GlobeLink ක්‍රියාත්මක වන්නේ සත්‍යගරුක ලේඛන සමඟ පමණි.'
    },
    contact: {
      pageTitle: 'GlobeLink උපදේශකවරුන් සම්බන්ධ කරගන්න',
      pageSubtitle: 'නිට්ටඹුව කාර්යාලයට පැමිණෙන්න හෝ දුරකථන, විද්‍යුත් තැපෑල හෝ WhatsApp මගින් සෘජුව සම්බන්ධ වන්න.',
      badge: 'සම්බන්ධ වන්න',
      hotlineLabel: 'ක්ෂණික ඇමතුම්:',
      emailLabel: 'නිල විද්‍යුත් තැපෑල:',
      officeLabel: 'ප්‍රධාන කාර්යාල ලිපිනය:',
      hoursLabel: 'කාර්යාල වේලාවන්:',
      openHours: 'සඳුදා – සෙනසුරාදා: පෙ.ව. 8:30 – ප.ව. 5:30 (ඉරිදා සහ රජයේ නිවාඩු දිනවල වසා ඇත)',
      getDirections: 'Google Maps මගින් මාර්ගය බලන්න',
      formTitle: 'පණිවිඩයක් එවන්න / විමසන්න',
      formSubtitle: 'ඔබේ විස්තර ඇතුළත් කරන්න. අධ්‍යාපන සම්බන්ධීකාරකවරයෙකු ඔබ හා කඩිනමින් සම්බන්ධ වනු ඇත.'
    },
    footer: {
      letsGoJapanTitle: "Let's Go Japan වැඩසටහන",
      letsGoJapanDesc: 'JLPT N5/N4/N3, JFT-Basic, NAT-TEST, කන්ජි පුහුණුව සහ ශ්‍රී ලාංකික අපේක්ෂකයන් සඳහා මාර්ගගත සජීවී පන්ති.',
      careerPartnerTitle: 'Your Career Partner වැඩසටහන',
      careerPartnerDesc: 'වෘත්තීය පැතිකඩ සැකසීම, ගල්ෆ් සහ ජපන් ක්‍රමවේදයට CV සකස් කිරීම සහ සේවායෝජක අවශ්‍යතා සපුරාලීම.',
      ethicalTitle: 'සදාචාරාත්මක උපදේශන ප්‍රමිතීන්',
      ethicalDesc: 'විනිවිද පෙනෙන සේවා පියවර, ව්‍යාජ පොරොන්දු රහිත බව, සහතික කළ ලේඛන සහ සත්‍යාපිත සේවාදායක මඟපෙන්වීම.',
      corePages: 'ප්‍රධාන පිටු',
      letsGoJapanSection: "Let's Go Japan",
      officeHotlines: 'කාර්යාලය සහ ඇමතුම්',
      complianceNotice: 'නීතිමය හා සදාචාරාත්මක නිවේදනය: GlobeLink Education and Migration Consultants යනු අධ්‍යාපනික උපදේශනය, භාෂා පුහුණුව සහ ලේඛන සහාය සපයන ස්වාධීන පෞද්ගලික ආයතනයකි. අපි වීසා නිකුත් කිරීම හෝ රැකියා, වැටුප් හෝ සංක්‍රමණ ප්‍රතිඵල සහතික නොකරමු. සියලුම වීසා තීරණ අදාළ රජයේ තානාපති කාර්යාල සහ ආගමන විගමන දෙපාර්තමේන්තු සතු වේ.',
      rightsReserved: 'සියලු හිමිකම් ඇවිරිණි.',
      privacyPolicy: 'පෞද්ගලිකත්ව ප්‍රතිපත්තිය',
      termsConditions: 'නියමයන් සහ කොන්දේසි',
      sitemap: 'XML සයිට්මැප්',
      staffPortal: 'කාර්ය මණ්ඩල ද්වාරය / Admin CMS'
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
      close: 'වසන්න',
      homeBreadcrumb: 'මුල් පිටුව',
      whatsappUs: 'WhatsApp අමතන්න',
      whatsappTeam: 'GlobeLink උපදේශක කණ්ඩායම',
      whatsappTeamDesc: "Let's Go Japan හෝ විදේශ වෘත්තීය මාර්ග පිළිබඳ ගැටළු තිබේද? WhatsApp මගින් විමසන්න.",
      cookieTitle: 'පෞද්ගලිකත්වය සහ විනිවිදභාවය',
      cookieDesc: 'වෙබ් අඩවියේ ක්‍රියාකාරීත්වය සහ උපදේශන විමසීම් සඳහා අපි අත්‍යවශ්‍ය බ්‍රවුසර් ගබඩාව භාවිත කරමු.',
      cookieAcknowledge: 'පිළිගන්නවා',
      modalConsultationTitle: 'උපදේශනයක් වෙන්කරගන්න',
      modalConsultationSubtitle: 'ඔබේ තොරතුරු ඇතුළත් කරන්න. අපගේ උපදේශකවරයෙකු WhatsApp හෝ දුරකථනයෙන් සම්බන්ධ වනු ඇත.',
      optSelectDestination: 'ගමනාන්තය තෝරන්න...',
      optSelectService: 'සේවා කාණ්ඩය තෝරන්න...',
      errNameRequired: 'සම්පූර්ණ නම ඇතුළත් කිරීම අනිවාර්ය වේ.',
      errPhoneRequired: 'දුරකථන අංකය ඇතුළත් කිරීම අනිවාර්ය වේ.',
      errPhoneInvalid: 'කරුණාකර නිවැරදි දුරකථන අංකයක් ලබාදෙන්න (උදා: +94 76 498 6049).',
      errEmailRequired: 'විද්‍යුත් තැපෑල ඇතුළත් කිරීම අනිවාර්ය වේ.',
      errEmailInvalid: 'කරුණාකර වලංගු විද්‍යුත් තැපැල් ලිපිනයක් ලබාදෙන්න.',
      errConsentRequired: 'ඉදිරියට යාමට ඔබ කොන්දේසි පිළිගත යුතුය.'
    },
    search: {
      placeholder: 'පාඨමාලා, ගාස්තු, JLPT/EJU, SSW විභාග, සම්මුඛ පරීක්ෂණ Q&A සොයන්න...',
      buttonLabel: 'සොයන්න',
      modalTitle: 'වෙබ් අඩවිය තුළ සෙවීම',
      noResults: 'ගැලපෙන තොරතුරු හමු නොවීය',
      noResultsDesc: 'ඔබ සෙවූ වචන සඳහා තොරතුරු හමු නොවීය. "JLPT", "N5 ගාස්තු", "EJU", "SSW", "සම්මුඛ පරීක්ෂණ", හෝ "කෘෂිකර්ම" ලෙස සොයා බලන්න.',
      resultsFound: 'ප්‍රතිඵල හමුවිය',
      quickCategories: 'කාණ්ඩ අනුව පිරික්සන්න:',
      clear: 'සෙවුම් වචන මකන්න',
      close: 'සෙවීම වසන්න',
      openResource: 'පිටුව බලන්න',
      allFilter: 'සියලු ප්‍රතිඵල',
      coursesFilter: 'පාඨමාලා සහ ගාස්තු',
      examsFilter: 'විභාග සහ EJU',
      visasFilter: 'SSW සහ වීසා',
      careerQAFilter: 'සම්මුඛ Q&A',
      eventsFilter: 'සිදුවීම් සහ පුරප්පාඩු',
      resourcesFilter: 'සම්පත් සහ මෙවලම්'
    },
    installmentTracker: {
      sectionTitle: 'පන්ති ගාස්තු වාරික ලුහුබැඳීමේ පද්ධතිය',
      sectionSubtitle: 'GlobeLink / Let\'s Go Japan සිසුන්ට තම පාඨමාලා ගාස්තු වාරික ගෙවීම් වාර්තා කිරීමට, බැංකු තැන්පතු පත්‍රිකා අමුණා තහවුරු කළ රිසිට්පත් ලබාගැනීමට ඇති නිල පද්ධතිය.',
      badge: 'ශිෂ්‍ය ගාස්තු කළමනාකරණය • විනිවිදභාවය',
      openTrackerBtn: 'පන්ති ගාස්තු වාරික ලුහුබැඳීමේ පද්ධතිය විවෘත කරන්න',
      howItWorksTitle: 'ඔබේ ගාස්තු වාරික වාර්තා යොමු කරන ආකාරය:',
      step1: 'ලියාපදිංචි වීමේදී ලබාදුන් GlobeLink නිල බැංකු ගිණුමට අදාළ වාරික මුදල බැර කරන්න.',
      step2: '"පන්ති ගාස්තු වාරික ලුහුබැඳීමේ පද්ධතිය විවෘත කරන්න" බොත්තම ක්ලික් කර නිල Google Form පත්‍රිකාව වෙත පිවිසෙන්න.',
      step3: 'ඔබේ සම්පූර්ණ නම, ශිෂ්‍ය අංකය (Student ID), කණ්ඩායම් කේතය (උදා: LGJ-N5), වාරික අංකය (1 වන, 2 වන හෝ අවසන්) සහ බැංකු රිසිට්පතේ පැහැදිලි ඡායාරූපයක් හෝ PDF ගොනුවක් ඇතුළත් කරන්න.',
      step4: 'අපගේ ගිණුම් අංශය වැඩ කරන දින 1-2ක් ඇතුළත තොරතුරු පරීක්ෂා කර ඔබගේ නිල ඩිජිටල් රිසිට්පත සහ ශේෂ පත්‍රය WhatsApp / විද්‍යුත් තැපෑල වෙත එවනු ඇත.',
      privacyNotice: 'පෞද්ගලිකත්ව සහතිකය: ශිෂ්‍ය පෞද්ගලිකත්වය සුරැකීම සඳහා, කිසිදු සිසුවෙකුගේ නම, ගෙවීම් ඉතිහාසය, මුදල් ශේෂයන් හෝ බැංකු තොරතුරු ප්‍රසිද්ධියේ ප්‍රදර්ශනය නොකෙරේ. සියලු දත්ත ගිණුම් අංශය මගින් රහසිගතව හසුරුවනු ලැබේ.',
      ethicalSafeguard: 'සැඟවුණු ගාස්තු නොමැත: GlobeLink සෑම විටම විනිවිදභාවයෙන් යුතු ගාස්තු ක්‍රමවේදයක් අනුගමනය කරයි. ලියාපදිංචියේදී තීරණය වූ නියමිත මුදල හැර අමතර ගාස්තු අය නොකෙරේ.',
      contactSupport: 'වාරික ගෙවීම් හෝ බැංකු තොරතුරු පිළිබඳ උපකාර අවශ්‍යද?',
      verifiedResource: 'GlobeLink නිල ශිෂ්‍ය මෙවලම'
    },
    japanResources: {
      pageTitle: 'ජපන් අධ්‍යාපන සහ වෘත්තීය සම්පත් කේන්ද්‍රය',
      pageSubtitle: 'ජපන් රජයේ නිල ද්වාර, විශ්වවිද්‍යාල පිවිසුම් මඟපෙන්වීම්, අධ්‍යාපනික උපකාරක සේවා සහ සෘජු සම්බන්ධතා නාලිකා.',
      badge: "Let's Go Japan • තහවුරු කළ තොරතුරු කේන්ද්‍රය",
      officialGovBadge: 'නිල රාජ්‍ය සම්පත',
      externalEduBadge: 'බාහිර අධ්‍යාපනික සම්පත',
      externalLangBadge: 'බාහිර ජපන් භාෂා සහ අධ්‍යාපන සම්පත',
      externalRecruitBadge: 'බාහිර බඳවාගැනීම් / වැඩසටහන් තොරතුරු',
      visitResource: 'මූලාශ්‍රය වෙත පිවිසෙන්න',
      contactLine: 'LINE හරහා අප හා සම්බන්ධ වන්න',
      lineDesc: 'ජපානයේ අධ්‍යාපනය සහ අයදුම්පත් පිළිබඳව අපගේ උපදේශකවරුන් හා සෘජුව LINE යෙදුම ඔස්සේ සාකච්ඡා කරන්න.',
      disclaimerTitle: 'ස්වාධීන උපදේශන සහ තහවුරු කිරීමේ ප්‍රමිතිය',
      disclaimerDesc: 'GlobeLink Education and Migration Consultants ආයතනය මෙම තොරතුරු සිසුන්ගේ මඟපෙන්වීම සඳහා පමණක් ඉදිරිපත් කරයි. නිල රජයේ නීති, විභාග සහ වීසා රෙගුලාසි තීරණය කරනු ලබන්නේ අදාළ ජපන් බලධාරීන් විසිනි.',
      categoriesTitle: 'තෝරාගත් සම්පත් එකතුව'
    }
  },

  // ==========================================
  // TAMIL (தமிழ்)
  // ==========================================
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
      japanResources: 'ஜப்பான் வழிகாட்டல் & வளங்கள்',
      contact: 'தொடர்புகொள்ள',
      bookConsultation: 'ஆலோசனை முன்பதிவு',
      allLanguages: 'அனைத்து மொழிகள் (Languages)',
      selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
      hotline: 'அவசர உதவி எண்',
      officeLocation: 'நிட்டம்புவ அலுவலகம்: ஹொரகொல்ல, இலங்கை',
      intakeOpen: '2026/2027 ஜப்பான் சேர்க்கை ஆரம்பமானது'
    },
    hero: {
      kicker: 'இலங்கையின் நம்பகமான ஜப்பானிய மொழி மற்றும் சர்வதேச கல்வி பங்குதாரர்',
      titleLine1: 'உங்கள் தொழில் பங்குதாரர்',
      titleLine2: 'உங்களை உலகத்துடன் இணைக்கிறது',
      subtitle: 'தனிப்பயனாக்கப்பட்ட மற்றும் முறையான வழிகாட்டலின் மூலம் சர்வதேச கல்வி, நேர்மையான தொழில் வாய்ப்புகள் மற்றும் உலகளாவிய வழிகளுடன் உங்களை இணைக்கிறோம்.',
      highlight1: "Let's Go Japan ஜப்பானிய மொழிப் பயிற்சி",
      highlight2: 'வளைகுடா மற்றும் சர்வதேச தொழில் வழிகாட்டல்',
      highlight3: 'வெளிப்படையான மற்றும் சட்டபூர்வமான ஆலோசனை',
      ctaExplore: 'திட்டங்களைப் பார்க்க',
      ctaConsult: 'ஆலோசனை முன்பதிவு'
    },
    home: {
      servicesKicker: 'முதன்மை ஆலோசனைத் துறைகள்',
      servicesTitle: 'விரிவான சர்வதேச வாய்ப்புகள் மற்றும் ஆலோசனை சேவைகள்',
      servicesSubtitle: 'கட்டமைக்கப்பட்ட மொழிப் பயிற்சி, சர்வதேச உயர்கல்வி ஆலோசனை மற்றும் வெளிப்படையான தொழில் வழிகாட்டல் ஒரே இடத்தில்.',
      lgjCardTitle: "Let's Go Japan மொழி அகாடமி",
      lgjCardDesc: 'மாணவர் விசா மற்றும் SSW வேலைவாய்ப்பை இலக்காகக் கொண்டவர்களுக்கான JLPT (N5–N3), JFT-Basic, NAT-TEST மற்றும் உரையாடல் பயிற்சி.',
      careerCardTitle: 'Your Career Partner தொழில் திட்டம்',
      careerCardDesc: 'சர்வதேச CV தயாரிப்பு, நேர்காணல் பயிற்சிகள் மற்றும் வளைகுடா நாடுகளுக்கான முறையான தொழில் வழிகாட்டல்.',
      eduCardTitle: 'சர்வதேச உயர்கல்வி ஆலோசனை',
      eduCardDesc: 'ஜப்பானிய மொழிப் பள்ளிகள், பல்கலைக்கழகங்கள் மற்றும் உலகளாவிய பட்டப்படிப்புகளுக்கான முழுமையான வழிகாட்டல்.',
      explorePathways: 'கூடுதல் விவரங்களைப் பார்க்க',
      stepKicker: 'சட்டபூர்வ ஆலோசனை வழிமுறை',
      stepTitle: 'எங்கள் 4-படி ஆலோசனை முறை',
      stepSubtitle: 'ஆரம்ப சுயவிவர மதிப்பீட்டிலிருந்து புறப்படுவதற்கு முந்தைய வழிகாட்டல் வரையிலான வெளிப்படையான படிநிலைகள்.',
      step1Title: 'சுயவிவர மதிப்பீடு',
      step1Desc: 'உங்கள் கல்வித் தகுதி, பணி அனுபவம், மொழித்திறன் மற்றும் நிதி சாத்தியக்கூறுகள் பற்றிய ஆரம்ப மதிப்பீடு.',
      step2Title: 'மொழி மற்றும் படிப்புத் திட்டம்',
      step2Desc: 'பொருத்தமான படிப்பு அல்லது வேலை வழியைத் தேர்ந்தெடுத்து JLPT அல்லது நேர்காணல் பயிற்சியில் சேருதல்.',
      step3Title: 'விண்ணப்பம் மற்றும் ஆவண சரிபார்ப்பு',
      step3Desc: 'சான்றளிக்கப்பட்ட ஆவணங்களைத் தயாரித்தல், நிதி ஆவணங்கள், SOP எழுதுதல் மற்றும் உத்தியோகபூர்வமாக சமர்ப்பித்தல்.',
      step4Title: 'புறப்படுவதற்கு முந்தைய வழிகாட்டல்',
      step4Desc: 'வெளிநாட்டு வங்கி பரிவர்த்தனைகள், விமான நிலைய வழிமுறைகள், தங்குமிடம் மற்றும் அவசர கால உதவி பற்றிய வழிகாட்டல்.',
      whyKicker: 'வாடிக்கையாளர் நம்பிக்கை மற்றும் நேர்மை',
      whyTitle: 'GlobeLink Education & Migration ஐ ஏன் தேர்வு செய்ய வேண்டும்?',
      why1Title: 'வெளிப்படையான மற்றும் நேர்மையான ஆலோசனை',
      why1Desc: 'நாங்கள் பொய்யான வாக்குறுதிகளையோ 100% விசா உத்தரவாதங்களையோ வழங்குவதில்லை. குடிவரவு விதிகளின் அடிப்படையிலான நேர்மையான ஆலோசனையே உங்களுக்குக் கிடைக்கும்.',
      why2Title: 'சிறப்பு ஜப்பானிய மொழிப் பிரிவு',
      why2Desc: 'Let\'s Go Japan திட்டம் சான்றளிக்கப்பட்ட பாடத்திட்டம், மாதிரித் தேர்வுகள் மற்றும் உரையாடல் பயிற்சிகளை ஒரே கூரையின் கீழ் வழங்குகிறது.',
      why3Title: 'நேரடி மற்றும் இணையவழி வகுப்புகள்',
      why3Desc: 'நிட்டம்புவவில் உள்ள எங்கள் அலுவலகத்திற்கு நேரடியாக வருகை தரலாம் அல்லது எங்கிருந்தும் இணைய நேரலை வகுப்புகளில் இணையலாம்.',
      destKicker: 'சர்வதேச இலக்குகள்',
      destTitle: 'சர்வதேச கல்வி மற்றும் தொழில் நாடுகளைக் கண்டறியுங்கள்',
      destSubtitle: 'ஜப்பான், ஐக்கிய அரபு எமிரேட்ஸ், மாலத்தீவு மற்றும் முன்னணி நாடுகளுக்கான சரிபார்க்கப்பட்ட வழிகாட்டல்.',
      destNotice: 'முக்கிய அறிவிப்பு: அனைத்து நாடுகளுக்கும் அனைத்து விசா வகைகளும் கிடைப்பதில்லை. தனிப்பட்ட தகுதிகளின் அடிப்படையிலேயே ஆலோசனைகள் வழங்கப்படுகின்றன.',
      viewAllDestinations: 'அனைத்து நாடுகள் மற்றும் வழிகாட்டல்களைப் பார்க்க',
      faqKicker: 'கேள்விகள் உள்ளதா?',
      faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள் (FAQ)',
      faqSubtitle: 'பாடநெறிகள், தொழில் ஆலோசனை, நாடுகள் மற்றும் விசா விதிகள் பற்றிய தெளிவான பதில்கள்.',
      inquiryTitle: 'GlobeLink உடன் ஆலோசனையை முன்பதிவு செய்யுங்கள்',
      inquirySubtitle: 'உங்கள் தகவல்களை கீழே உள்ளிடவும். எங்கள் கல்வி ஆலோசகர்கள் உங்களை விரைவில் தொடர்புகொள்வார்கள்.'
    },
    about: {
      pageTitle: 'GlobeLink Education & Migration Consultants பற்றி',
      pageSubtitle: 'கொள்கை அடிப்படையிலான ஆலோசனை மற்றும் ஜப்பானிய மொழித் தேர்ச்சி மூலம் உள்ளூர் திறமைகளை சர்வதேச நிலைக்கு உயர்த்துதல்.',
      kicker: 'எங்கள் நோக்கம் மற்றும் வரலாறு',
      storyTitle: 'இலங்கை மாணவர்களுக்கான நேர்மையான ஆலோசனை',
      storyP1: 'GlobeLink Education and Migration Consultants இலங்கை மாணவர்கள் மற்றும் தொழில் வல்லுநர்களுக்கு சர்வதேச கல்வி மற்றும் தொழில் வாய்ப்புகளை அடைய வெளிப்படையான வழிகாட்டலை வழங்கும் நோக்கில் உருவாக்கப்பட்டது.',
      storyP2: 'எங்கள் முதன்மைப் பிரிவான Let\'s Go Japan மூலம் ஜப்பானிய மொழி கற்பித்தலில் சிறந்து விளங்கி, மாணவர்கள் ஜப்பானில் வெற்றிகரமாக வாழவும் பணிபுரியவும் உதவுகிறோம்.',
      missionTitle: 'எங்கள் நோக்கம்',
      missionDesc: 'விண்ணப்பதாரர்களின் உரிமைகளையும் நலன்களையும் பாதுகாத்து, நிலையான உலகளாவிய வெற்றிக்காக சட்டபூர்வமான மற்றும் நேர்மையான ஆலோசனைகளை வழங்குவது.',
      visionTitle: 'எங்கள் பார்வை',
      visionDesc: 'சிறந்த மொழி கல்வி மற்றும் உண்மைத்தன்மைக்காக இலங்கையின் மிகவும் நம்பகமான உலகளாவிய கூட்டாளராக விளங்குவது.',
      valuesTitle: 'எங்கள் அடிப்படைக் கொள்கைகள்',
      val1Title: 'முழுமையான வெளிப்படைத்தன்மை',
      val1Desc: 'மறைமுக கட்டணங்கள் இல்லை, போலி வேலை வாக்குறுதிகள் இல்லை. அனைத்து ஆலோசனைகளும் உண்மையான விசா சட்டங்களின் அடிப்படையிலானது.',
      val2Title: 'உயர்ந்த கல்வித் தரம்',
      val2Desc: 'Japan Foundation மற்றும் JLPT தரநிலைகளின்படி வடிவமைக்கப்பட்ட சிறப்புப் பாடத்திட்டம் தகுதிவாய்ந்த ஆசிரியர்களால் கற்பிக்கப்படுகிறது.',
      val3Title: 'தனிப்பயனாக்கப்பட்ட வழிகாட்டல்',
      val3Desc: 'ஒவ்வொரு மாணவரின் கல்வி, நிதி நிலைமை மற்றும் இலக்குகளை ஆராய்ந்த பின்னரே பொருத்தமான ஆலோசனைகளை வழங்குகிறோம்.',
      val4Title: 'மாணவர் நலன் பாதுகாப்பு',
      val4Desc: 'வெளிநாட்டு தொழிலாளர் சட்டங்கள், வாழ்க்கைச் செலவுகள் மற்றும் அங்கீகரிக்கப்பட்ட நிறுவனங்கள் பற்றிய முழுமையான தகவல்கள்.',
      complianceTitle: 'சட்டபூர்வ நிலைப்பாடு',
      complianceDesc: 'GlobeLink உள்நாட்டு மற்றும் வெளிநாட்டு சட்ட திட்டங்களுக்கு முழுமையாக கட்டுப்பட்டு இயங்குகிறது.'
    },
    courses: {
      pageTitle: 'ஜப்பானிய மொழி படிப்புகள் மற்றும் தேர்வு தயாரிப்பு',
      pageSubtitle: 'ஹிரகனா, கத்தகானா, கஞ்சி, இலக்கணம் மற்றும் பணியிட உரையாடல்களை (Kaiwa) திறமையான ஆசிரியர்களுடன் கற்றுக் கொள்ளுங்கள்.',
      badge: "Let's Go Japan • மொழி அகாடமி",
      filterAll: 'அனைத்து படிப்புகள்',
      filterFoundation: 'அடிப்படைப் படிப்பு (N5)',
      filterIntermediate: 'இடைநிலை படிப்பு (N4 / N3)',
      filterExamPrep: 'மாதிரி வினாத்தாள்கள் & JFT',
      filterSkills: 'கஞ்சி & உரையாடல் (Kaiwa)',
      tuitionFeeLabel: 'கல்விக் கட்டணம்:',
      durationLabel: 'கால அளவு:',
      hoursLabel: 'நேரடி வகுப்புகள்:',
      scheduleLabel: 'வகுப்பு நேரம்:',
      modeLabel: 'கற்பித்தல் முறை:',
      keyHighlightsLabel: 'பாடநெறியின் முக்கிய அம்சங்கள்:',
      viewSyllabus: 'விரிவான பாடத்திட்டத்தைப் பார்க்க',
      enrollWhatsApp: 'WhatsApp மூலம் பதிவு செய்ய',
      close: 'மூடுக',
      courseDetailsModal: 'பாடநெறி விவரங்கள் மற்றும் பாடத்திட்டம்',
      detailedSyllabus: 'விரிவான பாடத்திட்டக் கண்ணோட்டம்:'
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
    careerPartner: {
      pageTitle: 'Your Career Partner தொழில் திட்டம்',
      pageSubtitle: 'சர்வதேச வாய்ப்புகளுக்கான சுயவிவர மதிப்பீடு, CV தயாரிப்பு மற்றும் HR நேர்காணல் பயிற்சிகள்.',
      badge: 'தொழில்முறை வழிகாட்டல்',
      overviewTitle: 'தொழில்சார் முன்னேற்றம்',
      overviewDesc: 'சர்வதேச தரத்திலான விண்ணப்ப ஆவணங்கள் மற்றும் நம்பிக்கையான தொடர்பாடல் திறன்களை வளர்க்கிறோம்.',
      pillar1Title: 'சர்வதேச CV தயாரிப்பு',
      pillar1Desc: 'ஜப்பான் மற்றும் வளைகுடா நாடுகளின் பெருநிறுவன தரநிலைகளுக்கு ஏற்ப உங்கள் அனுபவங்களை வடிவமைத்தல்.',
      pillar2Title: 'HR நேர்காணல் பயிற்சிகள்',
      pillar2Desc: 'மாதிரி நேர்காணல் அமர்வுகள், தகுதி சார்ந்த கேள்விகள் மற்றும் கலாச்சார தொடர்பாடல் நுட்பங்கள்.',
      pillar3Title: 'சட்டபூர்வ விசா தேவைகளுடன் பொருந்துதல்',
      pillar3Desc: 'நிறுவனங்களின் உண்மையான தேவைகள் மற்றும் விசா விதிகளுக்கு ஏற்ப உங்கள் தகுதிகளை மேம்படுத்துதல்.',
      disclaimerNotice: 'Career Partner சேவைகள் கல்வி மற்றும் ஆலோசனைக் கண்ணோட்டமுடையவை. நாங்கள் வேலைகளை விற்பனை செய்வதில்லை.'
    },
    education: {
      pageTitle: 'சர்வதேச உயர்கல்வி ஆலோசனை',
      pageSubtitle: 'இலங்கை மாணவர்களை உலகின் முன்னணி பல்கலைக்கழகங்கள், புலமைப்பரிசில்கள் மற்றும் பட்டப்படிப்புகளுடன் இணைத்தல்.',
      badge: 'சர்வதேச கல்வி வழிகாட்டல்',
      overviewTitle: 'உலகத்தரம் வாய்ந்த உயர்கல்விக்கான உங்கள் வாசல்',
      overviewDesc: 'பொருத்தமான பல்கலைக்கழகத்தை தெரிவு செய்வது முதல் SOP எழுதுதல் மற்றும் மாணவர் விசா பெறுவது வரை முழுமையான வழிகாட்டல்.',
      feature1Title: 'பல்கலைக்கழகங்கள் மற்றும் கல்லூரிகளைத் தேர்ந்தெடுத்தல்',
      feature1Desc: 'ஜப்பான், இங்கிலாந்து, கனடா, ஆஸ்திரேலியா மற்றும் நியூசிலாந்து ஆகியவற்றின் முன்னணி கல்வி நிறுவனங்கள் பற்றிய வழிகாட்டல்.',
      feature2Title: 'புலமைப்பரிசில் ஆலோசனை (MEXT மற்றும் நிறுவன உதவிகள்)',
      feature2Desc: 'அரசாங்க உதவித்தொகை தேவைகள், விண்ணப்பப் படிவங்கள் மற்றும் ஆராய்ச்சி திட்டங்களை தயாரிப்பதற்கான உதவி.',
      feature3Title: 'SOP (Statement of Purpose) வழிகாட்டல்',
      feature3Desc: 'உங்கள் கல்வி நோக்கங்களை உறுதியாக வெளிப்படுத்த உதவும் தனிப்பயனாக்கப்பட்ட ஆவண மதிப்பாய்வு.',
      feature4Title: 'விசா ஆவணங்கள் மற்றும் COE தயாரிப்பு',
      feature4Desc: 'தூதரகங்கள் மற்றும் குடிவரவு விதிகளுக்கு ஏற்ப ஆவணங்களை துல்லியமாக சமர்ப்பித்தல்.'
    },
    letsGoJapan: {
      pageTitle: "Let's Go Japan பிரிவு",
      pageSubtitle: 'எங்களின் முதன்மையான ஜப்பானிய மொழி அகாடமி மற்றும் ஜப்பான் உயர்கல்வி / தொழில் ஆலோசனை மையம்.',
      badge: 'முதன்மையான ஜப்பான் திட்டம்',
      introTitle: "Let's Go Japan உடன் ஜப்பானிய மொழியைக் கற்பது ஏன்?",
      introDesc: 'திறமையான ஆசிரியர்கள், JLPT N5–N3 தேர்ச்சி மற்றும் ஜப்பானிய விசா வழிமுறைகளுக்கான ஒருங்கிணைந்த தளம்.',
      pillar1Title: 'நேரடி இணைய வகுப்புகள்',
      pillar1Desc: 'வார நாள் மாலை மற்றும் வார இறுதி வகுப்புகள், பதிவு செய்யப்பட்ட விரிவுரைகள் மற்றும் டிஜிட்டல் பயிற்சிப் பொருட்கள்.',
      pillar2Title: 'EJU மற்றும் பல்கலைக்கழக சேர்க்கை வழிகாட்டல்',
      pillar2Desc: 'ஜப்பானில் பட்டப்படிப்பைத் தொடர விரும்பும் மாணவர்களுக்கான கல்விசார் ஜப்பானிய மொழிப் பயிற்சி.',
      pillar3Title: 'SSW குறிப்பிட்ட திறன் தொழிலாளர் தயாரிப்பு',
      pillar3Desc: 'முதியோர் பராமரிப்பு, விவசாயம், உணவு சேவை மற்றும் கட்டுமானம் ஆகிய துறைகளுக்கான Prometric தேர்வுத் தயாரிப்பு.',
      coeTitle: 'தகுதிச் சான்றிதழ் (COE) மற்றும் விசா வழிகாட்டல்',
      coeDesc: 'Certificate of Eligibility (COE) விண்ணப்பம், நிதி ஆவணங்கள் மற்றும் தூதரக விசா படிநிலைகள் பற்றிய முழு வழிகாட்டல்.'
    },
    migrationVisa: {
      pageTitle: 'விசா மற்றும் சட்ட ஆலோசனை வழிகாட்டல்',
      pageSubtitle: 'சட்டக் கட்டமைப்புகள், சான்றளிக்கப்பட்ட ஆவணங்கள் மற்றும் நேர்மையான வழிகாட்டல் நெறிமுறைகள்.',
      badge: 'சட்டபூர்வ இணக்கம்',
      overviewTitle: 'குடிவரவு விதிகளைப் புரிந்துகொள்ளுதல்',
      overviewDesc: 'விசா அனுமதி என்பது அந்தந்த நாடுகளின் இறையாண்மைக்குரிய அதிகாரமாகும். GlobeLink சட்டபூர்வ ஆவண தயாரிப்பு உதவிகளை மட்டுமே வழங்குகிறது.',
      titpTitle: 'தொழில்நுட்ப பயிற்சி திட்டம் (TITP)',
      titpDesc: 'OTIT மேற்பார்வையின் கீழ் இயங்கும் திறன் பரிமாற்ற திட்டம். தொழில் பாதுகாப்பு மற்றும் தொழிலாளர் நலன்களை உறுதி செய்கிறது.',
      sswTitle: 'குறிப்பிட்ட திறன் வாய்ந்த தொழிலாளர் (SSW 1 & 2)',
      sswDesc: 'ஜப்பான் குடிவரவு முகமையின் கீழ் நேரடி வேலைவாய்ப்பு, சம ஊதியம் மற்றும் சமூக பாதுகாப்பு உரிமைகளைக் கொண்ட விசா நிலை.',
      hspTitle: 'உயர் திறன் தொழில் வல்லுநர்கள் (HSP)',
      hspDesc: 'பொறியியலாளர்கள் மற்றும் ஆராய்ச்சியாளர்களுக்கு புள்ளி அடிப்படையில் விரைவான நிரந்தர குடியுரிமை வழங்கும் விசா முறை.',
      complianceNotice: 'அதிகாரப்பூர்வ அறிவிப்பு: GlobeLink விசாக்களை வழங்குவதோ அரசாங்க முடிவுகளில் தலையிடுவதோ இல்லை.',
      antiFraudTitle: 'மோசடிக்கு எதிரான எச்சரிக்கை',
      antiFraudDesc: 'போலி விசா வாக்குறுதிகளுக்கோ போலி வேலை கடிதங்களுக்கோ பணம் செலுத்த வேண்டாம். GlobeLink உண்மையான ஆவணங்களுடன் மட்டுமே செயல்படுகிறது.'
    },
    contact: {
      pageTitle: 'GlobeLink ஆலோசகர்களைத் தொடர்பு கொள்ளுங்கள்',
      pageSubtitle: 'நிட்டம்புவ அலுவலகத்திற்கு வருகை தாருங்கள் அல்லது தொலைபேசி, மின்னஞ்சல் அல்லது WhatsApp மூலம் இணையுங்கள்.',
      badge: 'தொடர்புகொள்ள',
      hotlineLabel: 'முக்கிய அவசர உதவி எண்கள்:',
      emailLabel: 'அதிகாரப்பூர்வ மின்னஞ்சல்:',
      officeLabel: 'தலைமை அலுவலக முகவரி:',
      hoursLabel: 'அலுவலக நேரம்:',
      openHours: 'திங்கள் – சனி: காலை 8:30 – மாலை 5:30 (ஞாயிறு மற்றும் பொது விடுமுறை நாட்களில் மூடப்படும்)',
      getDirections: 'Google Maps வழிகாட்டலைத் திறக்கவும்',
      formTitle: 'செய்தி அனுப்பவும் / விசாரிக்கவும்',
      formSubtitle: 'உங்கள் விவரங்களை உள்ளிடவும். ஒரு கல்வி ஒருங்கிணைப்பாளர் உங்களை விரைவில் தொடர்புகொள்வார்.'
    },
    footer: {
      letsGoJapanTitle: "Let's Go Japan திட்டம்",
      letsGoJapanDesc: 'JLPT N5/N4/N3, JFT-Basic, NAT-TEST, கஞ்சி பயிற்சிகள் மற்றும் இலங்கை மாணவர்களுக்கான நேரடி இணைய வகுப்புகள்.',
      careerPartnerTitle: 'Your Career Partner திட்டம்',
      careerPartnerDesc: 'தொழில் சுயவிவர வடிவமைப்பு, வளைகுடா மற்றும் ஜப்பான் வடிவ CV தயாரிப்பு மற்றும் நிறுவனத் தகுதி பொருத்தம்.',
      ethicalTitle: 'நேர்மையான ஆலோசனைத் தரம்',
      ethicalDesc: 'வெளிப்படையான படிநிலைகள், போலி வாக்குறுதிகள் இன்மை, சான்றளிக்கப்பட்ட ஆவணங்கள் மற்றும் பாதுகாப்பான வழிகாட்டல்.',
      corePages: 'முதன்மைப் பக்கங்கள்',
      letsGoJapanSection: "Let's Go Japan",
      officeHotlines: 'அலுவலகம் & உதவி எண்கள்',
      complianceNotice: 'சட்டப்பூர்வ மற்றும் நேர்மையான அறிவிப்பு: GlobeLink Education and Migration Consultants என்பது கல்வி ஆலோசனை, மொழிப் பயிற்சி மற்றும் ஆவண உதவிகளை வழங்கும் ஒரு சுயாதீன நிறுவனமாகும். நாங்கள் விசாக்களை வழங்குவதோ வேலை அல்லது விசா முடிவுகளை உத்தரவாதம் செய்வதோ இல்லை. அனைத்து முடிவுகளும் சம்பந்தப்பட்ட தூதரகங்கள் மற்றும் குடிவரவுத் துறைகளால் மட்டுமே எடுக்கப்படுகின்றன.',
      rightsReserved: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
      privacyPolicy: 'தனியுரிமைக் கொள்கை',
      termsConditions: 'விதிமுறைகள் மற்றும் நிபந்தனைகள்',
      sitemap: 'XML தள வரைபடம்',
      staffPortal: 'பணியாளர் தளம் / Admin CMS'
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
      close: 'மூடுக',
      homeBreadcrumb: 'முகப்பு',
      whatsappUs: 'WhatsApp தொடர்பு',
      whatsappTeam: 'GlobeLink ஆலோசனைக் குழு',
      whatsappTeamDesc: "Let's Go Japan அல்லது வெளிநாட்டு தொழில் வாய்ப்புகள் பற்றி கேள்விகள் உள்ளதா? WhatsApp இல் பேசுங்கள்.",
      cookieTitle: 'தனியுரிமை மற்றும் வெளிப்படைத்தன்மை',
      cookieDesc: 'இணையதளத்தின் சீரான இயக்கம் மற்றும் ஆலோசனை விசாரணைகளுக்காக நாங்கள் அத்தியாவசிய உலாவி சேமிப்பகத்தைப் பயன்படுத்துகிறோம்.',
      cookieAcknowledge: 'ஏற்றுக்கொள்கிறேன்',
      modalConsultationTitle: 'ஆலோசனையை முன்பதிவு செய்யுங்கள்',
      modalConsultationSubtitle: 'உங்கள் விவரங்களை உள்ளிடவும். ஒரு GlobeLink ஆலோசகர் உங்களுடன் WhatsApp அல்லது தொலைபேசியில் தொடர்புகொள்வார்.',
      optSelectDestination: 'நாட்டைத் தேர்ந்தெடுக்கவும்...',
      optSelectService: 'சேவை பிரிவைத் தேர்ந்தெடுக்கவும்...',
      errNameRequired: 'முழு பெயர் தேவை.',
      errPhoneRequired: 'தொலைபேசி எண் தேவை.',
      errPhoneInvalid: 'சரியான தொலைபேசி எண்ணை உள்ளிடவும் (எ.கா: +94 76 498 6049).',
      errEmailRequired: 'மின்னஞ்சல் முகவரி தேவை.',
      errEmailInvalid: 'சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.',
      errConsentRequired: 'தொடர நீங்கள் விதிமுறைகளை ஏற்க வேண்டும்.'
    },
    search: {
      placeholder: 'பாடநெறிகள், கட்டணங்கள், JLPT/EJU, SSW தேர்வுகள், நேர்காணல் Q&A தேடவும்...',
      buttonLabel: 'தேடுங்கள்',
      modalTitle: 'இணையதள தேடல்',
      noResults: 'பொருத்தமான முடிவுகள் எதுவும் கிடைக்கவில்லை',
      noResultsDesc: 'நீங்கள் உள்ளிட்ட வார்த்தைகளுக்கு முடிவுகள் இல்லை. "JLPT", "N5 கட்டணம்", "EJU", "SSW", "நேர்காணல்", அல்லது "விவசாயம்" என்று தேடிப்பார்க்கவும்.',
      resultsFound: 'முடிவுகள் கிடைத்துள்ளன',
      quickCategories: 'பிரிவு வாரியாக பார்க்க:',
      clear: 'தேடலை அழிக்கவும்',
      close: 'மூடுக',
      openResource: 'பக்கத்தைப் பார்க்க',
      allFilter: 'அனைத்து முடிவுகள்',
      coursesFilter: 'பாடநெறிகள் மற்றும் கட்டணம்',
      examsFilter: 'தேர்வுகள் மற்றும் EJU',
      visasFilter: 'SSW மற்றும் விசாக்கள்',
      careerQAFilter: 'நேர்காணல் Q&A',
      eventsFilter: 'நிகழ்வுகள் & வாய்ப்புகள்',
      resourcesFilter: 'வளங்கள் & கருவிகள்'
    },
    installmentTracker: {
      sectionTitle: 'வகுப்பு கட்டண தவணை கண்காணிப்பு தளம்',
      sectionSubtitle: 'GlobeLink / Let\'s Go Japan மாணவர்கள் தங்கள் பாடநெறி கட்டண தவணைகளை பதிவு செய்யவும், வங்கி ரசீதுகளை சமர்ப்பித்து உறுதிப்படுத்தப்பட்ட ரசீதுகளைப் பெறவும் உள்ள உத்தியோகபூர்வ தளம்.',
      badge: 'மாணவர் கட்டண மேலாண்மை • வெளிப்படைத்தன்மை',
      openTrackerBtn: 'கட்டண தவணை கண்காணிப்பு தளத்தைத் திறக்கவும்',
      howItWorksTitle: 'உங்கள் தவணை பதிவுகளை சமர்ப்பிக்கும் முறை:',
      step1: 'சேர்க்கையின் போது வழங்கப்பட்ட அதிகாரப்பூர்வ GlobeLink வங்கி கணக்கிற்கு கட்டணத்தை வைப்பு செய்யவும்.',
      step2: '"கட்டண தவணை கண்காணிப்பு தளத்தைத் திறக்கவும்" பொத்தானை கிளிக் செய்து Google Form படிவத்தை திறக்கவும்.',
      step3: 'உங்கள் முழு பெயர், மாணவர் எண் (Student ID), தொகுதி குறியீடு (LGJ-N5 போன்றவை), தவணை எண் (1வது, 2வது அல்லது இறுதி) மற்றும் வங்கி ரசீது புகைப்படத்தை பதிவேற்றவும்.',
      step4: 'எங்கள் கணக்கு பிரிவு 1-2 வேலை நாட்களில் சரிபார்த்து உங்களின் டிஜிட்டல் ரசீதை WhatsApp அல்லது மின்னஞ்சல் மூலம் வழங்கும்.',
      privacyNotice: 'தனியுரிமை உத்தரவாதம்: மாணவர்களின் தனியுரிமையை பாதுகாக்கும் நோக்கில், மாணவர்களின் பெயர், நிலுவைத் தொகை, அல்லது வங்கி ஆவணங்கள் பொதுவில் காட்டப்படாது. அனைத்து விவரங்களும் ரகசியமாக கையாளப்படுகின்றன.',
      ethicalSafeguard: 'மறைமுக கட்டணங்கள் இல்லை: GlobeLink வெளிப்படையான கட்டண கொள்கையை பின்பற்றுகிறது. எந்தவொரு எதிர்பாராத கூடுதல் கட்டணங்களும் அறவிடப்படாது.',
      contactSupport: 'வங்கி விவரங்கள் அல்லது கட்டண சமர்ப்பிப்பில் உதவி தேவையா?',
      verifiedResource: 'GlobeLink அதிகாரப்பூர்வ மாணவர் தளம்'
    },
    japanResources: {
      pageTitle: 'ஜப்பான் கல்வி & தொழில் வழிகாட்டல் வளங்கள்',
      pageSubtitle: 'ஜப்பானிய அரசாங்க போர்ட்டல்கள், பல்கலைக்கழக சேர்க்கை வழிகாட்டிகள், கல்வி கருவிகள் மற்றும் நேரடி ஆலோசனை தளங்களின் சரிபார்க்கப்பட்ட தொகுப்பு.',
      badge: "Let's Go Japan • சரிபார்க்கப்பட்ட தகவல் மையம்",
      officialGovBadge: 'அதிகாரப்பூர்வ அரசு தளம்',
      externalEduBadge: 'வெளிப்புற கல்வி தளம்',
      externalLangBadge: 'வெளிப்புற ஜப்பானிய மொழி & கல்வி தளம்',
      externalRecruitBadge: 'வெளிப்புற ஆள்தேர்வு / திட்ட தகவல்',
      visitResource: 'தளத்திற்குச் செல்லவும்',
      contactLine: 'LINE மூலம் தொடர்பு கொள்ளவும்',
      lineDesc: 'ஜப்பானில் கல்வி மற்றும் ஆவண வழிகாட்டல்களுக்கு LINE செயலி மூலம் எங்கள் நிபுணர்களுடன் நேரடியாக தொடர்பு கொள்ளவும்.',
      disclaimerTitle: 'சுயாதீன ஆலோசனை மற்றும் சரிபார்ப்பு தரம்',
      disclaimerDesc: 'GlobeLink இந்நடைமுறைகளை மாணவர்களின் வழிகாட்டலுக்காக மட்டுமே வழங்குகிறது. அதிகாரப்பூர்வ அரசு சட்டங்கள், விசாக்கள் மற்றும் தேர்வுகள் ஜப்பானிய அதிகாரிகளால் மட்டுமே தீர்மானிக்கப்படுகின்றன.',
      categoriesTitle: 'தேர்ந்தெடுக்கப்பட்ட வளங்கள்'
    }
  },

  // ==========================================
  // JAPANESE (日本語)
  // ==========================================
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
      japanResources: '日本関連リソース・ツール',
      contact: 'お問い合わせ',
      bookConsultation: '個別カウンセリング予約',
      allLanguages: '言語選択 (All Languages)',
      selectLanguage: '言語を選択してください',
      hotline: 'ホットライン',
      officeLocation: 'スリランカ・ニッタンブワ事務所（ホラゴッラ）',
      intakeOpen: '2026/2027年 日本向け募集開始'
    },
    hero: {
      kicker: 'スリランカ信頼の日本進学・就労支援パートナー',
      titleLine1: 'あなたのキャリアパートナー',
      titleLine2: '世界への扉を開く架け橋',
      subtitle: '誠実で透明性の高い個別カウンセリングを通じて、外国人留学生および専門人材を世界水準の高等教育と合法的キャリアへ導きます。',
      highlight1: "Let's Go Japan 日本語アカデミー",
      highlight2: '湾岸諸国および国際キャリア直接指導',
      highlight3: '法令遵守・倫理的コンサルティング',
      ctaExplore: 'プログラムを見る',
      ctaConsult: '個別カウンセリング予約'
    },
    home: {
      servicesKicker: '中核アドバイザリー領域',
      servicesTitle: 'グローバルモビリティ総合コンサルティング',
      servicesSubtitle: '体系的な日本語教育、海外大学・専門学校進学支援、および適法なキャリア設計を一貫してご提供いたします。',
      lgjCardTitle: "Let's Go Japan 日本語アカデミー",
      lgjCardDesc: '留学ビザおよび特定技能1号の取得を見据えた、JLPT（N5〜N3）・JFT-Basic・NAT-TEST対策と実践的ビジネス会話指導。',
      careerCardTitle: 'Your Career Partner キャリア支援',
      careerCardDesc: '国際基準に即した英文・和文履歴書の作成指導、人事面接対策、および湾岸・国際求人との適性マッチング。',
      eduCardTitle: '海外高等教育留学コンサルティング',
      eduCardDesc: '日本の日本語学校・大学・大学院進学、および英語圏高等教育機関への出願・在留資格申請手続きの総合サポート。',
      explorePathways: '進路詳細を見る',
      stepKicker: '安心の適法サポート体制',
      stepTitle: '4段階の個別カウンセリングプロセス',
      stepSubtitle: '経歴査定から渡航前オリエンテーションまで、推測を排した確実かつ透明なステップで伴走いたします。',
      step1Title: '経歴・適性査定（Assessment）',
      step1Desc: 'これまでの学歴、職歴、語学習得度、および現実的な資金計画を総合的かつ客観的に評価します。',
      step2Title: '進路選定と学習計画策定',
      step2Desc: '目標とする大学やビザ区分を確定し、JLPT対策や模擬面接などの特別カリキュラムを受講します。',
      step3Title: '出願書類作成と厳格な照合',
      step3Desc: '公認翻訳、経費支弁書、志望理由書（SOP）の推敲を行い、関係当局の審査基準に完全準拠した出願を行います。',
      step4Title: '渡航前オリエンテーション',
      step4Desc: '日本での銀行口座開設、空港送迎、住居確保、生活マナー、および緊急時支援体制について徹底指導します。',
      whyKicker: '信頼と誠実さの実績',
      whyTitle: 'GlobeLink Education & Migration が選ばれる理由',
      why1Title: '虚偽のない誠実なカウンセリング',
      why1Desc: '「ビザ発給100%保証」などの誇大広告は一切いたしません。出入国管理法に基づいた真実かつ適法な助言を徹底します。',
      why2Title: '日本専門の語学教育部門',
      why2Desc: '自社アカデミー「Let\'s Go Japan」により、公式シラバスに準拠した文字・語彙・文法・聴解の総合的指導を行います。',
      why3Title: '対面およびオンラインの柔軟な学習環境',
      why3Desc: 'スリランカ・ニッタンブワ本社での対面個別相談はもちろん、全土および海外から受講可能な双方向生配信クラスを提供しています。',
      destKicker: '広がる国際舞台',
      destTitle: '主要渡航先・対象国のご案内',
      destSubtitle: '日本をはじめ、ドバイ・UAE、モルディブ、イギリス、カナダ等への合法的な進学・キャリア進路。',
      destNotice: '重要事項：渡航先により利用可能なビザ区分や制度は異なります。個人の資格要件および受入機関の審査基準に基づき個別査定いたします。',
      viewAllDestinations: 'すべての渡航先ガイドを見る',
      faqKicker: 'よくあるご質問',
      faqTitle: 'FAQ（よくある質問と回答）',
      faqSubtitle: '語学コース、キャリア相談、渡航先、および法令遵守基準に関する明確なご案内。',
      inquiryTitle: 'GlobeLink 個別カウンセリング予約',
      inquirySubtitle: '以下のフォームよりご相談内容をお送りください。専門のバイリンガル教育アドバイザーよりご連絡いたします。'
    },
    about: {
      pageTitle: 'GlobeLink Education & Migration Consultants について',
      pageSubtitle: '誠実なコンサルティングと最高水準の日本語教育により、スリランカの人材と世界の機会を結ぶ。',
      kicker: '私たちの使命と歩み',
      storyTitle: 'スリランカの意欲ある若者のための倫理的支援',
      storyP1: 'GlobeLink Education and Migration Consultants は、国際教育や海外キャリアを目指すスリランカの学生や専門職の皆様に対し、透明性が高く確実な正規の道筋を提供することを使命として設立されました。',
      storyP2: '旗艦部門である「Let\'s Go Japan」を通じて、日本での高等教育進学や特定技能等での活躍に必要な高度な日本語力と異文化適応力を培う教育拠点を確立しております。',
      missionTitle: 'ミッション（使命）',
      missionDesc: '利用者の権利と未来を守り、持続可能な国際的成功を実現するため、法令を完全に遵守した倫理的コンサルティングを提供すること。',
      visionTitle: 'ビジョン（目指す姿）',
      visionDesc: '優れた語学教育実績、虚偽誇大広告の完全排除、そして確固たる進学・就労実績により、スリランカで最も信頼されるグローバルパートナーとなること。',
      valuesTitle: '行動原則と倫理規範',
      val1Title: '完全な透明性と真実性',
      val1Desc: '不透明な追加費用、虚偽の採用保証、無責任なビザ確約は一切排除し、入管法と公的基準に基づき真実のみを伝えます。',
      val2Title: '厳格なアカデミック基準',
      val2Desc: '国際交流基金およびJLPT試験要綱に準拠した厳格なシラバスを用い、実績ある講師陣が指導にあたります。',
      val3Title: '個々の適性に寄り添う伴走指導',
      val3Desc: '受講生一人ひとりの学術的適性、職歴、語学力、資金計画を総合的に精査した上で最適な進路を提案します。',
      val4Title: '渡航者の安全と権利の保護',
      val4Desc: '現地の労働法規、生活環境、正規の受入機関の基準に関する正確な事前教育を行い、渡航後の孤立を防ぎます。',
      complianceTitle: '法令遵守に関する公的立場',
      complianceDesc: 'GlobeLink は内外の労働・出入国関連法規を遵守して運営されており、無認可の斡旋行為や領事権限の代行を行う機関ではございません。'
    },
    courses: {
      pageTitle: '日本語教育コース・公式試験対策',
      pageSubtitle: 'ひらがな・カタカナ・漢字からビジネス文法、実用会話（Kaiwa）まで、専門講師陣が丁寧に生配信・対面指導いたします。',
      badge: "Let's Go Japan • 日本語教育アカデミー",
      filterAll: 'すべての講座',
      filterFoundation: '基礎・入門（N5）',
      filterIntermediate: '中級・実用（N4 / N3）',
      filterExamPrep: '過去問特訓・JFT対策',
      filterSkills: '漢字集中・実用会話（Kaiwa）',
      tuitionFeeLabel: '受講料：',
      durationLabel: '受講期間：',
      hoursLabel: 'ライブ講義時間：',
      scheduleLabel: '開講スケジュール：',
      modeLabel: '受講形式：',
      keyHighlightsLabel: 'コースの主な特長：',
      viewSyllabus: '詳細シラバスを見る',
      enrollWhatsApp: 'WhatsAppで受講相談',
      close: '閉じる',
      courseDetailsModal: '講座詳細・シラバス概要',
      detailedSyllabus: '詳細カリキュラム概要：'
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
    careerPartner: {
      pageTitle: 'Your Career Partner キャリア開発支援',
      pageSubtitle: '国際基準に準拠した職務経歴書の作成、人事面接シミュレーション、および合法的就労マッチング。',
      badge: 'プロフェッショナル・キャリア指導',
      overviewTitle: '戦略的なキャリアアップ支援',
      overviewDesc: '日本および国際基準のポートフォリオ作成指導と、異文化コミュニケーション能力の向上を支援します。',
      pillar1Title: '国際標準の履歴書・職務経歴書添削',
      pillar1Desc: '日本企業の様式および湾岸諸国のエグゼクティブ採用基準に合わせた実績の言語化・フォーマット調整。',
      pillar2Title: '人事・行動面接シミュレーション',
      pillar2Desc: '面接官視点からの模擬面接、コンピテンシーベースの質問対策、およびビジネスマナー演習。',
      pillar3Title: '公認採用基準との綿密な照合',
      pillar3Desc: '受入企業の正規要件および各国の法的手続きに準拠した適格性の精査。',
      disclaimerNotice: '本プログラムは教育・相談支援であり、就職の斡旋販売や採用の保証は行っておりません。'
    },
    education: {
      pageTitle: '海外高等教育留学コンサルティング',
      pageSubtitle: '日本の日本語学校・大学・大学院、および世界各国の一流高等教育機関への正規進学サポート。',
      badge: '高等教育進学アドバイザリー',
      overviewTitle: '世界水準の高等教育への扉',
      overviewDesc: '志望校の選定から質の高い志望理由書（SOP）の作成、および在留資格認定証明書交付申請まで徹底支援します。',
      feature1Title: '大学・専門教育機関の適正選定',
      feature1Desc: '日本をはじめ、英国、カナダ、オーストラリア等の国公私立大学の選定と出願基準の分析。',
      feature2Title: '公的・機関奨学金指導（文科省国費留学生等）',
      feature2Desc: '各種公的奨学金の出願要件、学術計画書、および推薦状作成に関するアドバイス。',
      feature3Title: '志望理由書（SOP）の個別指導',
      feature3Desc: '学術的好奇心と研究計画を論理的かつ説得力ある文章で表現するための添削指導。',
      feature4Title: '在留資格（COE）および査証申請支援',
      feature4Desc: '関係省庁および大使館の厳格な審査基準を満たす書類作成指導。'
    },
    letsGoJapan: {
      pageTitle: "Let's Go Japan 日本特化部門",
      pageSubtitle: '日本留学・特定技能対策の専門日本語アカデミーおよび総合進学支援部門。',
      badge: '日本特化型フラッグシップ',
      introTitle: "なぜ Let's Go Japan なのか？",
      introDesc: '実績ある講師陣による生配信授業、JLPT N5〜N3の着実な合格、および安心の正規渡航支援。',
      pillar1Title: '双方向ライブ講義と復習システム',
      pillar1Desc: '平日夜間および週末クラス、高画質録画アーカイブ、およびデジタル単語帳による自習支援。',
      pillar2Title: 'EJU・日本の大学進学対策',
      pillar2Desc: '大学での講義受講や論文作成に必要なアカデミック日本語の基礎教育。',
      pillar3Title: '特定技能（SSW 1号）実務対策',
      pillar3Desc: '介護、農業、外食業、建設などの特定分野Prometric技能測定試験に特化した集中対策講座。',
      coeTitle: '透明性の高いCOEおよびビザ取得ロードマップ',
      coeDesc: '在留資格認定証明書（COE）の交付申請から査証発給までの各段階を段階的にご案内いたします。'
    },
    migrationVisa: {
      pageTitle: 'ビザ・法規遵守ガイダンス',
      pageSubtitle: '合法的基準の徹底遵守、正規提出書類の認証、および法令違反の防止。',
      badge: '適法性・コンプライアンス',
      overviewTitle: '各国主権に基づくビザ制度の理解',
      overviewDesc: 'ビザの発給可否は関係省庁の主権的判断事項です。GlobeLink は正確な公認手続き支援を行います。',
      titpTitle: '技能実習制度（TITP）の適正理解',
      titpDesc: '外国人技能実習機構（OTIT）の指導の下、実習生の安全と労働環境が保障された技能移転制度です。',
      sswTitle: '特定技能（1号・2号）の法的権利',
      sswDesc: '出入国在留管理庁の厳格な監督のもと、日本人と同等以上の適正な報酬および社会保険が保障された就労資格です。',
      hspTitle: '高度専門職（HSP）ポイント制',
      hspDesc: '学歴・職歴・年収等のポイント計算に基づき、最短1年での永住許可申請が可能な優遇制度です。',
      complianceNotice: '公式開示：GlobeLink はビザ発給権限を有しておらず、公的決定に不当に関与することはできません。',
      antiFraudTitle: '悪質なブローカーへの注意喚起',
      antiFraudDesc: 'ビザ発給の保証や虚偽の雇用証明書の発行を謳う業者には絶対に関与しないでください。'
    },
    contact: {
      pageTitle: 'GlobeLink お問い合わせ窓口',
      pageSubtitle: 'ニッタンブワ本社オフィスへのご来訪、またはお電話・メール・WhatsAppにてお気軽にご相談ください。',
      badge: 'お問い合わせ',
      hotlineLabel: '公式ホットライン：',
      emailLabel: '公式メール窓口：',
      officeLabel: '本社オフィス所在地：',
      hoursLabel: '営業時間：',
      openHours: '月曜〜土曜：8:30〜17:30（日曜・スリランカ公休日休業）',
      getDirections: 'Googleマップでルート案内を開く',
      formTitle: 'ご相談・お問い合わせフォーム',
      formSubtitle: 'ご相談内容を入力してください。担当者より迅速にご案内いたします。'
    },
    footer: {
      letsGoJapanTitle: "Let's Go Japan プログラム",
      letsGoJapanDesc: 'JLPT N5/N4/N3、JFT-Basic、NAT-TEST、漢字特訓、およびスリランカ受講生向けオンライン生配信講座。',
      careerPartnerTitle: 'Your Career Partner プログラム',
      careerPartnerDesc: '国際基準に沿ったキャリア査定、英文・和文履歴書作成指導、および受入企業要件とのマッチング。',
      ethicalTitle: '倫理的コンサルティング基準',
      ethicalDesc: '透明性の高い費用体系、虚偽保証の完全排除、認証書類の確認、および安心の受講生支援。',
      corePages: '主要ページ',
      letsGoJapanSection: "Let's Go Japan",
      officeHotlines: '本社・お問い合わせ',
      complianceNotice: '法令遵守及び倫理宣言：GlobeLink Education and Migration Consultants は、教育指導・語学研修・留学書類作成を専門とする独立コンサルティング企業です。ビザの発給権限や100%の就職・採用保証は提供しておりません。すべてのビザ審査・発給は渡航先政府の権限において行われます。',
      rightsReserved: '無断転載を禁じます。',
      privacyPolicy: 'プライバシーポリシー',
      termsConditions: '利用規約',
      sitemap: 'XML サイトマップ',
      staffPortal: 'スタッフポータル / Admin CMS'
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
      close: '閉じる',
      homeBreadcrumb: 'ホーム',
      whatsappUs: 'WhatsAppで問い合わせ',
      whatsappTeam: 'GlobeLink カウンセリング担当',
      whatsappTeamDesc: "Let's Go Japan や海外進学・キャリアに関するご質問は、WhatsAppにてお気軽にご相談ください。",
      cookieTitle: '透明性とプライバシーの保護',
      cookieDesc: '当サイトでは、快適なナビゲーションおよびお問い合わせ管理のため、必要最小限のブラウザストレージを使用しています。',
      cookieAcknowledge: '同意する',
      modalConsultationTitle: '個別カウンセリング予約',
      modalConsultationSubtitle: 'ご連絡先を入力してください。GlobeLinkの担当アドバイザーより折り返しご連絡いたします。',
      optSelectDestination: '希望渡航先を選択...',
      optSelectService: '希望サービスを選択...',
      errNameRequired: 'お名前を入力してください。',
      errPhoneRequired: '電話番号を入力してください。',
      errPhoneInvalid: '有効な電話番号を入力してください（例：+94 76 498 6049）。',
      errEmailRequired: 'メールアドレスを入力してください。',
      errEmailInvalid: '有効なメールアドレスを入力してください。',
      errConsentRequired: '規約への同意が必要です。'
    },
    search: {
      placeholder: 'コース、学費、JLPT/EJU、特定技能、面接Q&A、イベントを検索...',
      buttonLabel: '検索',
      modalTitle: 'サイト内キーワード検索',
      noResults: '該当する検索結果が見つかりませんでした',
      noResultsDesc: '入力された語句に一致するコンテンツがありません。「JLPT」、「N5 学費」、「EJU」、「特定技能」、「面接」、または「農業」などで再度お試しください。',
      resultsFound: '件の結果が見つかりました',
      quickCategories: 'カテゴリーから探す：',
      clear: '検索語句を消去',
      close: '検索を閉じる',
      openResource: 'ページを開く',
      allFilter: 'すべての結果',
      coursesFilter: '講座・学費情報',
      examsFilter: '試験・EJU進学',
      visasFilter: '特定技能・ビザ',
      careerQAFilter: '面接Q&A集',
      eventsFilter: 'イベント・求人',
      resourcesFilter: 'リソース・ツール'
    },
    installmentTracker: {
      sectionTitle: '受講料分割納付管理ポータル（Tracker）',
      sectionSubtitle: 'GlobeLink / Let\'s Go Japan 受講生専用の分割納付報告・銀行振込明細照合・公式領収書発行申請システム。',
      badge: '受講生費用管理 • 透明な照合作業',
      openTrackerBtn: '受講料分割納付管理フォームを開く',
      howItWorksTitle: '納付報告の手順：',
      step1: '入学時にご案内したGlobeLinkの公式指定銀行口座へ、所定の受講料をお振込みください。',
      step2: '「受講料分割納付管理フォームを開く」をクリックし、確認済みの公式Googleフォームを開きます。',
      step3: '受講生氏名、学籍番号（Student ID）、受講期コード（例：LGJ-N5）、納付回数（第1回、第2回、または最終回）、および振込明細書の明瞭な写真またはPDFをアップロードしてください。',
      step4: '経理担当者が1〜2営業日以内に照合を行い、公式デジタル領収書および最新の納付状況明細をWhatsAppまたはメールにて送付いたします。',
      privacyNotice: '個人情報保護への取り組み：受講生のプライバシー保護方針に基づき、個人の氏名、納付残高、支払履歴、口座明細が当サイト上で公開されることは一切ございません。すべての情報は社内経理部門にて厳重に管理されます。',
      ethicalSafeguard: '不当な追加費用の排除：GlobeLinkでは明瞭かつ確定した受講料体系を維持しております。入学時に同意いただいた金額以外の追加費用や不透明な手数料を請求することはございません。',
      contactSupport: '納付手続きや指定口座に関してご不明な点はございますか？',
      verifiedResource: 'GlobeLink 公式受講生ポータル'
    },
    japanResources: {
      pageTitle: '日本留学・特定技能・キャリア公式リソース集',
      pageSubtitle: '日本政府公式ポータル、大学進学基準、学習支援ツール、特定技能各分野の募集情報、および公式相談窓口の公認ディレクトリ。',
      badge: "Let's Go Japan • 公式・確認済み情報ハブ",
      officialGovBadge: '日本政府公認・公式リソース',
      externalEduBadge: '外部教育支援リソース',
      externalLangBadge: '外部日本語教育・学習支援ポータル',
      externalRecruitBadge: '外部採用・育成プログラム情報',
      visitResource: 'リソースを開く',
      contactLine: '公式LINEで問い合わせる',
      lineDesc: '日本留学、各種出願手続き、提出書類の準備について、バイリンガル担当者とLINEで直接ご相談いただけます。',
      disclaimerTitle: '独立コンサルティング及び情報確認基準',
      disclaimerDesc: 'GlobeLink Education and Migration Consultants は、利用者の進路選択を支援する目的で本リソース集を提供しております。公的基準、出入国管理法、および試験要項は日本国の関係省庁・実施機関が独自に定めています。',
      categoriesTitle: '厳選リソースディレクトリ'
    }
  }
};
