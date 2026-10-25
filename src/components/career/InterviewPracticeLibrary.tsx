import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Copy,
  Check,
  Eye,
  EyeOff,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  HelpCircle,
  RotateCcw,
  Languages,
  PenTool,
  ShieldCheck,
  MessageCircle,
  Compass
} from 'lucide-react';
import { InterviewCategory, SupportedLanguage } from '../../types';
import { INTERVIEW_QUESTIONS } from '../../data/interviewQuestions';
import { COMPANY_INFO } from '../../data/company';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

const CATEGORIES: Array<InterviewCategory | 'All Categories'> = [
  'All Categories',
  'General Interview Questions',
  'HR Interview Questions',
  'English Interview Practice',
  'Japanese Interview Practice',
  'Workplace Communication',
  'Career Preparation FAQs'
];

const CATEGORY_LABELS: Record<SupportedLanguage, Record<string, string>> = {
  en: {
    'All Categories': 'All Categories',
    'General Interview Questions': 'General Interview Questions',
    'HR Interview Questions': 'HR Interview Questions',
    'English Interview Practice': 'English Interview Practice',
    'Japanese Interview Practice': 'Japanese Interview Practice',
    'Workplace Communication': 'Workplace Communication',
    'Career Preparation FAQs': 'Career Preparation FAQs',
  },
  si: {
    'All Categories': 'සියලු කාණ්ඩ',
    'General Interview Questions': 'පොදු සම්මුඛ පරීක්ෂණ ප්‍රශ්න',
    'HR Interview Questions': 'මානව සම්පත් (HR) ප්‍රශ්න',
    'English Interview Practice': 'ඉංග්‍රීසි සම්මුඛ පරීක්ෂණ පුහුණුව',
    'Japanese Interview Practice': 'ජපන් සම්මුඛ පරීක්ෂණ පුහුණුව',
    'Workplace Communication': 'සේවා ස්ථාන සන්නිවේදනය',
    'Career Preparation FAQs': 'වෘත්තීය සූදානම් වීමේ නිතර අසන ප්‍රශ්න',
  },
  ta: {
    'All Categories': 'அனைத்து பிரிவுகள்',
    'General Interview Questions': 'பொது நேர்காணல் கேள்விகள்',
    'HR Interview Questions': 'மனிதவள (HR) நேர்காணல் கேள்விகள்',
    'English Interview Practice': 'ஆங்கில நேர்காணல் பயிற்சி',
    'Japanese Interview Practice': 'ஜப்பானிய நேர்காணல் பயிற்சி',
    'Workplace Communication': 'பணியிடத் தொடர்பு',
    'Career Preparation FAQs': 'தொழில் வழிகாட்டல் அடிக்கடி கேட்கப்படும் கேள்விகள்',
  },
  ja: {
    'All Categories': 'すべてのカテゴリー',
    'General Interview Questions': '一般的な面接質問',
    'HR Interview Questions': '人事・採用面接の質問',
    'English Interview Practice': '英語面接対策',
    'Japanese Interview Practice': '日本語面接対策',
    'Workplace Communication': '職場のコミュニケーション',
    'Career Preparation FAQs': 'キャリア準備よくある質問',
  }
};

