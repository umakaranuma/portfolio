import './ProjectCard.css';

/**
 * ProjectCard component - displays a single project
 * @param {Object} project - Project data
 */
function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-icon" />
      <div className="project-header">
        <div>
          <h2 className="project-title">{project.name}</h2>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
      </div>
      <p className="project-description">{project.description}</p>

      <ul className="project-bullets">
        {project.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-footer">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="ghost-button"
          >
            View Project
          </a>
        ) : (
          <button className="ghost-button">View Project</button>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
