import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Database, HelpCircle } from 'lucide-react';
import { InquiryFormData } from '../../types';
import { submitInquiry, InquirySubmissionResult, isSupabaseConfigured } from '../../services/inquiryService';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

interface InquiryFormProps {
  initialDestination?: string;
  initialService?: string;
  initialInterest?: string;
  onOpenSupabaseModal?: () => void;
  title?: string;
  subtitle?: string;
  id?: string;
}

// Localized options for destinations, services, and contact methods
const DESTINATION_OPTIONS = [
  { id: 'Japan', label: { en: "Japan (Let's Go Japan / EJU / SSW)", si: "ජපානය (Let's Go Japan / EJU / SSW)", ta: "ஜப்பான் (Let's Go Japan / EJU / SSW)", ja: '日本（Let\'s Go Japan / 留学・特定技能）' } },
  { id: 'Dubai', label: { en: 'Dubai / UAE (Hospitality & Careers)', si: 'ඩුබායි / එක්සත් අරාබි එමීර් (හෝටල් හා වෘත්තීය)', ta: 'துபாய் / ஐக்கிய அரபு எமிரேட்ஸ் (விருந்தோம்பல் & தொழில்)', ja: 'ドバイ・UAE（ホスピタリティ・専門職）' } },
  { id: 'Maldives', label: { en: 'Maldives (Luxury Resorts & Hospitality)', si: 'මාලදිවයින (සුඛෝපභෝගී හෝටල් ක්ෂේත්‍රය)', ta: 'மாலைத்தீவு (சொகுசு ரிசார்ட்ஸ் & விருந்தோம்பல்)', ja: 'モルディブ（リゾート・ホテル産業）' } },
  { id: 'Undecided', label: { en: 'Not Sure / Need Guidance', si: 'තීරණය කර නැත / උපදෙස් අවශ්‍යයි', ta: 'முடிவு செய்யவில்லை / ஆலோசனை தேவை', ja: '未定 / カウンセラーと相談希望' } },
  { id: 'Other', label: { en: 'Other Destination', si: 'වෙනත් රටක්', ta: 'மற்ற நாடு', ja: 'その他の国' } }
];

const SERVICE_OPTIONS = [
  { id: "Let's Go Japan Language Courses", label: { en: "Let's Go Japan Language Courses (JLPT / NAT / JFT)", si: 'ජපන් භාෂා පාඨමාලා (JLPT / NAT / JFT)', ta: 'ஜப்பானிய மொழிப் படிப்புகள் (JLPT / NAT / JFT)', ja: '日本語講座（JLPT / NAT / JFT対策）' } },
  { id: 'Higher Education Abroad', label: { en: 'International Higher Education (Universities & Colleges)', si: 'ජාත්‍යන්තර උසස් අධ්‍යාපනය (විශ්වවිද්‍යාල)', ta: 'சர்வதேச உயர்கல்வி (பல்கலைக்கழகங்கள்)', ja: '海外大学・大学院進学指導' } },
  { id: 'Your Career Partner Program', label: { en: 'Your Career Partner Program (CV & Interview Prep)', si: 'වෘත්තීය උපදේශන සේවාව (CV සහ සම්මුඛ පරීක්ෂණ)', ta: 'தொழில் வழிகாட்டல் திட்டம் (CV & நேர்காணல்)', ja: '海外キャリア・面接対策プログラム' } },
  { id: 'Migration & Visa Documentation', label: { en: 'Migration & Visa Compliance Advisory', si: 'වීසා සහ නීතිමය උපදේශන සේවාව', ta: 'விசா மற்றும் ஆவண ஆலோசனை', ja: 'ビザ・公的書類申請ガイダンス' } },
  { id: 'General Profile Assessment', label: { en: 'General Eligibility Assessment', si: 'සාමාන්‍ය සුදුසුකම් ඇගයීම', ta: 'பொதுத் தகுதி மதிப்பீடு', ja: '総合カウンセリング・適性診断' } }
];

