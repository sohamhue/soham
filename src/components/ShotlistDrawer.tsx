import React from 'react';
import { X, Trash2, Camera, ExternalLink, Bookmark, Check } from 'lucide-react';
import { Article } from '../types';

interface ShotlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onRemoveBookmark: (id: number) => void;
  onSelectArticle: (pageNumber: number) => void;
}

export const ShotlistDrawer: React.FC<ShotlistDrawerProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onRemoveBookmark,
  onSelectArticle
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0b0d14] border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-400" />
                <h3 className="text-base font-bold text-white font-display">
                  Director's Shotlist
                </h3>
                <span className="text-xs font-mono text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded">
                  {savedArticles.length} Shots
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* List */}
            <div className="mt-4 space-y-3 overflow-y-auto max-h-[70vh] pr-1 custom-scrollbar">
              {savedArticles.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <Camera className="w-8 h-8 text-slate-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-slate-300">Your shotlist is empty.</p>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Click "Save Shot" on any article to build your custom production bible.
                  </p>
                </div>
              ) : (
                savedArticles.map((art) => (
                  <div
                    key={art.id}
                    className="p-3 bg-slate-900/70 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors flex items-center justify-between gap-3 group"
                  >
                    <div
                      onClick={() => {
                        onSelectArticle(art.pageNumber);
                        onClose();
                      }}
                      className="cursor-pointer flex-1 min-w-0"
                    >
                      <div className="flex items-center gap-2 text-[10px] font-mono text-amber-400 mb-0.5">
                        <span>PAGE {String(art.pageNumber).padStart(2, '0')}</span>
                        <span>·</span>
                        <span className="text-slate-400">{art.shotType}</span>
                      </div>
                      <h4 className="text-xs font-semibold text-white truncate group-hover:text-amber-300 transition-colors">
                        {art.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {art.cameraSpecs.focalLength} · {art.cameraSpecs.aperture}
                      </p>
                    </div>

                    <button
                      onClick={() => onRemoveBookmark(art.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors rounded"
                      title="Remove from shotlist"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-slate-800">
            <button
              onClick={() => {
                alert(`Exporting ${savedArticles.length} shots to director production log format...`);
              }}
              disabled={savedArticles.length === 0}
              className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 disabled:opacity-40 text-black font-semibold rounded-lg text-xs transition-colors"
            >
              Copy Shotlist to Clipboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
