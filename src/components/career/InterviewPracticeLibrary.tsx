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
  MessageSquare,
  HelpCircle,
  RotateCcw,
  Languages,
  PenTool,
  ShieldCheck,
  MessageCircle,
  Compass
} from 'lucide-react';
import { InterviewQuestion, InterviewCategory } from '../../types';
import { INTERVIEW_QUESTIONS } from '../../data/interviewQuestions';
import { COMPANY_INFO } from '../../data/company';

const CATEGORIES: Array<InterviewCategory | 'All Categories'> = [
  'All Categories',
  'General Interview Questions',
  'HR Interview Questions',
  'English Interview Practice',
  'Japanese Interview Practice',
  'Workplace Communication',
  'Career Preparation FAQs'
];

export const InterviewPracticeLibrary: React.FC = () => {
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
        q.sampleAnswerEn.toLowerCase().includes(qLower) ||
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

  // WhatsApp CTA URL with prefilled text
  const careerGuidanceWhatsAppUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    'Hello GlobeLink, I would like to ask about the GlobeLink Career Partner Program and career guidance.'
  )}`;

  return (
    <div id="interview-qa-section" className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-800 uppercase tracking-widest mb-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            Career Preparation Resource Library
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Interview Questions &amp; Answers Library
          </h3>
          <p className="mt-1 text-sm text-slate-600 max-w-2xl leading-relaxed">
            Master core interview questions with authentic English sample frameworks, Sinhala intent explanations, and Japanese translations for international opportunities.
          </p>
        </div>

        {/* View Switcher: Browse vs Practice Mode */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl shrink-0 self-start md:self-end">
          <button
            onClick={() => setActiveTab('browse')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'browse'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Browse Library ({INTERVIEW_QUESTIONS.length})</span>
          </button>
          <button
            onClick={() => {
              setActiveTab('practice');
              setPracticeIndex(0);
              setPracticeRevealed(false);
            }}
            className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'practice'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Practice Mode (1-by-1)</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills & Search Bar */}
      <div className="space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions by keyword in English, Sinhala, or Japanese..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setPracticeIndex(0);
            }}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-sky-500 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setPracticeIndex(0);
                setPracticeRevealed(false);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Educational Notice Banner */}
      <div className="bg-sky-50 border border-sky-200/80 rounded-xl p-3.5 text-xs text-sky-950 flex items-start gap-2.5">
        <HelpCircle className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Personalization Guidance:</strong> These sample answers provide professional structural frameworks. Every candidate must personalize their answers truthfully with their own genuine academic history, projects, and career motivations. Never recite memorized claims that do not match your real background.
        </p>
      </div>

      {/* TAB 1: BROWSE ALL LIBRARY */}
      {activeTab === 'browse' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>Showing <strong>{filteredQuestions.length}</strong> questions</span>
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
              Toggle Expand All Answers
            </button>
          </div>

          {filteredQuestions.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500 space-y-3">
              <Search className="w-8 h-8 mx-auto text-slate-400" />
              <p className="font-semibold text-slate-800">No questions found matching your filter</p>
              <button
                onClick={() => {
                  setSelectedCategory('All Categories');
                  setSearchQuery('');
                }}
                className="text-xs text-sky-700 font-bold hover:underline"
              >
                Reset filters &amp; search
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredQuestions.map((q, idx) => {
                const isExpanded = Boolean(expandedAnswers[q.id]);
                const isCopied = copiedId === q.id;
                const isEditing = editingDraftId === q.id;
                const customDraft = customDrafts[q.id] || '';

                return (
                  <div
                    key={q.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all overflow-hidden"
                  >
                    {/* Question Header */}
                    <div className="p-5 sm:p-6 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                          {q.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          #{idx + 1}
                        </span>
                      </div>

                      {/* Question in English */}
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {q.questionEn}
                      </h4>

                      {/* Question in Japanese where available */}
                      {q.questionJa && (
                        <p className="text-xs font-medium text-rose-600 bg-rose-50/60 p-2 rounded-lg border border-rose-100">
                          <span className="font-semibold text-rose-900">日本語:</span> {q.questionJa}
                        </p>
                      )}

                      {/* Question in Sinhala translation */}
                      {q.questionSi && (
                        <p className="text-xs text-slate-600">
                          <strong className="text-slate-800">සිංහල අර්ථය:</strong> {q.questionSi}
                        </p>
                      )}

                      {/* Sinhala Explanation of Question Intent */}
                      <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 text-xs text-amber-950 space-y-1">
                        <p className="font-bold text-amber-900 flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-amber-700" />
                          සම්මුඛ පරීක්ෂකවරයාගේ බලාපොරොත්තුව (Interviewer Intent):
                        </p>
                        <p className="leading-relaxed text-amber-900">
                          {q.explanationSi}
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
                              <span>Hide Answer</span>
                            </>
                          ) : (
                            <>
                              <Eye className="w-3.5 h-3.5" />
                              <span>Show Answer</span>
                            </>
                          )}
                        </button>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => copyAnswer(q.id, q.sampleAnswerEn)}
                            className="inline-flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-2.5 py-1.5 rounded-lg transition-colors font-medium"
                            title="Copy English sample answer"
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="text-emerald-700 font-bold">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5 text-slate-500" />
                                <span>Copy Answer</span>
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
                            <span>{isEditing ? 'Close Draft' : 'Draft My Answer'}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Answer Reveal Area */}
                    {isExpanded && (
                      <div className="bg-slate-50/80 p-5 sm:p-6 border-t border-slate-200 space-y-4 animate-in fade-in duration-200">
                        {/* English Sample Answer */}
                        <div className="space-y-1.5">
                          <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                            Simple Sample Answer (English):
                          </span>
                          <div className="p-3.5 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans shadow-xs">
                            {q.sampleAnswerEn}
                          </div>
                        </div>

                        {/* Japanese Sample Answer where applicable */}
                        {q.sampleAnswerJa && (
                          <div className="space-y-1.5">
                            <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block flex items-center gap-1.5">
                              <Languages className="w-3.5 h-3.5 text-rose-600" />
                              Japanese Formulation (日本語の模範回答):
                            </span>
                            <div className="p-3.5 bg-rose-50/50 rounded-xl border border-rose-200/80 text-xs sm:text-sm text-slate-900 leading-relaxed font-sans">
                              {q.sampleAnswerJa}
                            </div>
                          </div>
                        )}

                        {/* Personalization Tip & Note */}
                        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <div className="leading-relaxed space-y-1">
                            <p>
                              <strong>Personalization Guidance:</strong> {q.personalizationTip}
                            </p>
                            <p className="text-[11px] text-emerald-800 font-medium">
                              <em>Important:</em> Sample answers are educational guidelines only and must be personalized truthfully with your own actual qualifications, experiences, and background.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Optional Inline Practice Draft Area */}
                    {isEditing && (
                      <div className="p-5 sm:p-6 bg-sky-50/50 border-t border-sky-100 space-y-2 animate-in fade-in">
                        <label className="block text-xs font-bold text-sky-950">
                          Draft Your Personalized Response (Interactive Practice Note):
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Type your own truthful answer here to practice your phrasing..."
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
                          <span>Practice notes are stored temporarily in your active browser session.</span>
                          {customDraft && (
                            <button
                              onClick={() => copyAnswer(q.id, customDraft)}
                              className="text-sky-700 font-bold hover:underline"
                            >
                              Copy My Draft
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
              <span>Select Question Category:</span>
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value as any);
                setPracticeIndex(0);
                setPracticeRevealed(false);
              }}
              className="bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-sky-500 outline-hidden"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {totalPracticeCount === 0 ? (
            <div className="text-center py-12 space-y-3">
              <p className="font-bold text-slate-800">No questions found in this category.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All Categories');
                  setPracticeIndex(0);
                  setPracticeRevealed(false);
                }}
                className="text-xs text-sky-700 font-bold underline"
              >
                Reset to All Categories
              </button>
            </div>
          ) : (
            <>
              {/* Progress Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                    <span>Question {practiceIndex + 1} of {totalPracticeCount}</span>
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">
                    {Math.round(((practiceIndex + 1) / totalPracticeCount) * 100)}% Completed
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-sky-500 via-sky-600 to-rose-500 h-full transition-all duration-300 rounded-full"
                    style={{ width: `${((practiceIndex + 1) / totalPracticeCount) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Practice Question Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
                <span className="text-[11px] font-semibold text-slate-500 bg-white border border-slate-200 px-2.5 py-0.5 rounded inline-block">
                  {currentPracticeQuestion.category}
                </span>

                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  {currentPracticeQuestion.questionEn}
                </h4>

                {currentPracticeQuestion.questionJa && (
                  <p className="text-sm font-semibold text-rose-700 bg-rose-50 p-2.5 rounded-xl border border-rose-100">
                    <span className="font-bold text-rose-950">日本語:</span> {currentPracticeQuestion.questionJa}
                  </p>
                )}

                {currentPracticeQuestion.questionSi && (
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">සිංහල අර්ථය:</strong> {currentPracticeQuestion.questionSi}
                  </p>
                )}

                {/* Intent explanation in Sinhala */}
                <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 space-y-1">
                  <p className="font-bold text-amber-900 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-amber-700" />
                    සම්මුඛ පරීක්ෂකවරයා බලාපොරොත්තු වන්නේ කුමක්ද?
                  </p>
                  <p className="leading-relaxed">
                    {currentPracticeQuestion.explanationSi}
                  </p>
                </div>

                {/* Reveal Answer Action */}
                <div className="pt-2">
                  {!practiceRevealed ? (
                    <button
                      onClick={() => setPracticeRevealed(true)}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Show Answer</span>
                    </button>
                  ) : (
                    <div className="space-y-4 pt-3 border-t border-slate-200 animate-in fade-in">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                          Simple Sample Answer (English):
                        </span>
                        <button
                          onClick={() => setPracticeRevealed(false)}
                          className="text-xs text-slate-500 hover:text-slate-800 font-semibold inline-flex items-center gap-1"
                        >
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>Hide Answer</span>
                        </button>
                      </div>

                      <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans shadow-xs">
                        {currentPracticeQuestion.sampleAnswerEn}
                      </div>

                      {currentPracticeQuestion.sampleAnswerJa && (
                        <div className="space-y-1.5">
                          <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block flex items-center gap-1.5">
                            <Languages className="w-3.5 h-3.5 text-rose-600" />
                            Japanese Translation (日本語の模範回答):
                          </span>
                          <div className="p-4 bg-rose-50/60 rounded-xl border border-rose-200 text-xs sm:text-sm text-slate-900 leading-relaxed font-sans">
                            {currentPracticeQuestion.sampleAnswerJa}
                          </div>
                        </div>
                      )}

                      <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 space-y-1">
                        <p>
                          <strong>Personalization Tip:</strong> {currentPracticeQuestion.personalizationTip}
                        </p>
                        <p className="text-[11px] text-emerald-800 font-medium">
                          <em>Note:</em> Sample answers must be personalized truthfully with your own genuine background, education, and career aspirations.
                        </p>
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => copyAnswer(currentPracticeQuestion.id, currentPracticeQuestion.sampleAnswerEn)}
                          className="px-4 py-2 text-xs bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-semibold transition-colors inline-flex items-center gap-1.5 shadow-xs"
                        >
                          {copiedId === currentPracticeQuestion.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-300 font-bold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-300" />
                              <span>Copy Answer</span>
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => setPracticeRevealed(false)}
                          className="px-3.5 py-2 text-xs text-slate-600 hover:text-slate-900 font-medium rounded-lg border border-slate-300 bg-white"
                        >
                          Hide Answer
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Controls: Previous & Next */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={handlePrevPractice}
                  disabled={practiceIndex === 0}
                  className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-1.5"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={resetPractice}
                  className="p-2 text-xs text-slate-400 hover:text-slate-600 font-medium inline-flex items-center gap-1"
                  title="Restart practice from question 1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>

                <button
                  onClick={handleNextPractice}
                  disabled={practiceIndex === totalPracticeCount - 1}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Career Inquiry WhatsApp CTA Card */}
      <div className="p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
            Personalized Mentoring &amp; Mock Sessions
          </span>
          <h4 className="text-xl sm:text-2xl font-bold text-white">
            Need 1-on-1 Interview Coaching or CV Review?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Our career advisors evaluate your CV, conduct simulated mock interviews, and tailor preparation specifically for employers in Japan, Dubai, the UAE, or Maldives.
          </p>
        </div>

        <a
          href={careerGuidanceWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs tracking-wide shadow-lg hover:shadow-emerald-600/25 transition-all shrink-0 active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          <span>Ask About Career Guidance</span>
        </a>
      </div>
    </div>
  );
};
