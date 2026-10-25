import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageId } from '../../types';
import { useLanguage } from '../../contexts/LanguageContext';
import { TRANSLATIONS } from '../../data/translations';

interface BreadcrumbsProps {
  items: Array<{
    name: string;
    pageId?: PageId;
  }>;
  onNavigate: (page: PageId) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  // Helper to map English page titles to translated equivalents
  const getLocalizedName = (name: string): string => {
    switch (name) {
      case 'About Us':
        return t.nav.about;
      case 'Education Consultancy':
        return t.nav.educationConsultancy;
      case "Let's Go Japan":
        return t.nav.letsGoJapan;
      case 'Japanese Language Courses':
        return t.nav.japaneseCourses;
      case 'Japanese Exams & Registration':
      case 'Japanese Language Exams & Registration':
        return t.nav.japaneseExams;
      case 'Japan Education & Career Resources':
        return t.nav.japanResources;
      case 'Career Preparation':
      case 'Career Preparation & Partner Program':
        return t.nav.careerPrep;
      case 'International Career Opportunities & Destinations':
      case 'Destinations & Careers':
        return t.nav.destinations;
      case 'Migration & Visa Support':
        return t.nav.visaCompliance;
      case 'Contact Us':
        return t.nav.contact;
      default:
        return name;
    }
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200 py-3 text-xs text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2">
          <li>
            <button
              onClick={() => onNavigate('home')}
              className="inline-flex items-center text-slate-500 hover:text-navy-900 transition-colors"
            >
              <Home className="w-3.5 h-3.5 mr-1" />
              <span>{t.common.homeBreadcrumb}</span>
            </button>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            const localizedName = getLocalizedName(item.name);
            return (
              <li key={idx} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {isLast || !item.pageId ? (
                  <span className="font-semibold text-slate-900" aria-current="page">
                    {localizedName}
                  </span>
                ) : (
                  <button
                    onClick={() => item.pageId && onNavigate(item.pageId)}
                    className="text-slate-600 hover:text-sky-700 transition-colors"
                  >
                    {localizedName}
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
