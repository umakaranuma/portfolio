import './CaseStudyModal.css';

/**
 * Modal: Problem, Solution, Architecture, Challenges, Results
 */
function CaseStudyModal({ project, onClose }) {
  if (!project) return null;

  const cs = project.caseStudy || {};
  const blocks = [
    { key: 'problem', title: 'Problem', text: cs.problem },
    { key: 'solution', title: 'Solution', text: cs.solution },
    { key: 'architecture', title: 'Architecture', text: cs.architecture },
    { key: 'challenges', title: 'Challenges + fixes', text: cs.challenges },
    { key: 'results', title: 'Results', text: cs.results },
  ].filter((b) => b.text);

  return (
    <div className="case-study-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Case study">
      <div className="case-study-modal" onClick={(e) => e.stopPropagation()}>
        <div className="case-study-header">
          <h3 className="case-study-title">{project.name}</h3>
          <p className="case-study-subtitle">{project.subtitle}</p>
          <button type="button" className="case-study-close" onClick={onClose} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="case-study-body">
          {blocks.map(({ key, title, text }) => (
            <div key={key} className="case-study-block">
              <h4 className="case-study-block-title">{title}</h4>
              <p className="case-study-block-text">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseStudyModal;