const UI_TEXT: Record<SupportedLanguage, {
  showingQuestions: (n: number) => string;
  toggleAll: string;
  noQuestions: string;
  resetFilter: string;
  intentLabel: string;
  englishSampleAnswer: string;
  japaneseSampleAnswer: string;
  sinhalaSampleAnswer: string;
  tamilSampleAnswer: string;
  personalizationTitle: string;
  draftAnswer: string;
  closeDraft: string;
  draftTitle: string;
  draftPlaceholder: string;
  draftStorageNotice: string;
  copyDraft: string;
  selectCategory: string;
  noQuestionsCategory: string;
  resetAllCategories: string;
  percentComplete: (p: number) => string;
  evaluatingLabel: string;
  resetQ1: string;
}> = {
  en: {
    showingQuestions: (n) => `Showing ${n} questions`,
    toggleAll: 'Toggle Expand All Answers',
    noQuestions: 'No questions found matching your filter',
    resetFilter: 'Reset filters & search',
    intentLabel: 'Interviewer Intent & Objective:',
    englishSampleAnswer: 'Simple Sample Answer (English):',
    japaneseSampleAnswer: 'Japanese Formulation (日本語の模範回答):',
    sinhalaSampleAnswer: 'Sinhala Translation & Nuance:',
    tamilSampleAnswer: 'Tamil Translation & Nuance:',
    personalizationTitle: 'Personalization Guidance:',
    draftAnswer: 'Draft My Answer',
    closeDraft: 'Close Draft',
    draftTitle: 'Draft Your Personalized Response (Interactive Practice Note):',
    draftPlaceholder: 'Type your own truthful answer here to practice your phrasing...',
    draftStorageNotice: 'Practice notes are stored temporarily in your active browser session.',
    copyDraft: 'Copy My Draft',
    selectCategory: 'Select Category:',
    noQuestionsCategory: 'No questions found in this category.',
    resetAllCategories: 'Reset to All Categories',
    percentComplete: (p) => `${p}% Complete`,
    evaluatingLabel: 'What the interviewer is evaluating:',
    resetQ1: 'Reset to Q1'
  },
  si: {
    showingQuestions: (n) => `ප්‍රශ්න ${n}ක් පෙන්වයි`,
    toggleAll: 'සියලු පිළිතුරු විවෘත/වසන්න',
    noQuestions: 'ඔබගේ සෙවුමට ගැලපෙන ප්‍රශ්න හමු නොවීය',
    resetFilter: 'සෙවුම් පෙරහන් යළි සකසන්න',
    intentLabel: 'සම්මුඛ පරීක්ෂකවරයාගේ බලාපොරොත්තුව හා අරමුණ:',
    englishSampleAnswer: 'ඉංග්‍රීසි නියැදි පිළිතුර (English):',
    japaneseSampleAnswer: 'ජපන් භාෂා නියැදි පිළිතුර (日本語):',
    sinhalaSampleAnswer: 'සිංහල අර්ථය සහ පැහැදිලි කිරීම:',
    tamilSampleAnswer: 'දෙමළ පරිවර්තනය:',
    personalizationTitle: 'පුද්ගලීකරණ මඟපෙන්වීම:',
    draftAnswer: 'මගේ පිළිතුර සටහන් කරන්න',
    closeDraft: 'සටහන වසන්න',
    draftTitle: 'ඔබේ පුද්ගලික පිළිතුර කෙටුම්පත් කරන්න (පුහුණු සටහන):',
    draftPlaceholder: 'ඔබගේ සැබෑ සුදුසුකම් හා අත්දැකීම් අනුව පිළිතුර මෙහි සටහන් කරන්න...',
    draftStorageNotice: 'මෙම පුහුණු සටහන ඔබගේ බ්‍රව්සර සැසියේ තාවකාලිකව සුරැකේ.',
    copyDraft: 'මගේ කෙටුම්පත පිටපත් කරන්න',
    selectCategory: 'කාණ්ඩය තෝරන්න:',
    noQuestionsCategory: 'මෙම කාණ්ඩයේ ප්‍රශ්න හමු නොවීය.',
    resetAllCategories: 'සියලු කාණ්ඩ යළි සකසන්න',
    percentComplete: (p) => `${p}% සම්පූර්ණයි`,
    evaluatingLabel: 'සම්මුඛ පරීක්ෂකවරයා ඇගයීමට ලක්කරන කරුණු:',
    resetQ1: 'පළමු ප්‍රශ්නයට (Q1)'
  },
  ta: {
    showingQuestions: (n) => `${n} கேள்விகள் காட்டப்படுகின்றன`,
    toggleAll: 'அனைத்து பதில்களையும் விரிக்க/சுருக்க',
    noQuestions: 'உங்கள் தேடலுக்கு ஏற்ற கேள்விகள் கிடைக்கவில்லை',
    resetFilter: 'வடிகட்டிகளை மீட்டமைக்கவும்',
    intentLabel: 'நேர்காணலாளரின் நோக்கம் மற்றும் எதிர்பார்ப்பு:',
    englishSampleAnswer: 'ஆங்கில மாதிரி பதில் (English):',
    japaneseSampleAnswer: 'ஜப்பானிய மாதிரி பதில் (日本語):',
    sinhalaSampleAnswer: 'சிங்கள விளக்கம்:',
    tamilSampleAnswer: 'தமிழ் மாதிரி பதில் மற்றும் விளக்கம்:',
    personalizationTitle: 'தனிப்பயனாக்க வழிகாட்டல்:',
    draftAnswer: 'என் பதிலை உருவாக்கவும்',
    closeDraft: 'குறிப்பை மூடவும்',
    draftTitle: 'உங்கள் தனிப்பயனாக்கப்பட்ட பதிலை உருவாக்கவும் (பயிற்சிக் குறிப்பு):',
    draftPlaceholder: 'உங்கள் சொந்த அனுபவம் மற்றும் திறன்களைக் கொண்டு உங்கள் பதிலை இங்கே தட்டச்சு செய்யவும்...',
    draftStorageNotice: 'பயிற்சிக் குறிப்புகள் உலாவி அமர்வில் தற்காலிகமாக சேமிக்கப்படுகின்றன.',
    copyDraft: 'என் வரைவை நகலெடு',
    selectCategory: 'பிரிவைத் தேர்ந்தெடுக்கவும்:',
    noQuestionsCategory: 'இந்த பிரிவில் கேள்விகள் எதுவும் இல்லை.',
    resetAllCategories: 'அனைத்து பிரிவுகளுக்கும் மீட்டமைக்கவும்',
    percentComplete: (p) => `${p}% நிறைவடைந்தது`,
    evaluatingLabel: 'நேர்காணலாளர் மதிப்பிடும் முக்கிய அம்சங்கள்:',
    resetQ1: 'முதல் கேள்விக்கு (Q1)'
  },
  ja: {
    showingQuestions: (n) => `${n}件の質問を表示中`,
    toggleAll: 'すべての回答を展開/折りたたむ',
    noQuestions: '条件に一致する質問が見つかりませんでした',
    resetFilter: 'フィルターと検索をリセット',
    intentLabel: '面接官の意図・評価ポイント:',
    englishSampleAnswer: '模範回答（英語）:',
    japaneseSampleAnswer: '日本語の模範回答（面接実践）:',
    sinhalaSampleAnswer: 'シンハラ語参考訳:',
    tamilSampleAnswer: 'タミル語参考訳:',
    personalizationTitle: '自己PR・回答カスタマイズのポイント:',
    draftAnswer: '自分の回答を下書き',
    closeDraft: '下書きを閉じる',
    draftTitle: 'あなた自身の回答を下書きする（実践メモ）:',
    draftPlaceholder: 'ご自身の経歴や強みに合わせて、実際の面接で話す言葉を入力してください...',
    draftStorageNotice: '練習メモはブラウザセッション内に一時的に保持されます。',
    copyDraft: '下書きをコピー',
    selectCategory: 'カテゴリー選択:',
    noQuestionsCategory: 'このカテゴリーに該当する質問はありません。',
    resetAllCategories: '全カテゴリーに戻す',
    percentComplete: (p) => `${p}% 完了`,
    evaluatingLabel: '面接官が確認している能力・姿勢:',
    resetQ1: '第1問に戻る'
  }
};

