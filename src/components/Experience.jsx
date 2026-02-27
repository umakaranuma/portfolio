import { EXPERIENCE } from '../data/portfolioData';
import './Experience.css';

/**
 * Experience timeline: company, role, dates, location, bullets, tools chips
 */
function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <p className="experience-subtitle">Impact-focused roles and outcomes</p>
      <div className="experience-timeline">
        {EXPERIENCE.map((job, i) => (
          <div key={i} className="experience-item">
            <div className="experience-dot" />
            <div className="experience-content">
              <div className="experience-header">
                <span className="experience-role">{job.role}</span>
                <span className="experience-company"> {job.company}</span>
              </div>
              <div className="experience-meta">
                {job.dates} · {job.location}
              </div>
              <ul className="experience-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {job.tools && job.tools.length > 0 && (
                <div className="experience-tools">
                  {job.tools.map((t) => (
                    <span key={t} className="experience-tool">{t}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
