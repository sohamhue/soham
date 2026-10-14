import React, { useState } from 'react';
import { 
  Camera, 
  Clapperboard, 
  AlertCircle, 
  Search, 
  ChevronRight, 
  SlidersHorizontal,
  Bookmark
} from 'lucide-react';
import { ARTICLES } from '../data/articles';

interface ArticlesDirectoryProps {
  currentPage: number;
  onSelectPage: (page: number) => void;
  savedShots: number[];
  onToggleBookmark: (id: number) => void;
  onClose?: () => void;
}

export const ArticlesDirectory: React.FC<ArticlesDirectoryProps> = ({
  currentPage,
  onSelectPage,
  savedShots,
  onToggleBookmark,
  onClose
}) => {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Establishing', 'Angles', 'Movement', 'Intimacy', 'Atmosphere'];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesCat = filterCategory === 'All' || art.category === filterCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.shotType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.cameraSpecs.camera.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.problemFaced.issue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Directory Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <span className="text-amber-400 font-semibold">12-PAGE MASTER DIRECTORY</span>
            <span>·</span>
            <span>10 CINEMATOGRAPHY ARTICLES + 2 MASTER LABS</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
            The Director's Shot Bible Index
          </h1>
          <p className="text-sm text-slate-300 mt-1 max-w-2xl">
            Select any page to jump straight into camera shot breakdowns, composition viewfinders, storyboard blueprints, and on-set solutions.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search shots, cameras, or issues..."
            className="w-full bg-[#0b0d14] border border-slate-800 focus:border-amber-400/80 focus:outline-none rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500"
          />
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 custom-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
              filterCategory === cat
                ? 'bg-amber-400 text-black font-semibold'
                : 'text-slate-400 hover:text-white bg-[#0b0d14] border border-slate-800 hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of the 10 Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredArticles.map((article) => {
          const isCurrent = currentPage === article.pageNumber;
          const isSaved = savedShots.includes(article.id);

          return (
            <div
              key={article.id}
              className={`bg-[#0b0d14] rounded-xl overflow-hidden border transition-all flex flex-col justify-between group ${
                isCurrent
                  ? 'border-amber-400/90 shadow-xl ring-1 ring-amber-400/30'
                  : 'border-slate-800/90 hover:border-slate-700'
              }`}
            >
              {/* Thumbnail with Shot Type Overlay */}
              <div
                onClick={() => {
                  onSelectPage(article.pageNumber);
                  if (onClose) onClose();
                }}
                className="relative aspect-[16/9] w-full bg-black cursor-pointer overflow-hidden"
              >
                <img
                  src={article.imageStill}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Page Badge & Bookmark */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-auto">
                  <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-amber-400 font-bold border border-slate-700/60">
                    PAGE {String(article.pageNumber).padStart(2, '0')}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleBookmark(article.id);
                    }}
                    className={`p-1.5 rounded-md backdrop-blur-md transition-colors ${
                      isSaved
                        ? 'bg-amber-400 text-black'
                        : 'bg-black/60 text-slate-300 hover:text-white hover:bg-black/80'
                    }`}
                    title={isSaved ? 'Remove from Shotlist' : 'Save to Shotlist'}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
                  </button>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-2 left-2.5 right-2.5 text-xs text-white font-medium truncate">
                  {article.shotType}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 mb-1">
                    {article.category} · {article.cameraSpecs.focalLength}
                  </div>
                  <h3
                    onClick={() => {
                      onSelectPage(article.pageNumber);
                      if (onClose) onClose();
                    }}
                    className="text-base font-bold text-white group-hover:text-amber-300 transition-colors cursor-pointer font-display leading-snug line-clamp-2"
                  >
                    {article.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono text-amber-400/90 truncate max-w-[180px]">
                    Fix: {article.problemFaced.issue}
                  </span>
                  <button
                    onClick={() => {
                      onSelectPage(article.pageNumber);
                      if (onClose) onClose();
                    }}
                    className="text-slate-300 hover:text-white flex items-center gap-1 font-medium text-xs whitespace-nowrap ml-2"
                  >
                    <span>Read Shot</span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pages 11 & 12 Special Master Modules */}
      <div className="border-t border-slate-800 pt-8 mb-8">
        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider font-display mb-4">
          Master Laboratory Pages (Pages 11 & 12)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Page 11 Card */}
          <div
            onClick={() => {
              onSelectPage(11);
              if (onClose) onClose();
            }}
            className={`p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0b0d14] border cursor-pointer group transition-all ${
              currentPage === 11
                ? 'border-amber-400 shadow-xl ring-1 ring-amber-400/30'
                : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="text-amber-400 font-bold">PAGE 11</span>
              <span>INTERACTIVE ANIMATIC SUITE</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <Clapperboard className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold text-white font-display">
                The Interactive Storyboard Lab
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Scrub and auto-play through 6 complete sequential storyboard frames with camera vectors, duration timers, and audio cues.
            </p>
            <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
              <span>Launch Storyboard Player</span>
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>

          {/* Page 12 Card */}
          <div
            onClick={() => {
              onSelectPage(12);
              if (onClose) onClose();
            }}
            className={`p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-[#0b0d14] border cursor-pointer group transition-all ${
              currentPage === 12
                ? 'border-amber-400 shadow-xl ring-1 ring-amber-400/30'
                : 'border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="text-amber-400 font-bold">PAGE 12</span>
              <span>12 ON-SET EMERGENCIES</span>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-6 h-6 text-amber-400 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-bold text-white font-display">
                Production War Room & Field Fixes
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Explore 12 real production catastrophes—from lens fogging in sub-zero snow to drone GPS crashes—and the crew's emergency fixes.
            </p>
            <span className="text-xs font-semibold text-amber-400 flex items-center gap-1">
              <span>Explore All 12 Problems</span>
              <ChevronRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
