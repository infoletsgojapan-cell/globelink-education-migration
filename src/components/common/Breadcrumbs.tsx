import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageId } from '../../types';

interface BreadcrumbsProps {
  items: Array<{
    name: string;
    pageId?: PageId;
  }>;
  onNavigate: (page: PageId) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
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
              <span>Home</span>
            </button>
          </li>

          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="flex items-center space-x-2">
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {isLast || !item.pageId ? (
                  <span className="font-semibold text-slate-900" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <button
                    onClick={() => item.pageId && onNavigate(item.pageId)}
                    className="text-slate-600 hover:text-sky-700 transition-colors"
                  >
                    {item.name}
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
