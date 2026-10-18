import React from 'react';
import './Skills.css';
import SectionHeading from './SectionHeading';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Go', 'Python', 'SQL'],
  },
  {
    title: 'Backend & distributed systems',
    skills: [
      'Node.js',
      'Fastify',
      'REST APIs',
      'WebSockets',
      'Sequelize',
      'RabbitMQ',
      'Redis',
      'Cloud Pub/Sub',
    ],
  },
  {
    title: 'Databases & analytics',
    skills: [
      'PostgreSQL',
      'ClickHouse',
      'BigQuery',
      'Logstash',
      'Apache Beam',
      'Metabase',
      'Grafana',
    ],
  },
  {
    title: 'AI, edge ML & security',
    skills: [
      'OpenAI API',
      'Gemini API',
      'ONNX Runtime Web',
      'RF-DETR',
      'VAPT',
      'AES / A128CBC',
      'HMAC',
      'RBAC',
    ],
  },
  {
    title: 'Cloud & infrastructure',
    skills: ['GCP', 'Kubernetes', 'Docker', 'ArgoCD', 'GitLab CI/CD', 'Git'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'Vite', 'HTML', 'CSS'],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="section">
    <div className="container">
      <SectionHeading index="04" title="Stack" meta="what I reach for" />

      <div className="skills-grid">
        {skillCategories.map((category) => (
          <section className="skill-group" key={category.title}>
            <h3 className="skill-title mono-label">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
