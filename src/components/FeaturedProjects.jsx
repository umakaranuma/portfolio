import { useState, useMemo } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';
import './FeaturedProjects.css';

const ALL_FILTER = 'All';

/**
 * Featured Work: filter chips (All, Flutter, Backend, …), grid, case study modal
 */
function FeaturedProjects() {
  const [filter, setFilter] = useState(ALL_FILTER);
  const [caseStudyProject, setCaseStudyProject] = useState(null);

  const filterChips = useMemo(() => {
    const tags = new Set(PROJECTS.flatMap((p) => p.filterTags || p.tags || []));
    return [ALL_FILTER, ...Array.from(tags).sort()];
  }, []);

  const filtered = useMemo(
    () =>
      filter === ALL_FILTER
        ? PROJECTS
        : PROJECTS.filter((p) => (p.filterTags || p.tags || []).includes(filter)),
    [filter],
  );

  return (
    <section id="projects" className="featured-projects">
      <div className="featured-header">
        <h2 className="featured-title">Featured Work</h2>
        <p className="featured-subtitle">
          Production apps across Flutter, backend, realtime, and payments.
        </p>
        <div className="featured-chips">
          {filterChips.map((chip) => (
            <button
              key={chip}
              type="button"
              className={`featured-chip ${filter === chip ? 'active' : ''}`}
              onClick={() => setFilter(chip)}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>
      <div className="featured-grid">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onCaseStudyClick={project.caseStudy ? () => setCaseStudyProject(project) : undefined}
          />
        ))}
      </div>
      <CaseStudyModal
        project={caseStudyProject}
        onClose={() => setCaseStudyProject(null)}
      />
    </section>
  );
}

export default FeaturedProjects;
