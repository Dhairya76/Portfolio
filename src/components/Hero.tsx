import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <p className="hero-greeting text-gradient">Hi, I'm</p>
          <h1 className="hero-name">Dhairya Thakker</h1>
          <h2 className="hero-title">
            <TypeAnimation
              sequence={[
                'Associate Software Engineer',
                2000,
                'Full-Stack Developer',
                2000,
                'Data Engineering Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="hero-description">
            Detail-oriented Software Engineer with experience in backend development, UI enhancement, and data analytics. Skilled in building scalable features, reusable React components, and optimizing complex SQL queries.
          </p>
          
          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              View My Work
            </a>
            <a href="mailto:dhairyathakker76@gmail.com" className="btn btn-outline">
              <FiMail size={18} /> Contact Me
            </a>
          </div>

          <div className="hero-socials animate-fade-in animate-delay-1">
            <a href="https://github.com/Dhairya76" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/thakker-dhairya" target="_blank" rel="noopener noreferrer" className="social-link">
              <FiLinkedin size={24} />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-in animate-delay-2">
          <div className="hero-image-glow"></div>
          <img src="/profile.jpeg" alt="Dhairya Thakker" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
