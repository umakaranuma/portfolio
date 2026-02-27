import { SOCIAL_LINKS } from '../data/portfolioData';
import './Footer.css';

/**
 * Footer: copyright, quick links, Download CV
 */
function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-copy">© {year} Umakaran. All rights reserved.</span>
        </div>
        <nav className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href={SOCIAL_LINKS.cv} download="Uma_CV.pdf" className="footer-cv">
            Download CV
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
