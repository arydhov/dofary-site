import { ErrorBoundary } from "./components/ErrorBoundary";
import { useState } from 'react';
import { ADMIN_PIN } from './config';
import { defaultPortfolio, experience, skills, tools } from './data/portfolio';
import { usePortfolio } from './hooks/usePortfolio';
import { useScrolled } from './hooks/useScrolled';
import LoadingScreen from './components/common/LoadingScreen';
import AdminModal from './components/AdminModal';
import AdminPinDialog from './components/AdminPinDialog';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import ExperienceSection from './components/sections/ExperienceSection';
import WorkSection from './components/sections/WorkSection';
import SkillsSection from './components/sections/SkillsSection';
import Footer from './components/sections/Footer';

function App() {
  const { content, loading, saving, savePortfolio } = usePortfolio();
  const scrolled = useScrolled();
  const [admin, setAdmin] = useState(false);
  const [adminPinOpen, setAdminPinOpen] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);

  const openAdmin = (event) => {
    event.preventDefault();
    if (pin === ADMIN_PIN) {
      setAdmin(true);
      setPin('');
      setPinError(false);
      setAdminPinOpen(false);
      return;
    }
    setPinError(true);
  };

  const handleSave = async (nextContent) => {
    const result = await savePortfolio(nextContent);
    if (result.ok) {
      setAdmin(false);
      window.alert('Changes saved to Google Sheet!');
    } else {
      window.alert('Save failed, check console.');
    }
  };

  if (loading) return <LoadingScreen />;
  if (admin) return <AdminModal content={content} onSave={handleSave} onCancel={() => setAdmin(false)} isSaving={saving} />;

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      <Navbar name={content.hero.name} scrolled={scrolled} />
      <main>
        <Hero hero={content.hero} fallbackImage={defaultPortfolio.hero.imageSrc} />
        <ExperienceSection items={experience} />
        <WorkSection videos={content.videos} />
        <SkillsSection skills={skills} tools={tools} />
      </main>
      <Footer onAdminOpen={() => setAdminPinOpen(true)} />
      {adminPinOpen && (
        <AdminPinDialog
          pin={pin}
          setPin={setPin}
          error={pinError}
          onSubmit={openAdmin}
          onClose={() => { setAdminPinOpen(false); setPin(''); setPinError(false); }}
        />
      )}
    </div>
  );
}


export default function AppWithBoundary(props) {
  return <ErrorBoundary><App {...props} /></ErrorBoundary>;
}
