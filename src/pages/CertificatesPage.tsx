import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificates, type Certificate } from '../data/certificates';
import { EASE, Magnetic, SectionHeading } from '../components/fx';

export default function CertificatesPage() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(certificates.map((c) => c.category)))];

  const filtered = activeCategory === 'All'
    ? certificates
    : certificates.filter((c) => c.category === activeCategory);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="gutter">
        <SectionHeading kicker="Official Credentials" title="CERTIFICATES" />

        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="max-w-2xl text-sm md:text-base leading-relaxed text-bone/85">
            Verified technical certifications and credentials earned through formal coursework, live development programs, and practical engineering internships.
          </p>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide transition ${
                  activeCategory === cat
                    ? 'bg-crimson text-white shadow-[0_0_20px_rgba(229,19,43,0.4)]'
                    : 'glass text-mist hover:text-bone hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cert, index) => (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: EASE }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#09090d)] ring-1 ring-white/10 transition duration-300 hover:ring-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                {/* Certificate Thumbnail Preview */}
                <div
                  className="relative aspect-[16/11] cursor-pointer overflow-hidden bg-black/50"
                  onClick={() => setSelectedCert(cert)}
                >
                  <img
                    src={cert.file}
                    alt={cert.title}
                    loading="lazy"
                    className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />

                  <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-medium text-bone backdrop-blur-md">
                    🔍 Click to preview
                  </span>

                  {/* Verification Status Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/80 px-3 py-1 backdrop-blur-md border border-white/15">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    <span className="text-[10px] font-bold tracking-wider text-bone uppercase">
                      {cert.verificationStatus}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs text-crimson-2 font-semibold">
                      <span>{cert.issuer}</span>
                      <span className="text-mist">{cert.issueDate}</span>
                    </div>

                    <h3 className="mt-2 font-display text-2xl tracking-wide text-bone leading-tight group-hover:text-white">
                      {cert.title}
                    </h3>

                    {cert.credentialId && (
                      <p className="mt-1 text-xs text-smoke font-mono">
                        {cert.credentialId}
                      </p>
                    )}

                    <p className="mt-3 text-xs leading-relaxed text-mist line-clamp-3">
                      {cert.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex items-center gap-3 pt-4 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="flex-1 rounded-lg bg-white/10 py-2.5 text-center text-xs font-bold tracking-wider text-bone transition hover:bg-white hover:text-ink"
                    >
                      VIEW FULL PREVIEW
                    </button>
                    <a
                      href={cert.file}
                      download={`${cert.title.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`}
                      className="rounded-lg border border-white/20 p-2.5 text-xs text-mist transition hover:border-bone hover:text-bone"
                      title="Download Certificate"
                      aria-label={`Download ${cert.title}`}
                    >
                      ⤓
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-2xl border border-white/10 bg-white/[0.02]">
            <p className="font-display text-3xl text-mist">No certificates found</p>
            <p className="mt-2 text-sm text-smoke">Try selecting another category above.</p>
          </div>
        )}
      </div>

      {/* Full-Screen Preview Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-[140] flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selectedCert.title}
          >
            <motion.div
              className="relative max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-2xl bg-ink-2 shadow-2xl ring-1 ring-white/15"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-ink">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl tracking-wide text-bone">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-mist">
                    {selectedCert.issuer} • {selectedCert.issueDate}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Magnetic>
                    <a
                      href={selectedCert.file}
                      download={`${selectedCert.title.replace(/[^a-zA-Z0-9]/g, '_')}.jpg`}
                      className="rounded-lg bg-bone px-3.5 py-1.5 text-xs font-bold text-ink transition hover:bg-white"
                    >
                      ⤓ Download
                    </a>
                  </Magnetic>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(null)}
                    aria-label="Close certificate preview"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20 transition"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Certificate Image View */}
              <div className="max-h-[68vh] overflow-auto bg-black/60 p-4 flex items-center justify-center">
                <img
                  src={selectedCert.file}
                  alt={selectedCert.title}
                  className="max-h-[64vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                />
              </div>

              {/* Footer info & verification label */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 bg-ink px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-bone">
                    Status: {selectedCert.verificationStatus}
                  </span>
                  {selectedCert.credentialId && (
                    <span className="text-xs text-smoke font-mono">({selectedCert.credentialId})</span>
                  )}
                </div>
                <p className="text-[11px] text-smoke max-w-md">
                  {selectedCert.verificationNote ?? 'Original credential document uploaded for MEGALA M.'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
