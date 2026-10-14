import React from 'react';
import { 
  Clapperboard, 
  AlertTriangle, 
  CheckCircle2, 
  Camera, 
  Compass, 
  SlidersHorizontal,
  ChevronLeft, 
  ChevronRight,
  Bookmark,
  Share2,
  Volume2
} from 'lucide-react';
import { Article } from '../types';
import { ViewfinderOverlay } from './ViewfinderOverlay';

interface ArticleViewProps {
  article: Article;
  onSelectPage: (page: number) => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  onOpenLightbox: () => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onSelectPage,
  isBookmarked,
  onToggleBookmark,
  onOpenLightbox
}) => {
  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Header & Meta (Zero-Pill discipline: unboxed text with subtle separators) */}
      <div className="mb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 mb-3">
          <span className="text-amber-400 font-semibold">{article.kicker}</span>
          <span aria-hidden="true">·</span>
          <span>Article {article.pageNumber} of 10</span>
          <span aria-hidden="true">·</span>
          <span>{article.category} Category</span>
          <span aria-hidden="true">·</span>
          <span>2.39:1 Panavision</span>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight text-balance mb-4 font-display">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans max-w-3xl">
          {article.summary}
        </p>
      </div>

      {/* Main Visual Film Still Section ("wo shots ke ss daa dena") */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>PRIMARY CAMERA SHOT STILL & COMPOSITION GUIDE</span>
          </span>
          <span className="text-xs text-slate-500 font-mono">
            {article.stillCaption}
          </span>
        </div>

        <ViewfinderOverlay
          imageSrc={article.imageStill}
          altText={article.title}
          shotType={article.shotType}
          cameraSpecs={article.cameraSpecs}
          onOpenLightbox={onOpenLightbox}
        />

        <div className="mt-3 p-3.5 bg-slate-900/60 border border-slate-800 rounded-lg text-xs text-slate-300 leading-relaxed flex items-start gap-3">
          <Compass className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300 font-medium">Composition Secret: </strong>
            <span>{article.compositionInsight}</span>
          </div>
        </div>
      </div>

      {/* Two Column Section: Storyboard Breakdown & Problem Faced on Set */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Card 1: Storyboard Blueprint */}
        <div className="bg-[#0b0d14] border border-slate-800 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Clapperboard className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-display">
                  Storyboard Blueprint
                </h3>
              </div>
              <span className="text-xs font-mono text-amber-400/90 font-bold">
                {article.storyboard.shotNumber}
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-[11px] font-mono text-slate-500 block uppercase">Scene Heading</span>
                <p className="font-mono text-slate-200 font-medium text-xs">
                  {article.storyboard.sceneHeading}
                </p>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-500 block uppercase">Action / Staging</span>
                <p className="text-slate-300 leading-normal">
                  {article.storyboard.action}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block uppercase">Camera Move</span>
                  <p className="text-slate-300 font-medium">{article.storyboard.cameraMovement}</p>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block uppercase">Focal Length</span>
                  <p className="text-slate-300 font-medium">{article.storyboard.lensChoice}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-start gap-2 text-slate-400">
                <Volume2 className="w-3.5 h-3.5 text-amber-400/70 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] font-mono text-slate-500 block uppercase">Audio / Sound Cue</span>
                  <p className="text-xs text-slate-300 italic">{article.storyboard.audioPrompt}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Aspect: {article.storyboard.aspectRatio}</span>
            <button
              onClick={() => onSelectPage(11)}
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              Open Full Storyboard Room →
            </button>
          </div>
        </div>

        {/* Card 2: Problems Faced on Set & Field Solution */}
        <div className="bg-[#0b0d14] border border-amber-500/20 rounded-xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-display">
                  On-Set Problem & Field Fix
                </h3>
              </div>
              <span className="text-[11px] font-mono text-amber-400 font-semibold bg-amber-500/10 px-2 py-0.5 rounded">
                Catastrophe Solved
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div>
                <span className="text-[11px] font-mono text-rose-400 font-semibold block uppercase">
                  The Critical Problem
                </span>
                <p className="text-slate-200 font-medium text-xs mb-1">
                  {article.problemFaced.issue}
                </p>
                <p className="text-slate-400 leading-relaxed text-[11.5px]">
                  {article.problemFaced.onSetCatastrophe}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5 uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>The Field Solution</span>
                </span>
                <p className="text-slate-200 mt-1 leading-relaxed text-[11.5px]">
                  {article.problemFaced.solution}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 pt-3 border-t border-slate-800/80 bg-black/30 -mx-5 -mb-5 p-4 rounded-b-xl">
            <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider mb-1">
              Director's Rule of Thumb
            </span>
            <p className="text-xs text-amber-200/90 font-medium italic">
              "{article.problemFaced.ruleOfThumb}"
            </p>
          </div>
        </div>
      </div>

      {/* Technical Camera & Lighting Telemetry Strip */}
      <div className="mb-10 bg-[#0b0d14] border border-slate-800 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
          <SlidersHorizontal className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-semibold text-white font-display">
            Camera Package & Exposure Telemetry
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="space-y-1">
            <span className="text-slate-500 text-[11px] font-mono block">CAMERA SYSTEM</span>
            <p className="font-semibold text-white">{article.cameraSpecs.camera}</p>
          </div>
          <div className="space-y-1">
            <span className="text-slate-500 text-[11px] font-mono block">GLASS / LENS</span>
            <p className="font-semibold text-white">{article.cameraSpecs.lens}</p>
          </div>
          <div className="space-y-1">
            <span className="text-slate-500 text-[11px] font-mono block">APERTURE / T-STOP</span>
            <p className="font-semibold text-amber-300 font-mono">{article.cameraSpecs.aperture}</p>
          </div>
          <div className="space-y-1">
            <span className="text-slate-500 text-[11px] font-mono block">SENSOR ISO & SHUTTER</span>
            <p className="font-semibold text-white font-mono">
              ISO {article.cameraSpecs.iso} · {article.cameraSpecs.shutterAngle}
            </p>
          </div>
          <div className="space-y-1 sm:col-span-2">
            <span className="text-slate-500 text-[11px] font-mono block">SUPPORT & RIG</span>
            <p className="text-slate-300">{article.cameraSpecs.stabilization}</p>
          </div>
          <div className="space-y-1 sm:col-span-2">
            <span className="text-slate-500 text-[11px] font-mono block">LIGHTING SCHEME</span>
            <p className="text-slate-300">{article.cameraSpecs.lightingSetup}</p>
          </div>
        </div>
      </div>

      {/* Director's Field Log ("Not too many words tho") */}
      <div className="mb-12 bg-gradient-to-r from-slate-900/90 to-[#0b0d14] border border-slate-800 rounded-xl p-6">
        <h3 className="text-sm font-semibold text-amber-400 uppercase tracking-wider font-display mb-3">
          Director's Field Log — 3 Takeaways
        </h3>
        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
          {article.directorLog.map((log, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="font-mono text-amber-400 font-bold shrink-0 mt-0.5">
                0{index + 1}.
              </span>
              <span className="leading-relaxed">{log}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400 font-mono">CORE TAKEAWAY:</span>
          <span className="text-white font-semibold italic text-right max-w-lg">
            "{article.keyTakeaway}"
          </span>
        </div>
      </div>

      {/* Footer Navigation Between Articles */}
      <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
        <button
          onClick={() => onSelectPage(Math.max(1, article.pageNumber - 1))}
          disabled={article.pageNumber === 1}
          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-medium text-slate-300 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Article</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleBookmark}
            className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 ${
              isBookmarked
                ? 'bg-amber-400/10 border-amber-400/40 text-amber-400'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
            <span>{isBookmarked ? 'Saved to Shotlist' : 'Save Shot'}</span>
          </button>
        </div>

        <button
          onClick={() => {
            if (article.pageNumber < 10) {
              onSelectPage(article.pageNumber + 1);
            } else {
              onSelectPage(11); // Jump to Storyboard room
            }
          }}
          className="px-4 py-2 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-lg text-xs transition-colors flex items-center gap-2"
        >
          <span>{article.pageNumber === 10 ? 'Go to Storyboard Lab (P11)' : 'Next Article'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
};
