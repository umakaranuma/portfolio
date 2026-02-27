import { SKILLS } from '../data/portfolioData';
import './Skills.css';

const LEVEL_DOTS = { Expert: 3, Advanced: 2, Intermediate: 1, Basic: 1 };

/**
 * Skills: category cards + skill chips + strength dots (not progress bars)
 */
function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-section-title">Skills</h2>
      <p className="skills-section-subtitle">Senior-style categories with proficiency</p>
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div key={group.category} className="skills-category">
            <h3 className="skills-category-title">{group.category}</h3>
            <div className="skills-list">
              {group.items.map((skill) => {
                const dots = LEVEL_DOTS[skill.level] ?? 1;
                return (
                  <div key={`${group.category}-${skill.name}`} className="skill-item">
                    <div className="skill-name-row">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-dots" aria-label={`Strength: ${skill.level}`}>
                        {[1, 2, 3].map((i) => (
                          <span key={i} className={`skill-dot ${i <= dots ? 'filled' : ''}`} />
                        ))}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
