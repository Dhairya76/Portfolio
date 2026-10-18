import React from 'react';
import './Education.css';
import SectionHeading from './SectionHeading';

const entries = [
  {
    years: '2019 — 2023',
    degree: 'Bachelor of Engineering (B.E.), Information Technology',
    school: 'Shah & Anchor Kutchhi Engineering College, University of Mumbai',
  },
  {
    years: '2017 — 2019',
    degree: 'HSC, Science',
    school: 'SIES College',
  },
];

const Education: React.FC = () => (
  <section id="education" className="section">
    <div className="container">
      <SectionHeading index="05" title="Education" />

      <ul className="edu-list">
        {entries.map((entry) => (
          <li className="edu-item" key={entry.degree}>
            <span className="edu-years mono-label">{entry.years}</span>
            <div>
              <h3 className="edu-degree">{entry.degree}</h3>
              <p className="edu-school">{entry.school}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Education;
