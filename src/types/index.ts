export type PageId =
  | 'home'
  | 'about'
  | 'education-consultancy'
  | 'lets-go-japan'
  | 'japanese-exams'
  | 'japanese-language-courses'
  | 'career-partner'
  | 'career-preparation'
  | 'international-careers'
  | 'migration-visa-support'
  | 'japan-resources'
  | 'contact'
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'admin';

export type SupportedLanguage = 'en' | 'si' | 'ta' | 'ja';

export type SearchCategory =
  | 'Courses & Fees'
  | 'Exams & EJU'
  | 'SSW & Visas'
  | 'Career Q&A'
  | 'Events & Vacancies'
  | 'Resources & Tools';

export interface SearchResultItem {
  id: string;
  title: string;
  titleSi?: string;
  titleTa?: string;
  titleJa?: string;
  category: SearchCategory;
  description: string;
  descriptionSi?: string;
  descriptionTa?: string;
  descriptionJa?: string;
  targetPage: PageId;
  targetHash?: string;
  externalUrl?: string;
  badge?: string;
  keywords: string[];
}

export interface JapaneseCourse {
  id: string;
  code: string;
  title: string;
  japaneseTitle?: string;
  titleSi?: string;
  titleTa?: string;
  titleJa?: string;
  level: string;
  levelSi?: string;
  levelTa?: string;
  levelJa?: string;
  targetAudience: string;
  targetAudienceSi?: string;
  targetAudienceTa?: string;
  targetAudienceJa?: string;
  duration: string;
  durationSi?: string;
  durationTa?: string;
  durationJa?: string;
  hours: string;
  hoursSi?: string;
  hoursTa?: string;
  hoursJa?: string;
  schedule: string;
  scheduleSi?: string;
  scheduleTa?: string;
  scheduleJa?: string;
  feeLkr: string;
  feeLkrSi?: string;
  feeLkrTa?: string;
  feeLkrJa?: string;
  mode: 'Online (Zoom / Meet)' | 'Physical / Hybrid' | 'Flexible Online';
  highlights: string[];
  highlightsSi?: string[];
  highlightsTa?: string[];
  highlightsJa?: string[];
  syllabusOverview: string[];
  syllabusOverviewSi?: string[];
  syllabusOverviewTa?: string[];
  syllabusOverviewJa?: string[];
  intakeStatus: 'Enrolling Now' | 'Upcoming Intake' | 'Limited Seats';
  intakeStatusSi?: string;
  intakeStatusTa?: string;
  intakeStatusJa?: string;
  isPopular?: boolean;
}

export interface Destination {
  id: string;
  country: string;
  countrySi?: string;
  countryTa?: string;
  countryJa?: string;
  tagline: string;
  taglineSi?: string;
  taglineTa?: string;
  taglineJa?: string;
  heroImage: string;
  flagEmoji: string;
  servicesAvailable: string[];
  servicesAvailableSi?: string[];
  servicesAvailableTa?: string[];
  servicesAvailableJa?: string[];
  visaCategoriesSupported: string[];
  visaCategoriesSupportedSi?: string[];
  visaCategoriesSupportedTa?: string[];
  visaCategoriesSupportedJa?: string[];
  keyHighlights: string[];
  keyHighlightsSi?: string[];
  keyHighlightsTa?: string[];
  keyHighlightsJa?: string[];
  overview: string;
  overviewSi?: string;
  overviewTa?: string;
  overviewJa?: string;
  complianceNotice: string;
  complianceNoticeSi?: string;
  complianceNoticeTa?: string;
  complianceNoticeJa?: string;
}

export interface InquiryFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredDestination: string;
  serviceCategory: string;
  educationCareerInterest: string;
  preferredContactMethod: 'WhatsApp' | 'Phone Call' | 'Email';
  message: string;
  consent: boolean;
  honeypot?: string; // spam protection
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Let\'s Go Japan' | 'Career Partner' | 'Education' | 'Visa & Compliance' | 'Exams & EJU';
  question: string;
  answer: string;
  questionSi?: string;
  answerSi?: string;
  questionTa?: string;
  answerTa?: string;
  questionJa?: string;
  answerJa?: string;
}

export type InterviewCategory =
  | 'General Interview Questions'
  | 'HR Interview Questions'
  | 'English Interview Practice'
  | 'Japanese Interview Practice'
  | 'Workplace Communication'
  | 'Career Preparation FAQs';

