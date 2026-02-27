import {
  EXPERIENCE,
  KEY_PROJECTS,
  EDUCATION,
  CERTIFICATIONS,
  SKILLS,
  ACHIEVEMENTS,
} from '../data/portfolioData';
import './Resume.css';

/**
 * Resume section - two-column layout: Experience, Projects, Education, Certs | Skills, Achievements
 */
function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="resume-columns">
        <div className="resume-left">
          <div className="resume-block">
            <h2 className="resume-heading">Professional Experience</h2>
            {EXPERIENCE.map((job, i) => (
              <div key={i} className="resume-job">
                <div className="resume-job-header">
                  <span className="resume-job-role">{job.role}</span>
                  <span className="resume-job-company"> | {job.company}</span>
                </div>
                <div className="resume-job-meta">
                  {job.dates} | {job.location}
                </div>
                <ul className="resume-bullets">
                  {job.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="resume-block">
            <h2 className="resume-heading">Key Projects</h2>
            {KEY_PROJECTS.map((project, i) => (
              <div key={i} className="resume-project">
                <div className="resume-project-name">{project.name}</div>
                <div className="resume-project-tags">{project.tags}</div>
                <p className="resume-project-desc">{project.description}</p>
              </div>
            ))}
          </div>

          <div className="resume-block">
            <h2 className="resume-heading">Education</h2>
            <div className="resume-edu">
              <div className="resume-edu-degree">{EDUCATION.degree}</div>
              <div className="resume-edu-institution">{EDUCATION.institution}</div>
            </div>
          </div>

          <div className="resume-block">
            <h2 className="resume-heading">Certifications</h2>
            <ul className="resume-certs">
              {CERTIFICATIONS.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="resume-right">
          <div className="resume-block">
            <h2 className="resume-heading">Technical Skills</h2>
            {SKILLS.map((group) => (
              <div key={group.category} className="resume-skill-group">
                <h3 className="resume-skill-title">{group.category}</h3>
                <p className="resume-skill-items">
                  {group.items.map((s) => s.name).join(', ')}
                </p>
              </div>
            ))}
          </div>

          <div className="resume-block">
            <h2 className="resume-heading">Achievements</h2>
            <ul className="resume-achievements">
              {ACHIEVEMENTS.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
