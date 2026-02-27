import { SOCIAL_LINKS } from '../data/portfolioData';
import './CTA.css';

/**
 * CTA component - Call to action section
 */
function CTA() {
  return (
    <section id="contact" className="cta">
      <div className="cta-inner">
        <h2>Want to see more?</h2>
        <p>
          Check out my GitHub for more projects, open-source contributions, and code samples.
        </p>
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noreferrer"
          className="primary-button"
        >
          View GitHub Profile
        </a>
      </div>
    </section>
  );
}

export default CTA;
