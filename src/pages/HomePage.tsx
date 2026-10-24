import { type ProfileId, type Project, viewerProfiles } from '../data/portfolio';
import Hero from '../components/Hero';
import ContinueWatching from '../components/ContinueWatching';
import Scene from '../components/Scene';
import About from '../components/About';
import Originals from '../components/Originals';
import TopPicks from '../components/TopPicks';
import Skills from '../components/Skills';
import EducationPreview from '../components/EducationPreview';
import CertificationPreview from '../components/CertificationPreview';
import FinalCTA from '../components/FinalCTA';

export default function HomePage({
  profileId,
  onPlay,
  onOpenProject,
  onResume,
  onReplay,
}: {
  profileId: ProfileId;
  onPlay: () => void;
  onOpenProject: (p: Project) => void;
  onResume: () => void;
  onReplay: () => void;
}) {
  const current = viewerProfiles.find((p) => p.id === profileId) ?? viewerProfiles[0];
  const order = current.order;

  return (
    <div className="relative">
      <Hero
        key={`hero-${profileId}`}
        profileId={profileId}
        onPlay={onPlay}
        onResume={onResume}
      />

      <ContinueWatching order={order} />

      <Scene id="about">
        <About />
      </Scene>

      <Scene id="originals" className="!py-0 sm:!py-0">
        <Originals onOpen={onOpenProject} />
      </Scene>

      <Scene id="skills">
        <Skills />
      </Scene>

      <Scene id="journey">
        <EducationPreview />
      </Scene>

      <Scene id="moments">
        <CertificationPreview />
      </Scene>

      <Scene id="picks">
        <TopPicks />
      </Scene>

      <FinalCTA onReplay={onReplay} />
    </div>
  );
}
