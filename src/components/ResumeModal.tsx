import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { useMedia } from '../hooks/useMedia';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

/** Full-screen resume viewer. On desktop it provides the PDF viewer with screenplay toggle; on mobile it displays the screenplay sheet. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  const small = useMedia('(max-width: 767px)');
  const [viewMode, setViewMode] = useState<'pdf' | 'screenplay'>('pdf');

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label="Resume Modal"
    >
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <div className="flex items-center gap-4">
          <p className="truncate font-display text-2xl tracking-wide text-bone">The Full Story</p>
          {!small && (
            <div className="flex rounded-lg border border-white/15 bg-ink p-0.5 text-xs">
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`rounded-md px-3 py-1 font-semibold transition ${
                  viewMode === 'pdf' ? 'bg-bone text-ink' : 'text-mist hover:text-bone'
                }`}
              >
                Original PDF
              </button>
              <button
                type="button"
                onClick={() => setViewMode('screenplay')}
                className={`rounded-md px-3 py-1 font-semibold transition ${
                  viewMode === 'screenplay' ? 'bg-bone text-ink' : 'text-mist hover:text-bone'
                }`}
              >
                Screenplay View
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={profile.resumePdf}
            download="Megala_M_Resume.pdf"
            className="rounded-md bg-bone px-4 py-2 text-xs font-bold text-ink transition hover:bg-white"
          >
            ⤓ Download PDF
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close resume"
            data-cursor="close"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20"
          >
            ✕
          </button>
        </div>
      </div>
      <motion.div
        className="gutter flex-1 pb-6"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        {small || viewMode === 'screenplay' ? (
          <div data-lenis-prevent className="mx-auto h-full max-w-5xl overflow-y-auto rounded-xl">
            <ResumeSheet />
            {small && (
              <a
                href={profile.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="glass mt-4 flex min-h-12 items-center justify-center rounded-md text-sm font-semibold text-bone"
              >
                Open original PDF document ↗
              </a>
            )}
          </div>
        ) : (
          <div className="mx-auto h-full max-w-5xl overflow-hidden rounded-xl bg-white shadow-2xl">
            <iframe
              title={`${profile.fullName} Resume (PDF)`}
              src={`${profile.resumePdf}#view=FitH`}
              className="h-full w-full rounded-xl bg-white"
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
