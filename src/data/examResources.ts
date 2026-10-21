import { ExamResource } from '../types';

export const EXAM_RESOURCES: ExamResource[] = [
  // 1. JLPT
  {
    id: 'exam-jlpt',
    name: 'Japanese-Language Proficiency Test',
    acronym: 'JLPT',
    japaneseName: '日本語能力試験 (JLPT)',
    category: 'JLPT',
    badgeLabel: 'World Standard Benchmark',
    shortExplanation: 'The world’s largest and most recognized standardized criterion-referenced Japanese proficiency examination, evaluated across five proficiency tiers from beginner (N5) to advanced business fluency (N1).',
    levelsOrSectors: ['N5 (Elementary)', 'N4 (Basic Communication)', 'N3 (Intermediate Gateway)', 'N2 (Pre-Advanced)', 'N1 (Advanced Mastery)'],
    globeLinkPreparation: 'Let\'s Go Japan conducts specialized live online batches for N5, N4, and N3 levels. Features include Kanji stroke-order drills, grammar sentence patterns, audio listening comprehension sessions, and simulated timed past paper mock exams.',
    officialReferenceLinks: [
      {
        label: 'Official JLPT Information & Overview',
        url: 'https://share.google/mwl1u6cZYtmRBqTlp',
        purpose: 'official_info'
      },
      {
        label: 'Official JLPT Guide & Registration Resource',
        url: 'https://share.google/et0VKrMTxggOgW0UN',
        purpose: 'registration_guide'
      }
    ],
    registrationLink: {
      label: 'Official Registration Resource',
      url: 'https://share.google/et0VKrMTxggOgW0UN',
      purpose: 'registration_guide'
    },
    whatsappMessage: 'Hello GlobeLink! I want to ask about JLPT preparation classes (N5/N4/N3) and exam guidance.',
    complianceDisclaimer: 'Exam registration windows in Sri Lanka are administered biannually (July and December) under official local testing authority schedules.'
  },

  // 2. EJU
  {
    id: 'exam-eju',
    name: 'Examination for Japanese University Admission for International Students',
    acronym: 'EJU',
    japaneseName: '日本留学試験 (EJU)',
    category: 'EJU',
    badgeLabel: 'University Entrance Gateway',
    shortExplanation: 'Standardized assessment mechanism utilized by national, public, and leading private Japanese universities to evaluate whether international applicants possess the academic Japanese proficiency and foundational scholastic ability required for higher degree studies.',
    levelsOrSectors: ['Japanese as a Foreign Language', 'Science (Physics / Chemistry / Biology)', 'Japan & the World (Liberal Arts / General Studies)', 'Mathematics (Course 1 & Course 2)'],
    globeLinkPreparation: 'GlobeLink provides tailored academic counseling for university aspirants. Guidance includes identifying target universities, academic Japanese writing (SOP & research proposals), interview simulation, and foundational preparation.',
    officialReferenceLinks: [
      {
        label: 'Official University Entrance & Admission Reference',
        url: 'https://share.google/lYlVRmLIDBw3YHReI',
        purpose: 'university_entrance'
      }
    ],
    registrationLink: {
      label: 'University Entrance Reference Portal',
      url: 'https://share.google/lYlVRmLIDBw3YHReI',
      purpose: 'university_entrance'
    },
    whatsappMessage: 'Hello GlobeLink! I want to ask about EJU examination preparation and Japanese university entrance guidance.',
    eligibilityNotes: 'Applicants may choose examination subjects in Japanese or English (except Japanese language section) depending on their target faculty requirements.',
    complianceDisclaimer: 'Important: Taking or scoring in the EJU does not guarantee admission into Japanese universities. Students must independently satisfy the specific prerequisite scores, document reviews, and direct interview stages of their target universities.'
  },

  // 3. NAT-TEST
  {
    id: 'exam-nat',
    name: 'Japanese NAT-TEST',
    acronym: 'NAT-TEST',
    japaneseName: '日本語NAT-TEST',
    category: 'NAT-TEST',
    badgeLabel: 'Bi-Monthly Fast-Track Test',
    shortExplanation: 'A standardized test measuring general Japanese language ability of non-native speakers, formatted similarly to the JLPT across five levels (5Q to 1Q) with frequent testing windows held up to six times a year.',
    levelsOrSectors: ['Level 5 (5Q - Elementary)', 'Level 4 (4Q - Basic)', 'Level 3 (3Q - Intermediate)', 'Level 2 (2Q)', 'Level 1 (1Q)'],
    globeLinkPreparation: 'Structured fast-track modules focusing on vocabulary, reading comprehension, and audio drills matching the NAT-TEST curriculum to facilitate timely qualification for visa applications and language school admissions.',
    officialReferenceLinks: [
      {
        label: 'Official NAT-TEST Reference & Testing Structure',
        url: 'https://share.google/DhA4BTRtZv72wpF99',
        purpose: 'official_info'
      }
    ],
    registrationLink: {
      label: 'Official NAT-TEST Portal',
      url: 'https://share.google/DhA4BTRtZv72wpF99',
      purpose: 'registration_guide'
    },
    whatsappMessage: 'Hello GlobeLink! I would like to inquire about NAT-TEST preparation courses and exam schedules.',
    complianceDisclaimer: 'Results are typically released quickly compared to biannual exams, making NAT-TEST a popular option for immigration submission timelines.'
  },

  // 4. JLCT
  {
    id: 'exam-jlct',
    name: 'Japanese Language Capability Test',
    acronym: 'JLCT',
    japaneseName: '外国人日本語能力検定 (JLCT)',
    category: 'JLCT',
    badgeLabel: 'Communicative Proficiency',
    shortExplanation: 'Comprehensive test evaluating practical Japanese communication skills, grammatical accuracy, and cultural comprehension across levels JCT5 to JCT1, certified for educational and vocational applications.',
    levelsOrSectors: ['JCT5 (Entry)', 'JCT4 (Daily Conversational)', 'JCT3 (Practical Intermediate)', 'JCT2 (Business)', 'JCT1 (Fluent)'],
    globeLinkPreparation: 'Instruction focusing on active listening, workplace conversations, reading speed, and high-frequency vocabulary frequently evaluated in JLCT examination cycles.',
    officialReferenceLinks: [
      {
        label: 'Official JLCT Examination Reference',
        url: 'https://share.google/uX0JH3ENEpZqiUb5H',
        purpose: 'official_info'
      },
      {
        label: 'Official JLCT Guide & Resource',
        url: 'https://share.google/UU9cJbWyguPmtYbbH',
        purpose: 'official_info'
      }
    ],
    registrationLink: {
      label: 'Official JLCT Resource Portal',
      url: 'https://share.google/UU9cJbWyguPmtYbbH',
      purpose: 'official_info'
    },
    whatsappMessage: 'Hello GlobeLink! I want to ask about JLCT examination syllabus, study materials, and batch schedules.',
    complianceDisclaimer: 'Test sessions are scheduled across multiple sessions annually. Always confirm local test dates with authorized centers.'
  },

  // 5. JFT-Basic
  {
    id: 'exam-jft',
    name: 'Japan Foundation Test for Basic Japanese',
    acronym: 'JFT-Basic',
    japaneseName: '国際交流基金日本語基礎テスト (JFT-Basic)',
    category: 'JFT-Basic',
    badgeLabel: 'SSW Visa Language Benchmark',
    shortExplanation: 'Administered by the Japan Foundation via Computer-Based Testing (CBT) to assess whether candidates possess the A2-level communicative ability required for daily life in Japan under the Specified Skilled Worker (SSW 1号) visa status.',
    levelsOrSectors: ['CEFR Level A2 (Foundational daily conversational competence)'],
    globeLinkPreparation: 'Targeted Irodori curriculum training covering everyday situational communication, workplace audio interactions, and computer-based test interface simulations.',
    officialReferenceLinks: [
      {
        label: 'Official JFT-Basic Information & Purpose',
        url: 'https://share.google/1tnMpRIEgQd9THuwf',
        purpose: 'official_info'
      },
      {
        label: 'Official JFT-Basic Registration & Guidance',
        url: 'https://share.google/Lv3IH0CBRGq3FHC4G',
        purpose: 'registration_guide'
      }
    ],
    registrationLink: {
      label: 'Official JFT-Basic Registration Guide',
      url: 'https://share.google/Lv3IH0CBRGq3FHC4G',
      purpose: 'registration_guide'
    },
    whatsappMessage: 'Hello GlobeLink! I want to ask about JFT-Basic preparation for Specified Skilled Worker (SSW) requirements.',
    complianceDisclaimer: 'Test booking is conducted online through authorized Prometric test centers. Pass certificates remain valid for official immigration screening.'
  },

  // 6. SSW Skill Assessment Tests
  {
    id: 'exam-ssw',
    name: 'Specified Skilled Worker (SSW) Skill Assessment Tests',
    acronym: 'SSW Prometric',
    japaneseName: '特定技能評価試験 (Prometric)',
    category: 'SSW Skills Assessment',
    badgeLabel: 'Prometric Occupational Exams',
    shortExplanation: 'Official occupational skill examinations conducted via Prometric CBT testing to evaluate technical and domain expertise in designated Japanese industry sectors including Agriculture, Nursing Care, Food Service, and Construction.',
    levelsOrSectors: [
      'Agriculture Skill Assessment Test Level 1 (General Crop & Livestock)',
      'Nursing Care Skills Evaluation & Care Japanese Test',
      'Food Service Industry Skills Assessment Test',
      'Building Cleaning Management Examination',
      'Construction & Manufacturing Industry Assessments'
    ],
    globeLinkPreparation: 'GlobeLink provides specialized orientation regarding test formats, technical Japanese terminology for specific sectors (such as Agriculture and Nursing Care), and test voucher procedures.',
    officialReferenceLinks: [
      {
        label: 'Official Prometric Japanese Exam List & Portal',
        url: 'https://share.google/CRH2CYSYcu6nlio5e',
        purpose: 'exam_portal'
      },
      {
        label: 'Official Agriculture Skill Assessment Test Level 1 Information',
        url: 'https://share.google/uXXts35IqiTr2nFp1',
        purpose: 'skill_test'
      }
    ],
    registrationLink: {
      label: 'Official Prometric Japan Exam Portal',
      url: 'https://share.google/CRH2CYSYcu6nlio5e',
      purpose: 'exam_portal'
    },
    whatsappMessage: 'Hello GlobeLink! I want to ask about SSW Skill Assessment Tests (Agriculture, Prometric CBT) and preparation guidance.',
    eligibilityNotes: 'Candidates must be at least 17 years old on the test date. Test availability, sector-specific eligibility, and passing thresholds are regulated directly by relevant Japanese ministries.',
    complianceDisclaimer: 'Legal Notice: Registering for or passing an occupational skill assessment test does not guarantee job placement or visa issuance. Candidates must secure verified employment contracts with accepting organizations and fulfill all criteria set by the Immigration Services Agency of Japan.'
  }
];
