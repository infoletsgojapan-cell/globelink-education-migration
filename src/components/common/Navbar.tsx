import React, { useState, useEffect, useRef } from 'react';
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
  Languages,
  BookOpen,
  Check,
  Search,
  Layers
} from 'lucide-react';
import { PageId, SupportedLanguage } from '../../types';
import { COMPANY_INFO } from '../../data/company';
import { useLanguage, SUPPORTED_LANGUAGES } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';
import { GlobalSearchBar } from './GlobalSearchBar';

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
  const { language, setLanguage, currentOption } = useLanguage();
  const t = TRANSLATIONS[language].nav;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
  };

  const handleSelectLanguage = (code: SupportedLanguage) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Utility Announcement & Language Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-5">
            <a
              href={`tel:${COMPANY_INFO.hotlineTel}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.hotline}: <strong className="text-white">{COMPANY_INFO.hotline}</strong></span>
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
              {t.officeLocation}
            </span>
          </div>

          <div className="flex items-center space-x-3 xl:space-x-4">
            <span className="text-amber-400 text-[11px] font-medium hidden xl:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {t.intakeOpen}
            </span>

            <span className="text-slate-700 hidden xl:inline">|</span>

            {/* Global Search Bar alongside All Languages menu */}
            <div className="w-52 lg:w-64 xl:w-72">
              <GlobalSearchBar onNavigate={handleNavClick} />
            </div>

            <span className="text-slate-700">|</span>

            {/* Top Bar Quick Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white text-xs font-medium border border-slate-700 transition-colors"
                aria-label={t.allLanguages}
                aria-expanded={langDropdownOpen}
              >
                <Languages className="w-3.5 h-3.5 text-sky-400" />
                <span>{currentOption.flag}</span>
                <span className="font-semibold">{currentOption.nativeLabel}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-1 w-48 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-800">
                    {t.allLanguages}
                  </div>
                  {SUPPORTED_LANGUAGES.map((opt) => (
                    <button
                      key={opt.code}
                      onClick={() => handleSelectLanguage(opt.code)}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors ${
                        language === opt.code ? 'text-sky-400 font-bold bg-slate-850' : 'text-slate-300'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{opt.flag}</span>
                        <span>{opt.nativeLabel} ({opt.label})</span>
                      </span>
                      {language === opt.code && <Check className="w-3.5 h-3.5 text-sky-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sky-400 hover:text-sky-300 font-semibold"
            >
              WhatsApp &rarr;
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
                <div className="w-11 h-11 rounded-xl bg-slate-950 flex items-center justify-center shadow-md border border-amber-400/30 group-hover:scale-105 transition-transform overflow-hidden p-0.5">
                  <img
                    src="/assets/aistudio/globelink-logo-48x48_6b9e962d.png"
                    alt="GlobeLink Education & Migration Consultants"
                    className="w-full h-full object-contain rounded-lg"
                  />
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
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 text-xs xl:text-sm">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-2.5 py-2 font-medium transition-colors ${
                  currentPage === 'home'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {t.home}
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`px-2.5 py-2 font-medium transition-colors ${
                  currentPage === 'about'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {t.about}
              </button>

              {/* Japanese Education Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                onMouseLeave={() => setProgramsDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 px-2.5 py-2 font-medium transition-colors ${
                    currentPage === 'lets-go-japan' ||
                    currentPage === 'japanese-language-courses' ||
                    currentPage === 'japanese-exams' ||
                    currentPage === 'japan-resources'
                      ? 'text-sky-400 border-b-2 border-sky-400'
                      : 'text-slate-200 hover:text-white'
                  }`}
                  onClick={() => handleNavClick('lets-go-japan')}
                >
                  <span className="relative flex items-center gap-1.5">
                    {t.letsGoJapan}
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 ml-0.5 text-slate-400" />
                </button>

                {programsDropdownOpen && (
                  <div className="absolute left-0 mt-0 w-80 bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <button
                      onClick={() => handleNavClick('lets-go-japan')}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-slate-800 text-slate-200 hover:text-white flex items-start gap-2.5"
                    >
                      <Languages className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">Let&apos;s Go Japan Overview</p>
                        <p className="text-slate-400 text-[11px]">Flagship Japan pathway & language academy</p>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavClick('japanese-exams')}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-slate-800 text-slate-200 hover:text-white flex items-start gap-2.5 bg-slate-850/60"
                    >
                      <BookOpen className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white flex items-center gap-1.5">
                          {t.japaneseExams}
                          <span className="text-[10px] bg-emerald-950 text-emerald-300 px-1.5 py-0.2 rounded border border-emerald-800">
                            EJU &amp; JLPT
                          </span>
                        </p>
                        <p className="text-slate-400 text-[11px]">JLPT, EJU, NAT-TEST, JLCT, JFT &amp; Prometric</p>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavClick('japanese-language-courses')}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-slate-800 text-slate-200 hover:text-white flex items-start gap-2.5"
                    >
                      <GraduationCap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">{t.japaneseCourses}</p>
                        <p className="text-slate-400 text-[11px]">JLPT N5-N3, JFT, NAT-TEST &amp; Spoken</p>
                      </div>
                    </button>
                    <button
                      onClick={() => handleNavClick('japan-resources')}
                      className="w-full text-left px-4 py-2.5 text-xs hover:bg-slate-800 text-slate-200 hover:text-white flex items-start gap-2.5 bg-slate-850/40"
                    >
                      <Layers className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white flex items-center gap-1.5">
                          {t.japanResources}
                          <span className="text-[10px] bg-sky-950 text-sky-300 px-1.5 py-0.2 rounded border border-sky-800">
                            SSW &amp; Tools
                          </span>
                        </p>
                        <p className="text-slate-400 text-[11px]">Official SSW, NBAC, Kashikoi &amp; Fees Tracker</p>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Japanese Exams Direct Nav */}
              <button
                onClick={() => handleNavClick('japanese-exams')}
                className={`px-2.5 py-2 font-medium transition-colors ${
                  currentPage === 'japanese-exams'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {t.japaneseExams}
              </button>

              <button
                onClick={() => handleNavClick('career-preparation')}
                className={`px-2.5 py-2 font-medium transition-colors ${
                  currentPage === 'career-partner' || currentPage === 'career-preparation'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {t.careerPrep}
              </button>

              <button
                onClick={() => handleNavClick('education-consultancy')}
                className={`px-2.5 py-2 font-medium transition-colors ${
                  currentPage === 'education-consultancy'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {t.educationConsultancy}
              </button>

              <button
                onClick={() => handleNavClick('international-careers')}
                className={`px-2.5 py-2 font-medium transition-colors ${
                  currentPage === 'international-careers'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {t.destinations}
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`px-2.5 py-2 font-medium transition-colors ${
                  currentPage === 'contact'
                    ? 'text-sky-400 border-b-2 border-sky-400'
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {t.contact}
              </button>
            </div>

            {/* Language Dropdown & Consultation CTA */}
            <div className="hidden lg:flex items-center space-x-2.5">
              {/* Language Switcher Button */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 shadow-xs transition-colors"
                  title={t.allLanguages}
                >
                  <Globe className="w-3.5 h-3.5 text-sky-400" />
                  <span>{currentOption.flag}</span>
                  <span className="font-semibold">{currentOption.nativeLabel}</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-1.5 w-52 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3.5 py-1.5 text-[10px] uppercase font-bold text-slate-400 border-b border-slate-800 flex items-center justify-between">
                      <span>{t.allLanguages}</span>
                      <Languages className="w-3.5 h-3.5 text-sky-400" />
                    </div>
                    {SUPPORTED_LANGUAGES.map((opt) => (
                      <button
                        key={opt.code}
                        onClick={() => handleSelectLanguage(opt.code)}
                        className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors ${
                          language === opt.code ? 'text-sky-400 font-bold bg-slate-850' : 'text-slate-300'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-base">{opt.flag}</span>
                          <span>{opt.nativeLabel} ({opt.label})</span>
                        </span>
                        {language === opt.code && <Check className="w-4 h-4 text-sky-400" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Consultation CTA */}
              <button
                onClick={() => {
                  if (onOpenConsultationModal) {
                    onOpenConsultationModal();
                  } else {
                    handleNavClick('contact');
                  }
                }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs tracking-wide shadow-md transition-all active:scale-95"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{t.bookConsultation}</span>
              </button>
            </div>

            {/* Mobile menu, Search and Language buttons */}
            <div className="lg:hidden flex items-center space-x-1.5 sm:space-x-2">
              {/* Quick Mobile Search Button */}
              <button
                type="button"
                onClick={() => {
                  setMobileSearchOpen(!mobileSearchOpen);
                  if (langDropdownOpen) setLangDropdownOpen(false);
                }}
                className={`p-2 rounded-lg border transition-colors ${
                  mobileSearchOpen
                    ? 'bg-sky-600 text-white border-sky-500'
                    : 'bg-slate-800 text-slate-300 hover:text-white border-slate-700'
                }`}
                aria-label="Toggle search"
              >
                <Search className="w-4 h-4 text-sky-400" />
              </button>

              {/* Quick Mobile Language Pill */}
              <button
                onClick={() => {
                  setLangDropdownOpen(!langDropdownOpen);
                  if (mobileSearchOpen) setMobileSearchOpen(false);
                }}
                className="px-2.5 py-1.5 text-xs bg-slate-800 text-slate-200 border border-slate-700 rounded-lg font-medium flex items-center gap-1"
                aria-label="Language"
              >
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>{currentOption.nativeLabel}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(!mobileMenuOpen);
                  if (mobileSearchOpen) setMobileSearchOpen(false);
                  if (langDropdownOpen) setLangDropdownOpen(false);
                }}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Popover/Bar */}
        {mobileSearchOpen && (
          <div className="lg:hidden bg-slate-950 border-t border-b border-slate-800 px-4 py-3 animate-in fade-in duration-150">
            <GlobalSearchBar onNavigate={(p) => { handleNavClick(p); setMobileSearchOpen(false); }} isMobileCompact />
          </div>
        )}

        {/* Mobile Language Dropdown Popover */}
        {langDropdownOpen && (
          <div className="lg:hidden bg-slate-950 border-t border-b border-slate-800 px-4 py-3 animate-in fade-in duration-150">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Languages className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.selectLanguage}</span>
            </p>
            <div className="grid grid-cols-2 gap-2">
              {SUPPORTED_LANGUAGES.map((opt) => (
                <button
                  key={opt.code}
                  onClick={() => handleSelectLanguage(opt.code)}
                  className={`p-2.5 rounded-xl border text-left text-xs flex items-center justify-between ${
                    language === opt.code
                      ? 'bg-sky-950/80 border-sky-500 text-sky-400 font-bold'
                      : 'bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-850'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{opt.flag}</span>
                    <span>{opt.nativeLabel}</span>
                  </span>
                  {language === opt.code && <Check className="w-3.5 h-3.5 text-sky-400" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-1 animate-in slide-in-from-top-2 duration-200">
            {/* Quick Search inside Mobile Drawer */}
            <div className="pb-3 border-b border-slate-800/80 mb-2">
              <GlobalSearchBar onNavigate={handleNavClick} isMobileCompact />
            </div>

            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                currentPage === 'home' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              {t.home}
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium ${
                currentPage === 'about' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              {t.about}
            </button>

            {/* Let's Go Japan Group */}
            <div className="border-t border-b border-slate-800/80 py-1 my-1">
              <button
                onClick={() => handleNavClick('lets-go-japan')}
                className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center justify-between ${
                  currentPage === 'lets-go-japan' ? 'bg-rose-950/50 text-rose-300' : 'text-rose-200 hover:bg-slate-900'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  {t.letsGoJapan}
                </span>
                <span className="text-xs text-rose-400 font-mono">Specialized</span>
              </button>

              {/* Japanese Exams Mobile Nav Link */}
              <button
                onClick={() => handleNavClick('japanese-exams')}
                className={`w-full text-left pl-6 pr-3 py-2.5 rounded-md text-xs font-semibold flex items-center justify-between ${
                  currentPage === 'japanese-exams' ? 'bg-emerald-950/50 text-emerald-400' : 'text-emerald-300 hover:bg-slate-900'
                }`}
              >
                <span>&bull; {t.japaneseExams}</span>
                <span className="text-[10px] bg-emerald-900/60 px-1.5 py-0.5 rounded text-emerald-300 border border-emerald-700">
                  EJU / JLPT
                </span>
              </button>

              <button
                onClick={() => handleNavClick('japanese-language-courses')}
                className={`w-full text-left pl-6 pr-3 py-2 rounded-md text-xs font-medium ${
                  currentPage === 'japanese-language-courses' ? 'text-sky-400 font-semibold' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                &bull; {t.japaneseCourses}
              </button>

              <button
                onClick={() => handleNavClick('japan-resources')}
                className={`w-full text-left pl-6 pr-3 py-2 rounded-md text-xs font-medium flex items-center justify-between ${
                  currentPage === 'japan-resources' ? 'text-sky-400 font-semibold bg-sky-950/40' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span>&bull; {t.japanResources}</span>
                <span className="text-[10px] bg-sky-900/60 px-1.5 py-0.5 rounded text-sky-300 border border-sky-700">
                  SSW &amp; Tools
                </span>
              </button>
            </div>

            <button
              onClick={() => handleNavClick('career-preparation')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentPage === 'career-partner' || currentPage === 'career-preparation' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Briefcase className="w-4 h-4 text-sky-400" />
              {t.careerPrep}
            </button>
            <button
              onClick={() => handleNavClick('education-consultancy')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentPage === 'education-consultancy' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-sky-400" />
              {t.educationConsultancy}
            </button>
            <button
              onClick={() => handleNavClick('international-careers')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentPage === 'international-careers' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Globe className="w-4 h-4 text-sky-400" />
              {t.destinations}
            </button>
            <button
              onClick={() => handleNavClick('migration-visa-support')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentPage === 'migration-visa-support' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <FileCheck2 className="w-4 h-4 text-sky-400" />
              {t.visaCompliance}
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium flex items-center gap-2 ${
                currentPage === 'contact' ? 'bg-sky-950/60 text-sky-400 font-semibold' : 'text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Phone className="w-4 h-4 text-sky-400" />
              {t.contact}
            </button>

            {/* Mobile Language Switcher Selector */}
            <div className="pt-3 mt-2 border-t border-slate-800 space-y-2">
              <p className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.allLanguages}:</span>
              </p>
              <div className="grid grid-cols-2 gap-1.5 text-xs">
                {SUPPORTED_LANGUAGES.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => handleSelectLanguage(opt.code)}
                    className={`py-2 px-3 rounded-lg text-left flex items-center gap-2 ${
                      language === opt.code
                        ? 'bg-sky-600 text-white font-bold'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{opt.flag}</span>
                    <span>{opt.nativeLabel}</span>
                  </button>
                ))}
              </div>
            </div>

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
                  {t.bookConsultation}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
