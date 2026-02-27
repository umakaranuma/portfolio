import { useState, useEffect } from 'react';
import './App.css';
import {
  Navigation,
  Hero,
  TrustStrip,
  FeaturedProjects,
  Skills,
  Experience,
  Highlights,
  OpenSource,
  Contact,
  Footer,
} from './components';

const SECTION_IDS = ['about', 'projects', 'skills', 'experience', 'highlights', 'contact'];

/**
 * Single-page portfolio: scroll-to-section nav + all sections in order.
 * Scroll spy sets active section for nav highlight.
 */
function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          if (SECTION_IDS.includes(id)) setActiveSection(id);
          break;
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="content">
        <Hero />
        <TrustStrip />
        <FeaturedProjects />
        <Skills />
        <Experience />
        <Highlights />
        <OpenSource />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
