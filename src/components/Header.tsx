import React from 'react';
import { Film, Clapperboard, AlertCircle, BookOpen, Layers } from 'lucide-react';

interface HeaderProps {
  currentPage: number;
  onSelectPage: (page: number) => void;
  savedShotsCount: number;
  onOpenSavedDrawer: () => void;
  onOpenDirectory: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onSelectPage,
  savedShotsCount,
  onOpenSavedDrawer,
  onOpenDirectory
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#07080c]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <button
          onClick={() => onSelectPage(1)}
          className="text-left group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus:outline-none"
        >
          <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors">
            <Film className="w-4 h-4" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-display">
            CINEFRAME
          </span>
        </button>

        {/* Zone 2: 4-5 single-line clean text nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => onOpenDirectory()}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Layers className="w-4 h-4 text-slate-400" />
            <span>10 Articles Index</span>
          </button>

          <button
            onClick={() => onSelectPage(11)}
            className={`transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              currentPage === 11 ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'
            }`}
          >
            <Clapperboard className="w-4 h-4 text-slate-400" />
            <span>Storyboard Lab (P11)</span>
          </button>

          <button
            onClick={() => onSelectPage(12)}
            className={`transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              currentPage === 12 ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'
            }`}
          >
            <AlertCircle className="w-4 h-4 text-slate-400" />
            <span>Problems Faced (P12)</span>
          </button>

          <button
            onClick={() => onSelectPage(currentPage <= 10 ? currentPage : 1)}
            className={`transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              currentPage <= 10 ? 'text-amber-400 font-semibold' : 'hover:text-amber-400'
            }`}
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Shot Reading View</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenSavedDrawer}
            className="px-3.5 py-1.5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-md hover:border-amber-500/50 hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Director's Shotlist</span>
            <span className="text-[11px] font-mono text-amber-400 font-bold bg-amber-400/10 px-1.5 py-0.2 rounded">
              {savedShotsCount}
            </span>
          </button>

          <button
            onClick={() => onOpenDirectory()}
            className="px-4 py-2 text-xs font-semibold text-black bg-amber-400 rounded-md hover:bg-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            All 12 Pages
          </button>
        </div>
      </div>
    </header>
  );
};
