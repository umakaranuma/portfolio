import { useState, useEffect } from 'react';
import { PORTFOLIO_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import './Navigation.css';

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Sticky top bar: Logo (UA) | Center nav | Theme + Download CV
 * Mobile: hamburger → bottom sheet / overlay menu
 */
function Navigation({ activeSection, onSectionChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    onSectionChange?.(id);
    setMobileOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-left">
          <a href="#about" className="nav-logo" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }} aria-label="Home">
            {PORTFOLIO_INFO.initials || 'UA'}
          </a>
        </div>

        <nav className="nav-center" aria-label="Main">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => handleNavClick(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <button type="button" className="nav-theme-toggle" aria-label="Toggle theme">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
          </button>
          <a href={SOCIAL_LINKS.cv} download="Uma_CV.pdf" className="nav-cta">
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile menu overlay */}
      <div className={`nav-overlay ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen} onClick={() => setMobileOpen(false)} />
      <div className={`nav-drawer ${mobileOpen ? 'open' : ''}`}>
        <div className="nav-drawer-inner">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`nav-drawer-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => handleNavClick(id)}
            >
              {label}
            </button>
          ))}
          <a href={SOCIAL_LINKS.cv} download="Uma_CV.pdf" className="nav-drawer-cta" onClick={() => setMobileOpen(false)}>
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}

export default Navigation;
