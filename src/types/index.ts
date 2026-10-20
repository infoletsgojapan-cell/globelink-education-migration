export type PageId =
  | 'home'
  | 'about'
  | 'education-consultancy'
  | 'lets-go-japan'
  | 'japanese-language-courses'
  | 'career-partner'
  | 'career-preparation'
  | 'international-careers'
  | 'migration-visa-support'
  | 'contact'
  | 'privacy-policy'
  | 'terms-and-conditions';

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
  category: 'General' | 'Let\'s Go Japan' | 'Career Partner' | 'Education' | 'Visa & Compliance';
  question: string;
  answer: string;
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
  sampleAnswerEn: string;
  sampleAnswerJa?: string;
  explanationSi: string;
  personalizationTip: string;
}
