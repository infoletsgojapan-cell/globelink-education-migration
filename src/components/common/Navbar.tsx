import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  ChevronDown,
  GraduationCap,
  Globe,
  Briefcase,
  FileCheck2,
  CalendarCheck,
  Languages
} from 'lucide-react';
import { PageId } from '../../types';
import { COMPANY_INFO } from '../../data/company';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenConsultationModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultationModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <a
              href={`tel:${COMPANY_INFO.hotlineTel}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Hotline: <strong className="text-white">{COMPANY_INFO.hotline}</strong></span>
            </a>
            <span className="text-slate-700">|</span>
            <a
              href={`mailto:${COMPANY_INFO.primaryEmail}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{COMPANY_INFO.primaryEmail}</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">
              Nittambuwa Office: Horagolla, Sri Lanka
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-amber-400 text-[11px] font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              2026/2027 Japanese Intake Batches Open
            </span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sky-400 hover:text-sky-300 font-semibold"
            >
              Direct WhatsApp &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation */}
      <nav
        className={`bg-slate-900 text-white border-b border-slate-800 transition-shadow ${
          scrolled ? 'shadow-xl bg-slate-900/98 backdrop-blur-md' : 'shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand Identity */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick('home')}
                className="flex items-center gap-3 text-left group focus:outline-hidden"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 via-sky-600 to-slate-900 flex items-center justify-center shadow-md border border-sky-400/30 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold tracking-tight text-white">
                      Globe Link <span className="text-sky-400">Edu</span>
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-rose-950/80 text-rose-300 border border-rose-800/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      Let&apos;s Go Japan
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-400 font-medium line-clamp-1">
                    Education & Migration Consultants
                  </p>
                </div>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'home'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'about'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                About Us
              </button>

              {/* Japanese Education Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                onMouseLeave={() => setProgramsDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                    currentPage === 'lets-go-japan' || currentPage === 'japanese-language-courses'
                      ? 'text-sky-400 border-b-2 border-sky-400'
                      : 'text-slate-200 hover:text-white'
                  }`}
                  onClick={() => handleNavClick('lets-go-japan')}
                >
                  <span className="relative flex items-center gap-1.5">
                    Let&apos;s Go Japan
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  </span>
                  <ChevronDown className="w-4 h-4 ml-0.5 text-slate-400" />
                </button>

                {programsDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-72 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      onClick={() => handleNavClick('lets-go-japan')}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-slate-800 text-slate-200 hover:text-white flex items-start gap-2.5"
                    >
                      <Languages className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">Let&apos;s Go Japan Overview</p>
                        <p className="text-slate-400 text-[11px]">Flagship Japan pathway & language division</p>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavClick('japanese-language-courses')}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-slate-800 text-slate-200 hover:text-white flex items-start gap-2.5"
                    >
                      <GraduationCap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">Japanese Language Courses</p>
                        <p className="text-slate-400 text-[11px]">JLPT N5-N3, JFT, NAT-TEST & Spoken</p>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('career-partner')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'career-partner'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                Career Partner Program
              </button>

              <button
                onClick={() => handleNavClick('education-consultancy')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'education-consultancy'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                Education Consultancy
              </button>

              <button
                onClick={() => handleNavClick('international-careers')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'international-careers'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                Destinations
              </button>

              <button
                onClick={() => handleNavClick('migration-visa-support')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'migration-visa-support'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                Visa & Compliance
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === 'contact'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Consultation CTA & Call */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={() => {
                  if (onOpenConsultationModal) {
                    onOpenConsultationModal();
                  } else {
                    handleNavClick('contact');
                  }
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs tracking-wide shadow-md transition-all active:scale-95"
              >
                <CalendarCheck className="w-4 h-4" />
                Book a Consultation
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="p-2 text-xs bg-sky-600 text-white rounded-lg font-medium"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                currentPage === 'home' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                currentPage === 'about' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              About GlobeLink
            </button>
            <div className="border-t border-b border-slate-800/80 py-1 my-1">
              <button
                onClick={() => handleNavClick('lets-go-japan')}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between ${
                  currentPage === 'lets-go-japan' ? 'bg-rose-950/50 text-rose-300' : 'text-rose-200 hover:bg-slate-900'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Let&apos;s Go Japan Program
                </span>
                <span className="text-xs text-rose-400 font-mono">Specialized</span>
              </button>
              <button
                onClick={() => handleNavClick('japanese-language-courses')}
                className={`w-full text-left pl-6 pr-3 py-2 rounded-md text-xs font-medium ${
                  currentPage === 'japanese-language-courses' ? 'text-sky-400 font-semibold' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                &bull; Japanese Language Courses (JLPT / NAT / JFT)
              </button>
            </div>
            <button
              onClick={() => handleNavClick('career-partner')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentPage === 'career-partner' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4 text-sky-400" />
              Your Career Partner Program
            </button>
            <button
              onClick={() => handleNavClick('education-consultancy')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentPage === 'education-consultancy' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-sky-400" />
              Education Consultancy
            </button>
            <button
              onClick={() => handleNavClick('international-careers')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentPage === 'international-careers' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Globe className="w-4 h-4 text-sky-400" />
              Destinations (Japan, Dubai, UAE, Maldives)
            </button>
            <button
              onClick={() => handleNavClick('migration-visa-support')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentPage === 'migration-visa-support' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <FileCheck2 className="w-4 h-4 text-sky-400" />
              Migration & Visa Support
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentPage === 'contact' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Phone className="w-4 h-4 text-sky-400" />
              Contact Us & Office Map
            </button>

            <div className="pt-4 mt-2 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              <p className="flex items-center gap-2 text-white font-medium">
                <Phone className="w-3.5 h-3.5 text-sky-400" /> {COMPANY_INFO.hotline}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" /> {COMPANY_INFO.primaryEmail}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-2.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-semibold text-center text-xs"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
