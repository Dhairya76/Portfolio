import React from 'react';
import './Experience.css';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Experience: React.FC = () => {
  const tasks = [
    "Developed and maintained scalable backend services using Node.js, JavaScript, and Redis, ensuring high performance and low latency across distributed systems.",
    "Built reusable and responsive UI components using React.js, JavaScript, HTML, and CSS, improving frontend performance and user experience.",
    "Optimized complex SQL queries and BigQuery pipelines, enhancing data retrieval efficiency and boosting application stability.",
    "Addressed critical VAPT issues and improved security compliance through backend hardening and secure code practices.",
    "Integrated and managed Logstash pipelines with Grafana for real-time monitoring and log aggregation.",
    "Automated data workflows using Apache Airflow and processed large-scale data using Apache Beam, ensuring reliable and timely data delivery.",
    "Created dynamic dashboards and reports using Metabase, enabling actionable insights for data-driven decisions.",
    "Utilized RabbitMQ for asynchronous communication, improving system scalability and decoupling of microservices.",
    "Collaborated via Git and GitLab, deployed applications on GCP, and containerized services with Kubernetes for efficient CI/CD and cloud scalability."
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="heading text-gradient">Work Experience</h2>
        
        <div className="experience-timeline">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.01} transitionSpeed={2000} className="experience-card glass-card">
              <div className="experience-header">
              <div className="experience-title-wrapper">
                <div className="icon-wrapper">
                  <Briefcase size={20} className="accent-icon" />
                </div>
                <div>
                  <h3 className="experience-title">Associate Software Engineer</h3>
                  <h4 className="experience-company">Algorisys Technologies</h4>
                </div>
              </div>
              <div className="experience-meta">
                <span className="experience-date">09/2023 - Present</span>
                <span className="experience-location">Mumbai, India</span>
              </div>
            </div>
            
            <ul className="experience-tasks">
              {tasks.map((task, index) => (
                <li key={index} className="task-item">
                  <span className="task-bullet"></span>
                  <p>{task}</p>
                </li>
              ))}
              </ul>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
