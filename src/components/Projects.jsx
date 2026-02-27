import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import './Projects.css';

/**
 * Projects component - displays projects with category tabs
 */
function Projects() {
  const [activeTab, setActiveTab] = useState('company');

  const filteredProjects = PROJECTS.filter((project) =>
    activeTab === 'all' ? true : project.category === activeTab,
  );

  return (
    <section id="projects">
      <div className="projects-header">
        <div>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Explore my company work, freelance collaborations, and personal experiments.
          </p>
        </div>
        <div className="tabs">
          <button
            type="button"
            className={activeTab === 'company' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('company')}
          >
            Company
          </button>
          <button
            type="button"
            className={activeTab === 'freelance' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('freelance')}
          >
            Freelance
          </button>
          <button
            type="button"
            className={activeTab === 'personal' ? 'tab active' : 'tab'}
            onClick={() => setActiveTab('personal')}
          >
            Own Projects
          </button>
        </div>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
