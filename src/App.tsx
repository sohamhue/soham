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
import { ARTICLES } from './data/articles';
import { Film, Clapperboard, AlertTriangle, Sparkles, BookOpen, Layers } from 'lucide-react';

export default function App() {
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
      // Don't intercept if user is typing in an input
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

  const handleOpenLightbox = (article: typeof ARTICLES[0]) => {
    setLightboxData({
      isOpen: true,
      imageSrc: article.imageStill,
      title: article.title,
      shotType: article.shotType,
      caption: article.stillCaption,
      cameraSpecs: article.cameraSpecs
    });
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-black">
      {/* 3-Zone Header Contract */}
      <Header
        currentPage={currentPage}
        onSelectPage={(page) => {
          setCurrentPage(page);
          setShowDirectory(false);
        }}
        savedShotsCount={savedShotIds.length}
        onOpenSavedDrawer={() => setIsShotlistOpen(true)}
        onOpenDirectory={() => setShowDirectory(!showDirectory)}
      />

      {/* 12-Page Pagination Controller Bar */}
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

      {/* Main Content Area */}
      <main className="flex-1">
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
                onOpenLightbox={() => handleOpenLightbox(currentArticle)}
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
                Director's Shot Bible & Production War Journal
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400">
            <span>10 Shot Articles</span>
            <span>·</span>
            <span>Storyboard Sequencer</span>
            <span>·</span>
            <span>12 Production Solutions</span>
            <span>·</span>
            <span>ARRI / RED Large Format</span>
          </div>

          <div className="text-xs text-slate-500">
            Navigate with <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">←</kbd> and{' '}
            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300 font-mono">→</kbd> keys across all 12 pages
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
          setCurrentPage(page);
          setShowDirectory(false);
        }}
      />
    </div>
  );
}
