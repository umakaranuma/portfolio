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
        {PACKAGES.map((pkg, i) => {
          const CardWrap = pkg.url ? 'a' : 'div';
          const cardProps = pkg.url
            ? { href: pkg.url, target: '_blank', rel: 'noreferrer', className: 'opensource-card opensource-card-link' }
            : { className: 'opensource-card' };
          return (
            <CardWrap key={i} {...cardProps}>
              <div className="opensource-header">
                <span className="opensource-name">{pkg.name}</span>
                <span className="opensource-platform">{pkg.platform}</span>
              </div>
              <p className="opensource-desc">{pkg.description}</p>
              {pkg.count != null && (
                <span className="opensource-count">{pkg.count} published</span>
              )}
              {pkg.url && <span className="opensource-link-label">View on {pkg.platform} →</span>}
            </CardWrap>
          );
        })}
      </div>
    </section>
  );
}

export default OpenSource;
