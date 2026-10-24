import { useState } from 'react';
import { motion } from 'framer-motion';
import { achievements, education, internships, profile, projects, skillCategories } from '../data/portfolio';
import { EASE, Magnetic, SectionHeading } from './fx';

/** THE FULL STORY — a designed resume preview plus view / download actions. */
export default function ResumeSection({ onView }: { onView: () => void }) {
  return (
    <>
      <SectionHeading kicker="Official Credentials" title="The Full Story" />
      <div className="gutter grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 1.1, ease: EASE }}
          style={{ transformPerspective: 1600 }}
        >
          <CollapsibleSheet />
        </motion.div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-serif text-3xl italic leading-tight text-bone">Every milestone, on one page.</p>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            Education, technical toolset, documented projects, and practical internship credentials from Megala M&apos;s official resume.
          </p>
          <div className="mt-6 flex flex-col gap-3">
            <Magnetic className="w-full">
              <button
                type="button"
                data-cursor="view"
                onClick={onView}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-bone px-6 text-[15px] font-bold text-ink transition hover:bg-white shadow-[0_0_25px_rgba(255,255,255,0.2)]"
              >
                ▶ View Resume
              </button>
            </Magnetic>
            <Magnetic className="w-full">
              <a
                href={profile.resumePdf}
                download="Megala_M_Resume.pdf"
                data-cursor="link"
                className="glass flex min-h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-[15px] font-semibold text-bone transition hover:bg-white/15"
              >
                ⤓ Download Resume PDF
              </a>
            </Magnetic>
          </div>
          <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-xl bg-white/10 text-center">
            {[
              { v: profile.cgpa, k: 'CGPA' },
              { v: String(projects.length), k: 'Projects' },
              { v: profile.graduationYear, k: 'Period' },
            ].map((s) => (
              <div key={s.k} className="bg-ink-2 px-2 py-4">
                <dd className="font-display text-2xl leading-none text-bone">{s.v}</dd>
                <dt className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-smoke">{s.k}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
}

/** On phones the sheet starts as a teaser so the page keeps its pace; desktop shows it in full. */
function CollapsibleSheet() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <div className={`overflow-hidden transition-[max-height] duration-700 ease-[var(--ease-cine)] md:max-h-none ${open ? 'max-h-[4000px]' : 'max-h-[560px]'}`}>
        <ResumeSheet />
      </div>
      {!open && (
        <div className="absolute inset-x-0 bottom-0 flex h-48 items-end justify-center rounded-b-2xl bg-gradient-to-t from-ink via-ink/85 to-transparent pb-4 md:hidden">
          <button type="button" onClick={() => setOpen(true)} className="glass min-h-11 rounded-full px-5 text-sm font-semibold text-bone">
            Read the full story ↓
          </button>
        </div>
      )}
    </div>
  );
}

function H({ children }: { children: string }) {
  return <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2 first:mt-0">{children}</h4>;
}

export function ResumeSheet() {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#121218,#0c0c11)] p-6 ring-1 ring-white/10 sm:p-10">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent" />
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">STARRING</p>
          <h3 className="mt-1 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone">{profile.fullName}</h3>
          <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-crimson-2">{profile.title.toUpperCase()}</p>
        </div>
        <div className="text-xs leading-relaxed text-mist sm:text-right">
          <a href={`mailto:${profile.email}`} className="block font-medium hover:text-bone">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone}`} className="block hover:text-bone">
            {profile.phoneDisplay}
          </a>
          <div className="mt-1">
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-bone">
              LinkedIn ↗
            </a>
            {' · '}
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-bone">
              GitHub ↗
            </a>
          </div>
          <p className="mt-1 text-smoke">{profile.location}</p>
        </div>
      </header>

      <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-xs leading-relaxed text-bone/85">
        <span className="font-bold uppercase tracking-wider text-crimson-2">Professional Summary: </span>
        {profile.objective}
      </div>

      <div className="grid gap-x-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <H>Education</H>
          {education.map((e) => (
            <div key={`${e.school}-${e.degree}`} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {e.school}
                </p>
                <p className="text-xs text-smoke">{e.period}</p>
              </div>
              <p className="text-xs text-mist">
                {e.degree} · <span className="font-semibold text-bone/90">{e.score}</span>
              </p>
            </div>
          ))}

          <H>Practical Internships</H>
          {internships.map((intern) => (
            <div key={intern.company} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">{intern.role}</p>
                <p className="text-xs text-smoke">{intern.period}</p>
              </div>
              <p className="text-[11px] font-medium text-crimson-2">{intern.company} · {intern.place}</p>
              {intern.award && (
                <p className="text-[11px] font-semibold text-emerald-400 mt-0.5">{intern.award}</p>
              )}
              <ul className="mt-1.5 space-y-1">
                {intern.points.map((pt, i) => (
                  <li key={i} className="text-xs text-mist flex items-start gap-1.5">
                    <span className="text-crimson-2 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <H>Projects</H>
          {projects.map((p) => (
            <div key={p.id} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">{p.title}</p>
                <p className="text-xs text-smoke">{p.year}</p>
              </div>
              <p className="text-[11px] font-medium text-crimson-2">{p.genre}</p>
              <p className="mt-1 text-xs text-bone/85">{p.logline}</p>
              <p className="mt-1 text-[11px] text-mist">{p.stack.join(' · ')}</p>
            </div>
          ))}
        </div>

        <div>
          <H>Technical Skills</H>
          <div className="space-y-3">
            {skillCategories.map((c) => (
              <p key={c.id} className="text-xs leading-relaxed text-mist">
                <span className="font-semibold text-bone">{c.title}: </span>
                {c.skills.map((s) => s.name).join(', ')}
              </p>
            ))}
          </div>

          <H>Key Milestones &amp; Certifications</H>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a.id} className="text-xs leading-relaxed text-mist">
                <span className="font-semibold text-bone">
                  {a.title} — {a.org}:
                </span>{' '}
                {a.detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
