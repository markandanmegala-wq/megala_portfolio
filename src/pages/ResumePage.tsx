import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ResumeSection from '../components/ResumeViewer';
import ResumeModal from '../components/ResumeModal';

export default function ResumePage() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <ResumeSection onView={() => setResumeOpen(true)} />

      <AnimatePresence>
        {resumeOpen && (
          <ResumeModal onClose={() => setResumeOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
