import React from 'react';
import {
  CreditCard,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Clock,
  PhoneCall,
  HelpCircle,
  AlertCircle,
  Receipt
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

interface InstallmentTrackerSectionProps {
  id?: string;
  variant?: 'light' | 'dark' | 'card';
}

export const InstallmentTrackerSection: React.FC<InstallmentTrackerSectionProps> = ({
  id = 'installment-tracker',
  variant = 'card'
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].installmentTracker;

  const GOOGLE_FORM_URL = 'https://forms.gle/Ct3Kd2KSeLwDsxNf9';

  const handleWhatsAppInquiry = () => {
    const text = 'Hello GlobeLink Accounts Desk! I need assistance with the Class Fees Installment Tracker or bank transfer details.';
    window.open(`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id={id} className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white rounded-3xl border border-sky-900/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative z-10">
          {/* Header Tag & Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-950 text-sky-300 border border-sky-800/60">
                <Receipt className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {t.sectionTitle}
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
                {t.sectionSubtitle}
              </p>
            </div>

            {/* Main Primary Action Button */}
            <div className="shrink-0 flex flex-col sm:items-end gap-2">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-900/40 hover:shadow-sky-800/60 transition-all transform active:scale-95"
              >
                <span>{t.openTrackerBtn}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.verifiedResource}</span>
              </span>
            </div>
          </div>

          {/* How It Works - 4 Clear Steps */}
          <div className="space-y-4 mb-8">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-400" />
              <span>{t.howItWorksTitle}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-850/80 rounded-2xl p-4 border border-slate-750 hover:border-sky-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800 text-sky-400 font-bold flex items-center justify-center text-xs mb-3">
                  01
                </div>
                <h4 className="text-xs font-bold text-white mb-1.5">
                  {language === 'ja' ? '1. 学費のお振込み' : language === 'si' ? '1. පාඨමාලා ගාස්තු තැන්පත් කිරීම' : language === 'ta' ? '1. கட்டணம் செலுத்துதல்' : 'Deposit Course Fee'}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {t.step1}
                </p>
              </div>

              <div className="bg-slate-850/80 rounded-2xl p-4 border border-slate-750 hover:border-sky-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800 text-sky-400 font-bold flex items-center justify-center text-xs mb-3">
                  02
                </div>
                <h4 className="text-xs font-bold text-white mb-1.5">
                  {language === 'ja' ? '2. 公式トラッカーを開く' : language === 'si' ? '2. නිල පෝරමය විවෘත කිරීම' : language === 'ta' ? '2. படிவத்தைத் திறக்கவும்' : 'Launch Official Form'}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {t.step2}
                </p>
              </div>

              <div className="bg-slate-850/80 rounded-2xl p-4 border border-slate-750 hover:border-sky-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800 text-sky-400 font-bold flex items-center justify-center text-xs mb-3">
                  03
                </div>
                <h4 className="text-xs font-bold text-white mb-1.5">
                  {language === 'ja' ? '3. 振込明細の送信' : language === 'si' ? '3. ගෙවීම් රිසිට්පත යොමු කිරීම' : language === 'ta' ? '3. பற்றுச்சீட்டை பதிவேற்றவும்' : 'Upload Payment Slip'}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {t.step3}
                </p>
              </div>

              <div className="bg-slate-850/80 rounded-2xl p-4 border border-slate-750 hover:border-sky-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-sky-950 border border-sky-800 text-sky-400 font-bold flex items-center justify-center text-xs mb-3">
                  04
                </div>
                <h4 className="text-xs font-bold text-white mb-1.5">
                  {language === 'ja' ? '4. 電子受領書の受取り' : language === 'si' ? '4. ඩිජිටල් රිසිට්පත ලබාගැනීම' : language === 'ta' ? '4. டிஜிட்டல் ரசீது பெறுதல்' : 'Receive Digital Receipt'}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {t.step4}
                </p>
              </div>
            </div>
          </div>

          {/* Privacy & Ethical Safeguards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
            <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-emerald-300">
                  {language === 'ja' ? '個人情報・財務情報保護規約' : language === 'si' ? 'පෞද්ගලිකත්ව ආරක්ෂණ නිවේදනය' : language === 'ta' ? 'தனியுரிமை பாதுகாப்பு அறிவிப்பு' : 'Privacy Protection Notice'}
                </h5>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {t.privacyNotice}
                </p>
              </div>
            </div>

            <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-sky-300">
                  {language === 'ja' ? '透明な経理・会計方針' : language === 'si' ? 'විනිවිදභාවයෙන් යුතු ගිණුම්කරණය' : language === 'ta' ? 'வெளிப்படையான கணக்கியல் உத்தரவாதம்' : 'Ethical Accounting Guarantee'}
                </h5>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {t.ethicalSafeguard}
                </p>
              </div>
            </div>
          </div>

          {/* Support Line Footer */}
          <div className="mt-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-sky-400" />
              <span>{t.contactSupport}</span>
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-white font-semibold transition-colors"
              >
                <span>{language === 'ja' ? '経理窓口 WhatsApp →' : language === 'si' ? 'ගිණුම් අංශය WhatsApp →' : language === 'ta' ? 'கணக்கு பிரிவு WhatsApp →' : 'WhatsApp Accounts Desk →'}</span>
              </button>
              <span className="text-slate-600">|</span>
              <a
                href={`tel:${COMPANY_INFO.hotlineTel}`}
                className="text-slate-300 hover:text-white transition-colors"
              >
                Hotline: {COMPANY_INFO.hotline}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
