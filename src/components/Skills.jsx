import { SKILLS } from '../data/portfolioData';
import './Skills.css';

/**
 * Skills section - categories with skill name + proficiency level
 */
function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-grid">
        {SKILLS.map((group) => (
          <div key={group.category} className="skills-category">
            <h3 className="skills-category-title">{group.category}</h3>
            <div className="skills-list">
              {group.items.map((skill) => (
                <div key={`${group.category}-${skill.name}`} className="skill-item">
                  <span className="skill-check">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