export interface InterviewQuestion {
  id: string;
  category: InterviewCategory;
  questionEn: string;
  questionJa?: string;
  questionSi?: string;
  questionTa?: string;
  sampleAnswerEn: string;
  sampleAnswerJa?: string;
  sampleAnswerSi?: string;
  sampleAnswerTa?: string;
  explanationSi: string;
  explanationEn?: string;
  explanationJa?: string;
  explanationTa?: string;
  personalizationTip: string;
  personalizationTipSi?: string;
  personalizationTipTa?: string;
  personalizationTipJa?: string;
}

export type ExamCategory =
  | 'JLPT'
  | 'EJU'
  | 'NAT-TEST'
  | 'JLCT'
  | 'JFT-Basic'
  | 'SSW Skills Assessment';

export interface ExamResourceLink {
  label: string;
  url: string;
  purpose: 'official_info' | 'registration_guide' | 'university_entrance' | 'skill_test' | 'exam_portal';
}

export interface ExamResource {
  id: string;
  name: string;
  nameSi?: string;
  nameTa?: string;
  nameJa?: string;
  acronym: string;
  japaneseName: string;
  category: ExamCategory;
  categorySi?: string;
  categoryTa?: string;
  categoryJa?: string;
  shortExplanation: string;
  shortExplanationSi?: string;
  shortExplanationTa?: string;
  shortExplanationJa?: string;
  levelsOrSectors: string[];
  levelsOrSectorsSi?: string[];
  levelsOrSectorsTa?: string[];
  levelsOrSectorsJa?: string[];
  globeLinkPreparation: string;
  globeLinkPreparationSi?: string;
  globeLinkPreparationTa?: string;
  globeLinkPreparationJa?: string;
  officialReferenceLinks: ExamResourceLink[];
  registrationLink?: ExamResourceLink;
  whatsappMessage: string;
  badgeLabel?: string;
  badgeLabelSi?: string;
  badgeLabelTa?: string;
  badgeLabelJa?: string;
  eligibilityNotes?: string;
  eligibilityNotesSi?: string;
  eligibilityNotesTa?: string;
  eligibilityNotesJa?: string;
  complianceDisclaimer?: string;
  complianceDisclaimerSi?: string;
  complianceDisclaimerTa?: string;
  complianceDisclaimerJa?: string;
}

export type AnnouncementStatus =
  | 'Upcoming'
  | 'Registration Open'
  | 'Closing Soon'
  | 'Completed'
  | 'Postponed';

export type AnnouncementCategory =
  | 'Exam Dates'
  | 'Registration Opens'
  | 'Deadlines'
  | 'Free Seminars'
  | 'Workshops'
  | 'University Prep'
  | 'New Courses'
  | 'Vacancies';

export interface AnnouncementItem {
  id: string;
  title: string;
  titleSi?: string;
  titleTa?: string;
  titleJa?: string;
  category: AnnouncementCategory;
  description: string;
  descriptionSi?: string;
  descriptionTa?: string;
  descriptionJa?: string;
  eventDate?: string;
  registrationOpens?: string;
  deadline?: string;
  format: 'Online' | 'Offline' | 'Hybrid';
  officialUrl?: string;
  status: AnnouncementStatus;
  isPublished: boolean;
  createdAt: string;
}

export interface CareerVacancy {
  id: string;
  title: string;
  employerName?: string;
  country: string;
  sector: string;
  description: string;
  publishedDate: string;
  deadline: string;
  eligibilityRequirements: string[];
  languageRequirements: string;
  applicationUrl?: string;
  contactMethod: string;
  verificationLabel: string;
  isVerified: boolean;
}

export type InquiryStatus = 'New' | 'Contacted' | 'Completed';

export interface InquiryRecord {
  id: string;
  created_at: string;
  full_name: string;
  phone: string;
  email: string;
  preferred_destination?: string | null;
  service_category?: string | null;
  education_career_interest?: string | null;
  preferred_contact_method?: string;
  message?: string | null;
  consent_given?: boolean;
  status: InquiryStatus | string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  image_url?: string | null;
  publication_date: string;
  publication_status: 'draft' | 'published';
  created_at?: string;
  updated_at?: string;
}

export interface ExamEntry {
  id: string;
  exam_name: string;
  exam_level?: string | null;
  exam_date?: string | null;
  registration_deadline?: string | null;
  description?: string | null;
  registration_url?: string | null;
  publication_status: 'draft' | 'published';
  created_at?: string;
  updated_at?: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: string;
  created_at?: string;
}
