import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, type Project } from '../data/portfolio';
import { contactConfig } from '../data/contact';
import { EASE, SectionHeading } from '../components/fx';
import ProjectModal from '../components/ProjectModal';
import { ProjectArt } from '../components/Poster';

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Mobile Development', 'Artificial Intelligence'];

  const filtered = projects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'Mobile Development') return p.category.includes('Mobile');
    if (filter === 'Artificial Intelligence') return p.category.includes('Artificial Intelligence');
    return true;
  });

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="gutter">
        <SectionHeading kicker="Engineering Showcase" title="PROJECTS" />

        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="max-w-2xl text-sm md:text-base leading-relaxed text-bone/85">
            Practical digital solutions and software projects engineered by Megala M across Flutter mobile engineering, Firebase real-time data layers, and autonomous AI systems.
          </p>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide transition ${
                  filter === cat
                    ? 'bg-crimson text-white shadow-[0_0_20px_rgba(229,19,43,0.4)]'
                    : 'glass text-mist hover:text-bone hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {filtered.map((proj, i) => (
            <motion.article
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#14141c,#0a0a0f)] ring-1 ring-white/10 transition duration-300 hover:ring-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.85)]"
            >
              {/* Poster / Artwork Header */}
              <Link
                to={proj.route}
                className="relative aspect-[16/10] block overflow-hidden bg-black/60 cursor-pointer"
              >
                <div className="h-full w-full transition duration-700 group-hover:scale-105">
                  <ProjectArt project={proj} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-70" />
                <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2.5 py-1 text-[11px] font-medium text-bone backdrop-blur-md">
                  View Dedicated Page ↗
                </span>
                <span className="absolute top-3 left-3 rounded-full bg-crimson px-2.5 py-0.5 text-[10px] font-bold tracking-wider text-white">
                  {proj.year}
                </span>
              </Link>

              {/* Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson-2">
                    {proj.genre}
                  </p>
                  <Link to={proj.route}>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl tracking-wide text-bone transition group-hover:text-white">
                      {proj.title}
                    </h3>
                  </Link>
                  <p className="mt-3 text-sm leading-relaxed text-mist line-clamp-3">
                    {proj.logline}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/5 pt-5">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {proj.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 px-2.5 py-1 text-[11px] font-medium text-bone/85 ring-1 ring-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      to={proj.route}
                      className="rounded-xl bg-crimson px-4 py-2 text-xs font-semibold tracking-wide text-white transition hover:bg-crimson/90 shadow-[0_0_20px_rgba(229,19,43,0.3)]"
                    >
                      View Details
                    </Link>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(proj)}
                      className="rounded-xl bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-bone ring-1 ring-white/10 transition hover:bg-white/10"
                    >
                      Quick Preview
                    </button>

                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-mist hover:text-white transition ml-auto"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub Footnote */}
        <div className="mt-14 rounded-2xl bg-white/[0.02] p-8 text-center ring-1 ring-white/10">
          <h4 className="font-display text-2xl text-bone">Explore Megala's Code on GitHub</h4>
          <p className="mt-2 text-sm text-mist max-w-lg mx-auto">
            Check out active public repositories and project architectures on GitHub.
          </p>
          <a
            href={contactConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-xs font-semibold text-bone ring-1 ring-white/20 transition hover:bg-white/20 hover:text-white"
          >
            Visit github.com/markandanmegala-wq ↗
          </a>
        </div>
      </div>

      {/* Quick Preview Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onSwitch={(p) => setSelectedProject(p)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
