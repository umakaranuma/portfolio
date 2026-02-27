import './ProjectCard.css';

/**
 * Project card: title, summary, tech chips, metrics badge, Case Study | GitHub | Live
 */
function ProjectCard({ project, onCaseStudyClick }) {
  const hasCaseStudy = project.caseStudy && onCaseStudyClick;

  return (
    <article className="project-card">
      <div className="project-icon" />
      <div className="project-header">
        <div>
          <h2 className="project-title">{project.name}</h2>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        {project.metricsBadge && (
          <span className="project-metrics">{project.metricsBadge}</span>
        )}
      </div>
      <p className="project-description">{project.summary || project.description}</p>
      <div className="project-tags">
        {(project.tags || []).slice(0, 5).map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <div className="project-actions">
        {hasCaseStudy && (
          <button type="button" className="project-btn project-btn-primary" onClick={onCaseStudyClick}>
            Case Study
          </button>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className="project-btn project-btn-ghost">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
