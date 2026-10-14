/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PageNavigator } from './components/PageNavigator';
import { ArticleView } from './components/ArticleView';
import { StoryboardRoom } from './components/StoryboardRoom';
import { ProductionProblems } from './components/ProductionProblems';
import { ArticlesDirectory } from './components/ArticlesDirectory';
import { LightboxModal } from './components/LightboxModal';
import { ShotlistDrawer } from './components/ShotlistDrawer';
import { StreetArtistStoryboard } from './components/StreetArtistStoryboard';
import { ARTICLES } from './data/articles';
import { Film, Clapperboard, Layers, Sparkles } from 'lucide-react';
import { StreetArtistScene } from './data/streetArtistFilm';

export default function App() {
  const [activeView, setActiveView] = useState<'street-artist' | 'articles'>('street-artist');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showDirectory, setShowDirectory] = useState<boolean>(false);
  const [savedShotIds, setSavedShotIds] = useState<number[]>([1, 4, 7]);
  const [isShotlistOpen, setIsShotlistOpen] = useState<boolean>(false);
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    imageSrc: string;
    title: string;
    shotType: string;
    caption: string;
    cameraSpecs: any;
  } | null>(null);

  const totalPages = 12;

  // Handle keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowRight') {
        setCurrentPage((prev) => Math.min(totalPages, prev + 1));
        setShowDirectory(false);
      } else if (e.key === 'ArrowLeft') {
        setCurrentPage((prev) => Math.max(1, prev - 1));
        setShowDirectory(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages]);

  const toggleBookmark = (id: number) => {
    setSavedShotIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentArticle = ARTICLES.find((a) => a.pageNumber === currentPage);
  const savedArticles = ARTICLES.filter((a) => savedShotIds.includes(a.id));

  const handleOpenLightboxFromArticle = (article: typeof ARTICLES[0]) => {
    setLightboxData({
      isOpen: true,
      imageSrc: article.imageStill,
      title: article.title,
      shotType: article.shotType,
      caption: article.stillCaption,
      cameraSpecs: article.cameraSpecs
    });
  };

  const handleOpenLightboxFromScene = (scene: StreetArtistScene) => {
    setLightboxData({
      isOpen: true,
      imageSrc: scene.imageStill,
      title: scene.title,
      shotType: scene.shotType,
      caption: `${scene.timeOfDay} — ${scene.actionNote}`,
      cameraSpecs: {
        camera: 'ARRI Alexa Mini LF',
        lens: 'Panavision Anamorphic',
        focalLength: scene.focalLength,
        aperture: scene.aperture,
        iso: '800',
        shutterAngle: '180°',
        stabilization: scene.cameraMovement,
        lightingSetup: 'Natural ambient & on-set mobile key'
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-black">
      {/* 3-Zone Header Contract */}
      <Header
        currentPage={currentPage}
        onSelectPage={(page) => {
          setActiveView('articles');
          setCurrentPage(page);
          setShowDirectory(false);
        }}
        savedShotsCount={savedShotIds.length}
        onOpenSavedDrawer={() => setIsShotlistOpen(true)}
        onOpenDirectory={() => {
          setActiveView('articles');
          setShowDirectory(true);
        }}
        activeView={activeView}
        onSelectView={(view) => {
          setActiveView(view);
          setShowDirectory(false);
        }}
      />

      {/* Mode Sub-Banner Switcher (Quick visual toggle between Street Artist Short Film & 10 Articles) */}
      <div className="bg-[#0b0e17] border-b border-slate-800/90 py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-400">ACTIVE PROJECT:</span>
            <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-medium">
              <button
                onClick={() => {
                  setActiveView('street-artist');
                  setShowDirectory(false);
                }}
                className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                  activeView === 'street-artist'
                    ? 'bg-amber-400 text-black font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Clapperboard className="w-3.5 h-3.5" />
                <span>Street Artist Short Film (12 Key Scenes)</span>
              </button>

              <button
                onClick={() => {
                  setActiveView('articles');
                }}
                className={`px-3 py-1 rounded-md transition-all flex items-center gap-1.5 ${
                  activeView === 'articles'
                    ? 'bg-amber-400 text-black font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Cinematography Shot Bible (10 Articles + Labs)</span>
              </button>
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-400 hidden lg:flex items-center gap-3">
            <span>2.39:1 Anamorphic Stills</span>
            <span>·</span>
            <span>Concise Action Notes</span>
            <span>·</span>
            <span className="text-amber-400 font-semibold">12 Scenes Total</span>
          </div>
        </div>
      </div>

      {/* When in Articles view, show 12-page navigator */}
      {activeView === 'articles' && (
        <PageNavigator
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            setShowDirectory(false);
          }}
          onToggleDirectory={() => setShowDirectory(!showDirectory)}
          isBookmarked={currentArticle ? savedShotIds.includes(currentArticle.id) : undefined}
          onToggleBookmark={currentArticle ? () => toggleBookmark(currentArticle.id) : undefined}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'street-artist' ? (
          /* The 12-Scene Street Artist Short Film Storyboard */
          <StreetArtistStoryboard
            onOpenLightbox={handleOpenLightboxFromScene}
          />
        ) : (
          /* The 10 Articles & Master Labs view */
          <>
            {showDirectory ? (
              <ArticlesDirectory
                currentPage={currentPage}
                onSelectPage={(page) => {
                  setCurrentPage(page);
                  setShowDirectory(false);
                }}
                savedShots={savedShotIds}
                onToggleBookmark={toggleBookmark}
                onClose={() => setShowDirectory(false)}
              />
            ) : (
              <>
                {/* Pages 1 to 10: The 10 Cinematography Articles */}
                {currentPage <= 10 && currentArticle && (
                  <ArticleView
                    article={currentArticle}
                    onSelectPage={(page) => setCurrentPage(page)}
                    isBookmarked={savedShotIds.includes(currentArticle.id)}
                    onToggleBookmark={() => toggleBookmark(currentArticle.id)}
                    onOpenLightbox={() => handleOpenLightboxFromArticle(currentArticle)}
                  />
                )}

                {/* Page 11: Interactive Storyboard Lab */}
                {currentPage === 11 && (
                  <StoryboardRoom
                    onSelectPage={(page) => setCurrentPage(page)}
                  />
                )}

                {/* Page 12: Production War Room & Problems Faced */}
                {currentPage === 12 && (
                  <ProductionProblems
                    onSelectPage={(page) => setCurrentPage(page)}
                  />
                )}
              </>
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#050608] border-t border-slate-900 py-10 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Film className="w-3.5 h-3.5" />
            </div>
            <div>
              <span className="text-sm font-bold tracking-tight text-white font-display">
                CINEFRAME
              </span>
              <span className="text-xs text-slate-500 block">
                Short Film Storyboards & Cinematography Production Journal
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span>12 Street Artist Scenes</span>
            <span>·</span>
            <span>10 Shot Articles</span>
            <span>·</span>
            <span>On-Set Solutions</span>
            <span>·</span>
            <span>ARRI / Panavision Glass</span>
          </div>

          <div className="text-xs text-slate-500">
            Use <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">←</kbd> and{' '}
            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">→</kbd> keys to cycle scenes
          </div>
        </div>
      </footer>

      {/* Lightbox for Fullscreen Screenshot Inspection */}
      {lightboxData && (
        <LightboxModal
          isOpen={lightboxData.isOpen}
          onClose={() => setLightboxData(null)}
          imageSrc={lightboxData.imageSrc}
          title={lightboxData.title}
          shotType={lightboxData.shotType}
          caption={lightboxData.caption}
          cameraSpecs={lightboxData.cameraSpecs}
        />
      )}

      {/* Director's Saved Shotlist Drawer */}
      <ShotlistDrawer
        isOpen={isShotlistOpen}
        onClose={() => setIsShotlistOpen(false)}
        savedArticles={savedArticles}
        onRemoveBookmark={toggleBookmark}
        onSelectArticle={(page) => {
          setActiveView('articles');
          setCurrentPage(page);
          setShowDirectory(false);
        }}
      />
    </div>
  );
}
