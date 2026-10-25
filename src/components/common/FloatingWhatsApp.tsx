import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);
  const { language } = useLanguage();
  const tCommon = TRANSLATIONS[language].common;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 pointer-events-auto">
      {showTooltip && (
        <div className="bg-white text-slate-800 text-xs py-2 px-3.5 rounded-xl shadow-xl border border-slate-200 max-w-xs flex items-start gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div>
            <p className="font-semibold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {tCommon.whatsappTeam}
            </p>
            <p className="text-slate-600 mt-0.5">
              {tCommon.whatsappTeamDesc}
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss WhatsApp hint"
            className="text-slate-400 hover:text-slate-600 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GlobeLink Consultants on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600 group-hover:scale-110 transition-transform" />
        <span className="text-sm font-semibold pr-1 hidden sm:inline-block">
          {tCommon.whatsappUs}
        </span>
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
      </a>
    </div>
  );
};
