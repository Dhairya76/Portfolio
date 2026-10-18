import React from 'react';
import './Projects.css';
import SectionHeading from './SectionHeading';
import { FiGithub, FiExternalLink, FiClock } from 'react-icons/fi';

type Project = {
  name: string;
  tagline: string;
  detail: string;
  stack: string[];
  repo: string;
  demo?: string;
  demoNote?: string;
  status?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: 'Book-Explorer',
    tagline: 'Server-rendered book discovery in pure Go — standard library only.',
    detail:
      'No web framework and no router package: routing, template composition and API orchestration are hand-rolled on net/http and html/template. The search box debounces keystrokes and cancels in-flight requests with AbortController, so a fast typist never sees results from a query they already replaced. The detail page is an open book rendered entirely in CSS, with the summary typed out on arrival.',
    stack: ['Go', 'net/http', 'html/template', 'Open Library API', 'Docker', 'Render'],
    repo: 'https://github.com/Dhairya76/Book-Explorer',
    demo: 'https://book-explorer-z5dc.onrender.com',
    demoNote: 'Free Render tier — the first load wakes the server and can take ~15s.',
    featured: true,
  },
  {
    name: 'Movie-Explorer',
    tagline: 'TMDB search that still works on a fresh clone with no API key.',
    detail:
      'Ships a demo-mode fallback, so cloning the repo without a TMDB key gives you a browsable app instead of an error screen. Search is debounced against the API, favorites persist to localStorage, and the detail view opens in a modal rather than a route change.',
    stack: ['React', 'Vite', 'JavaScript', 'TMDB API', 'localStorage'],
    repo: 'https://github.com/Dhairya76/Movie-Explorer',
    status: 'demo not deployed yet',
  },
  {
    name: 'Music-Player',
    tagline: 'A browser music player with no framework and no build step.',
    detail:
      'Drag an audio file onto the page and it parses the ID3 tags client-side for title and artwork, then persists the blob to IndexedDB — so the playlist survives a reload without any server storing your files.',
    stack: ['Vanilla JS', 'IndexedDB', 'ID3 parsing', 'CSS'],
    repo: 'https://github.com/Dhairya76/Music-Player',
    status: 'rewrite not pushed yet',
  },
];

const Projects: React.FC = () => (
  <section id="projects" className="section">
    <div className="container">
      <SectionHeading
        index="01"
        title="Projects"
        meta={`${projects.length} entries`}
        lede="Things I built end to end — the problem each one actually posed is in the description."
      />

      <div className="projects-list">
        {projects.map((project, idx) => (
          <article className="project" key={project.name}>
            <div className="project-aside">
              <span className="project-index mono-label" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </span>
              {project.featured && <span className="project-flag">Featured</span>}
            </div>

            <div className="project-body">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-detail">{project.detail}</p>

              <ul className="project-stack" aria-label={`${project.name} tech stack`}>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className="project-links">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <FiExternalLink size={14} aria-hidden="true" /> Live demo
                  </a>
                ) : (
                  <span className="project-status">
                    <FiClock size={13} aria-hidden="true" /> {project.status}
                  </span>
                )}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  <FiGithub size={14} aria-hidden="true" /> Source
                </a>
              </div>

              {project.demoNote && (
                <p className="project-note">
                  <FiClock size={12} aria-hidden="true" /> {project.demoNote}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
