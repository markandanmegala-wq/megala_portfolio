import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { viewerProfiles, type ProfileId } from '../data/portfolio';
import { BrandLogo } from './Poster';
import { ProfileAvatar } from './ProfileSelector';
import { EASE } from './fx';

export interface NavRoute {
  path: string;
  label: string;
}

export const NAV_ROUTES: NavRoute[] = [
  { path: '/', label: 'Home' },
  { path: '/projects', label: 'Projects' },
  { path: '/skills', label: 'Skills' },
  { path: '/journey', label: 'Journey' },
  { path: '/achievements', label: 'Achievements' },
  { path: '/certificates', label: 'Certificates' },
  { path: '/about', label: 'About' },
  { path: '/top-picks', label: 'Top Picks' },
  { path: '/resume', label: 'Resume' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar({
  profileId,
  onSwitch,
}: {
  profileId: ProfileId;
  onSwitch: (id: ProfileId) => void;
}) {
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 30);
    setHidden(y > 350 && y > prev && !menu && !mobileNav);
  });

  useEffect(() => {
    if (!menu) return;
    const close = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenu(false);
    };
    window.addEventListener('pointerdown', close);
    return () => window.removeEventListener('pointerdown', close);
  }, [menu]);

  // Close mobile nav on route change
  useEffect(() => {
    setMobileNav(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleNavigate = (path: string) => {
    setMobileNav(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const current = viewerProfiles.find((p) => p.id === profileId) ?? viewerProfiles[0];

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-[60]"
      animate={{ y: hidden ? '-100%' : '0%' }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      <div
        className={`gutter flex h-16 items-center justify-between gap-4 transition-[background,backdrop-filter] duration-500 md:h-[72px] ${
          solid || mobileNav ? 'bg-ink/85 backdrop-blur-xl border-b border-white/5' : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent'
        }`}
      >
        {/* Brand Logo & Desktop Nav Links */}
        <div className="flex items-center gap-6 xl:gap-8">
          <button
            type="button"
            onClick={() => handleNavigate('/')}
            className="text-[20px] transition hover:opacity-90 flex items-center"
            aria-label="Megala Home"
          >
            <BrandLogo />
          </button>

          <nav className="hidden items-center gap-4 lg:flex xl:gap-5" aria-label="Main Navigation">
            {NAV_ROUTES.map((route) => {
              const active = location.pathname === route.path;
              return (
                <NavLink
                  key={route.path}
                  label={route.label}
                  active={active}
                  onClick={() => handleNavigate(route.path)}
                />
              );
            })}
          </nav>
        </div>

        {/* Action button & Profile Selector */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleNavigate('/contact')}
            className="hidden rounded-full border border-white/20 px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] text-bone transition hover:border-crimson-2 hover:bg-crimson/10 hover:text-crimson-2 sm:block"
          >
            LET&apos;S BUILD
          </button>

          {/* Profile Switcher */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setMenu((m) => !m)}
              aria-haspopup="menu"
              aria-expanded={menu}
              aria-label={`Viewing as ${current.name}. Switch profile`}
              className="flex items-center gap-1.5 rounded-md p-1 transition hover:bg-white/5"
            >
              <ProfileAvatar id={profileId} size="sm" />
              <motion.span animate={{ rotate: menu ? 180 : 0 }} className="text-[10px] text-mist">
                ▼
              </motion.span>
            </button>
            <AnimatePresence>
              {menu && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute right-0 top-12 w-60 origin-top-right rounded-xl border border-white/10 bg-ink-2/95 p-2 shadow-2xl backdrop-blur-xl"
                >
                  <p className="px-3 pb-2 pt-1 text-[10px] font-semibold tracking-[0.24em] text-smoke">WHO&apos;S WATCHING?</p>
                  {viewerProfiles.map((p) => (
                    <button
                      key={p.id}
                      role="menuitem"
                      type="button"
                      onClick={() => {
                        onSwitch(p.id);
                        setMenu(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition hover:bg-white/5 ${
                        p.id === profileId ? 'bg-white/[0.08]' : ''
                      }`}
                    >
                      <ProfileAvatar id={p.id} size="sm" />
                      <span>
                        <span className="block text-sm font-medium text-bone">{p.name}</span>
                        <span className="block text-[11px] text-smoke">{p.blurb}</span>
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={mobileNav ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileNav}
            onClick={() => setMobileNav((v) => !v)}
          >
            <motion.span className="block h-0.5 w-5 bg-bone" animate={{ rotate: mobileNav ? 45 : 0, y: mobileNav ? 4 : 0 }} />
            <motion.span className="block h-0.5 w-5 bg-bone" animate={{ rotate: mobileNav ? -45 : 0, y: mobileNav ? -4 : 0 }} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileNav && (
          <motion.nav
            aria-label="Mobile Navigation"
            className="gutter max-h-[calc(100vh-64px)] overflow-y-auto border-b border-white/10 bg-ink/95 pb-8 pt-3 backdrop-blur-2xl lg:hidden"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <div className="grid grid-cols-1 gap-1">
              {NAV_ROUTES.map((route, i) => {
                const active = location.pathname === route.path;
                return (
                  <motion.button
                    key={route.path}
                    type="button"
                    onClick={() => handleNavigate(route.path)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i }}
                    className={`flex items-center justify-between py-3 text-left font-display text-2xl tracking-wide transition ${
                      active ? 'text-crimson-2' : 'text-bone hover:text-white'
                    }`}
                  >
                    <span>{route.label}</span>
                    {active && <span className="text-sm font-sans font-bold text-crimson-2">CURRENT</span>}
                  </motion.button>
                );
              })}
            </div>
            <div className="mt-6 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => handleNavigate('/contact')}
                className="w-full rounded-lg bg-crimson py-3 text-center font-sans text-xs font-bold tracking-[0.2em] text-white"
              >
                LET&apos;S BUILD — GET IN TOUCH
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function NavLink({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative text-[13px] font-medium tracking-wide transition ${
        active ? 'text-bone' : 'text-mist hover:text-bone'
      }`}
    >
      {label}
      {active && (
        <motion.span
          layoutId="nav-underline"
          className="absolute -bottom-1.5 left-0 right-0 h-[2px] rounded-full bg-crimson shadow-[0_0_8px_rgba(229,19,43,0.8)]"
        />
      )}
    </button>
  );
}
