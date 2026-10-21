import React from 'react';
import { Briefcase, ShieldCheck, MessageCircle, ExternalLink, AlertCircle, CheckCircle2, Calendar } from 'lucide-react';
import { CareerVacancy } from '../../types';
import { VERIFIED_VACANCIES } from '../../data/vacancies';
import { COMPANY_INFO } from '../../data/company';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const VacanciesSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].vacancies;

  const whatsappInquiryUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Hello GlobeLink! I would like to ask about upcoming verified career guidance, employer interview drives, and language requirements.'
  )}`;

  return (
    <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-6 relative overflow-hidden">
      {/* Subtle Japanese/Sakura ambient background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full text-xs font-bold text-sky-400 border border-slate-700">
            <Briefcase className="w-3.5 h-3.5 text-sky-400" />
            <span>International Employment Compliance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {t.sectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {t.sectionSubtitle}
          </p>
        </div>

        <a
          href={whatsappInquiryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shrink-0 shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t.contactCareerPartner}</span>
        </a>
      </div>

      {/* Cards or Honest Empty State */}
      <div className="relative z-10">
        {VERIFIED_VACANCIES.length === 0 ? (
          <div className="bg-slate-950/70 rounded-2xl border border-slate-800 p-8 sm:p-10 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center mx-auto text-sky-400">
              <ShieldCheck className="w-6 h-6 text-sky-400" />
            </div>

            <div className="max-w-lg mx-auto space-y-2">
              <h3 className="text-base font-bold text-white">
                {t.noVacanciesTitle}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.noVacanciesDesc}
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                No False Employment Guarantees
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Zero Fabricated Salary Figures
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Authentic Qualification Verification
              </span>
            </div>

            <div className="pt-2">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold transition-colors"
              >
                <span>Inquire About Upcoming Employer Drives</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {VERIFIED_VACANCIES.map(vac => (
              <article
                key={vac.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 p-6 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-sky-400 font-bold uppercase">{vac.sector}</span>
                    <span className="text-emerald-400 font-semibold">{vac.country}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{vac.title}</h3>
                  {vac.employerName && (
                    <p className="text-xs text-slate-400">Employer: {vac.employerName}</p>
                  )}
                  <p className="text-xs text-slate-300 leading-relaxed">{vac.description}</p>
                  <div className="space-y-1 text-xs text-slate-400 pt-2 border-t border-slate-800">
                    <p><strong className="text-white">{t.languageReq}</strong> {vac.languageRequirements}</p>
                    <p><strong className="text-white">{t.deadline}</strong> {vac.deadline}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
