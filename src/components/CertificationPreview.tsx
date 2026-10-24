import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { certificates } from '../data/certificates';
import { EASE, SectionHeading } from './fx';

export default function CertificationPreview() {
  // Show key highlighted certificates on home page
  const previewCerts = certificates.slice(0, 6);

  return (
    <section className="relative py-16 sm:py-24">
      <SectionHeading
        kicker="Verified Credentials"
        title="CERTIFICATIONS"
        aside={
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-bone transition hover:border-crimson-2 hover:bg-crimson/10 hover:text-crimson-2"
          >
            View All 14 Certificates ↗
          </Link>
        }
      />

      <div className="gutter mt-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {previewCerts.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#09090d)] ring-1 ring-white/10 transition duration-300 hover:ring-white/25 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              {/* Certificate Image View */}
              <Link
                to="/certificates"
                className="relative aspect-[16/11] overflow-hidden bg-black/60 block"
              >
                <img
                  src={cert.file}
                  alt={cert.title}
                  loading="lazy"
                  className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
                <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-medium text-bone backdrop-blur-md">
                  View in Gallery ↗
                </span>
                <span className="absolute top-2.5 left-2.5 flex items-center gap-1 rounded-full bg-black/80 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-bone border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  {cert.verificationStatus}
                </span>
              </Link>

              {/* Certificate Metadata */}
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-crimson-2 font-semibold">
                    <span>{cert.issuer}</span>
                    <span className="text-mist text-[11px]">{cert.issueDate}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl tracking-wide text-bone leading-tight group-hover:text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-mist line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-smoke uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <Link
                    to="/certificates"
                    className="text-xs font-semibold text-crimson-2 hover:underline"
                  >
                    Open Certificate ↗
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 rounded-xl bg-crimson px-6 py-3.5 text-xs font-bold tracking-wider text-white shadow-[0_0_30px_rgba(229,19,43,0.4)] transition hover:bg-crimson/90"
          >
            EXPLORE COMPLETE CERTIFICATE GALLERY (14 VERIFIED CREDENTIALS) ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
