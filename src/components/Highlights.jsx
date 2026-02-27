import { HIGHLIGHTS } from '../data/portfolioData';
import './Highlights.css';

/**
 * Highlights: grid of impact cards (numbers that get attention)
 */
function Highlights() {
  return (
    <section id="highlights" className="highlights-section">
      <h2 className="highlights-title">Highlights</h2>
      <p className="highlights-subtitle">Measurable impact and achievements</p>
      <div className="highlights-grid">
        {HIGHLIGHTS.map((item, i) => (
          <div key={i} className="highlight-card">
            <span className="highlight-value">{item.value}</span>
            <span className="highlight-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Highlights;
