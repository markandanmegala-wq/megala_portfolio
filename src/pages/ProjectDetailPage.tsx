import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { ProjectArt } from '../components/Poster';
import { contactConfig } from '../data/contact';

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    if (project) {
      document.title = `${project.shortTitle} | MEGALA M Portfolio`;
    }
    return () => {
      document.title = 'MEGALA M | Aspiring Software Developer';
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Find previous and next projects
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="gutter">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-mist/75">
          <Link to="/" className="hover:text-bone transition">
            Home
          </Link>
          <span className="text-mist/40">/</span>
          <Link to="/projects" className="hover:text-bone transition">
            Projects
          </Link>
          <span className="text-mist/40">/</span>
          <span className="text-bone font-medium">{project.shortTitle}</span>
        </nav>

        {/* Hero Banner with Custom Motif Artwork */}
        <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(180deg,#14141c,#08080c)] ring-1 ring-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.9)]">
          <div className="relative aspect-[21/9] min-h-[260px] md:min-h-[380px] w-full overflow-hidden bg-black/60">
            <ProjectArt project={project} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-black/40 to-transparent" />
            
            {/* Badges */}
            <div className="absolute top-6 left-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-crimson px-3 py-1 text-xs font-bold tracking-wider text-white shadow-lg">
                {project.year}
              </span>
              <span className="glass rounded-full px-3 py-1 text-xs font-medium text-bone backdrop-blur-md">
                {project.category}
              </span>
            </div>

            {/* Quick action buttons on banner */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-2">
                  {project.genre}
                </p>
                <h1 className="mt-1 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-bone tracking-wide">
                  {project.title}
                </h1>
              </div>

              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-xs font-semibold tracking-wide text-bone backdrop-blur-md ring-1 ring-white/20 transition hover:bg-white/20 hover:text-white"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub Repository
                  </a>
                )}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-crimson px-4 py-2.5 text-xs font-semibold tracking-wide text-white shadow-[0_0_20px_rgba(229,19,43,0.4)] transition hover:bg-crimson/90"
                >
                  Contact Megala
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics / Highlights Row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {project.metrics.map((m, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/[0.03] p-4 ring-1 ring-white/10 backdrop-blur-sm"
            >
              <div className="font-display text-2xl text-bone tracking-wide">{m.value}</div>
              <div className="mt-1 text-xs text-mist">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Detailed Two-Column Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content Area (2 Cols) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Overview / Logline */}
            <section className="rounded-2xl bg-white/[0.02] p-6 sm:p-8 ring-1 ring-white/10">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-2 mb-3">
                Project Overview
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-bone/90">
                {project.logline}
              </p>
            </section>

            {/* Problem Statement & Proposed Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <section className="rounded-2xl bg-white/[0.02] p-6 ring-1 ring-white/10 border-l-2 border-red-500/50">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-red-400 mb-2">
                  Problem Statement
                </h3>
                <p className="text-sm leading-relaxed text-mist">
                  {project.problemStatement}
                </p>
              </section>

              <section className="rounded-2xl bg-white/[0.02] p-6 ring-1 ring-white/10 border-l-2 border-emerald-500/50">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-2">
                  Proposed Solution
                </h3>
                <p className="text-sm leading-relaxed text-mist">
                  {project.solution}
                </p>
              </section>
            </div>

            {/* Documented Features */}
            <section className="rounded-2xl bg-white/[0.02] p-6 sm:p-8 ring-1 ring-white/10">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-2 mb-6">
                Key Documented Functionality
              </h2>
              <ul className="grid grid-cols-1 gap-4">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3.5 rounded-xl bg-white/[0.02] p-4 ring-1 ring-white/5"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-crimson/20 text-xs font-bold text-crimson-2">
                      {idx + 1}
                    </span>
                    <span className="text-sm text-bone/90 leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Project Workflow / Architecture Steps */}
            <section className="rounded-2xl bg-white/[0.02] p-6 sm:p-8 ring-1 ring-white/10">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-2 mb-6">
                System Workflow &amp; Execution
              </h2>
              <ol className="relative border-l border-white/10 pl-6 space-y-6">
                {project.workflow.map((step, idx) => (
                  <li key={idx} className="relative">
                    <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-ink ring-2 ring-crimson">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    </span>
                    <p className="text-sm leading-relaxed text-bone/85">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          {/* Sidebar Info Area (1 Col) */}
          <div className="space-y-6">
            {/* Tech Stack Card */}
            <div className="rounded-2xl bg-white/[0.02] p-6 ring-1 ring-white/10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-2 mb-4">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-bone ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Implementation & Engineering Notes */}
            <div className="rounded-2xl bg-white/[0.02] p-6 ring-1 ring-white/10">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-2 mb-4">
                Engineering Highlights
              </h3>
              <ul className="space-y-3 text-xs leading-relaxed text-mist">
                {project.build.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-crimson-2 font-bold">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status & Verification Box */}
            <div className="rounded-2xl bg-white/[0.02] p-6 ring-1 ring-white/10 space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-2">
                Status &amp; Verification
              </h3>
              {project.testingStatus && (
                <div>
                  <span className="text-[11px] font-semibold text-mist/75 uppercase tracking-wider block mb-1">
                    Testing Status
                  </span>
                  <p className="text-xs text-bone/85 leading-relaxed">{project.testingStatus}</p>
                </div>
              )}
              {project.deploymentStatus && (
                <div>
                  <span className="text-[11px] font-semibold text-mist/75 uppercase tracking-wider block mb-1">
                    Deployment / Project Type
                  </span>
                  <p className="text-xs text-bone/85 leading-relaxed">{project.deploymentStatus}</p>
                </div>
              )}
              {project.github ? (
                <div>
                  <span className="text-[11px] font-semibold text-mist/75 uppercase tracking-wider block mb-1">
                    Source Code
                  </span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-crimson-2 hover:underline break-all"
                  >
                    {project.github}
                  </a>
                </div>
              ) : (
                <div className="rounded-xl bg-white/[0.02] p-3 text-xs text-mist/80 ring-1 ring-white/5">
                  Academic project repository managed internally.
                </div>
              )}
            </div>

            {/* Megala M Identity Card */}
            <div className="rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent p-6 ring-1 ring-white/10 text-center">
              <img
                src="/assets/portrait-420.webp"
                alt="Megala M"
                className="mx-auto h-20 w-20 rounded-full object-cover ring-2 ring-crimson/50"
              />
              <h4 className="mt-3 font-display text-xl text-bone">MEGALA M</h4>
              <p className="text-xs text-crimson-2 font-medium">Aspiring Software Developer</p>
              <p className="mt-2 text-xs text-mist">
                Excel Engineering College, Komarapalayam • B.Tech IT
              </p>
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href={contactConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/5 p-2 text-mist hover:text-white transition"
                  aria-label="Megala LinkedIn"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href={contactConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-white/5 p-2 text-mist hover:text-white transition"
                  aria-label="Megala GitHub"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="rounded-lg bg-white/5 p-2 text-mist hover:text-white transition"
                  aria-label="Email Megala"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Pagination Footer */}
        <div className="mt-16 border-t border-white/10 pt-8 flex items-center justify-between">
          <Link
            to={prevProject.route}
            className="group flex items-center gap-3 text-mist hover:text-white transition"
          >
            <span className="text-xl group-hover:-translate-x-1 transition">←</span>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-mist/60">Previous Project</div>
              <div className="font-display text-base text-bone group-hover:text-crimson-2 transition">
                {prevProject.shortTitle}
              </div>
            </div>
          </Link>

          <Link
            to="/projects"
            className="rounded-full bg-white/5 px-4 py-2 text-xs font-semibold text-mist hover:text-white hover:bg-white/10 transition"
          >
            All Projects
          </Link>

          <Link
            to={nextProject.route}
            className="group flex items-center gap-3 text-right text-mist hover:text-white transition"
          >
            <div>
              <div className="text-[10px] uppercase tracking-wider text-mist/60">Next Project</div>
              <div className="font-display text-base text-bone group-hover:text-crimson-2 transition">
                {nextProject.shortTitle}
              </div>
            </div>
            <span className="text-xl group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
