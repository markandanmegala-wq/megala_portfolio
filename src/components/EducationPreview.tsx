import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { education, internships } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function EducationPreview() {
  return (
    <section className="relative py-16 sm:py-24">
      <SectionHeading
        kicker="Academic & Industrial Experience"
        title="EDUCATION & INTERNSHIP"
        aside={
          <Link
            to="/journey"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-bone transition hover:border-crimson-2 hover:bg-crimson/10 hover:text-crimson-2"
          >
            Explore Full Timeline ↗
          </Link>
        }
      />

      <div className="gutter mt-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl bg-[linear-gradient(180deg,#14141c,#0a0a0f)] p-6 ring-1 ring-white/10 flex flex-col justify-between"
          >
            <div>
              <span className="rounded-full bg-crimson/20 border border-crimson/40 px-3 py-1 text-[10px] font-bold tracking-wider text-crimson-2 uppercase">
                Undergraduate Degree
              </span>
              <h3 className="mt-4 font-display text-2xl text-bone tracking-wide">
                B.Tech Information Technology
              </h3>
              <p className="mt-1 text-sm font-semibold text-bone/90">
                {education[0].school}
              </p>
              <p className="mt-1 text-xs text-smoke">
                {education[0].place} • {education[0].period}
              </p>
              <div className="mt-4 rounded-xl bg-white/[0.03] p-3 border border-white/5">
                <span className="text-[11px] font-semibold text-mist uppercase tracking-wider block">
                  Academic Performance
                </span>
                <span className="font-display text-2xl text-bone">{education[0].score}</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-mist leading-relaxed">
              {education[0].detail}
            </p>
          </motion.div>

          {/* Internship Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="rounded-2xl bg-[linear-gradient(180deg,#14141c,#0a0a0f)] p-6 ring-1 ring-white/10 border-t-2 border-emerald-500/60 flex flex-col justify-between"
          >
            <div>
              <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-[10px] font-bold tracking-wider text-emerald-400 uppercase">
                Practical Technical Internship
              </span>
              <h3 className="mt-4 font-display text-2xl text-bone tracking-wide">
                {internships[0].role}
              </h3>
              <p className="mt-1 text-sm font-semibold text-bone/90">
                {internships[0].company}
              </p>
              <p className="mt-1 text-xs text-smoke">
                {internships[0].place} • {internships[0].period}
              </p>
              <div className="mt-4 rounded-xl bg-emerald-500/10 p-3 border border-emerald-500/20">
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                  Recognition &amp; Honors
                </span>
                <span className="text-xs font-semibold text-bone">{internships[0].award}</span>
              </div>
            </div>
            <ul className="mt-4 space-y-1.5 text-xs text-mist">
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Hands-on with Arduino, NodeMCU, and IoT sensors.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Built IoT applications with ThingSpeak and Power BI visualizations.</span>
              </li>
            </ul>
          </motion.div>

          {/* Schooling Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="rounded-2xl bg-[linear-gradient(180deg,#14141c,#0a0a0f)] p-6 ring-1 ring-white/10 flex flex-col justify-between"
          >
            <div>
              <span className="rounded-full bg-blue-500/20 border border-blue-500/40 px-3 py-1 text-[10px] font-bold tracking-wider text-blue-400 uppercase">
                Higher Secondary
              </span>
              <h3 className="mt-4 font-display text-2xl text-bone tracking-wide">
                Higher Secondary Certificate
              </h3>
              <p className="mt-1 text-sm font-semibold text-bone/90">
                {education[1].school}
              </p>
              <p className="mt-1 text-xs text-smoke">
                {education[1].place} • {education[1].period}
              </p>
              <div className="mt-4 rounded-xl bg-white/[0.03] p-3 border border-white/5">
                <span className="text-[11px] font-semibold text-mist uppercase tracking-wider block">
                  Passed Out Score
                </span>
                <span className="font-display text-2xl text-bone">{education[1].score}</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-mist leading-relaxed">
              {education[1].detail}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
