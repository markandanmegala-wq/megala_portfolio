import { Link } from 'react-router-dom';
import About from '../components/About';
import { education, internships, projects, skillCategories } from '../data/portfolio';
import { contactConfig } from '../data/contact';
import { SectionHeading } from '../components/fx';

export default function AboutPage() {
  return (
    <div className="pt-24 pb-24 min-h-screen">
      {/* Primary About Component */}
      <About />

      {/* Structured Sections per Section 11 Requirements */}
      <div className="gutter mt-20 space-y-20 border-t border-white/10 pt-16">
        {/* Education & Internship Summary */}
        <section>
          <SectionHeading kicker="Background" title="EDUCATION & PRACTICAL LEARNING" />
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="rounded-2xl bg-[linear-gradient(180deg,#14141c,#0a0a0f)] p-6 ring-1 ring-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-crimson-2">
                Degree (2023 – 2027)
              </span>
              <h3 className="mt-2 font-display text-2xl text-bone">
                B.Tech Information Technology
              </h3>
              <p className="mt-1 text-sm text-bone/90">{education[0].school}</p>
              <p className="mt-1 text-xs text-smoke">{education[0].place} • CGPA: {education[0].score}</p>
              <p className="mt-3 text-xs leading-relaxed text-mist">
                Focusing on core software engineering principles, database architecture, and emerging digital systems.
              </p>
            </div>

            <div className="rounded-2xl bg-[linear-gradient(180deg,#14141c,#0a0a0f)] p-6 ring-1 ring-white/10 border-l-2 border-emerald-500">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                Internship Experience (15 Days)
              </span>
              <h3 className="mt-2 font-display text-2xl text-bone">
                {internships[0].role}
              </h3>
              <p className="mt-1 text-sm text-bone/90">{internships[0].company} • {internships[0].place}</p>
              <p className="mt-1 text-xs text-smoke">{internships[0].period} • {internships[0].award}</p>
              <p className="mt-3 text-xs leading-relaxed text-mist">
                Hands-on exposure to Arduino, NodeMCU, IoT sensors, ThingSpeak telemetry, and Power BI visualization dashboards.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills Summary */}
        <section>
          <SectionHeading kicker="Capabilities" title="TECHNICAL TOOLSET" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {skillCategories.map((cat) => (
              <div
                key={cat.id}
                className="rounded-2xl bg-[linear-gradient(180deg,#14141c,#0a0a0f)] p-6 ring-1 ring-white/10"
              >
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-crimson-2">
                  {cat.title}
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className="rounded-lg bg-white/5 px-3 py-1.5 text-xs font-medium text-bone ring-1 ring-white/10"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Highlights */}
        <section>
          <SectionHeading kicker="Engineering" title="FEATURED WORK HIGHLIGHTS" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {projects.map((p) => (
              <Link
                key={p.id}
                to={p.route}
                className="group flex flex-col justify-between rounded-2xl bg-[linear-gradient(180deg,#14141c,#0a0a0f)] p-6 ring-1 ring-white/10 transition duration-300 hover:ring-white/30 hover:-translate-y-1"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-crimson-2">
                    {p.year} • {p.genre.split('•')[0]}
                  </span>
                  <h4 className="mt-2 font-display text-2xl text-bone group-hover:text-white transition">
                    {p.shortTitle}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-mist line-clamp-3">
                    {p.logline}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-crimson-2">
                  <span>View Details</span>
                  <span>→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="rounded-3xl bg-[radial-gradient(80%_60%_at_50%_0%,#2a0a10,#0d0b0f)] p-8 sm:p-12 text-center ring-1 ring-crimson/30">
          <h3 className="font-display text-3xl sm:text-4xl text-bone tracking-wide">
            CONNECT WITH MEGALA M
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-crimson-2">
            Aspiring Software Developer
          </p>
          <p className="mt-4 max-w-xl mx-auto text-sm leading-relaxed text-bone/85">
            Looking forward to discussing software engineering internship roles, placement opportunities, or academic technical collaborations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${contactConfig.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-crimson px-6 py-3 text-xs font-bold tracking-wider text-white shadow-[0_0_25px_rgba(229,19,43,0.4)] transition hover:bg-crimson/90"
            >
              <span>✉</span> SEND EMAIL
            </a>
            <a
              href={contactConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-xs font-semibold tracking-wider text-bone ring-1 ring-white/20 transition hover:bg-white/20 hover:text-white"
            >
              LINKEDIN ↗
            </a>
            <a
              href={contactConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-xs font-semibold tracking-wider text-bone ring-1 ring-white/20 transition hover:bg-white/20 hover:text-white"
            >
              GITHUB ↗
            </a>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-xs font-semibold tracking-wider text-bone ring-1 ring-white/20 transition hover:bg-white/20 hover:text-white"
            >
              VIEW RESUME ↗
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
