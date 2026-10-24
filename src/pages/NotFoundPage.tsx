import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EASE, Magnetic } from '../components/fx';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[90vh] flex-col items-center justify-center px-4 py-24 text-center">
      <motion.p
        className="text-xs font-bold uppercase tracking-[0.4em] text-crimson-2"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        Error 404
      </motion.p>

      <motion.h1
        className="mt-3 font-display text-6xl sm:text-8xl md:text-9xl tracking-wide text-bone"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
      >
        EPISODE NOT FOUND
      </motion.h1>

      <motion.p
        className="mx-auto mt-4 max-w-md text-sm sm:text-base text-mist"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
      >
        The page you are looking for has either been moved, archived, or is currently unavailable in the broadcast schedule.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.3 }}
      >
        <Magnetic>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="rounded-full bg-crimson px-8 py-3.5 text-xs font-bold tracking-[0.16em] text-white shadow-[0_0_40px_rgba(229,19,43,0.5)] transition hover:bg-crimson-2"
          >
            RETURN TO HOME
          </button>
        </Magnetic>
      </motion.div>
    </div>
  );
}
