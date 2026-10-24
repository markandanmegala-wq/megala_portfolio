import { motion } from 'framer-motion';
import { education, profile } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function About() {
  const technicalAreas = [
    'Python',
    'SQL Basics',
    'Flutter',
    'Firebase',
    'GitHub',
    'Docker Basics',
    'Linux Basics',
    'Power BI',
  ];

  const facts = [
    { k: 'Degree', v: 'B.Tech Information Technology', s: `${education[0].school} · CGPA: 8.2` },
    { k: 'Graduation Period', v: '2023 – 2027', s: 'Undergraduate Engineering Program' },
    { k: 'Professional Role', v: 'Aspiring Software Developer', s: 'Continuous Learning & Problem Solving' },
    { k: 'Based in', v: profile.location, s: 'Tamil Nadu, India' },
  ];

  return (
    <>
      <SectionHeading kicker="Episode 01 — The Beginning" title="THE DEVELOPER" />
      <div className="gutter grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <motion.div
          className="mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.2, ease: EASE }}
        >
          <Tilt max={5} className="rounded-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_30%,#5a0b1b,#14060a_60%,#07070a)]" />
              <div className="absolute inset-0 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0px,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_28px)]" />
              <img
                src="/assets/portrait-720.webp"
                srcSet={profile.portrait.srcSet}
                sizes="(max-width: 1024px) 90vw, 40vw"
                alt={profile.portrait.alt}
                loading="lazy"
                className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-crimson-2">STARRING</p>
                  <p className="font-display text-3xl leading-none text-bone">{profile.displayName}</p>
                </div>
                <span className="rounded border border-white/30 px-1.5 text-[10px] font-bold text-bone">S01–S04</span>
              </div>
            </div>
          </Tilt>
        </motion.div>

        <div>
          <div className="space-y-4">
            {profile.aboutText.map((paragraph, index) => (
              <motion.p
                key={index}
                className={index === 0 ? "font-serif text-[clamp(1.4rem,2.8vw,2.2rem)] italic leading-[1.25] text-bone" : "text-[15px] leading-relaxed text-bone/85 sm:text-base"}
                initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: EASE }}
              >
                {index === 0 ? `“${paragraph}”` : paragraph}
              </motion.p>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold tracking-wide text-crimson-2">— {profile.fullName}</p>

          <motion.dl
            className="mt-8 grid gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
          >
            {facts.map((f) => (
              <motion.div
                key={f.k}
                className="bg-ink-2 p-5"
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
              >
                <dt className="text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">{f.k}</dt>
                <dd className="mt-2 text-base font-semibold text-bone">{f.v}</dd>
                <dd className="mt-0.5 text-xs text-mist">{f.s}</dd>
              </motion.div>
            ))}
          </motion.dl>

          <div className="mt-8">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-smoke">Documented Technical Toolset</p>
            <div className="flex flex-wrap gap-2">
              {technicalAreas.map((item) => (
                <span key={item} className="glass rounded-full px-3 py-1.5 text-xs font-medium text-bone">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
