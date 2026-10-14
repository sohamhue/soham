import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Clapperboard, 
  MoveRight, 
  Volume2, 
  Clock, 
  Camera, 
  Sliders,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { STORYBOARD_SEQUENCE } from '../data/articles';

interface StoryboardRoomProps {
  onSelectPage: (page: number) => void;
}

export const StoryboardRoom: React.FC<StoryboardRoomProps> = ({ onSelectPage }) => {
  const [activeFrameIndex, setActiveFrameIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [aspectRatio, setAspectRatio] = useState<'2.39' | '16:9'>('2.39');

  const currentFrame = STORYBOARD_SEQUENCE[activeFrameIndex];

  // Auto-play animatic sequencer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      const durationMs = currentFrame.durationSec * 1000;
      timer = setTimeout(() => {
        setActiveFrameIndex((prev) => (prev + 1) % STORYBOARD_SEQUENCE.length);
      }, durationMs);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, activeFrameIndex, currentFrame]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <span className="text-amber-400 font-semibold">PAGE 11 OF 12</span>
            <span>·</span>
            <span>MASTER SEQUENCE SUITE</span>
            <span>·</span>
            <span>SCENE 14: "THE WET ALLEY EXTRACTION"</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
            The Interactive Storyboard Lab
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl">
            From script cues to visual vectors. Scrub or play through the 6-frame director animatic to analyze camera blocking, lens focal lengths, and sound pacing.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors ${
              isPlaying
                ? 'bg-rose-500 text-white hover:bg-rose-600'
                : 'bg-amber-400 text-black hover:bg-amber-300'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Pause Animatic' : 'Play Sequence'}</span>
          </button>

          <button
            onClick={() => {
              setIsPlaying(false);
              setActiveFrameIndex(0);
            }}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Reset to Frame 1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Storyboard Canvas & Visual Preview */}
      <div className="bg-[#0b0d14] border border-slate-800 rounded-2xl p-6 shadow-2xl mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Canvas: Storyboard Graphical Frame */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/9] bg-[#050608] rounded-xl overflow-hidden border border-slate-700/80 shadow-inner flex flex-col items-center justify-center p-6 text-center select-none">
              {/* Aspect Ratio Mattes */}
              {aspectRatio === '2.39' && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-[12%] bg-black/95 border-b border-amber-500/20 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 right-0 h-[12%] bg-black/95 border-t border-amber-500/20 pointer-events-none" />
                </>
              )}

              {/* Storyboard Hand-Drawn Minimalist Schematic */}
              <div className="relative z-10 max-w-md space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-xs font-mono text-amber-400 font-semibold">
                  <Clapperboard className="w-3.5 h-3.5" />
                  <span>{currentFrame.frameNumber}</span>
                  <span>·</span>
                  <span>{currentFrame.shotType}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {currentFrame.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-mono bg-black/60 p-3 rounded border border-slate-800/80">
                  {currentFrame.visualDescription}
                </p>

                <div className="flex items-center justify-center gap-3 text-xs text-amber-300/90 font-mono">
                  <span>FOV: {currentFrame.focalLength}</span>
                  <span>•</span>
                  <span>{currentFrame.cameraAngle}</span>
                </div>
              </div>

              {/* Animatic Progress bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
                <div
                  className="h-full bg-amber-400 transition-all duration-300"
                  style={{
                    width: `${((activeFrameIndex + 1) / STORYBOARD_SEQUENCE.length) * 100}%`
                  }}
                />
              </div>

              {/* Aspect toggle in frame */}
              <div className="absolute top-3 right-3 z-20 flex gap-1 bg-black/80 px-2 py-1 rounded border border-slate-700 text-[10px] font-mono">
                <button
                  onClick={() => setAspectRatio('2.39')}
                  className={`px-1.5 py-0.5 rounded ${aspectRatio === '2.39' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
                >
                  2.39:1
                </button>
                <button
                  onClick={() => setAspectRatio('16:9')}
                  className={`px-1.5 py-0.5 rounded ${aspectRatio === '16:9' ? 'text-amber-400 font-bold' : 'text-slate-400'}`}
                >
                  16:9
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel: Frame Director Notes & Cue Sheet */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-slate-400 uppercase">
                FRAME SPECIFICATION
              </span>
              <span className="text-xs font-mono text-amber-400 flex items-center gap-1 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>Paced Duration: {currentFrame.durationSec}s</span>
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                  Actor Staging & Action
                </span>
                <p className="text-slate-200 leading-relaxed font-sans bg-slate-900/50 p-3 rounded border border-slate-800">
                  {currentFrame.action}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                  Camera Kinetic Vector
                </span>
                <p className="text-amber-300/90 font-mono flex items-center gap-2">
                  <MoveRight className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{currentFrame.cameraMove}</span>
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase block mb-1">
                  Audio & Sound Design Cues
                </span>
                <p className="text-slate-300 italic flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{currentFrame.audioCue}</span>
                </p>
              </div>
            </div>

            {/* Step navigation buttons */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setActiveFrameIndex((prev) => (prev > 0 ? prev - 1 : STORYBOARD_SEQUENCE.length - 1));
                }}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded text-xs flex items-center gap-1.5 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Frame</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                Frame {activeFrameIndex + 1} of {STORYBOARD_SEQUENCE.length}
              </span>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setActiveFrameIndex((prev) => (prev + 1) % STORYBOARD_SEQUENCE.length);
                }}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>Next Frame</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Frame Strip Thumbnail Carousel */}
      <div>
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-display mb-3">
          Timeline Frame Strip (Click to Inspect)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {STORYBOARD_SEQUENCE.map((frame, index) => {
            const isSelected = index === activeFrameIndex;
            return (
              <button
                key={frame.id}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveFrameIndex(index);
                }}
                className={`p-3 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-amber-500/10 border-amber-400 shadow-md ring-1 ring-amber-400/40'
                    : 'bg-[#0b0d14] border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                  <span className={isSelected ? 'text-amber-400 font-bold' : 'text-slate-500'}>
                    0{index + 1}
                  </span>
                  <span className="text-slate-500">{frame.durationSec}s</span>
                </div>
                <h4 className={`text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {frame.title}
                </h4>
                <p className="text-[11px] font-mono text-slate-500 mt-1 truncate">
                  {frame.focalLength}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Next page CTA to Page 12 */}
      <div className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-[#0b0d14] border border-slate-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono text-amber-400 block mb-1">FINAL CHAPTER</span>
          <h4 className="text-base font-semibold text-white font-display">
            Ready for the On-Set Reality Check?
          </h4>
          <p className="text-xs text-slate-400">
            Proceed to Page 12: The Production War Room detailing 12 on-set catastrophes and field fixes.
          </p>
        </div>
        <button
          onClick={() => onSelectPage(12)}
          className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-lg text-xs transition-colors whitespace-nowrap flex items-center gap-2"
        >
          <span>Open Production War Room (P12)</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
