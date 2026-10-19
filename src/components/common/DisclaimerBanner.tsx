import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '../../data/company';

interface DisclaimerBannerProps {
  compact?: boolean;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ compact = false }) => {
  if (compact) {
    return (
      <div className="bg-slate-900 border-t border-slate-800 text-slate-400 py-3 px-4 text-xs leading-relaxed text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-500 shrink-0" />
          <span>
            <strong>Ethical Consultancy Notice:</strong> {COMPANY_INFO.disclaimers.general}
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
            Official Advisory & Compliance Disclosure
          </p>
          <p>
            {COMPANY_INFO.disclaimers.general} {COMPANY_INFO.disclaimers.clientVerificationNotice}
          </p>
        </div>
      </div>
    </aside>
  );
};
