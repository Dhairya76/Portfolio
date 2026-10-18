import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaMedium } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div className="footer-col">
        <p className="footer-logo mono">
          DT<span className="accent-dot">.</span>
        </p>
        <p className="footer-note">
          Built with React, TypeScript and Vite. Set in IBM Plex.
        </p>
      </div>

      <nav className="footer-col" aria-label="Elsewhere">
        <p className="mono-label footer-head">Elsewhere</p>
        <ul className="footer-links">
          <li>
            <a
              href="https://github.com/Dhairya76"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub size={14} aria-hidden="true" /> GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/thakker-dhairya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin size={14} aria-hidden="true" /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@dhairyathakker76"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaMedium size={14} aria-hidden="true" /> Medium
            </a>
          </li>
          <li>
            <a href="mailto:dhairyathakker76@gmail.com">
              <FiMail size={14} aria-hidden="true" /> Email
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <div className="container footer-bottom mono-label">
      <span>&copy; {new Date().getFullYear()} Dhairya Thakker</span>
      <span>Panvel, India</span>
    </div>
  </footer>
);

export default Footer;
