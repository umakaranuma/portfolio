import { PACKAGES } from '../data/portfolioData';
import './OpenSource.css';

/**
 * Open Source / Packages: Pub.dev, PyPI with short description
 */
function OpenSource() {
  if (!PACKAGES || PACKAGES.length === 0) return null;

  return (
    <section id="opensource" className="opensource-section">
      <h2 className="opensource-title">Open Source & Packages</h2>
      <p className="opensource-subtitle">Published packages and why they exist</p>
      <div className="opensource-grid">
        {PACKAGES.map((pkg, i) => (
          <div key={i} className="opensource-card">
            <div className="opensource-header">
              <span className="opensource-name">{pkg.name}</span>
              <span className="opensource-platform">{pkg.platform}</span>
            </div>
            <p className="opensource-desc">{pkg.description}</p>
            {pkg.count != null && (
              <span className="opensource-count">{pkg.count} published</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default OpenSource;
