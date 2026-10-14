import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Clapperboard, 
  Clock, 
  Volume2, 
  Camera, 
  Compass, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Film,
  Grid3X3,
  Crosshair,
  Maximize2
} from 'lucide-react';
import { STREET_ARTIST_SCENES, StreetArtistScene } from '../data/streetArtistFilm';

interface StreetArtistStoryboardProps {
  onOpenLightbox: (scene: StreetArtistScene) => void;
}

export const StreetArtistStoryboard: React.FC<StreetArtistStoryboardProps> = ({
  onOpenLightbox
}) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [aspectRatio, setAspectRatio] = useState<'2.39' | '16:9'>('2.39');

  const currentScene = STREET_ARTIST_SCENES[currentSceneIndex];

  // Auto-play animatic playback through all 12 scenes
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      const durationMs = currentScene.durationSec * 1000;
      timer = setTimeout(() => {
        setCurrentSceneIndex((prev) => (prev + 1) % STREET_ARTIST_SCENES.length);
      }, durationMs);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentSceneIndex, currentScene]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fadeIn">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-2">
            <span className="text-amber-400 font-semibold">SHORT FILM STORYBOARD</span>
            <span>·</span>
            <span>12 KEY SCENES</span>
            <span>·</span>
            <span>"CANVAS OF CONCRETE: A DAY IN THE LIFE OF A STREET ARTIST"</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-display tracking-tight">
            A Day in the Life of a Street Artist
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-3xl leading-relaxed">
            12 key scenes tracking 24 hours of clandestine creation. Follow the narrative arc through dawn prep, blank wall confrontation, rush-hour tension, siren scares, and the final magic-hour reveal.
          </p>
        </div>

        {/* Playback Controls */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors ${
              isPlaying
                ? 'bg-rose-500 text-white hover:bg-rose-600 shadow-md'
                : 'bg-amber-400 text-black hover:bg-amber-300 shadow-md'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Pause Animatic' : 'Play 12-Scene Animatic'}</span>
          </button>

          <button
            onClick={() => {
              setIsPlaying(false);
              setCurrentSceneIndex(0);
            }}
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Reset to Scene 1"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Scene Display Viewport */}
      <div className="bg-[#0b0d14] border border-slate-800 rounded-2xl p-6 shadow-2xl mb-8">
        {/* Top Scene Tracker Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/80 mb-6 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/30 text-amber-400 font-bold">
              SCENE {String(currentScene.sceneNumber).padStart(2, '0')} OF 12
            </span>
            <span className="text-slate-400 flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentScene.timeOfDay}</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">{currentScene.shotType}</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-400">{currentScene.focalLength}</span>
          </div>
        </div>

        {/* 2-Column Split: Visual Frame with Viewfinder & Storyboard Cue Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Visual Still & Framing ("wo shots ke ss daa dena") */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[16/9] bg-black rounded-xl overflow-hidden border border-slate-800 shadow-lg group select-none">
              <img
                src={currentScene.imageStill}
                alt={currentScene.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Aspect Ratio Mattes */}
              {aspectRatio === '2.39' && (
                <>
                  <div className="absolute top-0 left-0 right-0 h-[12%] bg-black/95 pointer-events-none border-b border-white/10" />
                  <div className="absolute bottom-0 left-0 right-0 h-[12%] bg-black/95 pointer-events-none border-t border-white/10" />
                </>
              )}

              {/* Viewfinder Rule of Thirds Lines */}
              {showGrid && (
                <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 border border-white/10">
                  <div className="border-r border-b border-white/15" />
                  <div className="border-r border-b border-white/15" />
                  <div className="border-b border-white/15" />
                  <div className="border-r border-b border-white/15" />
                  <div className="border-r border-b border-white/15 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full border border-amber-400/50 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    </div>
                  </div>
                  <div className="border-b border-white/15" />
                  <div className="border-r border-b border-white/15" />
                  <div className="border-r border-b border-white/15" />
                  <div />
                </div>
              )}

              {/* Top Viewfinder Controls */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 pointer-events-auto">
                <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-400 font-bold border border-slate-700">
                  {currentScene.shotType}
                </span>

                <div className="flex items-center gap-1 bg-black/80 backdrop-blur-md p-1 rounded-lg border border-slate-700">
                  <button
                    onClick={() => setShowGrid(!showGrid)}
                    className={`p-1 rounded text-xs transition-colors ${
                      showGrid ? 'bg-amber-400 text-black' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Toggle Grid"
                  >
                    <Grid3X3 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setAspectRatio(aspectRatio === '2.39' ? '16:9' : '2.39')}
                    className="px-1.5 py-0.5 text-[10px] font-mono text-slate-300 hover:text-white"
                  >
                    {aspectRatio === '2.39' ? '2.39:1' : '16:9'}
                  </button>
                  <button
                    onClick={() => onOpenLightbox(currentScene)}
                    className="p-1 rounded text-xs text-slate-400 hover:text-white"
                    title="Fullscreen Still"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Bottom Telemetry HUD */}
              <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none flex items-center justify-between text-[11px] font-mono text-slate-200">
                <div className="px-2.5 py-1 bg-black/80 backdrop-blur-md rounded border border-slate-700/60 flex items-center gap-2">
                  <span className="text-amber-400 font-bold">{currentScene.focalLength}</span>
                  <span>·</span>
                  <span>{currentScene.aperture}</span>
                  <span>·</span>
                  <span>{currentScene.durationSec}s</span>
                </div>
              </div>
            </div>

            {/* Composition Secret below frame */}
            <div className="mt-3 p-3 bg-slate-900/60 border border-slate-800 rounded-lg text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
              <Compass className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300 font-medium">Framing Logic: </strong>
                <span>{currentScene.compositionTip}</span>
              </div>
            </div>
          </div>

          {/* Right: Concise Action Notes, Audio Cues & On-Set Problem */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block mb-1">
                SCENE NARRATIVE BEAT
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display leading-tight">
                {currentScene.title}
              </h2>
            </div>

            {/* Brief Action Notes */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1.5 font-semibold">
                Brief Action Note
              </span>
              <p className="text-sm text-slate-200 leading-relaxed font-sans font-medium">
                {currentScene.actionNote}
              </p>
            </div>

            {/* Camera Movement */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3.5 text-xs">
              <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                Camera Staging & Rig Movement
              </span>
              <p className="text-amber-300/90 font-mono text-xs">
                {currentScene.cameraMovement}
              </p>
            </div>

            {/* Audio Cue */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-3.5 text-xs flex items-start gap-2.5">
              <Volume2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase block mb-1">
                  Audio & Sound Design Cue
                </span>
                <p className="text-slate-300 italic text-xs leading-relaxed">
                  {currentScene.audioCue}
                </p>
              </div>
            </div>

            {/* On-Set Problem & Field Solution */}
            <div className="bg-[#0f111a] border border-amber-500/20 rounded-xl p-4 text-xs space-y-2">
              <div className="flex items-center gap-1.5 text-rose-400 font-semibold font-mono text-[11px]">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>On-Set Hurdle: {currentScene.problemFaced.issue}</span>
              </div>
              <div className="flex items-start gap-1.5 text-emerald-300 text-[11.5px] leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Field Fix:</strong> {currentScene.problemFaced.fieldFix}</span>
              </div>
            </div>

            {/* Step Navigation */}
            <div className="pt-2 flex items-center justify-between border-t border-slate-800">
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentSceneIndex((prev) => (prev > 0 ? prev - 1 : STREET_ARTIST_SCENES.length - 1));
                }}
                className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg text-xs flex items-center gap-1.5 transition-colors border border-slate-800"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev Scene</span>
              </button>

              <span className="text-xs font-mono text-slate-400">
                Scene {currentSceneIndex + 1} of 12
              </span>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentSceneIndex((prev) => (prev + 1) % STREET_ARTIST_SCENES.length);
                }}
                className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-black font-semibold rounded-lg text-xs flex items-center gap-1.5 transition-colors"
              >
                <span>Next Scene</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 12-Scene Timeline Filmstrip Grid */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-display mb-3 flex items-center justify-between">
          <span>Complete 12-Scene Storyboard Filmstrip</span>
          <span className="text-xs font-mono text-slate-500 font-normal">Click any scene to inspect</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {STREET_ARTIST_SCENES.map((scene, idx) => {
            const isSelected = idx === currentSceneIndex;
            return (
              <button
                key={scene.sceneNumber}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentSceneIndex(idx);
                }}
                className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-500/15 border-amber-400 shadow-lg ring-1 ring-amber-400/50'
                    : 'bg-[#0b0d14] border-slate-800 hover:border-slate-700 text-slate-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className={isSelected ? 'text-amber-400 font-bold' : 'text-slate-500'}>
                      SCENE 0{scene.sceneNumber}
                    </span>
                    <span className="text-slate-500">{scene.timeOfDay}</span>
                  </div>

                  <h4 className={`text-xs font-semibold leading-snug truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {scene.title}
                  </h4>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-400 truncate">
                  {scene.shotType.split('(')[0].trim()}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
