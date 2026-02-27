import { useState } from 'react';
import './App.css';
import { Navigation, Hero, Projects, Skills, Resume, CTA } from './components';

/**
 * Main App component
 * Portfolio website for Uma - Flutter Developer
 */
function App() {
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <div className="page">
      <Navigation onSectionChange={setActiveSection} />
      <main className="content">
        <Hero activeSection={activeSection} onSectionChange={setActiveSection} />
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'resume' && <Resume />}
        <CTA />
      </main>
    </div>
  );
}

export default App;
