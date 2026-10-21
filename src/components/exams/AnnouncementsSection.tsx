import React, { useState, useEffect, useMemo } from 'react';
import {
  Calendar,
  Clock,
  ExternalLink,
  Laptop,
  MapPin,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { AnnouncementItem, AnnouncementCategory, AnnouncementStatus } from '../../types';
import { INITIAL_ANNOUNCEMENTS } from '../../data/announcements';
import { getSupabaseConfig, isSupabaseConfigured } from '../../services/inquiryService';
import { fetchNewsArticles } from '../../services/supabaseClient';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

const CATEGORIES: Array<AnnouncementCategory | 'All'> = [
  'All',
  'Exam Dates',
  'Registration Opens',
  'Deadlines',
  'Free Seminars',
  'Workshops',
  'University Prep',
  'New Courses',
  'Vacancies'
];

export const AnnouncementsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].announcements;

  const [selectedCategory, setSelectedCategory] = useState<AnnouncementCategory | 'All'>('All');
  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>(INITIAL_ANNOUNCEMENTS);
  const [loading, setLoading] = useState(false);

  // Attempt to fetch from Supabase if table exists & load dynamic CMS news
  useEffect(() => {
    let isMounted = true;
    const fetchDynamicData = async () => {
      try {
        setLoading(true);

        // Fetch published CMS news
        const newsRes = await fetchNewsArticles(true);
        const cmsNewsAnnouncements: AnnouncementItem[] = (newsRes.data || []).map((art) => ({
          id: art.id,
          title: art.title,
          category: 'Free Seminars' as AnnouncementCategory,
          description: art.summary || art.content.slice(0, 180) + '...',
          eventDate: art.publication_date,
          format: 'Online',
          status: 'Upcoming',
          isPublished: true,
          createdAt: art.created_at || new Date().toISOString()
        }));

        let cloudAnnouncements: AnnouncementItem[] = [];
        if (isSupabaseConfigured()) {
          const { url, key } = getSupabaseConfig();
          const cleanedUrl = url.replace(/\/$/, '');
          const res = await fetch(`${cleanedUrl}/rest/v1/announcements?is_published=eq.true&order=event_date.asc`, {
            headers: {
              'apikey': key,
              'Authorization': `Bearer ${key}`
            }
          });
          if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data) && data.length > 0) {
              cloudAnnouncements = data.map((item: any) => ({
                id: item.id || `ann-${Date.now()}`,
                title: item.title,
                titleSi: item.title_si,
                titleTa: item.title_ta,
                titleJa: item.title_ja,
                category: item.category,
                description: item.description,
                descriptionSi: item.description_si,
                descriptionTa: item.description_ta,
                descriptionJa: item.description_ja,
                eventDate: item.event_date,
                registrationOpens: item.registration_opens,
                deadline: item.deadline,
                format: item.format || 'Online',
                officialUrl: item.official_url,
                status: item.status || 'Upcoming',
                isPublished: item.is_published ?? true,
                createdAt: item.created_at || new Date().toISOString()
              }));
            }
          }
        }

        if (isMounted) {
          // Merge avoiding ID duplicates
          const seenIds = new Set<string>();
          const merged: AnnouncementItem[] = [];

          // 1. First add CMS news
          for (const item of cmsNewsAnnouncements) {
            if (!seenIds.has(item.id)) {
              seenIds.add(item.id);
              merged.push(item);
            }
          }

          // 2. Add cloud announcements if any
          for (const item of cloudAnnouncements) {
            if (!seenIds.has(item.id)) {
              seenIds.add(item.id);
              merged.push(item);
            }
          }

          // 3. Add initial announcements
          for (const item of INITIAL_ANNOUNCEMENTS) {
            if (!seenIds.has(item.id)) {
              seenIds.add(item.id);
              merged.push(item);
            }
          }

          setAnnouncements(merged);
        }
      } catch {
        // Fall back gracefully to INITIAL_ANNOUNCEMENTS
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchDynamicData();
    return () => {
      isMounted = false;
    };
  }, []);

  // Format date helper in Sri Lankan / localized format
  const formatDate = (isoString?: string) => {
    if (!isoString) return null;
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString(language === 'ja' ? 'ja-JP' : language === 'si' ? 'si-LK' : language === 'ta' ? 'ta-LK' : 'en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    } catch {
      return isoString;
    }
  };

  // Compute status considering current date (auto-complete past events)
  const getDynamicStatus = (ann: AnnouncementItem): AnnouncementStatus => {
    if (ann.deadline) {
      const deadlineDate = new Date(ann.deadline);
      const now = new Date();
      if (now > deadlineDate && ann.status !== 'Postponed') {
        return 'Completed';
      }
    }
    return ann.status;
  };

  const filtered = useMemo(() => {
    return announcements.filter(item => {
      if (selectedCategory === 'All') return true;
      return item.category === selectedCategory;
    });
  }, [announcements, selectedCategory]);

  const getStatusBadge = (status: AnnouncementStatus) => {
    switch (status) {
      case 'Registration Open':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {t.statusOpen}
          </span>
        );
      case 'Closing Soon':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            {t.statusClosingSoon}
          </span>
        );
      case 'Upcoming':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold bg-sky-100 text-sky-800 border border-sky-300">
            <Calendar className="w-3.5 h-3.5 text-sky-600" />
            {t.statusUpcoming}
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-300">
            <CheckCircle className="w-3.5 h-3.5 text-slate-500" />
            {t.statusCompleted}
          </span>
        );
      case 'Postponed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-300">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            {t.statusPostponed}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose-600 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4" />
            <span>Official Event Bulletin</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            {t.sectionTitle}
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            {t.sectionSubtitle}
          </p>
        </div>
      </div>

      {/* Category Filter Bar */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-colors ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
            }`}
          >
            {cat === 'All' ? t.filterAll : cat}
          </button>
        ))}
      </div>

      {/* Announcements List */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 mx-auto flex items-center justify-center text-slate-400">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-800">
            {t.emptyTitle}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            {t.emptyDesc}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map(item => {
            const dynamicStatus = getDynamicStatus(item);

            // Multilingual title and description selection
            const localizedTitle =
              language === 'si' && item.titleSi
                ? item.titleSi
                : language === 'ta' && item.titleTa
                ? item.titleTa
                : language === 'ja' && item.titleJa
                ? item.titleJa
                : item.title;

            const localizedDesc =
              language === 'si' && item.descriptionSi
                ? item.descriptionSi
                : language === 'ta' && item.descriptionTa
                ? item.descriptionTa
                : language === 'ja' && item.descriptionJa
                ? item.descriptionJa
                : item.description;

            return (
              <article
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Category and Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-bold text-rose-600 uppercase tracking-wider">
                      {item.category}
                    </span>
                    {getStatusBadge(dynamicStatus)}
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {localizedTitle}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {localizedDesc}
                  </p>

                  {/* Dates & Format Metadata */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-700">
                    {item.eventDate && (
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="text-slate-500">Date:</span>
                        <strong className="text-slate-900 font-semibold">{formatDate(item.eventDate)}</strong>
                      </div>
                    )}

                    {item.registrationOpens && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="text-slate-500">{t.opensLabel}</span>
                        <span className="text-slate-700 font-medium">{formatDate(item.registrationOpens)}</span>
                      </div>
                    )}

                    {item.deadline && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span className="text-amber-700 font-semibold">{t.deadlineLabel}</span>
                        <span className="text-amber-900 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                          {formatDate(item.deadline)}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-2 pt-0.5">
                      {item.format === 'Online' ? (
                        <Laptop className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      ) : (
                        <MapPin className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                      )}
                      <span className="text-slate-600">
                        {item.format === 'Online' ? t.formatOnline : item.format === 'Hybrid' ? t.formatHybrid : t.formatOffline}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                {item.officialUrl && (
                  <div className="pt-3 border-t border-slate-100 flex justify-end">
                    <a
                      href={item.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 transition-colors"
                    >
                      <span>{t.viewLink}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};
