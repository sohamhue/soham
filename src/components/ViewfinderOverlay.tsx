import React, { useState } from 'react';
import { Maximize2, Grid3X3, Eye, Sliders, Crosshair, Film } from 'lucide-react';
import { CameraSpecs } from '../types';

interface ViewfinderOverlayProps {
  imageSrc: string;
  altText: string;
  shotType: string;
  cameraSpecs: CameraSpecs;
  onOpenLightbox: () => void;
}

type AspectRatioMode = '2.39' | '1.85' | '16:9' | '4:3';

export const ViewfinderOverlay: React.FC<ViewfinderOverlayProps> = ({
  imageSrc,
  altText,
  shotType,
  cameraSpecs,
  onOpenLightbox
}) => {
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [showHUD, setShowHUD] = useState<boolean>(true);
  const [aspectRatio, setAspectRatio] = useState<AspectRatioMode>('2.39');
  const [imageError, setImageError] = useState<boolean>(false);

  // Aspect ratio mask styling
  const getMaskStyle = () => {
    switch (aspectRatio) {
      case '2.39':
        return { paddingTop: '41.84%' }; // 2.39:1 anamorphic ratio
      case '1.85':
        return { paddingTop: '54.05%' }; // 1.85:1 European flat
      case '4:3':
        return { paddingTop: '75%' }; // 4:3 Academy
      case '16:9':
      default:
        return { paddingTop: '56.25%' }; // 16:9 standard
    }
  };

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-slate-800 bg-[#06070a] shadow-2xl group select-none">
      {/* Top Floating Control Bar */}
      <div className="absolute top-3 left-3 right-3 z-30 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-1.5 p-1 bg-black/75 backdrop-blur-md rounded-lg border border-slate-700/60 text-xs">
          <span className="px-2 py-0.5 font-mono text-[11px] text-amber-400 font-semibold tracking-wider">
            REC ● 24 FPS
          </span>
          <span className="text-slate-600">|</span>

          {/* Aspect Ratio Selector */}
          {(['2.39', '1.85', '16:9', '4:3'] as AspectRatioMode[]).map((ratio) => (
            <button
              key={ratio}
              onClick={() => setAspectRatio(ratio)}
              className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                aspectRatio === ratio
                  ? 'bg-amber-400 text-black font-bold'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {ratio === '2.39' ? '2.39:1' : ratio === '1.85' ? '1.85:1' : ratio}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1 p-1 bg-black/75 backdrop-blur-md rounded-lg border border-slate-700/60">
          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`p-1.5 rounded text-xs transition-colors ${
              showGrid ? 'bg-amber-400/20 text-amber-300' : 'text-slate-400 hover:text-white'
            }`}
            title="Toggle Rule of Thirds Guide"
          >
            <Grid3X3 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => setShowHUD(!showHUD)}
            className={`p-1.5 rounded text-xs transition-colors ${
              showHUD ? 'bg-amber-400/20 text-amber-300' : 'text-slate-400 hover:text-white'
            }`}
            title="Toggle Viewfinder Telemetry HUD"
          >
            <Crosshair className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenLightbox}
            className="p-1.5 rounded text-xs text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Inspect Screenshot in Fullscreen Lightbox"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Image Viewport with Letterbox Mask */}
      <div className="relative w-full aspect-[16/9] flex items-center justify-center bg-black overflow-hidden">
        {!imageError ? (
          <img
            src={imageSrc}
            alt={altText}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-black p-6 text-center">
            <Film className="w-12 h-12 text-amber-400 mb-3 opacity-60" />
            <h4 className="text-base font-semibold text-white mb-1">{shotType}</h4>
            <p className="text-xs text-slate-400 max-w-sm">
              Cinematic Still Framing: {cameraSpecs.focalLength} • {cameraSpecs.aperture} • {cameraSpecs.lens}
            </p>
          </div>
        )}

        {/* Dynamic Aspect Ratio Letterbox Mattes */}
        {aspectRatio === '2.39' && (
          <>
            <div className="absolute top-0 left-0 right-0 h-[12%] bg-black/90 pointer-events-none transition-all duration-300 border-b border-white/10" />
            <div className="absolute bottom-0 left-0 right-0 h-[12%] bg-black/90 pointer-events-none transition-all duration-300 border-t border-white/10" />
          </>
        )}

        {aspectRatio === '4:3' && (
          <>
            <div className="absolute top-0 bottom-0 left-0 w-[12.5%] bg-black/90 pointer-events-none transition-all duration-300 border-r border-white/10" />
            <div className="absolute top-0 bottom-0 right-0 w-[12.5%] bg-black/90 pointer-events-none transition-all duration-300 border-l border-white/10" />
          </>
        )}

        {/* Viewfinder Rule of Thirds Lines */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full grid grid-cols-3 grid-rows-3">
              <div className="border-r border-b border-white/15" />
              <div className="border-r border-b border-white/15" />
              <div className="border-b border-white/15" />
              <div className="border-r border-b border-white/15" />
              <div className="border-r border-b border-white/15 flex items-center justify-center">
                <div className="w-6 h-6 border border-amber-400/50 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                </div>
              </div>
              <div className="border-b border-white/15" />
              <div className="border-r border-white/15" />
              <div className="border-r border-white/15" />
              <div />
            </div>

            {/* Corner Framing Brackets */}
            <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-amber-400/70" />
            <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-amber-400/70" />
            <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-amber-400/70" />
            <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-amber-400/70" />
          </div>
        )}

        {/* Bottom Sensor Telemetry HUD */}
        {showHUD && (
          <div className="absolute bottom-3 left-3 right-3 z-30 pointer-events-none flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-200">
            <div className="px-2.5 py-1 bg-black/80 backdrop-blur-md rounded border border-slate-700/60 flex items-center gap-3">
              <span className="text-amber-400 font-bold">{cameraSpecs.focalLength}</span>
              <span className="text-slate-500">·</span>
              <span>{cameraSpecs.aperture}</span>
              <span className="text-slate-500">·</span>
              <span>ISO {cameraSpecs.iso}</span>
              <span className="text-slate-500">·</span>
              <span>{cameraSpecs.shutterAngle}</span>
            </div>

            <div className="px-2.5 py-1 bg-black/80 backdrop-blur-md rounded border border-slate-700/60 hidden sm:flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>SENSOR 8K RAW</span>
              <span className="text-slate-500">·</span>
              <span className="text-amber-300">{cameraSpecs.camera}</span>
            </div>
          </div>
        )}
      </div>

      {/* Caption strip below shot */}
      <div className="px-4 py-2.5 bg-[#0a0c13] border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2 truncate">
          <span className="font-semibold text-slate-200">{shotType}</span>
          <span>—</span>
          <span className="truncate">{cameraSpecs.lens}</span>
        </div>
        <button
          onClick={onOpenLightbox}
          className="text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap text-xs flex items-center gap-1 shrink-0"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Full Shot SS</span>
        </button>
      </div>
    </div>
  );
};
