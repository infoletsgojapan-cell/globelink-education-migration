import React from 'react';
import {
  ShieldCheck,
  Target,
  Award,
  Users2,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Compass,
  FileCheck2
} from 'lucide-react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/company';
import { SEOHead } from '../components/common/SEOHead';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { DisclaimerBanner } from '../components/common/DisclaimerBanner';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const tAbout = t.about;

  const coreValues = [
    { title: tAbout.val1Title, desc: tAbout.val1Desc, icon: ShieldCheck, color: 'text-emerald-600 bg-emerald-50' },
    { title: tAbout.val2Title, desc: tAbout.val2Desc, icon: Award, color: 'text-sky-600 bg-sky-50' },
    { title: tAbout.val3Title, desc: tAbout.val3Desc, icon: Target, color: 'text-rose-600 bg-rose-50' },
    { title: tAbout.val4Title, desc: tAbout.val4Desc, icon: Users2, color: 'text-amber-600 bg-amber-50' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <SEOHead
        title={`${tAbout.pageTitle} | GlobeLink`}
        description="Learn about GlobeLink Education & Migration Consultants (Globe Link Edu), our ethical consulting philosophy, Let's Go Japan program, and international pathways."
        canonicalPath="/about"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: tAbout.pageTitle, path: '/about' }
        ]}
      />

      <Breadcrumbs
        items={[{ name: tAbout.pageTitle }]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 block">
              {tAbout.kicker}
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {tAbout.pageTitle}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              {tAbout.pageSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {tAbout.storyTitle}
              </h2>

              {/* Exact Story Paragraphs */}
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-sky-600 text-slate-800 space-y-4 shadow-xs">
                <p className="text-base leading-relaxed font-medium text-slate-900">
                  {tAbout.storyP1}
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {tAbout.storyP2}
                </p>
              </div>

              {/* Mission & Vision Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-6 bg-sky-50/60 rounded-2xl border border-sky-100 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{tAbout.missionTitle}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tAbout.missionDesc}
                  </p>
                </div>

                <div className="p-6 bg-emerald-50/60 rounded-2xl border border-emerald-100 space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">{tAbout.visionTitle}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tAbout.visionDesc}
                  </p>
                </div>
              </div>

              <DisclaimerBanner />
            </div>

            {/* Side Highlights & Verification Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl border border-slate-800 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-sky-400" />
                  {tAbout.complianceTitle}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {tAbout.complianceDesc}
                </p>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>{t.home.why1Title}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {t.home.why1Desc}
                  </p>
                </div>
              </div>

              {/* Office & Direct Contact Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">
                  {language === 'ja'
                    ? '公式オフィス・相談窓口'
                    : language === 'si'
                    ? 'නිට්ටඹුව කාර්යාලය සහ සම්බන්ධතා'
                    : language === 'ta'
                    ? 'அலுவலகம் மற்றும் தொடர்பு தகவல்'
                    : 'Visit Our Nittambuwa Office'}
                </h4>
                <div className="text-xs text-slate-600 space-y-2">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.officeAddress}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                    <a href={`tel:${COMPANY_INFO.hotlineTel}`} className="hover:text-slate-900 font-medium">
                      {COMPANY_INFO.hotline} / {COMPANY_INFO.additionalPhone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                    <a href={`mailto:${COMPANY_INFO.primaryEmail}`} className="hover:text-slate-900">
                      {COMPANY_INFO.primaryEmail}
                    </a>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full py-2.5 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <span>{t.nav.bookConsultation}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-sky-800 uppercase tracking-widest block mb-1">
              {tAbout.kicker}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {tAbout.valuesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className={`w-10 h-10 rounded-xl ${val.color} flex items-center justify-center`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-base">{val.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
