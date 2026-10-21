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

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenSupabaseModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenSupabaseModal }) => {
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
              <h4 className="font-bold text-white text-sm">Let&apos;s Go Japan Program</h4>
              <p className="text-slate-400 mt-0.5 text-xs">
                JLPT N5/N4/N3, JFT-Basic, NAT-TEST, Kanji mastery & online interactive classes for Sri Lankan candidates.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-sky-950 border border-sky-800/60 flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 text-sky-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Your Career Partner Program</h4>
              <p className="text-slate-400 mt-0.5 text-xs">
                Strategic profile alignment, Gulf and Japanese CV tailoring, and legitimate employer requirement matching.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-sky-950 border border-sky-800/60 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Ethical Consulting Standards</h4>
              <p className="text-slate-400 mt-0.5 text-xs">
                Transparent milestones, zero false guarantees, authenticated documentation, and verified client guidance.
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
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center text-white shadow-md">
                <Globe className="w-5 h-5" />
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
              Your Career Partner Connecting You to the World. Specializing in Japanese language training, international higher education, and legitimate career pathways for Sri Lankan candidates.
            </p>

            {/* Social Links */}
            <div className="space-y-1.5 pt-2">
              <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                Official Facebook Communities
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
              Core Pages
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('education-consultancy')}
                  className="hover:text-white transition-colors"
                >
                  Education Consultancy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('career-partner')}
                  className="hover:text-white transition-colors"
                >
                  Career Preparation (Q&amp;A Library)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('international-careers')}
                  className="hover:text-white transition-colors"
                >
                  Destinations & Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('migration-visa-support')}
                  className="hover:text-white transition-colors"
                >
                  Migration & Visa Support
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Let's Go Japan & Courses */}
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Let&apos;s Go Japan
            </h5>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('lets-go-japan')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Let&apos;s Go Japan Division
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('japanese-exams')}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-emerald-400 font-semibold"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Japanese Exams &amp; Registration (EJU / JLPT)
                </button>
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
                  JFT-Basic & NAT-TEST Prep
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('japanese-language-courses')}
                  className="hover:text-white transition-colors"
                >
                  Past Papers & Kaiwa Classes
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Office & Hotlines
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
                    <span>Supabase Integration Settings</span>
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
            <strong>Regulatory & Ethical Notice:</strong> {COMPANY_INFO.disclaimers.general} We do not claim accreditation or government authorization unless verified on a per-program basis.
          </p>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
        <div>
          &copy; {new Date().getFullYear()} GlobeLink Education and Migration Consultants (Globe Link Edu). All rights reserved.
        </div>
        <div className="flex items-center space-x-6">
          <button
            onClick={() => onNavigate('privacy-policy')}
            className="hover:text-slate-300 transition-colors"
          >
            Privacy Policy
          </button>
          <span>&middot;</span>
          <button
            onClick={() => onNavigate('terms-and-conditions')}
            className="hover:text-slate-300 transition-colors"
          >
            Terms and Conditions
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
            Staff Portal / Admin CMS
          </button>
        </div>
      </div>
    </footer>
  );
};
