import { JapaneseCourse } from '../types';

export const JAPANESE_COURSES: JapaneseCourse[] = [
  {
    id: 'jlpt-n5',
    code: 'LGJ-N5',
    title: 'JLPT N5 Comprehensive Foundation Course',
    japaneseTitle: '日本語能力試験 N5 基礎総合コース',
    level: 'Beginner (CEFR A1)',
    targetAudience: 'Beginners, school leavers, and candidates planning student visas or basic career entry to Japan.',
    duration: '4 - 5 Months',
    hours: '120+ Live Hours',
    schedule: 'Batch A: Weekday Evenings (Tue & Thu 7:00 PM - 9:30 PM) | Batch B: Weekend (Sun 8:30 AM - 1:30 PM)',
    feeLkr: 'LKR 38,000 (Installment plan available: LKR 15,000 initial + 2 monthly installments)',
    mode: 'Online (Zoom / Meet)',
    highlights: [
      'Full mastery of Hiragana, Katakana, and 100+ essential Kanji characters',
      'Minna no Nihongo Lesson 1 to Lesson 25 comprehensive coverage',
      'Extensive listening audio exercises and speaking drills',
      '5 Complete JLPT N5 simulation mock papers with personalized review',
      'Official Let\'s Go Japan study pack and digital flashcards included'
    ],
    syllabusOverview: [
      'Writing Systems: Hiragana, Katakana, Dakuon, Handakuon, Yoon, Sokuon',
      'Core Vocabulary: 800+ vocabulary items required for daily survival and simple conversations',
      'Grammar Patterns: Particles (wa, ga, o, ni, de, e, to, mo), polite forms (masu/desu), te-form, nai-form, dictionary form',
      'Listening Comprehension: Real-time audio parsing and prompt-response techniques',
      'Cultural Etiquette: Greetings (aisatsu), Japanese bowing, classroom and workplace basics'
    ],
    intakeStatus: 'Enrolling Now',
    isPopular: true
  },
  {
    id: 'jlpt-n4',
    code: 'LGJ-N4',
    title: 'JLPT N4 Intermediate Foundation & SSW Preparation',
    japaneseTitle: '日本語能力試験 N4 中級基礎コース',
    level: 'Elementary / Pre-Intermediate (CEFR A2)',
    targetAudience: 'Students who completed N5, candidates targeting SSW (Specified Skilled Worker) visas, or specialized colleges.',
    duration: '4 Months',
    hours: '140+ Live Hours',
    schedule: 'Batch A: Mon & Wed 7:00 PM - 9:30 PM | Batch B: Saturday 8:30 AM - 2:00 PM',
    feeLkr: 'LKR 45,000 (Payable in 2 installments)',
    mode: 'Online (Zoom / Meet)',
    highlights: [
      'Minna no Nihongo Chukyu I (Lesson 26 to Lesson 50)',
      '300+ Kanji characters and compound reading mastery',
      'Complex grammatical forms (passive, causative, conditional ba/tara, potential)',
      'SSW Specified Skilled Worker conversational interview alignment',
      'Weekly timed exam simulations and speed-reading exercises'
    ],
    syllabusOverview: [
      'Advanced Verb Conjugations: Causative-passive, honorific (keigo/sonkeigo/kenjougo) introduction',
      'Compound Kanji: Onyomi vs Kunyomi application in real context',
      'Reading Comprehension: Long passages, official notices, train timetables, instructions',
      'Listening Tactics: Natural paced native dialogs and audio distractor elimination',
      'Mock Tests: 6 full-length mock examinations with marks breakdown'
    ],
    intakeStatus: 'Enrolling Now',
    isPopular: true
  },
  {
    id: 'jlpt-n3',
    code: 'LGJ-N3',
    title: 'JLPT N3 Bridge to Professional Fluency',
    japaneseTitle: '日本語能力試験 N3 実践中級コース',
    level: 'Intermediate (CEFR B1)',
    targetAudience: 'Engineers, IT professionals, university aspirants, and candidates seeking high-tier employment in Japan.',
    duration: '5 - 6 Months',
    hours: '160+ Live Hours',
    schedule: 'Wednesday & Friday Evenings (7:00 PM - 9:30 PM) + Monthly Special Weekend Drill',
    feeLkr: 'LKR 55,000 (Flexible monthly installment structure)',
    mode: 'Online (Zoom / Meet)',
    highlights: [
      '650+ Kanji and 3,000+ vocabulary words for workplace communication',
      'Soumatome and Shin Kanzen Master aligned methodology',
      'Business Japanese communication basics and email writing',
      'Comprehensive reading speed drills for lengthy editorial passages',
      'Direct mock exam feedback and individual weakness diagnostic'
    ],
    syllabusOverview: [
      'Nuanced Grammar: Complex sentence connections, subtle differences between near-synonym grammar points',
      'Kanji compounds used in news headlines, business notices, and contracts',
      'Rapid skimming and scanning for reading comprehension sections',
      'High-speed listening for main points, speakers\' emotional tone, and conclusions'
    ],
    intakeStatus: 'Upcoming Intake',
    isPopular: false
  },
  {
    id: 'jlpt-paper-classes',
    code: 'LGJ-PAP',
    title: 'JLPT Past Papers & Speed-Testing Workshop',
    japaneseTitle: 'JLPT 過去問徹底演習クラス',
    level: 'All Levels (N5, N4, N3)',
    targetAudience: 'Candidates sitting for the upcoming July or December JLPT examination needing rigorous paper practice.',
    duration: '6 - 8 Weeks (Crash Course)',
    hours: '45+ Intensive Hours',
    schedule: 'Weekends (Saturday & Sunday 2:30 PM - 5:30 PM)',
    feeLkr: 'LKR 18,000 (Full course fee inclusive of all past exam booklets)',
    mode: 'Online (Zoom / Meet)',
    highlights: [
      'Analysis of past 10 years of official JLPT examination papers',
      'Time management mastery to finish the reading section with 15 mins to spare',
      'Trap questions and tricky audio distractor breakdown',
      'Scoring algorithm insights and benchmark pass threshold planning'
    ],
    syllabusOverview: [
      'Vocabulary & Kanji speed drills (Moji/Goi quick recall)',
      'Grammar sentence unscramble techniques (star questions ★)',
      'Dokkai (Reading) comprehension short, medium, and long passage tactics',
      'Choukai (Listening) note-taking and immediate elimination strategies'
    ],
    intakeStatus: 'Limited Seats',
    isPopular: false
  },
  {
    id: 'kanji-mastery',
    code: 'LGJ-KNJ',
    title: 'Kanji Mastery & Radical Decryption Special Workshop',
    japaneseTitle: '漢字マスター・部首解読特別講座',
    level: 'Beginner to Intermediate (N5 to N3)',
    targetAudience: 'Learners struggling with memorizing and distinguishing complex Japanese Chinese characters.',
    duration: '8 Weeks',
    hours: '32 Hours',
    schedule: 'Saturday Evenings (6:30 PM - 8:30 PM)',
    feeLkr: 'LKR 14,000 (Special skill-building pricing)',
    mode: 'Online (Zoom / Meet)',
    highlights: [
      'The 214 historical radicals: how to decompose any complex Kanji easily',
      'Mnemonic storytelling method for long-term retention',
      'Stroke order discipline to pass handwritten and computer-based tests',
      'Common pitfalls: distinguishing look-alike characters (e.g., 末 vs 未, 待 vs 持)'
    ],
    syllabusOverview: [
      'Core Radical families: water (氵), person (亻), hand (扌), tree (木), speech (言)',
      'Onyomi (Chinese reading) phonetic clues and systematic sound shifting',
      'Kun-yomi (Japanese native reading) and Okurigana matching rules',
      'Kanji in daily life: reading train signs, supermarket labels, restaurant menus'
    ],
    intakeStatus: 'Enrolling Now',
    isPopular: false
  },
  {
    id: 'spoken-japanese',
    code: 'LGJ-SPK',
    title: 'Spoken Japanese (Kaiwa) & Japanese Workplace Etiquette',
    japaneseTitle: '実践日本語会話・ビジネス面接対策',
    level: 'Conversational (N5+ prerequisite recommended)',
    targetAudience: 'Candidates preparing for employer interviews in Japan, caregivers, hotel staff, and hospitality candidates.',
    duration: '10 Weeks',
    hours: '40 Hours',
    schedule: 'Friday & Saturday Evenings (7:00 PM - 9:00 PM)',
    feeLkr: 'LKR 22,000',
    mode: 'Online (Zoom / Meet)',
    highlights: [
      '100% active conversational sessions with native Japanese audio modeling',
      'Job interview roleplay: Jikoshoukai (Self-introduction) and standard interview Q&A',
      'Workplace expressions: Aisatsu, Hou-Ren-Sou (Report-Communicate-Consult), Omotenashi',
      'Overcoming hesitation and accent accentuation drills'
    ],
    syllabusOverview: [
      'Polite vs Casual spoken speech forms (desu/masu vs tamestu)',
      'Confidence building: telephone answering, customer greetings, asking for clarification',
      'Specific industry dialogues: Nursing/Caregiving, Construction, Food Service, Agriculture',
      'Simulated Japanese employer interview sessions with instructor critique'
    ],
    intakeStatus: 'Enrolling Now',
    isPopular: true
  },
  {
    id: 'jft-basic',
    code: 'LGJ-JFT',
    title: 'JFT-Basic (Japan Foundation Test) Preparation',
    japaneseTitle: '国際交流基金日本語基礎テスト (JFT-Basic) 対策',
    level: 'A2 Foundation (SSW Benchmark)',
    targetAudience: 'Candidates aiming for the Specified Skilled Worker (SSW Tokutei Ginou) visa route who need CBT test training.',
    duration: '3 - 4 Months',
    hours: '100+ Hours',
    schedule: 'Flexible weekday sessions or Sunday accelerated program',
    feeLkr: 'LKR 35,000 (Inclusive of CBT computer-simulated test software access)',
    mode: 'Online (Zoom / Meet)',
    highlights: [
      'Aligned with the Irodori: Japanese for Life in Japan curriculum',
      'Computer-Based Testing (CBT) interface simulation and keyboard typing drills',
      'Practical everyday situation task solving (can-do objectives)',
      'Official alternative to JLPT N4 for Tokutei Ginou status'
    ],
    syllabusOverview: [
      'Can-do assessment topics: Housing, shopping, ordering food, transportation, illness',
      'CBT screen interaction, audio replay strategies, timing under computer clock',
      'Short dialog comprehension and functional language tasks'
    ],
    intakeStatus: 'Enrolling Now',
    isPopular: false
  },
  {
    id: 'nat-test',
    code: 'LGJ-NAT',
    title: 'NAT-TEST Preparation (Levels 5Q, 4Q, 3Q)',
    japaneseTitle: '日本語 NAT-TEST 受験対策講座',
    level: '5Q (N5 equivalent) / 4Q (N4 equivalent) / 3Q (N3 equivalent)',
    targetAudience: 'Students needing rapid test results (held 6 times per year) for language school admission or COE applications.',
    duration: '6 - 10 Weeks (Targeted sprint)',
    hours: '60+ Hours',
    schedule: 'Intensive weekday morning or weekend batch schedules',
    feeLkr: 'LKR 26,000',
    mode: 'Online (Zoom / Meet)',
    highlights: [
      'Frequent exam cycles (February, April, June, August, October, December)',
      'Exact NAT-TEST format question sets and scoring rubrics',
      'Speedy certificate issuance support for Japanese immigration COE filing'
    ],
    syllabusOverview: [
      'Language knowledge section (Kanji and Vocabulary)',
      'Reading comprehension speed tactics and structural sentence completion',
      'Auditory discrimination testing and high-fidelity mock exam scoring'
    ],
    intakeStatus: 'Enrolling Now',
    isPopular: false
  }
];

export const JAPAN_ONLINE_LEARNING_FEATURES = [
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
