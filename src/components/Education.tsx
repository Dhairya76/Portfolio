import React from 'react';
import './Education.css';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const Education: React.FC = () => {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="heading text-gradient">Education</h2>
        
        <div className="education-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="education-card glass-card">
              <div className="education-icon">
              <GraduationCap size={28} />
            </div>
            <div className="education-content">
              <h3 className="education-degree">Bachelor of Engineering - BE, Information Technology</h3>
              <h4 className="education-school">Shah & Anchor Kutchi Engineering College</h4>
              <p className="education-year">2019 - 2023</p>
            </div>
            </Tilt>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="education-card glass-card">
              <div className="education-icon">
              <GraduationCap size={28} />
            </div>
            <div className="education-content">
              <h3 className="education-degree">HSC - Science</h3>
              <h4 className="education-school">SIES College</h4>
              <p className="education-year">2017 - 2019</p>
            </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
