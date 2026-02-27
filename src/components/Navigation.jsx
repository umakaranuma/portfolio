import { PORTFOLIO_INFO } from '../data/portfolioData';
import './Navigation.css';

/**
 * Navigation component - top bar with logo, links, and theme toggle
 */
function Navigation({ onSectionChange }) {
  return (
    <header className="nav">
      <div className="nav-left">
        <div className="nav-logo">
          {PORTFOLIO_INFO.name.charAt(0)}
        </div>
        <div className="nav-title">
          <span className="nav-name">{PORTFOLIO_INFO.name}</span>
          <span className="nav-role">{PORTFOLIO_INFO.role}</span>
        </div>
      </div>
      <nav className="nav-links">
        <button type="button" className="nav-link-btn" onClick={() => onSectionChange?.('projects')}>
          Projects
        </button>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button type="button" className="nav-theme-toggle" aria-label="Toggle theme">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
        </svg>
      </button>
    </header>
  );
}

export default Navigation;
