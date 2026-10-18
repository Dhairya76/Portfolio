import React from 'react';
import './Skills.css';
import { Code2, Database, Cloud, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code2 size={24} />,
      skills: ["JavaScript", "TypeScript", "React.js", "HTML", "CSS"]
    },
    {
      title: "Backend & Database",
      icon: <Database size={24} />,
      skills: ["Node.js", "Python", "SQL", "Redis", "RabbitMQ"]
    },
    {
      title: "Data & Cloud",
      icon: <Cloud size={24} />,
      skills: ["BigQuery", "Apache Beam", "Apache Airflow", "GCP", "Kubernetes"]
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench size={24} />,
      skills: ["Git", "GitLab", "Logstash", "Grafana", "Metabase"]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="heading text-gradient">Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} scale={1.02} transitionSpeed={2000} className="skill-category glass-card">
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="skills-list">
                  {category.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
