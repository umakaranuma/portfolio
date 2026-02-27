import { TRUST_STRIP } from '../data/portfolioData';
import './TrustStrip.css';

/**
 * Thin credibility row: 3+ years, 5+ apps, test coverage, packages, CI/CD
 */
function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Credibility">
      <div className="trust-strip-inner">
        {TRUST_STRIP.map((item) => (
          <span key={item} className="trust-item">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

export default TrustStrip;
