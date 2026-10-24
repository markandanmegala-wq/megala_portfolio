import type { ReactNode } from 'react';
import type { Palette, Project } from '../data/portfolio';

/**
 * Generated "key art" for thumbnails — layered gradients, light falloff and a motif.
 * No stock imagery: every card is art-directed from its palette.
 */
export function PosterBackdrop({ palette, children, className = '' }: { palette: Palette; children?: ReactNode; className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 85% 10%, ${palette.via} 0%, transparent 60%),
          radial-gradient(90% 80% at 0% 100%, ${palette.from} 0%, transparent 70%),
          linear-gradient(160deg, ${palette.from} 0%, ${palette.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute -right-1/4 -top-1/3 h-[140%] w-[70%] rotate-[18deg] opacity-40 blur-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${palette.accent}55, transparent)` }}
      />
      <div aria-hidden className="absolute inset-0 opacity-[0.18] [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_1px,transparent_4px)]" />
      {children}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
    </div>
  );
}

/** Motif illustrations for each Original, built from the project's own architecture. */
export function ProjectArt({ project, className = '' }: { project: Project; className?: string }) {
  const a = project.palette.accent;
  return (
    <PosterBackdrop palette={project.palette} className={className}>
      <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <radialGradient id={`g-${project.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={a} stopOpacity="0.55" />
            <stop offset="100%" stopColor={a} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="290" cy="120" r="130" fill={`url(#g-${project.id})`} />
        
        {/* Motif: Autonomous Guard / AI Agent (Agentic AI) */}
        {project.motif === 'shield' && (
          <g transform="translate(232 40)" fill="none" stroke={a} strokeOpacity="0.85">
            <path d="M58 0 L116 22 V78 C116 120 90 146 58 160 C26 146 0 120 0 78 V22 Z" strokeWidth="2" />
            <path d="M58 16 L102 33 V78 C102 111 82 132 58 144 C34 132 14 111 14 78 V33 Z" strokeWidth="1" strokeOpacity="0.4" />
            {[0, 1, 2, 3, 4].map((i) => (
              <line key={i} x1="30" x2={i % 2 ? 72 : 86} y1={56 + i * 14} y2={56 + i * 14} strokeWidth="3" strokeLinecap="round" strokeOpacity={0.35 + i * 0.1} />
            ))}
            <path d="M40 124 l12 12 l26 -28" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="58" cy="40" r="12" strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )}

        {/* Motif: Campus & Network (CampusLink) */}
        {project.motif === 'campus' && (
          <g fill="none" stroke={a} strokeOpacity="0.85">
            {/* Campus event network & mobile badge */}
            <rect x="210" y="45" width="130" height="180" rx="16" strokeWidth="2" />
            <circle cx="275" cy="205" r="8" strokeWidth="1.5" />
            <rect x="228" y="65" width="94" height="60" rx="8" strokeWidth="1.5" strokeOpacity="0.6" />
            {/* QR Code representation */}
            <rect x="238" y="75" width="18" height="18" strokeWidth="1.5" />
            <rect x="284" y="75" width="18" height="18" strokeWidth="1.5" />
            <rect x="238" y="99" width="18" height="18" strokeWidth="1.5" />
            <rect x="264" y="85" width="12" height="12" fill={a} fillOpacity="0.4" strokeWidth="1" />
            <path d="M228 145 h94 M228 160 h65 M228 175 h80" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
            {/* Event beacon ripples */}
            <circle cx="340" cy="50" r="16" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.6" />
            <circle cx="340" cy="50" r="28" strokeWidth="0.8" strokeDasharray="3 5" strokeOpacity="0.3" />
            <circle cx="340" cy="50" r="4" fill={a} stroke="none" />
          </g>
        )}

        {/* Motif: Tourism Compass & 360 (Kumari360) */}
        {project.motif === 'compass' && (
          <g fill="none" stroke={a} strokeOpacity="0.85" transform="translate(40 0)">
            {/* Outer 360 degree ring */}
            <circle cx="240" cy="120" r="75" strokeWidth="2" strokeDasharray="6 4" />
            <circle cx="240" cy="120" r="60" strokeWidth="1" strokeOpacity="0.5" />
            <circle cx="240" cy="120" r="40" strokeWidth="1" strokeOpacity="0.3" />
            {/* Compass Star Pointer */}
            <polygon points="240,65 248,112 295,120 248,128 240,175 232,128 185,120 232,112" strokeWidth="1.5" fill={a} fillOpacity="0.25" />
            <circle cx="240" cy="120" r="5" fill={a} stroke="none" />
            {/* Degree ticks */}
            <line x1="240" y1="40" x2="240" y2="50" strokeWidth="2.5" />
            <line x1="240" y1="190" x2="240" y2="200" strokeWidth="2" />
            <line x1="160" y1="120" x2="170" y2="120" strokeWidth="2" />
            <line x1="310" y1="120" x2="320" y2="120" strokeWidth="2" />
          </g>
        )}

        {/* Motif: Educational Analytics / AI (AI-Driven Student Intelligence Ecosystem) */}
        {project.motif === 'analytics' && (
          <g fill="none" stroke={a} strokeOpacity="0.85">
            {/* Analytics Dashboard Grid */}
            <rect x="200" y="45" width="150" height="100" rx="10" strokeWidth="2" />
            {/* Chart bars */}
            <rect x="220" y="105" width="16" height="26" fill={a} fillOpacity="0.4" strokeWidth="1" />
            <rect x="244" y="90" width="16" height="41" fill={a} fillOpacity="0.6" strokeWidth="1" />
            <rect x="268" y="75" width="16" height="56" fill={a} fillOpacity="0.75" strokeWidth="1" />
            <rect x="292" y="60" width="16" height="71" fill={a} fillOpacity="0.9" strokeWidth="1" />
            <rect x="316" y="80" width="16" height="51" fill={a} fillOpacity="0.55" strokeWidth="1" />
            {/* Trend line through bars */}
            <path d="M228 100 L252 85 L276 70 L300 55 L324 75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* Intelligence nodes */}
            <g transform="translate(180 180)">
              <circle cx="35" cy="15" r="8" strokeWidth="1.5" />
              <circle cx="85" cy="0" r="10" strokeWidth="2" fill={a} fillOpacity="0.3" />
              <circle cx="135" cy="20" r="8" strokeWidth="1.5" />
              <circle cx="85" cy="40" r="7" strokeWidth="1.5" />
              <line x1="43" y1="15" x2="75" y2="4" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="95" y1="4" x2="127" y2="17" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="42" y1="18" x2="78" y2="38" strokeWidth="1.5" strokeOpacity="0.6" />
              <line x1="92" y1="38" x2="128" y2="23" strokeWidth="1.5" strokeOpacity="0.6" />
            </g>
          </g>
        )}
      </svg>
    </PosterBackdrop>
  );
}

/** Primary brand logo: iconic crimson monogram with MEGALA typography. */
export function BrandLogo({ className = '', showName = true }: { className?: string; showName?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 28 32" className="h-[1.15em] w-auto drop-shadow-[0_0_12px_rgba(229,19,43,0.6)]" aria-hidden>
        <path
          d="M5 26V7L14 18L23 7V26"
          fill="none"
          stroke="#e50914"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showName && (
        <span className="font-display text-[1.1em] tracking-[0.14em] text-bone font-normal">
          MEGALA
        </span>
      )}
    </span>
  );
}


