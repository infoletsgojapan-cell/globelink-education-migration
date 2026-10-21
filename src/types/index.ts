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
  | 'contact'
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'admin';

export type SupportedLanguage = 'en' | 'si' | 'ta' | 'ja';

export interface JapaneseCourse {
  id: string;
  code: string;
  title: string;
  japaneseTitle?: string;
  level: string;
  targetAudience: string;
  duration: string;
  hours: string;
  schedule: string;
  feeLkr: string;
  mode: 'Online (Zoom / Meet)' | 'Physical / Hybrid' | 'Flexible Online';
  highlights: string[];
  syllabusOverview: string[];
  intakeStatus: 'Enrolling Now' | 'Upcoming Intake' | 'Limited Seats';
  isPopular?: boolean;
}

export interface Destination {
  id: string;
  country: string;
  tagline: string;
  heroImage: string;
  flagEmoji: string;
  servicesAvailable: string[];
  visaCategoriesSupported: string[];
  keyHighlights: string[];
  overview: string;
  complianceNotice: string;
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
  acronym: string;
  japaneseName: string;
  category: ExamCategory;
  shortExplanation: string;
  levelsOrSectors: string[];
  globeLinkPreparation: string;
  officialReferenceLinks: ExamResourceLink[];
  registrationLink?: ExamResourceLink;
  whatsappMessage: string;
  badgeLabel?: string;
  eligibilityNotes?: string;
  complianceDisclaimer?: string;
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
