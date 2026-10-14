import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Search, 
  Wrench, 
  ThermometerSnowflake, 
  VolumeX, 
  EyeOff, 
  Cpu, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { PRODUCTION_PROBLEMS } from '../data/articles';
import { ProductionProblem } from '../types';

interface ProductionProblemsProps {
  onSelectPage: (page: number) => void;
}

export const ProductionProblems: React.FC<ProductionProblemsProps> = ({ onSelectPage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Optics', 'Weather', 'Rigging', 'Lighting', 'Audio', 'Sensors'];

  const filteredProblems = PRODUCTION_PROBLEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.fieldFix.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: ProductionProblem['category']) => {
    switch (category) {
      case 'Weather':
        return <ThermometerSnowflake className="w-4 h-4 text-sky-400" />;
      case 'Audio':
        return <VolumeX className="w-4 h-4 text-purple-400" />;
      case 'Optics':
        return <EyeOff className="w-4 h-4 text-amber-400" />;
      case 'Sensors':
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 'Rigging':
        return <Wrench className="w-4 h-4 text-orange-400" />;
      case 'Lighting':
      default:
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
          <span className="text-amber-400 font-semibold">PAGE 12 OF 12</span>
          <span>·</span>
          <span>FIELD SURVIVAL GUIDE</span>
          <span>·</span>
          <span>DIRECTOR & DP PRODUCTION WAR ROOM</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
          Problems Faced & On-Set Field Fixes
        </h1>
        <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
          12 real-world cinema production emergencies. When weather collapses, lenses fog, and rigs fail, these are the exact field-tested solutions to keep cameras rolling without blowing schedule.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#0b0d14] border border-slate-800 rounded-xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Interactive Segmented Controls (buttons with click handlers, permitted by constitution) */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black font-semibold'
                  : 'text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search problems or gear..."
            className="w-full bg-slate-900/80 border border-slate-800 focus:border-amber-400/80 focus:outline-none rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500"
          />
        </div>
      </div>

      {/* Problems Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {filteredProblems.map((item, index) => (
          <div
            key={index}
            className="bg-[#0b0d14] border border-slate-800 hover:border-slate-700/80 rounded-xl p-5 shadow-lg flex flex-col justify-between transition-colors"
          >
            <div>
              <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-800/80 mb-3">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(item.category)}
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    {item.category} Emergency
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Case 0{index + 1}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2 font-display leading-snug">
                {item.title}
              </h3>

              <div className="space-y-3 text-xs mb-4">
                <div>
                  <span className="text-[10px] font-mono text-rose-400 uppercase font-semibold block mb-0.5">
                    What Went Wrong
                  </span>
                  <p className="text-slate-300 leading-relaxed text-[11.5px]">
                    {item.issue}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1 mb-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>The Field Fix</span>
                  </span>
                  <p className="text-slate-200 leading-relaxed text-[11.5px]">
                    {item.fieldFix}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80 bg-slate-900/40 -mx-5 -mb-5 p-3.5 rounded-b-xl flex items-center justify-between gap-2">
              <div className="text-[11px] text-amber-200/90 font-mono italic truncate">
                <span className="text-slate-500 not-italic mr-1.5">PRO TIP:</span>
                "{item.proTip}"
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProblems.length === 0 && (
        <div className="text-center py-16 bg-[#0b0d14] rounded-xl border border-slate-800">
          <ShieldAlert className="w-10 h-10 text-slate-600 mx-auto mb-2" />
          <h4 className="text-base font-semibold text-white">No emergencies found</h4>
          <p className="text-xs text-slate-400 mt-1">Try clearing your search query or choosing another category.</p>
        </div>
      )}

      {/* Return to Article 1 CTA */}
      <div className="p-6 bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/30 rounded-xl flex items-center justify-between">
        <div>
          <span className="text-xs font-mono text-amber-400 block mb-1">LOOP BACK TO BEGINNING</span>
          <h4 className="text-base font-semibold text-white font-display">
            Start from Page 01: Extreme Wide Shot (EWS)
          </h4>
        </div>
        <button
          onClick={() => onSelectPage(1)}
          className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-lg text-xs transition-colors flex items-center gap-1.5"
        >
          <span>Read Article 1</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
