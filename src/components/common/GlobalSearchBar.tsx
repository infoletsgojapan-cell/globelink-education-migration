import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  ExternalLink,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Briefcase,
  FileCheck2,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';
import { PageId, SearchCategory, SearchResultItem } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';
import { searchWebsite, SEARCH_INDEX } from '../../services/searchService';

interface GlobalSearchBarProps {
  onNavigate: (page: PageId) => void;
  isMobileCompact?: boolean;
}

export const GlobalSearchBar: React.FC<GlobalSearchBarProps> = ({
  onNavigate,
  isMobileCompact = false
}) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].search;

  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory | 'All'>('All');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // Categories list
  const categories: Array<{ id: SearchCategory | 'All'; label: string }> = [
    { id: 'All', label: t.allFilter },
    { id: 'Courses & Fees', label: t.coursesFilter },
    { id: 'Exams & EJU', label: t.examsFilter },
    { id: 'SSW & Visas', label: t.visasFilter },
    { id: 'Career Q&A', label: t.careerQAFilter },
    { id: 'Events & Vacancies', label: t.eventsFilter },
    { id: 'Resources & Tools', label: t.resourcesFilter }
  ];

  // Perform search on query or category change
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }
    const matched = searchWebsite(query, selectedCategory, language);
    setResults(matched);
    setSelectedIndex(-1);
  }, [query, selectedCategory, language]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
      return;
    }

    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      setIsOpen(true);
      return;
    }

    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const targetItem = selectedIndex >= 0 ? results[selectedIndex] : results[0];
      if (targetItem) {
        handleSelectResult(targetItem);
      }
    }
  };

  const handleSelectResult = (item: SearchResultItem) => {
    setIsOpen(false);
    setQuery('');

    if (item.externalUrl) {
      window.open(item.externalUrl, '_blank', 'noopener,noreferrer');
      return;
    }

    onNavigate(item.targetPage);

    // If target hash is specified, attempt smooth scroll after page transition
    if (item.targetHash) {
      setTimeout(() => {
        const el = document.getElementById(item.targetHash!);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    inputRef.current?.focus();
  };

  // Helper to pick localized title/description
  const getDisplayTitle = (item: SearchResultItem) => {
    if (language === 'si' && item.titleSi) return item.titleSi;
    if (language === 'ta' && item.titleTa) return item.titleTa;
    if (language === 'ja' && item.titleJa) return item.titleJa;
    return item.title;
  };

  const getDisplayDesc = (item: SearchResultItem) => {
    if (language === 'si' && item.descriptionSi) return item.descriptionSi;
    if (language === 'ta' && item.descriptionTa) return item.descriptionTa;
    if (language === 'ja' && item.descriptionJa) return item.descriptionJa;
    return item.description;
  };

  const getCategoryIcon = (cat: SearchCategory) => {
    switch (cat) {
      case 'Courses & Fees':
        return <GraduationCap className="w-3.5 h-3.5 text-sky-400" />;
      case 'Exams & EJU':
        return <BookOpen className="w-3.5 h-3.5 text-emerald-400" />;
      case 'SSW & Visas':
        return <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />;
      case 'Career Q&A':
        return <Briefcase className="w-3.5 h-3.5 text-indigo-400" />;
      case 'Events & Vacancies':
        return <Calendar className="w-3.5 h-3.5 text-rose-400" />;
      case 'Resources & Tools':
        return <Layers className="w-3.5 h-3.5 text-cyan-400" />;
      default:
        return <Search className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <div className={`relative ${isMobileCompact ? 'w-full' : 'w-64 lg:w-72 xl:w-80'}`} ref={containerRef}>
      {/* Search Input Bar */}
      <div className="relative flex items-center">
        <div className="absolute left-3 pointer-events-none text-slate-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={t.placeholder}
          aria-label={t.buttonLabel}
          aria-expanded={isOpen}
          aria-autocomplete="list"
          role="combobox"
          className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-slate-900 hover:bg-slate-850 focus:bg-slate-950 text-white placeholder-slate-400 border border-slate-700/80 focus:border-sky-500 focus:outline-hidden focus:ring-1 focus:ring-sky-500 transition-all shadow-inner"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2.5 p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title={t.clear}
            aria-label={t.clear}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Floating Results Popover */}
      {isOpen && (
        <div className="absolute left-0 sm:left-auto right-0 mt-2 w-full min-w-[320px] sm:min-w-[440px] md:min-w-[520px] max-w-[95vw] bg-slate-950/98 backdrop-blur-xl border border-slate-700/90 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 text-slate-200">
          {/* Header & Category Filter Chips */}
          <div className="p-3 border-b border-slate-800/80 bg-slate-900/60">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.modalTitle}</span>
              </span>
              <span className="text-[10px] text-slate-400">
                {query
                  ? `${results.length} ${t.resultsFound}`
                  : (language === 'ja'
                    ? `収録リソース ${SEARCH_INDEX.length} 件`
                    : language === 'si'
                    ? `සම්පත් ${SEARCH_INDEX.length} ක් අන්තර්ගතයි`
                    : language === 'ta'
                    ? `${SEARCH_INDEX.length} வளங்கள் இணைக்கப்பட்டுள்ளன`
                    : `Indexed ${SEARCH_INDEX.length} resources`)}
              </span>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-[11px]">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-2.5 py-1 rounded-lg shrink-0 font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-sky-600 text-white font-semibold shadow-xs'
                      : 'bg-slate-850 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results List */}
          <div
            ref={resultsContainerRef}
            className="max-h-[60vh] sm:max-h-[420px] overflow-y-auto divide-y divide-slate-800/60 p-1.5"
            role="listbox"
          >
            {query.trim() === '' ? (
              <div className="p-6 text-center">
                <Search className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                <p className="text-xs text-slate-300 font-medium">
                  {language === 'ja'
                    ? '検索キーワードを入力してください'
                    : language === 'si'
                    ? 'GlobeLink තුළ සෙවීමට වචන ඇතුළත් කරන්න'
                    : language === 'ta'
                    ? 'GlobeLink இல் தேட சொற்களை உள்ளிடவும்'
                    : 'Type keywords to search across GlobeLink'}
                </p>
                <p className="text-[11px] text-slate-500 mt-1 max-w-xs mx-auto">
                  {language === 'ja' ? (
                    <>検索例：<strong className="text-sky-400">JLPT N5</strong>、<strong className="text-sky-400">EJU</strong>、<strong className="text-sky-400">分割払い</strong>、<strong className="text-sky-400">特定技能 農業</strong>、<strong className="text-sky-400">面接質問</strong></>
                  ) : language === 'si' ? (
                    <>සොයාගත හැකි මාතෘකා: <strong className="text-sky-400">JLPT N5</strong>, <strong className="text-sky-400">EJU</strong>, <strong className="text-sky-400">වාරික ගෙවීම්</strong>, <strong className="text-sky-400">SSW කෘෂිකර්ම</strong>, <strong className="text-sky-400">සම්මුඛ පරීක්ෂණ</strong></>
                  ) : language === 'ta' ? (
                    <>தேடல் உதாரணங்கள்: <strong className="text-sky-400">JLPT N5</strong>, <strong className="text-sky-400">EJU</strong>, <strong className="text-sky-400">தவணை முறை</strong>, <strong className="text-sky-400">SSW விவசாயம்</strong>, <strong className="text-sky-400">நேர்காணல்</strong></>
                  ) : (
                    <>Try searching for: <strong className="text-sky-400">JLPT N5</strong>, <strong className="text-sky-400">EJU</strong>, <strong className="text-sky-400">Installments</strong>, <strong className="text-sky-400">Agriculture SSW</strong>, <strong className="text-sky-400">Interviews</strong></>
                  )}
                </p>
              </div>
            ) : results.length === 0 ? (
              <div className="p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-2 text-slate-500">
                  <X className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-white">{t.noResults}</h4>
                <p className="text-xs text-slate-400 mt-1.5 max-w-sm mx-auto leading-relaxed">
                  {t.noResultsDesc}
                </p>
              </div>
            ) : (
              results.map((item, index) => {
                const isSelected = selectedIndex === index;
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSelectResult(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    role="option"
                    aria-selected={isSelected}
                    className={`p-3 rounded-xl cursor-pointer transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-sky-950/70 border border-sky-600/60 shadow-xs'
                        : 'hover:bg-slate-900/90 border border-transparent'
                    }`}
                  >
                    <div className="mt-0.5 shrink-0 p-1.5 rounded-lg bg-slate-900 border border-slate-800">
                      {getCategoryIcon(item.category)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-800/60">
                          {item.category}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] text-slate-400 font-medium">
                            &bull; {item.badge}
                          </span>
                        )}
                      </div>

                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 leading-snug">
                        {getDisplayTitle(item)}
                      </h4>

                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                        {getDisplayDesc(item)}
                      </p>
                    </div>

                    <div className="shrink-0 self-center">
                      <button
                        type="button"
                        className="px-2.5 py-1.5 rounded-lg bg-sky-600/90 hover:bg-sky-500 text-white text-[11px] font-semibold flex items-center gap-1 shadow-xs transition-colors"
                      >
                        {item.externalUrl ? (
                          <>
                            <span>{language === 'ja' ? '開く' : language === 'si' ? 'විවෘත කරන්න' : language === 'ta' ? 'திறக்க' : 'Open'}</span>
                            <ExternalLink className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            <span>{t.openResource}</span>
                            <ArrowRight className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Navigation Hints */}
          <div className="p-2.5 bg-slate-950 border-t border-slate-800/80 text-[10px] text-slate-400 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono">↑↓</kbd>
              <span>{language === 'ja' ? '選択' : language === 'si' ? 'තෝරන්න' : language === 'ta' ? 'தேர்வு செய்ய' : 'to navigate'}</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono">Enter</kbd>
              <span>{language === 'ja' ? '開く' : language === 'si' ? 'විවෘත කිරීමට' : language === 'ta' ? 'திறக்க' : 'to open'}</span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono">Esc</kbd>
              <span>{language === 'ja' ? '閉じる' : language === 'si' ? 'වැසීමට' : language === 'ta' ? 'மூட' : 'to close'}</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
