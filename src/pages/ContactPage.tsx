import { useState } from 'react';
import { contactConfig, getMailtoUrl, getTelUrl } from '../data/contact';
import { profile } from '../data/portfolio';
import { Magnetic, SectionHeading } from '../components/fx';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  // Form state for generating pre-filled email
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(contactConfig.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      } else {
        throw new Error('Clipboard API unavailable');
      }
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 3000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validation
    if (!name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!senderEmail.trim() || !senderEmail.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!message.trim()) {
      setFormError('Please enter a brief message.');
      return;
    }

    // Build mailto URI and launch configured email client
    const mailSubject = subject.trim() || `Portfolio Inquiry from ${name.trim()}`;
    const mailBody = `Hi Megala,\n\n${message.trim()}\n\nBest regards,\n${name.trim()} (${senderEmail.trim()})`;

    const mailUrl = getMailtoUrl(mailSubject, mailBody);
    window.location.href = mailUrl;
  };

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="gutter">
        <SectionHeading kicker="Direct Channels" title="GET IN TOUCH" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Direct Info & Social Cards */}
          <div>
            <p className="font-serif text-2xl italic leading-relaxed text-bone sm:text-3xl">
              &ldquo;Building meaningful digital solutions through continuous learning, problem-solving, and software development.&rdquo;
            </p>
            <p className="mt-4 text-base leading-relaxed text-mist">
              Whether you have an internship opportunity, full-time junior developer role, academic collaboration, or technical project inquiry, I would be glad to connect.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">
              {/* Email Card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-crimson-2">
                    Primary Email
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="rounded border border-white/20 bg-white/5 px-2.5 py-1 text-xs font-semibold text-mist transition hover:border-bone hover:text-bone"
                  >
                    {copied ? '✓ Copied!' : copyError ? 'Copy failed' : 'Copy Email'}
                  </button>
                </div>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="mt-2 block font-sans text-lg font-medium text-bone hover:text-crimson-2 transition"
                >
                  {contactConfig.email}
                </a>
                <p className="mt-1 text-xs text-smoke">Direct mailto link opening your configured email app.</p>
              </div>

              {/* Phone Card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-crimson-2">
                  Direct Telephone
                </span>
                <a
                  href={getTelUrl()}
                  className="mt-2 block font-sans text-lg font-medium text-bone hover:text-crimson-2 transition"
                >
                  {contactConfig.phoneDisplay}
                </a>
                <p className="mt-1 text-xs text-smoke">Click to initiate call on mobile device.</p>
              </div>

              {/* LinkedIn Card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-crimson-2">
                  LinkedIn Profile
                </span>
                <a
                  href={contactConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-between font-sans text-base font-medium text-bone hover:text-crimson-2 transition"
                >
                  <span>linkedin.com/in/megala-megu-73a7742b8</span>
                  <span className="text-mist">↗</span>
                </a>
                <p className="mt-1 text-xs text-smoke">Connect for professional networking and career opportunities.</p>
              </div>

              {/* GitHub Card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-crimson-2">
                  GitHub Profile &amp; Repositories
                </span>
                <a
                  href={contactConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center justify-between font-sans text-base font-medium text-bone hover:text-crimson-2 transition"
                >
                  <span>github.com/markandanmegala-wq</span>
                  <span className="text-mist">↗</span>
                </a>
                <p className="mt-1 text-xs text-smoke">Explore open source code repositories including AI Recruiter Agent and ResearchX AI.</p>
              </div>

              {/* Location Card */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-crimson-2">
                  Location &amp; Institution
                </span>
                <p className="mt-2 font-sans text-base font-medium text-bone">
                  {contactConfig.location}
                </p>
                <p className="mt-1 text-xs text-smoke">
                  {profile.degree} · {profile.college} ({profile.graduationYear}) • CGPA: {profile.cgpa}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-fill Message Form */}
          <div>
            <div className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#14141c,#0c0c11)] p-6 sm:p-8">
              <h3 className="font-display text-2xl tracking-wide text-bone">
                Prepare a Direct Email
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-mist">
                Fill out the details below to launch your default mail app with the message pre-filled directly to markandanmegala@gmail.com.
              </p>

              <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                {formError && (
                  <div className="rounded-lg bg-crimson/20 border border-crimson/50 px-4 py-2 text-xs text-bone">
                    {formError}
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-mist">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Recruiter / Collaborator Name"
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke outline-none transition focus:border-crimson-2 focus:ring-1 focus:ring-crimson-2"
                  />
                </div>

                <div>
                  <label htmlFor="senderEmail" className="block text-xs font-semibold uppercase tracking-wider text-mist">
                    Your Email
                  </label>
                  <input
                    id="senderEmail"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke outline-none transition focus:border-crimson-2 focus:ring-1 focus:ring-crimson-2"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-mist">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Software Developer Opportunity / Project Discussion"
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke outline-none transition focus:border-crimson-2 focus:ring-1 focus:ring-crimson-2"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-mist">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Megala, I came across your portfolio and would like to discuss..."
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-bone placeholder-smoke outline-none transition focus:border-crimson-2 focus:ring-1 focus:ring-crimson-2"
                  />
                </div>

                <div className="pt-2">
                  <Magnetic className="w-full">
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-crimson py-3 text-center text-xs font-bold tracking-[0.14em] text-white shadow-[0_0_30px_rgba(229,19,43,0.4)] transition hover:bg-crimson-2"
                    >
                      OPEN IN EMAIL CLIENT ✉
                    </button>
                  </Magnetic>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
