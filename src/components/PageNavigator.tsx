import React from 'react';
import { ChevronLeft, ChevronRight, Grid, Bookmark } from 'lucide-react';
import { ARTICLES } from '../data/articles';

interface PageNavigatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onToggleDirectory: () => void;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
}

export const PageNavigator: React.FC<PageNavigatorProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onToggleDirectory,
  isBookmarked,
  onToggleBookmark
}) => {
  const getPageTitle = (p: number) => {
    if (p <= 10) {
      const art = ARTICLES.find(a => a.pageNumber === p);
      return art ? art.shotType : `Article ${p}`;
    }
    if (p === 11) return 'Storyboard Lab';
    if (p === 12) return 'Problems Faced';
    return `Page ${p}`;
  };

  return (
    <div className="bg-[#0b0d14] border-y border-slate-800/90 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Previous / Next & Current Page Indicator */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Previous Page (Left Arrow)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="text-white font-semibold tabular-nums text-sm">
              Page {String(currentPage).padStart(2, '0')}
            </span>
            <span>/</span>
            <span className="tabular-nums">12 Pages Total</span>
          </div>

          <button
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 disabled:opacity-30 disabled:pointer-events-none transition-colors"
            title="Next Page (Right Arrow)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="hidden sm:block text-xs text-amber-400/90 font-medium border-l border-slate-800 pl-3">
            {getPageTitle(currentPage)}
          </div>
        </div>

        {/* Center: Numeric 12-page jump pills */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-full pb-1 md:pb-0 custom-scrollbar">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
            const isActive = page === currentPage;
            const isSpecial = page > 10;
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`px-2.5 py-1 text-xs font-mono font-medium rounded transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-400 text-black font-bold shadow-sm'
                    : isSpecial
                    ? 'bg-slate-900/90 text-amber-300/80 hover:bg-slate-800 border border-amber-500/30'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
                title={`Jump to Page ${page}: ${getPageTitle(page)}`}
              >
                {page < 10 ? `0${page}` : page}
                {page === 11 && '·SB'}
                {page === 12 && '·WAR'}
              </button>
            );
          })}
        </div>

        {/* Right: Quick Tools */}
        <div className="flex items-center gap-2.5">
          {onToggleBookmark && (
            <button
              onClick={onToggleBookmark}
              className={`px-3 py-1.5 text-xs font-medium rounded border transition-colors flex items-center gap-1.5 ${
                isBookmarked
                  ? 'bg-amber-500/10 border-amber-500/50 text-amber-400'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'In Shotlist' : 'Save Shot'}</span>
            </button>
          )}

          <button
            onClick={onToggleDirectory}
            className="px-3 py-1.5 text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 rounded transition-colors flex items-center gap-1.5"
            title="Browse all 12 pages in visual directory"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Page Index</span>
          </button>
        </div>
      </div>
    </div>
  );
};
