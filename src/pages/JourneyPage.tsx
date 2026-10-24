import { motion } from 'framer-motion';
import Seasons from '../components/Seasons';
import { EASE, SectionHeading } from '../components/fx';

export default function JourneyPage() {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="gutter mb-16">
        <SectionHeading kicker="Academic & Industrial Milestones" title="EDUCATION & INTERNSHIP" />

        <p className="max-w-2xl text-sm md:text-base leading-relaxed text-bone/85 mb-12">
          Chronological educational background, academic achievements, and practical industrial internship experiences documented in Megala M&apos;s journey.
        </p>

        {/* Premium Vertical Timeline */}
        <div className="relative border-l border-white/15 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {/* Milestone 1: B.Tech IT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink ring-4 ring-crimson">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>

            <div className="rounded-2xl bg-[linear-gradient(180deg,#14141c,#0c0c11)] p-6 md:p-8 ring-1 ring-white/10 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-crimson px-3 py-1 text-[11px] font-bold tracking-wider text-white">
                  2023 – 2027 (CURRENT)
                </span>
                <span className="font-mono text-xs font-semibold text-crimson-2">
                  CGPA: 8.2 / 10
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl sm:text-3xl text-bone tracking-wide">
                B.Tech in Information Technology
              </h3>
              <p className="mt-1 text-sm font-semibold text-bone/90">
                Excel Engineering College (Autonomous), Komarapalayam
              </p>
              <p className="mt-1 text-xs text-smoke">
                Namakkal District, Tamil Nadu, India
              </p>

              <p className="mt-4 text-sm leading-relaxed text-mist">
                Pursuing comprehensive undergraduate studies in Information Technology with consistent academic performance. Developing core competencies in software development, data structures, algorithms, relational databases, cross-platform mobile apps, and artificial intelligence agents.
              </p>
            </div>
          </motion.div>

          {/* Milestone 2: QMOS Technology Internship */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink ring-4 ring-emerald-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>

            <div className="rounded-2xl bg-[linear-gradient(180deg,#14141c,#0c0c11)] p-6 md:p-8 ring-1 ring-white/10 border-l-2 border-emerald-500 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-[11px] font-bold tracking-wider text-emerald-400">
                  DECEMBER 2025 (15 DAYS)
                </span>
                <span className="font-mono text-xs font-bold text-emerald-400">
                  Grade A+ · Best Award
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl sm:text-3xl text-bone tracking-wide">
                Technical Internship — AI-Driven Embedded Systems
              </h3>
              <p className="mt-1 text-sm font-semibold text-bone/90">
                QMOS Technology
              </p>
              <p className="mt-1 text-xs text-smoke">
                Vadapalani, Chennai • Duration: 15 Days (17 Dec 2025 to 31 Dec 2025)
              </p>

              <div className="mt-4 rounded-xl bg-white/[0.02] p-4 ring-1 ring-white/5 space-y-2">
                <p className="text-xs font-semibold text-bone/90 uppercase tracking-wider">
                  Resume-Supported Hands-on Responsibilities:
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-mist leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Hands-on exposure to Arduino, NodeMCU, and IoT sensors in the Software Development &amp; Research department.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Developed basic IoT applications and sensor telemetry pipelines using the ThingSpeak cloud platform.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>Created interactive data visualizations with Power BI and collaborated closely on embedded system project integration.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Milestone 3: Techforge Full Stack Internship */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink ring-4 ring-blue-500">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
            </span>

            <div className="rounded-2xl bg-[linear-gradient(180deg,#14141c,#0c0c11)] p-6 md:p-8 ring-1 ring-white/10 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-blue-500/20 border border-blue-500/40 px-3 py-1 text-[11px] font-bold tracking-wider text-blue-400">
                  JUNE – JULY 2025 (15 DAYS)
                </span>
                <span className="text-xs text-mist">
                  Mozilla &amp; MSME Community Partner
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl sm:text-3xl text-bone tracking-wide">
                Internship in Full Stack Development
              </h3>
              <p className="mt-1 text-sm font-semibold text-bone/90">
                Techforge
              </p>
              <p className="mt-1 text-xs text-smoke">
                Completed 23.06.2025 to 07.07.2025 (15 Days)
              </p>

              <p className="mt-3 text-xs sm:text-sm text-mist leading-relaxed">
                Practical internship focusing on web fundamentals, full-stack architectural design, database connectivity, and collaborative engineering practices.
              </p>
            </div>
          </motion.div>

          {/* Milestone 4: Higher Secondary Schooling */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-ink ring-4 ring-white/40">
              <span className="h-2 w-2 rounded-full bg-mist" />
            </span>

            <div className="rounded-2xl bg-[linear-gradient(180deg,#14141c,#0c0c11)] p-6 md:p-8 ring-1 ring-white/10 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold tracking-wider text-mist">
                  PASSED OUT 2023
                </span>
                <span className="font-mono text-xs font-semibold text-bone">
                  Percentage: 71%
                </span>
              </div>

              <h3 className="mt-3 font-display text-2xl sm:text-3xl text-bone tracking-wide">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="mt-1 text-sm font-semibold text-bone/90">
                Government Girls Higher Secondary School
              </p>
              <p className="mt-1 text-xs text-smoke">
                Krishnagiri, Tamil Nadu, India
              </p>

              <p className="mt-3 text-xs sm:text-sm text-mist leading-relaxed">
                Completed secondary and higher secondary education with strong foundation in mathematics and sciences, laying the groundwork for engineering studies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cinematic Seasons Component */}
      <div className="mt-20 border-t border-white/10 pt-16">
        <Seasons />
      </div>
    </div>
  );
}
