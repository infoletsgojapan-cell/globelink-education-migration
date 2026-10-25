import React from 'react';
import {
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Languages,
  BookOpen,
  Briefcase,
  Database
} from 'lucide-react';
import { PageId } from '../../types';
import { COMPANY_INFO } from '../../data/company';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';
import { getLocalizedCompanyInfo } from '../../utils/localizedContent';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSupabaseModal }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const tFooter = t.footer;
  const tNav = t.nav;
  const companyLocalized = getLocalizedCompanyInfo(language);

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      {/* Upper Footer: Highlights */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-sky-950 border border-sky-800/60 flex items-center justify-center shrink-0">
              <Languages className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">{tNav.letsGoJapan}</h4>
              <p className="text-slate-400 mt-0.5 text-xs">
                {language === 'ja'
                  ? 'JLPT N5/N4/N3、JFT-Basic、NAT-TEST、漢字対策、スリランカ人向けオンライン対面授業。'
                  : language === 'si'
                  ? 'JLPT N5/N4/N3, JFT-Basic, NAT-TEST, කංජි සහ ශ්‍රී ලාංකික සිසුන් සඳහා සජීවී මාර්ගගත පන්ති.'
                  : language === 'ta'
                  ? 'JLPT N5/N4/N3, JFT-Basic, NAT-TEST, கஞ்சி மற்றும் இலங்கை மாணவர்களுக்கான நேரடி இணைய வகுப்புகள்.'
                  : 'JLPT N5/N4/N3, JFT-Basic, NAT-TEST, Kanji mastery & online interactive classes for Sri Lankan candidates.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-sky-950 border border-sky-800/60 flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">{tNav.careerPrep}</h4>
              <p className="text-slate-400 mt-0.5 text-xs">
                {language === 'ja'
                  ? '戦略的なプロフィール調整、湾岸諸国および日本の履歴書作成、正当な雇用主要件のマッチング。'
                  : language === 'si'
                  ? 'උපායමාර්ගික පැතිකඩ සැකසීම, ගල්ෆ් සහ ජපන් CV සැකසුම සහ සත්‍යාපිත රැකියා අවශ්‍යතා ගැලපීම.'
                  : language === 'ta'
                  ? 'மூலோபாய சுயவிவர சீரமைப்பு, வளைகுடா மற்றும் ஜப்பானிய CV உருவாக்கம் மற்றும் முறையான வேலைவாய்ப்பு பொருத்தம்.'
                  : 'Strategic profile alignment, Gulf and Japanese CV tailoring, and legitimate employer requirement matching.'}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-sky-950 border border-sky-800/60 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">
                {language === 'ja'
                  ? '倫理的コンサルティング基準'
                  : language === 'si'
                  ? 'සදාචාරාත්මක උපදේශන ප්‍රමිති'
                  : language === 'ta'
                  ? 'நெறிமுறை ஆலோசனை தரநிலைகள்'
                  : 'Ethical Consulting Standards'}
              </h4>
              <p className="text-slate-400 mt-0.5 text-xs">
                {language === 'ja'
                  ? '透明なマイルストーン、虚偽の保証ゼロ、公認書類作成、信頼できるサポート。'
                  : language === 'si'
                  ? 'විනිවිද පෙනෙන සන්ධිස්ථාන, ව්‍යාජ පොරොන්දු රහිත බව, සත්‍යාපිත ලියකියවිලි සහ අවංක මගපෙන්වීම.'
                  : language === 'ta'
                  ? 'வெளிப்படையான மைல்கற்கள், தவறான உத்தரவாதங்கள் இன்மை, சரிபார்க்கப்பட்ட ஆவணங்கள் மற்றும் வழிகாட்டுதல்.'
                  : 'Transparent milestones, zero false guarantees, authenticated documentation, and verified client guidance.'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-amber-400/30 flex items-center justify-center text-white shadow-md overflow-hidden p-0.5">
                <img
                  src="/assets/aistudio/globelink-logo-48x48_6b9e962d.png"
                  alt="GlobeLink Education & Migration Consultants"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight">
                  Globe Link <span className="text-sky-400">Edu</span>
                </span>
                <p className="text-[11px] text-slate-400">
                  GlobeLink Education and Migration Consultants
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {companyLocalized.tagline}
            </p>

            {/* Social Links */}
            <div className="space-y-1.5 pt-2">
              <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                {language === 'ja'
                  ? '公式ソーシャルメディア'
                  : language === 'si'
                  ? 'නිල සමාජ මාධ්‍ය'
                  : language === 'ta'
                  ? 'அதிகாரப்பூர்வ சமூக ஊடகங்கள்'
                  : 'Official Social Channels'}
              </p>
              <div className="flex flex-col gap-1.5">
                <a
                  href={COMPANY_INFO.socials.facebookLetsGoJapan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Let&apos;s Go Japan: {COMPANY_INFO.socials.facebookDisplay1}</span>
                </a>
                <a
                  href={COMPANY_INFO.socials.facebookGlobeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>GlobeLink Consultants: {COMPANY_INFO.socials.facebookDisplay2}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              {tFooter.corePages}
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  {tNav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  {tNav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('education-consultancy')}
                  className="hover:text-white transition-colors"
                >
                  {tNav.educationConsultancy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('career-partner')}
                  className="hover:text-white transition-colors"
                >
                  {tNav.careerPrep}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('international-careers')}
                  className="hover:text-white transition-colors"
                >
                  {tNav.destinations}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('migration-visa-support')}
                  className="hover:text-white transition-colors"
                >
                  {tNav.visaCompliance}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  {tNav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Let's Go Japan & Courses */}
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              {tNav.letsGoJapan}
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('lets-go-japan')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  {tNav.letsGoJapan}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('japanese-exams')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-emerald-400 font-semibold"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  {tNav.japaneseExams}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('japan-resources')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-sky-400 font-semibold"
                >
                  <span>&bull;</span>
                  {tNav.japanResources}
                </button>
              </li>
              <li>
                <a
                  href="https://forms.gle/Ct3Kd2KSeLwDsxNf9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-amber-300 font-semibold"
                >
                  <span>&bull;</span>
                  {t.installmentTracker.sectionTitle}
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('japanese-language-courses')}
                  className="hover:text-white transition-colors"
                >
                  JLPT N5 Foundation Course
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('japanese-language-courses')}
                  className="hover:text-white transition-colors"
                >
                  JLPT N4 Intermediate Class
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('japanese-language-courses')}
                  className="hover:text-white transition-colors"
                >
                  JLPT N3 Fluency Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('japanese-exams')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  Prometric SSW Skill Assessments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('japanese-language-courses')}
                  className="hover:text-white transition-colors"
                >
                  JFT-Basic &amp; NAT-TEST Prep
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('japanese-language-courses')}
                  className="hover:text-white transition-colors"
                >
                  Past Papers &amp; Kaiwa Classes
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              {tFooter.officeHotlines}
            </h5>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {COMPANY_INFO.officeAddress}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <a href={`tel:${COMPANY_INFO.hotlineTel}`} className="hover:text-white font-medium block">
                    {COMPANY_INFO.hotline}
                  </a>
                  <a href={`tel:${COMPANY_INFO.additionalPhoneTel}`} className="hover:text-white block">
                    {COMPANY_INFO.additionalPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <div>
                  <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-white block">
                    {COMPANY_INFO.primaryEmail}
                  </a>
                  <a href={`mailto:${COMPANY_INFO.additionalEmail}`} className="hover:text-white text-slate-500 block">
                    {COMPANY_INFO.additionalEmail}
                  </a>
                </div>
              </div>

              {onOpenSupabaseModal && (
                <div className="pt-2">
                  <button
                    onClick={onOpenSupabaseModal}
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    <Database className="w-3.5 h-3.5 text-sky-500" />
                    <span>
                      {language === 'ja'
                        ? 'Supabase設定'
                        : language === 'si'
                        ? 'Supabase සැකසුම්'
                        : language === 'ta'
                        ? 'Supabase அமைப்புகள்'
                        : 'Supabase Settings'}
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Notice */}
      <div className="bg-slate-900 border-t border-slate-800/80 py-4 px-4 text-center text-slate-400 text-[11px] leading-relaxed">
        <div className="max-w-6xl mx-auto">
          <p>
            <strong>
              {language === 'ja'
                ? '法規・倫理に関する重要通知'
                : language === 'si'
                ? 'නියාමන සහ සදාචාරාත්මක නිවේදනය'
                : language === 'ta'
                ? 'ஒழுங்குமுறை மற்றும் நெறிமுறை அறிவிப்பு'
                : 'Regulatory & Ethical Notice'}
              :
            </strong>{' '}
            {companyLocalized.disclaimerGeneral}
          </p>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <div>
          &copy; {new Date().getFullYear()} GlobeLink Education and Migration Consultants (Globe Link Edu). {tFooter.rightsReserved}
        </div>
        <div className="flex items-center space-x-6">
          <button
            onClick={() => onNavigate('privacy-policy')}
            className="hover:text-slate-300 transition-colors"
          >
            {tFooter.privacyPolicy}
          </button>
          <span>&middot;</span>
          <button
            onClick={() => onNavigate('terms-and-conditions')}
            className="hover:text-slate-300 transition-colors"
          >
            {tFooter.termsConditions}
          </button>
          <span>&middot;</span>
          <a
            href="https://www.globelinkedu.com/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors inline-flex items-center gap-1"
          >
            <BookOpen className="w-3 h-3" />
            XML Sitemap
          </a>
          <span>&middot;</span>
          <button
            onClick={() => onNavigate('admin')}
            className="hover:text-sky-400 transition-colors inline-flex items-center gap-1 font-semibold text-slate-400"
          >
            <ShieldCheck className="w-3 h-3 text-sky-500" />
            {tFooter.staffPortal}
          </button>
        </div>
      </div>
    </footer>
  );
};