const CONTACT_METHODS = [
  { id: 'WhatsApp' as const, label: { en: 'WhatsApp', si: 'WhatsApp', ta: 'WhatsApp', ja: 'WhatsApp' } },
  { id: 'Phone Call' as const, label: { en: 'Phone Call', si: 'දුරකථන ඇමතුම', ta: 'தொலைபேசி அழைப்பு', ja: '電話連絡' } },
  { id: 'Email' as const, label: { en: 'Email', si: 'විද්‍යුත් තැපෑල', ta: 'மின்னஞ்சல்', ja: 'メール' } }
];

export const InquiryForm: React.FC<InquiryFormProps> = ({
  initialDestination = '',
  initialService = '',
  initialInterest = '',
  onOpenSupabaseModal,
  title,
  subtitle,
  id = 'inquiry-section'
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const tCommon = t.common;

  const resolvedTitle = title || t.home.inquiryTitle;
  const resolvedSubtitle = subtitle || t.home.inquirySubtitle;

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredDestination: initialDestination,
    serviceCategory: initialService,
    educationCareerInterest: initialInterest,
    preferredContactMethod: 'WhatsApp',
    message: '',
    consent: true,
    honeypot: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [submissionResult, setSubmissionResult] = useState<InquirySubmissionResult | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = tCommon.errNameRequired;
    }

    if (!formData.phone.trim()) {
      errs.phone = tCommon.errPhoneRequired;
    } else if (!/^[+0-9\s-]{7,18}$/.test(formData.phone.trim())) {
      errs.phone = tCommon.errPhoneInvalid;
    }

    if (!formData.email.trim()) {
      errs.email = tCommon.errEmailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = tCommon.errEmailInvalid;
    }

    if (!formData.consent) {
      errs.consent = tCommon.errConsentRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmissionResult(null);

    try {
      const res = await submitInquiry(formData);
      setSubmissionResult(res);

      if (res.success) {
        // Reset non-destination fields on success
        setFormData(prev => ({
          ...prev,
          fullName: '',
          phone: '',
          email: '',
          educationCareerInterest: '',
          message: ''
        }));
      }
    } catch {
      setSubmissionResult({
        success: false,
        isConfigured: false,
        message: tCommon.error
      });
    } finally {
      setLoading(false);
    }
  };

  const isConfigured = isSupabaseConfigured();

  return (
    <section id={id} className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8 md:p-10">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 border border-sky-100 rounded-full text-xs font-semibold text-sky-800 mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            {language === 'ja'
              ? '公式カウンセリング窓口'
              : language === 'si'
              ? 'නිල උපදේශන අංශය'
              : language === 'ta'
              ? 'அதிகாரப்பூர்வ ஆலோசனை மையம்'
              : 'Direct Advisory Desk'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {resolvedTitle}
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {resolvedSubtitle}
          </p>
        </div>

        {/* Supabase status notice banner */}
        {isConfigured ? (
          <div className="mb-6 px-4 py-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-semibold text-emerald-950">
                {language === 'ja'
                  ? 'Supabaseクラウドデータベース接続中'
                  : language === 'si'
                  ? 'Supabase දත්ත පද්ධතිය සක්‍රීයයි'
                  : language === 'ta'
                  ? 'Supabase தரவுத்தளம் இணைக்கப்பட்டுள்ளது'
                  : 'Connected to Supabase Database'}
              </span>
            </div>
            {onOpenSupabaseModal && (
              <button
                type="button"
                onClick={onOpenSupabaseModal}
                className="text-[11px] font-semibold text-emerald-800 hover:text-emerald-950 underline shrink-0 inline-flex items-center gap-1"
              >
                {language === 'ja' ? 'スキーマ確認' : language === 'si' ? 'ව්‍යුහය' : language === 'ta' ? 'திட்ட அமைப்பு' : 'Schema status'}
              </button>
            )}
          </div>
        ) : (
          <div className="mb-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <Database className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-amber-950">
                {language === 'ja'
                  ? 'クラウドデータベース未連携'
                  : language === 'si'
                  ? 'දත්ත පද්ධතිය වින්‍යාස කර නොමැත'
                  : language === 'ta'
                  ? 'தரவுத்தளம் உள்ளமைக்கப்படவில்லை'
                  : 'Direct Supabase Storage Unconfigured'}
              </p>
              <p className="mt-0.5 text-amber-800">
                {language === 'ja'
                  ? '送信内容はローカルに保存され、公式WhatsAppへ直接転送可能です。'
                  : language === 'si'
                  ? 'විමසීම් ආරක්ෂිතව පවතින අතර WhatsApp මඟින් ඉදිරිපත් කළ හැකිය.'
                  : language === 'ta'
                  ? 'விசாரணைகள் சேமிக்கப்பட்டு வாட்ஸ்அப் மூலம் அனுப்பப்படும்.'
                  : 'Inquiries will be backed up locally and can be dispatched immediately to WhatsApp.'}
              </p>
            </div>
            {onOpenSupabaseModal && (
              <button
                type="button"
                onClick={onOpenSupabaseModal}
                className="text-xs font-semibold text-sky-800 hover:text-sky-950 underline shrink-0 inline-flex items-center gap-1"
              >
                {language === 'ja' ? '設定ガイド' : language === 'si' ? 'සැකසුම්' : language === 'ta' ? 'அமைப்பு' : 'Setup Guide'} <HelpCircle className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Success Alert */}
        {submissionResult && submissionResult.success && (
          <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 animate-in fade-in">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-sm text-emerald-950">{tCommon.success}</p>
                  {submissionResult.inquiryId && (
                    <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      Ref: {submissionResult.inquiryId}
                    </span>
                  )}
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  {submissionResult.message}
                </p>
                {submissionResult.whatsappFallbackUrl && (
                  <div className="pt-2">
                    <a
                      href={submissionResult.whatsappFallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {language === 'ja'
                        ? '今すぐWhatsAppへ転送'
                        : language === 'si'
                        ? 'දැන්ම WhatsApp වෙත යොමු කරන්න'
                        : language === 'ta'
                        ? 'இப்போதே WhatsApp இல் அனுப்பவும்'
                        : 'Forward to WhatsApp Now'}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Unconfigured or Error Alert */}
        {submissionResult && !submissionResult.success && (
          <div className="mb-8 p-5 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 animate-in fade-in">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-rose-600 shrink-0 mt-0.5" />
              <div className="space-y-2 flex-1">
                <p className="font-bold text-sm text-rose-950">
                  {tCommon.error}
                </p>
                <p className="text-xs text-rose-800 leading-relaxed">
                  {submissionResult.message}
                </p>
                {submissionResult.whatsappFallbackUrl && (
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={submissionResult.whatsappFallbackUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {tCommon.whatsappFallback}
                    </a>
                    {onOpenSupabaseModal && !submissionResult.isConfigured && (
                      <button
                        type="button"
                        onClick={onOpenSupabaseModal}
                        className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                      >
                        <Database className="w-3.5 h-3.5" />{' '}
                        {language === 'ja'
                          ? 'Supabase設定ガイド'
                          : language === 'si'
                          ? 'Supabase උපදෙස්'
                          : language === 'ta'
                          ? 'Supabase வழிகாட்டி'
                          : 'View Supabase Guide'}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Honeypot field for anti-spam */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_field">Do not fill this</label>
            <input
              id="hp_field"
              type="text"
              name="hp_field"
              tabIndex={-1}
              autoComplete="off"
              value={formData.honeypot}
              onChange={e => setFormData({ ...formData, honeypot: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {tCommon.name} <span className="text-rose-500">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                placeholder={
                  language === 'ja'
                    ? '例: 山田 太郎 / Kasun Perera'
                    : language === 'si'
                    ? 'උදා: කසුන් පෙරේරා'
                    : language === 'ta'
                    ? 'உதா: கசுன் பெரேரா'
                    : 'e.g., Kasun Perera'
                }
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 transition-colors ${
                  errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs text-rose-600">{errors.fullName}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {tCommon.phone} <span className="text-rose-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+94 76 498 6049"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 transition-colors ${
                  errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {tCommon.email} <span className="text-rose-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 transition-colors ${
                  errors.email ? 'border-rose-500 bg-rose-50/30' : 'border-slate-300'
                }`}
              />
              {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email}</p>}
            </div>

            {/* Preferred Destination */}
            <div>
              <label htmlFor="destination" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {tCommon.destination}
              </label>
              <select
                id="destination"
                value={formData.preferredDestination}
                onChange={e => setFormData({ ...formData, preferredDestination: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:ring-2 focus:ring-sky-500 transition-colors"
              >
                <option value="">{tCommon.optSelectDestination}</option>
                {DESTINATION_OPTIONS.map(opt => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label[language] || opt.label.en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Service Category */}
            <div>
              <label htmlFor="serviceCategory" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {tCommon.serviceCategory}
              </label>
              <select
                id="serviceCategory"
                value={formData.serviceCategory}
                onChange={e => setFormData({ ...formData, serviceCategory: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:ring-2 focus:ring-sky-500 transition-colors"
              >
                <option value="">{tCommon.optSelectService}</option>
                {SERVICE_OPTIONS.map(opt => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label[language] || opt.label.en}
                  </option>
                ))}
              </select>
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {tCommon.preferredContact}
              </label>
              <div className="flex items-center gap-3 pt-1">
                {CONTACT_METHODS.map(item => (
                  <label key={item.id} className="flex items-center gap-1.5 text-xs text-slate-700 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value={item.id}
                      checked={formData.preferredContactMethod === item.id}
                      onChange={() => setFormData({ ...formData, preferredContactMethod: item.id })}
                      className="text-sky-600 focus:ring-sky-500"
                    />
                    <span>{item.label[language] || item.label.en}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Education or Career Interest */}
          <div>
            <label htmlFor="interest" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              {tCommon.interest}
            </label>
            <input
              id="interest"
              type="text"
              placeholder={
                language === 'ja'
                  ? '例: JLPT N5受講希望、特定技能介護、大学院進学、IT就労など'
                  : language === 'si'
                  ? 'උදා: JLPT N5, SSW සාත්තු සේවය, විශ්වවිද්‍යාල උපාධි හෝ රැකියා අවස්ථා'
                  : language === 'ta'
                  ? 'உதா: JLPT N5, SSW முதியோர் பராமரிப்பு, பல்கலைக்கழக பட்டப்படிப்பு'
                  : 'e.g., JLPT N5 Course, SSW Caregiving, University Degree, IT Careers'
              }
              value={formData.educationCareerInterest}
              onChange={e => setFormData({ ...formData, educationCareerInterest: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              {tCommon.message}
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder={
                language === 'ja'
                  ? 'ご質問や現在の日本語学習歴、渡航希望時期などをご自由に入力してください...'
                  : language === 'si'
                  ? 'ඔබගේ ප්‍රශ්න හෝ අධ්‍යාපනික අවශ්‍යතා මෙහි සටහන් කරන්න...'
                  : language === 'ta'
                  ? 'உங்கள் கேள்விகள் அல்லது தேவைகளை இங்கே குறிப்பிடவும்...'
                  : 'Tell us about your educational background, timeline, or specific questions...'
              }
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 transition-colors"
            />
          </div>

          {/* Consent Checkbox */}
          <div className="pt-2">
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={e => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
              />
              <span className="text-xs text-slate-600 leading-normal">
                {tCommon.consentText}
              </span>
            </label>
            {errors.consent && <p className="mt-1 text-xs text-rose-600">{errors.consent}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50 active:scale-98"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  {tCommon.submitting}
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 text-sky-400" />
                  {tCommon.submit}
                </>
              )}
            </button>

            <span className="text-xs text-slate-500 text-center sm:text-right">
              {TRANSLATIONS[language].nav.hotline}: <a href="tel:+94764986049" className="font-semibold text-slate-800 hover:underline">+94 76 498 6049</a>
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};
