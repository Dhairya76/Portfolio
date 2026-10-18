import React from 'react';
import './Writing.css';
import SectionHeading from './SectionHeading';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaMedium } from 'react-icons/fa';

type Post = { title: string; blurb: string; date: string; url: string };

// Mirrors medium.com/@dhairyathakker76 — kept static so the page needs no
// runtime fetch (Medium's feed has no CORS headers for browser requests).
const posts: Post[] = [
  {
    title: "When Caching Isn't Enough: A Pragmatic Guide to Database Replication",
    blurb: 'Where a cache stops helping, and what replication actually costs you in consistency.',
    date: '2026-09',
    url: 'https://medium.com/@dhairyathakker76/when-caching-isnt-enough-a-pragmatic-guide-to-database-replication-68caabeeec32',
  },
  {
    title: "Don't Keep Your Users Waiting: A Pragmatic Guide to Message Queues",
    blurb: 'Moving slow work off the request path, and the failure modes you inherit when you do.',
    date: '2026-07',
    url: 'https://medium.com/@dhairyathakker76/dont-keep-your-users-waiting-a-pragmatic-guide-to-message-queues-16cc15c85135',
  },
  {
    title: 'Why Your Database is Crying: A Pragmatic Guide to Redis',
    blurb: 'What belongs in Redis, what does not, and how caches quietly go stale.',
    date: '2026-05',
    url: 'https://medium.com/@dhairyathakker76/why-your-database-is-crying-a-pragmatic-guide-to-redis-194d14fd02ea',
  },
  {
    title: 'The Scaling Fork in the Road: A Pragmatic Guide to Vertical vs. Horizontal Scaling',
    blurb: 'Picking a scaling axis before the traffic picks one for you.',
    date: '2026-05',
    url: 'https://medium.com/@dhairyathakker76/the-scaling-fork-in-the-road-a-pragmatic-guide-to-vertical-vs-horizontal-scaling-bed2fb836374',
  },
];

const Writing: React.FC = () => (
  <section id="writing" className="section">
    <div className="container">
      <SectionHeading
        index="03"
        title="Writing"
        meta="medium"
        lede="Backend systems posts — the explanations I wanted when I first hit each of these problems at work."
      />

      <ul className="writing-list">
        {posts.map((post) => (
          <li key={post.url}>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="writing-item"
            >
              <span className="writing-date mono-label">{post.date}</span>
              <span className="writing-body">
                <span className="writing-title">{post.title}</span>
                <span className="writing-blurb">{post.blurb}</span>
              </span>
              <FiArrowUpRight size={16} className="writing-arrow" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="https://medium.com/@dhairyathakker76"
        target="_blank"
        rel="noopener noreferrer"
        className="btn writing-all"
      >
        <FaMedium size={15} aria-hidden="true" /> All posts
      </a>
    </div>
  </section>
);

export default Writing;
