import React, { useEffect, useState } from 'react';
import { X, Grid3X3, Camera, Sliders, Info } from 'lucide-react';
import { CameraSpecs } from '../types';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  shotType: string;
  cameraSpecs: CameraSpecs;
  caption: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  shotType,
  cameraSpecs,
  caption
}) => {
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(true);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fadeIn select-none">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between z-20 pb-4 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block">
            CINEMA MASTER STILL INSPECTOR
          </span>
          <h2 className="text-lg font-bold text-white font-display">
            {shotType} — {title}
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowGrid(!showGrid)}
            className={`px-3 py-1.5 rounded text-xs font-mono border transition-colors flex items-center gap-1.5 ${
              showGrid
                ? 'bg-amber-400 text-black border-amber-400'
                : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
            }`}
          >
            <Grid3X3 className="w-3.5 h-3.5" />
            <span>Thirds Grid</span>
          </button>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className={`px-3 py-1.5 rounded text-xs font-mono border transition-colors flex items-center gap-1.5 ${
              showDetails
                ? 'bg-amber-400 text-black border-amber-400'
                : 'bg-white/5 border-white/20 text-white hover:bg-white/10'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>EXIF Specs</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Close Lightbox (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Center Image */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        <div className="relative max-h-full max-w-full aspect-[16/9] flex items-center justify-center">
          <img
            src={imageSrc}
            alt={title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto object-contain rounded shadow-2xl border border-white/10"
          />

          {/* Grid overlay */}
          {showGrid && (
            <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 border border-amber-400/30">
              <div className="border-r border-b border-amber-400/30" />
              <div className="border-r border-b border-amber-400/30" />
              <div className="border-b border-amber-400/30" />
              <div className="border-r border-b border-amber-400/30" />
              <div className="border-r border-b border-amber-400/30 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-amber-400/60 flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                </div>
              </div>
              <div className="border-b border-amber-400/30" />
              <div className="border-r border-amber-400/30" />
              <div className="border-r border-amber-400/30" />
              <div />
            </div>
          )}
        </div>
      </div>

      {/* Bottom Telemetry Strip */}
      {showDetails && (
        <div className="z-20 pt-4 border-t border-white/10 bg-black/80 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-slate-300 max-w-xl">
            <span className="text-amber-400 font-semibold mr-2">STILL CONTEXT:</span>
            <span>{caption}</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <div>
              <span className="text-slate-500 block text-[10px]">CAMERA</span>
              <span className="text-white font-semibold">{cameraSpecs.camera}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">OPTICS</span>
              <span className="text-white font-semibold">{cameraSpecs.focalLength} · {cameraSpecs.aperture}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">SENSOR</span>
              <span className="text-amber-300 font-semibold">ISO {cameraSpecs.iso}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px]">SHUTTER</span>
              <span className="text-white font-semibold">{cameraSpecs.shutterAngle}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
