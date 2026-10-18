import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            DT<span className="accent-dot">.</span>
          </div>
          <p className="footer-text">
            Built with React, TypeScript & Vite.<br/>
            Designed for performance and aesthetics.
          </p>
        </div>
        
        <div className="footer-socials">
          <a href="https://github.com/Dhairya76" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/thakker-dhairya" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:dhairyathakker76@gmail.com" className="social-link" aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Dhairya Thakker. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
