import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaMedium } from 'react-icons/fa';
import { EMAIL, LINKS } from '../siteConfig';
import './Footer.css';

const elsewhere = [
  { label: 'GitHub', href: LINKS.github, Icon: FiGithub },
  { label: 'LinkedIn', href: LINKS.linkedin, Icon: FiLinkedin },
  { label: 'Medium', href: LINKS.medium, Icon: FaMedium },
];

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

      <div className="footer-col">
        <p className="mono-label footer-head">Get in touch</p>
        {/* Spelled out rather than hidden behind the word "Email" — a mailto
            link is dead on a machine with no mail client. */}
        <a href={`mailto:${EMAIL}`} className="footer-email">
          <FiMail size={14} aria-hidden="true" /> {EMAIL}
        </a>
      </div>

      <nav className="footer-col" aria-label="Elsewhere">
        <p className="mono-label footer-head">Elsewhere</p>
        <ul className="footer-links">
          {elsewhere.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon size={14} aria-hidden="true" /> {label}
              </a>
            </li>
          ))}
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
