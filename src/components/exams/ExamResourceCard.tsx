import React from 'react';
import { ExternalLink, MessageCircle, BookOpen, GraduationCap, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ExamResource } from '../../types';
import { COMPANY_INFO } from '../../data/company';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';
import { getLocalizedExam } from '../../utils/localizedContent';

interface ExamResourceCardProps {
  exam: ExamResource;
}

export const ExamResourceCard: React.FC<ExamResourceCardProps> = ({ exam }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].exams;
  const locExam = getLocalizedExam(exam, language);

  const whatsappUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(locExam.whatsappMessage || exam.whatsappMessage)}`;

  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between">
      {/* Header Accent Bar */}
      <div className="p-6 sm:p-7 space-y-4">
        {/* Category & Status */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-rose-600 tracking-wide uppercase text-[11px]">
              {locExam.category}
            </span>
            {locExam.badgeLabel && (
              <>
                <span className="text-slate-300">·</span>
                <span className="text-slate-500 font-medium text-[11px]">
                  {locExam.badgeLabel}
                </span>
              </>
            )}
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            {t.verifiedReference}
          </span>
        </div>

        {/* Title & Japanese Name */}
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
            {locExam.name}{' '}
            <span className="text-rose-600 font-mono text-lg font-bold">
              ({locExam.acronym})
            </span>
          </h3>
          <p className="text-xs font-medium text-slate-500 mt-1 font-serif tracking-wide">
            {locExam.japaneseName}
          </p>
        </div>

        {/* Short Explanation */}
        <p className="text-sm text-slate-600 leading-relaxed">
          {locExam.shortExplanation}
        </p>

        {/* Levels or Sectors */}
        {locExam.levelsOrSectors && locExam.levelsOrSectors.length > 0 && (
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
              {t.availableLevels}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
              {locExam.levelsOrSectors.map((lvl, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{lvl}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* GlobeLink Preparation */}
        <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5 text-xs">
          <p className="font-bold text-slate-900 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-rose-600" />
            {t.globeLinkPrepTitle}
          </p>
          <p className="text-slate-600 leading-relaxed">
            {locExam.globeLinkPreparation}
          </p>
        </div>

        {/* Compliance or Eligibility Notes */}
        {locExam.complianceDisclaimer && (
          <p className="text-[11px] text-slate-500 italic bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/50 leading-relaxed">
            {locExam.complianceDisclaimer}
          </p>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100 space-y-3">
        {/* Official Reference Links */}
        <div className="space-y-1.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            {t.officialLinksTitle}
          </p>
          <div className="flex flex-col gap-1.5">
            {exam.officialReferenceLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between text-xs font-semibold text-sky-700 hover:text-sky-900 hover:underline p-1.5 rounded-md hover:bg-white transition-colors"
              >
                <span className="truncate">{link.label}</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 ml-1.5 text-sky-600" />
              </a>
            ))}
          </div>
        </div>

        {/* Dual Buttons */}
        <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {exam.registrationLink ? (
            <a
              href={exam.registrationLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs transition-colors shadow-2xs"
            >
              <span>{t.viewOfficial}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          ) : (
            <a
              href={exam.officialReferenceLinks[0]?.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs transition-colors shadow-2xs"
            >
              <span>{t.viewOfficial}</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-2xs"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="truncate">{t.askWhatsApp}</span>
          </a>
        </div>
      </div>
    </article>
  );
};
