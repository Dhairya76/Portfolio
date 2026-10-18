import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowDown } from 'react-icons/fi';
import { FaMedium } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { useReducedMotion } from '../hooks/useReducedMotion';
import CopyEmail from './CopyEmail';
import { EMAIL, LINKS } from '../siteConfig';
import './Hero.css';

// Three angles on one story, not three different stories.
const roles = [
  'backend engineer',
  'go · node.js · typescript',
  'kyc & identity platforms',
];

// Read as a status line rather than a bio.
const facts: [string, string][] = [
  ['loc', 'Panvel, India'],
  ['exp', '3+ years'],
  ['now', 'Algorisys → IDfy'],
];

const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-main">
          <p className="hero-eyebrow mono-label">Dhairya Thakker</p>

          <h1 className="hero-name">
            Backend engineer
            <br />
            building systems
            <br />
            that hold up.
          </h1>

          <p className="hero-role mono">
            {/* The cycling text would be announced over and over, so it is
                hidden and a stable alternative is read instead. */}
            <span className="sr-only">{roles.join('. ')}</span>
            <span className="hero-prompt" aria-hidden="true">
              &gt;
            </span>
            {reduceMotion ? (
              <span aria-hidden="true">{roles[0]}</span>
            ) : (
              <TypeAnimation
                sequence={roles.flatMap((role) => [role, 2200])}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                cursor={false}
                aria-hidden="true"
              />
            )}
            <span className="hero-caret" aria-hidden="true" />
          </p>

          <p className="hero-desc measure">
            3+ years on enterprise KYC, identity verification and anti-fraud
            platforms for tier-1 banks and fintechs — Node.js and Fastify
            microservices, event-driven ingestion, edge ML pipelines and
            security hardening. Lately writing more of it in Go.
          </p>

          <dl className="hero-facts">
            {facts.map(([k, v]) => (
              <div className="hero-fact" key={k}>
                <dt className="mono-label">{k}</dt>
                <dd className="mono">{v}</dd>
              </div>
            ))}
            <div className="hero-fact hero-fact-mail">
              <dt className="mono-label">mail</dt>
              <dd>
                <CopyEmail />
              </dd>
            </div>
          </dl>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <FiArrowDown size={14} aria-hidden="true" /> View the work
            </a>
            <a href="/Dhairya-Thakker-Resume.pdf" download className="btn">
              <FiDownload size={14} aria-hidden="true" /> Résumé
            </a>
            <a href={`mailto:${EMAIL}`} className="btn">
              <FiMail size={14} aria-hidden="true" /> Contact
            </a>
          </div>

          <ul className="hero-socials">
            <li>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FiGithub size={18} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={LINKS.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Medium"
              >
                <FaMedium size={18} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-portrait">
          {/* 640×640 — the square the frame actually displays, at 2x. */}
          <img
            src="/profile-640.jpeg"
            alt="Dhairya Thakker"
            width="320"
            height="320"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