export const InterviewPracticeLibrary: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].careerQA;
  const ui = UI_TEXT[language] || UI_TEXT.en;
  const categoryMap = CATEGORY_LABELS[language] || CATEGORY_LABELS.en;

  const [activeTab, setActiveTab] = useState<'browse' | 'practice'>('browse');
  const [selectedCategory, setSelectedCategory] = useState<InterviewCategory | 'All Categories'>('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedAnswers, setExpandedAnswers] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Practice mode state
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [practiceRevealed, setPracticeRevealed] = useState(false);
  const [customDrafts, setCustomDrafts] = useState<Record<string, string>>({});
  const [editingDraftId, setEditingDraftId] = useState<string | null>(null);

  // Filtered list for browse and practice
  const filteredQuestions = useMemo(() => {
    return INTERVIEW_QUESTIONS.filter(q => {
      const matchesCategory = selectedCategory === 'All Categories' || q.category === selectedCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;
      const qLower = searchQuery.toLowerCase();
      return (
        q.questionEn.toLowerCase().includes(qLower) ||
        (q.questionJa && q.questionJa.toLowerCase().includes(qLower)) ||
        (q.questionSi && q.questionSi.toLowerCase().includes(qLower)) ||
        (q.questionTa && q.questionTa.toLowerCase().includes(qLower)) ||
        q.sampleAnswerEn.toLowerCase().includes(qLower) ||
        (q.sampleAnswerJa && q.sampleAnswerJa.toLowerCase().includes(qLower)) ||
        q.explanationSi.toLowerCase().includes(qLower)
      );
    });
  }, [selectedCategory, searchQuery]);

  // Toggle answer expansion in browse mode
  const toggleAnswer = (id: string) => {
    setExpandedAnswers(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Copy sample answer
  const copyAnswer = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Practice mode helpers
  const currentPracticeQuestion = filteredQuestions[practiceIndex] || filteredQuestions[0];
  const totalPracticeCount = filteredQuestions.length;

  const handleNextPractice = () => {
    if (practiceIndex < totalPracticeCount - 1) {
      setPracticeIndex(practiceIndex + 1);
      setPracticeRevealed(false);
    }
  };

  const handlePrevPractice = () => {
    if (practiceIndex > 0) {
      setPracticeIndex(practiceIndex - 1);
      setPracticeRevealed(false);
    }
  };

  const resetPractice = () => {
    setPracticeIndex(0);
    setPracticeRevealed(false);
  };

  const whatsappInquiryUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Hello GlobeLink! I would like to ask about GlobeLink career guidance, international interview preparation, and Japanese workplace communication.'
  )}`;

  return (
    <div className="space-y-8">
      {/* Search and Navigation Bar */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Tab Switcher */}
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200/80">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'browse'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4 text-sky-600" />
              <span>{t.browseTab}</span>
            </button>
            <button
              onClick={() => setActiveTab('practice')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'practice'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-rose-600" />
              <span>{t.practiceTab}</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setPracticeIndex(0);
              }}
              placeholder={t.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* WhatsApp Guidance CTA */}
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shrink-0 shadow-2xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t.askGuidance}</span>
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {CATEGORIES.map(cat => {
            const label = categoryMap[cat] || cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setPracticeIndex(0);
                  setPracticeRevealed(false);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Educational Notice Banner */}
      <div className="bg-sky-50 border border-sky-200/80 rounded-xl p-3.5 text-xs text-sky-950 flex items-start gap-2.5">
        <HelpCircle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {t.educationalNotice}
        </p>
      </div>

      {/* TAB 1: BROWSE ALL LIBRARY */}
      {activeTab === 'browse' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>{ui.showingQuestions(filteredQuestions.length)}</span>
            <button
              onClick={() => {
                const allExpanded = Object.keys(expandedAnswers).length === filteredQuestions.length &&
                  Object.values(expandedAnswers).every(Boolean);
                const nextState: Record<string, boolean> = {};
                filteredQuestions.forEach(q => {
                  nextState[q.id] = !allExpanded;
                });
                setExpandedAnswers(nextState);
              }}
              className="text-sky-700 hover:text-sky-900 font-semibold transition-colors"
            >
              {ui.toggleAll}
            </button>
          </div>

          {filteredQuestions.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 space-y-3">
              <Search className="w-8 h-8 mx-auto text-slate-400" />
              <p className="font-semibold text-slate-800">{ui.noQuestions}</p>
              <button
                onClick={() => {
                  setSelectedCategory('All Categories');
                  setSearchQuery('');
                }}
                className="text-xs text-sky-700 font-bold hover:underline"
              >
                {ui.resetFilter}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredQuestions.map((q, idx) => {
                const isExpanded = Boolean(expandedAnswers[q.id]);
                const isCopied = copiedId === q.id;
                const isEditing = editingDraftId === q.id;
                const customDraft = customDrafts[q.id] || '';
                const catLabel = categoryMap[q.category] || q.category;

                // Determine primary title based on current language
                const isJa = language === 'ja';
                const isSi = language === 'si';
                const isTa = language === 'ta';

                const intentText = 
                  isJa && (q.explanationJa || q.explanationSi)
                    ? q.explanationJa || q.explanationSi
                    : isTa && (q.explanationTa || q.explanationSi)
                    ? q.explanationTa || q.explanationSi
                    : q.explanationSi;

                return (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all overflow-hidden"
                  >
                    {/* Question Header */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
                          {catLabel}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          #{idx + 1}
                        </span>
                      </div>

                      {/* Primary Heading */}
                      {isJa && q.questionJa ? (
                        <>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {q.questionJa}
                          </h4>
                          <p className="text-xs text-slate-500 font-sans">
                            <span className="font-semibold text-slate-700">English:</span> {q.questionEn}
                          </p>
                        </>
                      ) : isSi && q.questionSi ? (
                        <>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {q.questionSi}
                          </h4>
                          <p className="text-xs text-slate-500 font-sans">
                            <span className="font-semibold text-slate-700">English:</span> {q.questionEn}
                          </p>
                        </>
                      ) : isTa && q.questionTa ? (
                        <>
                          <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                            {q.questionTa}
                          </h4>
                          <p className="text-xs text-slate-500 font-sans">
                            <span className="font-semibold text-slate-700">English:</span> {q.questionEn}
                          </p>
                        </>
                      ) : (
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                          {q.questionEn}
                        </h4>
                      )}

                      {/* Multilingual Sub-references for cross-study */}
                      {!isJa && q.questionJa && (
                        <p className="text-xs font-medium text-rose-600 bg-rose-50/60 p-2 rounded-lg border border-rose-100">
                          <span className="font-semibold text-rose-900">日本語:</span> {q.questionJa}
                        </p>
                      )}

                      {!isSi && q.questionSi && language === 'en' && (
                        <p className="text-xs text-slate-600">
                          <strong className="text-slate-800">සිංහල අර්ථය:</strong> {q.questionSi}
                        </p>
                      )}

                      {/* Explanation of Question Intent */}
                      <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 text-xs text-amber-950 space-y-1">
                        <p className="font-bold text-amber-900 flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-amber-700" />
                          <span>{ui.intentLabel}</span>
                        </p>
                        <p className="leading-relaxed text-amber-900">
                          {intentText}
                        </p>
                      </div>

                      {/* Action Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                        <button
                          onClick={() => toggleAnswer(q.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200/80 px-3 py-1.5 rounded-lg transition-colors"
                        >
                          {isExpanded ? (
                            <>
                              <EyeOff className="w-3.5 h-3.5" />
                              <span>{t.hideAnswer}</span>
                            </>
                          ) : (
                            <>
                              <Eye className="w-3.5 h-3.5" />
                              <span>{t.showAnswer}</span>
                            </>
                          )}
                        </button>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => copyAnswer(q.id, isJa && q.sampleAnswerJa ? q.sampleAnswerJa : q.sampleAnswerEn)}
                            className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition-colors font-medium"
                            title={t.copyAnswer}
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-700 font-bold">{t.copied}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-slate-500" />
                                <span>{t.copyAnswer}</span>
                              </>
                            )}
                          </button>

                          <button
                            onClick={() => setEditingDraftId(isEditing ? null : q.id)}
                            className={`inline-flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg transition-colors font-medium ${
                              isEditing
                                ? 'bg-sky-100 text-sky-800 font-bold'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                            }`}
                          >
                            <PenTool className="w-3.5 h-3.5" />
                            <span>{isEditing ? ui.closeDraft : ui.draftAnswer}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Answer Reveal Area */}
                    {isExpanded && (
                      <div className="bg-slate-50/80 p-5 sm:p-6 border-t border-slate-200 space-y-4 animate-in fade-in duration-200">
                        {/* Japanese Sample Answer prioritized in Japanese mode */}
                        {isJa && q.sampleAnswerJa && (
                          <div className="space-y-1.5">
                            <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block flex items-center gap-1.5">
                              <Languages className="w-3.5 h-3.5 text-rose-600" />
                              {ui.japaneseSampleAnswer}
                            </span>
                            <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-200/80 text-xs sm:text-sm text-slate-900 leading-relaxed font-sans">
                              {q.sampleAnswerJa}
                            </div>
                          </div>
                        )}

                        {/* English Sample Answer */}
                        <div className="space-y-1.5">
                          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                            {ui.englishSampleAnswer}
                          </span>
                          <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans shadow-xs">
                            {q.sampleAnswerEn}
                          </div>
                        </div>

                        {/* Japanese Sample Answer for non-Japanese mode */}
                        {!isJa && q.sampleAnswerJa && (
                          <div className="space-y-1.5">
                            <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block flex items-center gap-1.5">
                              <Languages className="w-3.5 h-3.5 text-rose-600" />
                              {ui.japaneseSampleAnswer}
                            </span>
                            <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-200/80 text-xs sm:text-sm text-slate-900 leading-relaxed font-sans">
                              {q.sampleAnswerJa}
                            </div>
                          </div>
                        )}

                        {/* Sinhala Sample Answer */}
                        {isSi && q.sampleAnswerSi && (
                          <div className="space-y-1.5">
                            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                              {ui.sinhalaSampleAnswer}
                            </span>
                            <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                              {q.sampleAnswerSi}
                            </div>
                          </div>
                        )}

                        {/* Tamil Sample Answer */}
                        {isTa && q.sampleAnswerTa && (
                          <div className="space-y-1.5">
                            <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                              {ui.tamilSampleAnswer}
                            </span>
                            <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                              {q.sampleAnswerTa}
                            </div>
                          </div>
                        )}

                        {/* Personalization Tip & Note */}
                        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <div className="leading-relaxed space-y-1">
                            <p>
                              <strong>{ui.personalizationTitle}</strong> {q.personalizationTip}
                            </p>
                            <p className="text-[11px] text-emerald-800 font-medium">
                              {t.personalizeNotice}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Inline Practice Draft Area */}
                    {isEditing && (
                      <div className="p-5 sm:p-6 bg-sky-50/50 border-t border-sky-100 space-y-2 animate-in fade-in">
                        <label className="block text-xs font-bold text-sky-950">
                          {ui.draftTitle}
                        </label>
                        <textarea
                          rows={3}
                          placeholder={ui.draftPlaceholder}
                          value={customDraft}
                          onChange={(e) => {
                            setCustomDrafts(prev => ({
                              ...prev,
                              [q.id]: e.target.value
                            }));
                          }}
                          className="w-full p-3 text-xs sm:text-sm rounded-xl border border-sky-200 bg-white text-slate-900 focus:ring-2 focus:ring-sky-500"
                        />
                        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                          <span>{ui.draftStorageNotice}</span>
                          {customDraft && (
                            <button
                              onClick={() => copyAnswer(q.id, customDraft)}
                              className="text-sky-700 font-bold hover:underline"
                            >
                              {ui.copyDraft}
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: INTERACTIVE PRACTICE MODE (1 by 1) */}
      {activeTab === 'practice' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Category Selector inside Practice Mode */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-slate-100 rounded-xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <Filter className="w-4 h-4 text-sky-600" />
              <span>{ui.selectCategory}</span>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value as any);
                setPracticeIndex(0);
                setPracticeRevealed(false);
              }}
              className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold bg-white text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>
                  {categoryMap[cat] || cat}
                </option>
              ))}
            </select>
          </div>

          {totalPracticeCount === 0 ? (
            <div className="text-center py-12 text-slate-500 space-y-2">
              <p className="font-semibold text-slate-800">{ui.noQuestionsCategory}</p>
              <button
                onClick={() => {
                  setSelectedCategory('All Categories');
                  setPracticeIndex(0);
                }}
                className="text-xs text-sky-700 font-bold hover:underline"
              >
                {ui.resetAllCategories}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Progress Bar & Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="font-bold text-slate-900">
                    {t.questionOf} {practiceIndex + 1} of {totalPracticeCount}
                  </span>
                  <span>{ui.percentComplete(Math.round(((practiceIndex + 1) / totalPracticeCount) * 100))}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-sky-500 to-rose-500 transition-all duration-300 rounded-full"
                    style={{ width: `${((practiceIndex + 1) / totalPracticeCount) * 100}%` }}
                  />
                </div>
              </div>

              {/* Single Question Card */}
              <div className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 bg-white rounded-md border border-slate-200 text-slate-700 font-semibold">
                    {categoryMap[currentPracticeQuestion.category] || currentPracticeQuestion.category}
                  </span>
                  <span className="font-mono text-slate-400">
                    #{practiceIndex + 1}
                  </span>
                </div>

                {/* Primary Question */}
                {language === 'ja' && currentPracticeQuestion.questionJa ? (
                  <>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                      {currentPracticeQuestion.questionJa}
                    </h3>
                    <p className="text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">English:</span> {currentPracticeQuestion.questionEn}
                    </p>
                  </>
                ) : language === 'si' && currentPracticeQuestion.questionSi ? (
                  <>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                      {currentPracticeQuestion.questionSi}
                    </h3>
                    <p className="text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">English:</span> {currentPracticeQuestion.questionEn}
                    </p>
                  </>
                ) : language === 'ta' && currentPracticeQuestion.questionTa ? (
                  <>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                      {currentPracticeQuestion.questionTa}
                    </h3>
                    <p className="text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">English:</span> {currentPracticeQuestion.questionEn}
                    </p>
                  </>
                ) : (
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {currentPracticeQuestion.questionEn}
                  </h3>
                )}

                {/* Secondary translations */}
                {language !== 'ja' && currentPracticeQuestion.questionJa && (
                  <p className="text-sm font-medium text-rose-700 bg-rose-50 p-3 rounded-xl border border-rose-100">
                    <span className="font-bold text-rose-900">日本語:</span> {currentPracticeQuestion.questionJa}
                  </p>
                )}

                {/* Interviewer Intent */}
                <div className="p-4 bg-amber-50/90 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
                  <p className="font-bold text-amber-900 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-amber-700" />
                    <span>{ui.evaluatingLabel}</span>
                  </p>
                  <p className="leading-relaxed">
                    {language === 'ja' && currentPracticeQuestion.explanationJa
                      ? currentPracticeQuestion.explanationJa
                      : language === 'ta' && currentPracticeQuestion.explanationTa
                      ? currentPracticeQuestion.explanationTa
                      : currentPracticeQuestion.explanationSi}
                  </p>
                </div>

                {/* Reveal Answer Action */}
                <div className="pt-2">
                  {!practiceRevealed ? (
                    <button
                      onClick={() => setPracticeRevealed(true)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors shadow-2xs"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{t.showAnswer}</span>
                    </button>
                  ) : (
                    <div className="space-y-4 animate-in fade-in duration-200 pt-2 border-t border-slate-200">
                      {/* Japanese Sample Answer prioritized in Japanese */}
                      {language === 'ja' && currentPracticeQuestion.sampleAnswerJa && (
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                            <Languages className="w-3.5 h-3.5 text-rose-600" />
                            {ui.japaneseSampleAnswer}
                          </span>
                          <div className="p-4 bg-rose-50/60 rounded-xl border border-rose-200/80 text-xs sm:text-sm text-slate-900 leading-relaxed">
                            {currentPracticeQuestion.sampleAnswerJa}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                          {ui.englishSampleAnswer}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => copyAnswer(currentPracticeQuestion.id, language === 'ja' && currentPracticeQuestion.sampleAnswerJa ? currentPracticeQuestion.sampleAnswerJa : currentPracticeQuestion.sampleAnswerEn)}
                            className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 bg-white border border-slate-200 px-3 py-1.5 rounded-lg transition-colors font-medium"
                          >
                            {copiedId === currentPracticeQuestion.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-700 font-bold">{t.copied}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-slate-500" />
                                <span>{t.copyAnswer}</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={() => setPracticeRevealed(false)}
                            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 px-2 py-1"
                          >
                            <EyeOff className="w-3.5 h-3.5" />
                            <span>{t.hideAnswer}</span>
                          </button>
                        </div>
                      </div>

                      <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed shadow-2xs">
                        {currentPracticeQuestion.sampleAnswerEn}
                      </div>

                      {language !== 'ja' && currentPracticeQuestion.sampleAnswerJa && (
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                            <Languages className="w-3.5 h-3.5 text-rose-600" />
                            {ui.japaneseSampleAnswer}
                          </span>
                          <div className="p-4 bg-rose-50/60 rounded-xl border border-rose-200/80 text-xs sm:text-sm text-slate-900 leading-relaxed">
                            {currentPracticeQuestion.sampleAnswerJa}
                          </div>
                        </div>
                      )}

                      <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                        <div className="leading-relaxed">
                          <strong>{ui.personalizationTitle}</strong> {currentPracticeQuestion.personalizationTip}
                          <p className="mt-1 text-[11px] text-emerald-800 font-medium">
                            {t.personalizeNotice}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrevPractice}
                  disabled={practiceIndex === 0}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t.previous}</span>
                </button>

                <button
                  onClick={resetPractice}
                  className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{ui.resetQ1}</span>
                </button>

                <button
                  onClick={handleNextPractice}
                  disabled={practiceIndex === totalPracticeCount - 1}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-2xs"
                >
                  <span>{t.next}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
