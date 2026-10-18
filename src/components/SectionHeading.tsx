import React from 'react';
import './SectionHeading.css';

type Props = {
  /** Two-digit index, e.g. "02" — the spine of the spec-document look. */
  index: string;
  title: string;
  /** Short mono annotation sitting opposite the title, like a log field. */
  meta?: string;
  lede?: string;
};

const SectionHeading: React.FC<Props> = ({ index, title, meta, lede }) => (
  <header className="sec-head">
    <div className="sec-head-row">
      <span className="sec-index mono-label" aria-hidden="true">
        {index}
      </span>
      <h2 className="sec-title">{title}</h2>
      <span className="sec-rule" aria-hidden="true" />
      {meta && <span className="sec-meta mono-label">{meta}</span>}
    </div>
    {lede && <p className="sec-lede measure">{lede}</p>}
  </header>
);

export default SectionHeading;
