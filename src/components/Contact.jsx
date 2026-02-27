import { useState } from 'react';
import { PORTFOLIO_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import './Contact.css';

/**
 * Contact: left = headline + availability + copy-able links; right = form + response time
 */
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(null);

  const copyToClipboard = (text, key) => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(key);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: send to backend or mailto
    const mailto = `mailto:${SOCIAL_LINKS.email.replace('mailto:', '')}?subject=Portfolio contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        <div className="contact-left">
          <h2 className="contact-title">Let&apos;s build something</h2>
          <p className="contact-availability">{PORTFOLIO_INFO.availability}</p>
          <div className="contact-links">
            <button type="button" className="contact-copy" onClick={() => copyToClipboard(SOCIAL_LINKS.email.replace('mailto:', ''), 'email')}>
              {copied === 'email' ? 'Copied!' : 'Email'}
            </button>
            <span className="contact-value">{SOCIAL_LINKS.email.replace('mailto:', '')}</span>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" className="contact-link">WhatsApp</a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="contact-link">LinkedIn</a>
          </div>
        </div>
        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-label">
              Name
              <input
                type="text"
                className="contact-input"
                value={formData.name}
                onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                required
              />
            </label>
            <label className="contact-label">
              Email
              <input
                type="email"
                className="contact-input"
                value={formData.email}
                onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                required
              />
            </label>
            <label className="contact-label">
              Message
              <textarea
                className="contact-textarea"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                required
              />
            </label>
            <button type="submit" className="contact-submit">
              Send message
            </button>
            <p className="contact-response">Response time: within 24h</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
