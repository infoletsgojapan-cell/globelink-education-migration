import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getLocalizedCompanyInfo } from '../../utils/localizedContent';
import { TRANSLATIONS } from '../../data/translations';

interface DisclaimerBannerProps {
  compact?: boolean;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ compact = false }) => {
  const { language } = useLanguage();
  const info = getLocalizedCompanyInfo(language);
  const t = TRANSLATIONS[language];

  const noticeTitle =
    language === 'ja'
      ? '公式アドバイザリーおよびコンプライアンス開示'
      : language === 'si'
      ? 'නිල උපදේශන සහ අනුකූලතා ප්‍රකාශය'
      : language === 'ta'
      ? 'அதிகாரப்பூர்வ ஆலோசனை மற்றும் இணக்க வெளிப்பாடு'
      : 'Official Advisory & Compliance Disclosure';

  const ethicalNotice =
    language === 'ja'
      ? '倫理的コンサルタントの通知'
      : language === 'si'
      ? 'සදාචාරාත්මක උපදේශන නිවේදනය'
      : language === 'ta'
      ? 'நெறிமுறை ஆலோசனை அறிவிப்பு'
      : 'Ethical Consultancy Notice';

  if (compact) {
    return (
      <div className="bg-slate-900 border-t border-slate-800 text-slate-400 py-3 px-4 text-xs leading-relaxed text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0" />
          <span>
            <strong>{ethicalNotice}:</strong> {info.disclaimerGeneral}
          </span>
        </div>
      </div>
    );
  }

  return (
    <aside className="bg-amber-50/90 border border-amber-200/80 rounded-xl p-4 my-6 text-xs text-amber-900 leading-relaxed shadow-xs">
      <div className="flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-amber-950">
            {noticeTitle}
          </p>
          <p>
            {info.disclaimerGeneral} {info.complianceNotice}
          </p>
        </div>
      </div>
    </aside>
  );
};
