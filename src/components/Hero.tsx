import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { profile, projects, type ProfileId } from '../data/portfolio';
import { contactConfig } from '../data/contact';
import { useFinePointer } from '../hooks/useMedia';
import { EASE, Magnetic, Particles } from './fx';
import { BrandLogo } from './Poster';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.25 } } };
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: EASE } },
};

export default function Hero({
  onPlay,
  onResume,
  profileId: _profileId,
}: {
  onPlay: () => void;
  onResume: () => void;
  profileId: ProfileId;
}) {
  const ref = useRef<HTMLElement>(null);
  const fine = useFinePointer();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const blackout = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  // pointer parallax (desktop)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 18 });
  const py = useSpring(my, { stiffness: 60, damping: 18 });
  const imgRotY = useTransform(px, [-1, 1], [-4, 4]);
  const imgRotX = useTransform(py, [-1, 1], [3, -3]);
  const imgShiftX = useTransform(px, [-1, 1], [-10, 10]);
  const chipX = useTransform(px, [-1, 1], [18, -18]);
  const chipY = useTransform(py, [-1, 1], [12, -12]);
  const glowX = useTransform(px, [-1, 1], ['-6%', '6%']);

  const meta = [
    'B.Tech IT · ' + profile.graduationYear,
    profile.college,
    `${projects.length} Featured Projects`,
    'CGPA ' + profile.cgpa,
  ];

  const floating = [
    { text: 'CGPA ' + profile.cgpa, sub: 'B.Tech IT (2023–2027)', pos: 'left-[2%] top-[30%]', depth: 1 },
    { text: 'Excel Engg College', sub: 'Autonomous • Namakkal', pos: 'right-[0%] top-[18%]', depth: -1 },
    { text: 'Python · Flutter · Firebase', sub: 'Technical Toolset', pos: 'right-[4%] bottom-[24%]', depth: 0.6 },
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      onPointerMove={(e) => {
        if (!fine) return;
        mx.set((e.clientX / window.innerWidth) * 2 - 1);
        my.set((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      {/* atmosphere */}
      <motion.div aria-hidden className="absolute inset-0" style={{ x: glowX }}>
        <div className="absolute right-[-10%] top-[-10%] h-[90vh] w-[80vw] rounded-full bg-[radial-gradient(closest-side,rgba(229,19,43,0.38),rgba(229,19,43,0.08)_55%,transparent)] blur-2xl lg:right-[-4%] lg:w-[60vw]" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[70vh] w-[60vw] rounded-full bg-[radial-gradient(closest-side,rgba(90,20,120,0.25),transparent)] blur-2xl" />
      </motion.div>
      <Particles className="z-[1]" />
      <div aria-hidden className="absolute inset-0 z-[1] overflow-hidden">
        <span className="light-streak left-[40%] top-[22%] w-[50vw]" style={{ animationDelay: '1.2s' }} />
        <span className="light-streak left-[30%] top-[64%] w-[40vw]" style={{ animationDelay: '3.6s' }} />
        <span className="light-streak left-[55%] top-[44%] w-[30vw]" style={{ animationDelay: '5.2s' }} />
      </div>

      {/* portrait */}
      <motion.div
        className="absolute inset-x-0 top-12 z-[2] flex h-[62svh] items-end justify-center sm:h-[68svh] lg:bottom-0 lg:left-auto lg:right-[3vw] lg:top-16 lg:h-auto lg:w-[54vw] xl:right-[5vw] xl:w-[48vw]"
        style={{ y: imgY, scale: imgScale, opacity: fade }}
      >
        <motion.div
          className="relative h-full w-full lg:h-[88vh]"
          style={{ rotateY: imgRotY, rotateX: imgRotX, x: imgShiftX, transformPerspective: 1200 }}
          initial={{ clipPath: 'inset(100% -30% -10% -30%)', opacity: 0 }}
          animate={{ clipPath: 'inset(-30% -30% -10% -30%)', opacity: 1 }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.1 }}
        >
          {/* rim light ring */}
          <div aria-hidden className="absolute bottom-[10%] left-1/2 h-[76%] w-[76%] -translate-x-1/2 rounded-full border border-crimson-2/20 shadow-[0_0_120px_rgba(229,19,43,0.35),inset_0_0_80px_rgba(229,19,43,0.18)]" />

          {!imgError ? (
            <img
              src={profile.portrait.src}
              srcSet={profile.portrait.srcSet}
              sizes="(max-width: 1024px) 100vw, 54vw"
              alt={profile.portrait.alt}
              onError={() => setImgError(true)}
              className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)] [mask-image:linear-gradient(to_bottom,black_84%,transparent_100%)]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-t from-ink via-ink/80 to-transparent">
              <span className="font-display text-4xl text-bone/60">MEGALA M</span>
            </div>
          )}

          {/* crimson rim light on the image edge */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_30%,rgba(255,61,90,0.16),transparent_70%)] mix-blend-screen" />

          {/* floating UI chips */}
          {floating.map((f, i) => (
            <FloatChip key={f.text} {...f} index={i} mx={chipX} my={chipY} />
          ))}
        </motion.div>
      </motion.div>

      {/* readability gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[50svh] z-[3] h-[36svh] bg-gradient-to-b from-transparent via-ink/80 to-ink lg:hidden" />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[3] hidden bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(7,7,10,0.65)_36%,transparent_62%)] lg:block" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-48 bg-gradient-to-t from-ink to-transparent" />

      {/* copy */}
      <motion.div
        className="gutter relative z-[4] flex min-h-[100svh] flex-col justify-end pb-16 pt-[54svh] sm:pb-20 lg:max-w-[58vw] lg:justify-center lg:pb-0 lg:pt-24"
        style={{ y: textY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-3 text-lg">
          <BrandLogo />
        </motion.div>

        {/* MEGALA M on single line on desktop screens */}
        <motion.h1
          variants={item}
          className="font-display leading-[0.85] tracking-[0.02em] text-bone lg:whitespace-nowrap"
          style={{ fontSize: 'clamp(2.6rem, 6.8vw, 7.8rem)' }}
        >
          <span className="shimmer-text">MEGALA&nbsp;M</span>
        </motion.h1>

        <motion.p variants={item} className="mt-2 font-sans text-xs font-bold tracking-[0.38em] text-crimson-2 uppercase sm:text-sm">
          {profile.role}
        </motion.p>

        <motion.div variants={item} className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] font-medium text-mist">
          <span className="rounded border border-white/25 px-1.5 py-px text-[10px] font-bold tracking-wider text-bone">B.TECH IT</span>
          {meta.map((m, i) => (
            <span key={m} className="flex items-center gap-3">
              {i > 0 && <span className="h-1 w-1 rounded-full bg-smoke" />}
              {m}
            </span>
          ))}
        </motion.div>

        <motion.p variants={item} className="mt-4 max-w-xl text-[15px] leading-relaxed text-bone/90 sm:text-base font-normal">
          {profile.intro}
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic>
            <button
              type="button"
              onClick={() => navigate('/projects')}
              className="flex min-h-12 items-center gap-2.5 rounded-xl bg-crimson px-5 py-3 text-[14px] font-bold tracking-wide text-white shadow-[0_0_24px_rgba(229,19,43,0.45)] transition hover:bg-crimson/90 sm:px-6"
            >
              <span className="text-base leading-none">＋</span> EXPLORE PROJECTS
            </button>
          </Magnetic>

          <Magnetic>
            <button
              type="button"
              onClick={onResume}
              className="glass flex min-h-12 items-center gap-2.5 rounded-xl px-5 py-3 text-[14px] font-semibold text-bone transition hover:bg-white/15 sm:px-6"
            >
              <span className="text-base leading-none">📄</span> VIEW RESUME
            </button>
          </Magnetic>

          <Magnetic>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="flex min-h-12 items-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-[14px] font-semibold text-bone transition hover:border-crimson-2 hover:bg-white/10 sm:px-6"
            >
              <span>✉</span> CONTACT ME
            </button>
          </Magnetic>

          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onPlay}
              className="glass flex min-h-12 items-center gap-2 rounded-xl px-4 py-3 text-[13px] font-medium text-mist transition hover:text-white hover:bg-white/10"
              title="Play Cinematic Intro"
            >
              <span>▶</span> PLAY INTRO
            </button>
          </Magnetic>

          <button
            type="button"
            onClick={() => navigate('/about')}
            aria-label="More info about Megala M"
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 text-lg text-bone transition hover:border-bone hover:bg-white/10"
          >
            ⓘ
          </button>
        </motion.div>

        {/* Secondary Social Links: GitHub, LinkedIn, Email */}
        <motion.div variants={item} className="mt-8 flex items-center gap-4 border-t border-white/5 pt-5">
          <span className="text-xs uppercase tracking-wider text-mist/60 font-semibold">CONNECT:</span>
          
          <a
            href={contactConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-mist transition hover:bg-white/10 hover:text-white"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>

          <a
            href={contactConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-mist transition hover:bg-white/10 hover:text-white"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>

          <a
            href={`mailto:${contactConfig.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-mist transition hover:bg-white/10 hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </motion.div>
      </motion.div>

      <motion.div aria-hidden className="pointer-events-none absolute inset-0 z-[5] bg-ink" style={{ opacity: blackout }} />
    </section>
  );
}

type MV = ReturnType<typeof useTransform<number, number>>;

function FloatChip({ text, sub, pos, depth, index, mx, my }: { text: string; sub: string; pos: string; depth: number; index: number; mx: MV; my: MV }) {
  const x = useTransform(mx, (n: number) => n * depth);
  const y = useTransform(my, (n: number) => n * depth);
  return (
    <motion.div
      className={`glass absolute hidden rounded-xl px-4 py-2.5 md:block ${pos}`}
      style={{ x, y }}
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.9, delay: 1.2 + index * 0.18, ease: EASE }}
    >
      <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}>
        <p className="text-sm font-semibold text-bone">{text}</p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-mist">{sub}</p>
      </motion.div>
    </motion.div>
  );
}
