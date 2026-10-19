import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { SupabaseSetupModal } from './components/common/SupabaseSetupModal';
import { InquiryForm } from './components/forms/InquiryForm';
import { X, ShieldCheck } from 'lucide-react';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { EducationConsultancyPage } from './pages/EducationConsultancyPage';
import { LetsGoJapanPage } from './pages/LetsGoJapanPage';
import { JapaneseCoursesPage } from './pages/JapaneseCoursesPage';
import { CareerPartnerPage } from './pages/CareerPartnerPage';
import { InternationalCareersPage } from './pages/InternationalCareersPage';
import { MigrationVisaPage } from './pages/MigrationVisaPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';

const PAGE_PATHS: Record<PageId, string> = {
  'home': '/',
  'about': '/about',
  'education-consultancy': '/education-consultancy',
  'lets-go-japan': '/lets-go-japan',
  'japanese-language-courses': '/japanese-language-courses',
  'career-partner': '/career-partner',
  'international-careers': '/international-careers',
  'migration-visa-support': '/migration-visa-support',
  'contact': '/contact',
  'privacy-policy': '/privacy-policy',
  'terms-and-conditions': '/terms-and-conditions'
};

const PATH_TO_PAGE: Record<string, PageId> = {
  '/': 'home',
  '/about': 'about',
  '/education-consultancy': 'education-consultancy',
  '/lets-go-japan': 'lets-go-japan',
  '/japanese-language-courses': 'japanese-language-courses',
  '/career-partner': 'career-partner',
  '/international-careers': 'international-careers',
  '/migration-visa-support': 'migration-visa-support',
  '/contact': 'contact',
  '/privacy-policy': 'privacy-policy',
  '/terms-and-conditions': 'terms-and-conditions'
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      return PATH_TO_PAGE[path] || 'home';
    }
    return 'home';
  });

  const [supabaseModalOpen, setSupabaseModalOpen] = useState(false);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [cookieConsentDismissed, setCookieConsentDismissed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('globelink_cookie_consent') === 'true';
    }
    return false;
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      const page = PATH_TO_PAGE[path] || 'home';
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const targetPath = PAGE_PATHS[page] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDismissCookieConsent = () => {
    localStorage.setItem('globelink_cookie_consent', 'true');
    setCookieConsentDismissed(true);
  };

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenSupabaseModal={() => setSupabaseModalOpen(true)} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'education-consultancy':
        return <EducationConsultancyPage onNavigate={handleNavigate} onOpenSupabaseModal={() => setSupabaseModalOpen(true)} />;
      case 'lets-go-japan':
        return <LetsGoJapanPage onNavigate={handleNavigate} onOpenSupabaseModal={() => setSupabaseModalOpen(true)} />;
      case 'japanese-language-courses':
        return <JapaneseCoursesPage onNavigate={handleNavigate} onOpenSupabaseModal={() => setSupabaseModalOpen(true)} />;
      case 'career-partner':
        return <CareerPartnerPage onNavigate={handleNavigate} onOpenSupabaseModal={() => setSupabaseModalOpen(true)} />;
      case 'international-careers':
        return <InternationalCareersPage onNavigate={handleNavigate} onOpenSupabaseModal={() => setSupabaseModalOpen(true)} />;
      case 'migration-visa-support':
        return <MigrationVisaPage onNavigate={handleNavigate} onOpenSupabaseModal={() => setSupabaseModalOpen(true)} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} onOpenSupabaseModal={() => setSupabaseModalOpen(true)} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage onNavigate={handleNavigate} />;
      case 'terms-and-conditions':
        return <TermsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenSupabaseModal={() => setSupabaseModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-rose-500 selection:text-white">
      {/* Sticky Responsive Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultationModal={() => setConsultationModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenSupabaseModal={() => setSupabaseModalOpen(true)}
      />

      {/* Supabase Integration Setup Modal */}
      <SupabaseSetupModal
        isOpen={supabaseModalOpen}
        onClose={() => setSupabaseModalOpen(false)}
      />

      {/* Quick Consultation Modal */}
      {consultationModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200 relative">
            <button
              onClick={() => setConsultationModalOpen(false)}
              className="absolute top-4 right-4 z-10 text-slate-400 hover:text-slate-800 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              aria-label="Close consultation modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-2 sm:p-4 max-h-[85vh] overflow-y-auto">
              <InquiryForm
                id="modal-inquiry"
                title="Book an Advisory Session"
                subtitle="Provide your contact details. A GlobeLink consultant will connect with you via WhatsApp or phone."
                onOpenSupabaseModal={() => {
                  setConsultationModalOpen(false);
                  setSupabaseModalOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Cookie / Privacy Consent Notice (Consent-aware tracking) */}
      {!cookieConsentDismissed && (
        <aside
          aria-label="Cookie and Privacy Consent"
          className="fixed bottom-4 left-4 z-40 max-w-md bg-slate-900/95 backdrop-blur-md text-slate-300 text-xs p-4 rounded-xl shadow-2xl border border-slate-800 flex items-start gap-3 animate-in fade-in slide-in-from-bottom-3 duration-300"
        >
          <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
          <div className="space-y-1.5 flex-1">
            <p className="font-semibold text-white">Privacy &amp; Transparent Advisory</p>
            <p className="text-[11px] leading-relaxed text-slate-400">
              We use essential browser storage for navigation performance and consultation inquiries in accordance with our{' '}
              <button
                onClick={() => handleNavigate('privacy-policy')}
                className="text-sky-400 underline hover:text-white"
              >
                Privacy Policy
              </button>.
            </p>
          </div>
          <button
            onClick={handleDismissCookieConsent}
            className="px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-semibold text-[11px] shrink-0 transition-colors"
          >
            Acknowledge
          </button>
        </aside>
      )}
    </div>
  );
}
