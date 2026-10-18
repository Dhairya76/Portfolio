import React from 'react';
import './Experience.css';
import SectionHeading from './SectionHeading';

type Task = { label: string; body: React.ReactNode };

/** Figures worth reading as data get the mono accent treatment. */
const M: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="metric">{children}</span>
);

const tasks: Task[] = [
  {
    label: 'Distributed backend & async ingestion',
    body: (
      <>
        Architected a dedicated reporting microservice that offloads heavy
        CSV/Excel processing from the core API, streaming batched exports
        straight to GCS with configurable column filters and scheduled email
        dispatch. Built streaming sheet-ingestion APIs handling high-volume UUID
        records.
      </>
    ),
  },
  {
    label: 'Event-driven comms & notifications',
    body: (
      <>
        Engineered an end-to-end event notification engine and reviewer console
        tray on Google Cloud Pub/Sub, with conditional retrigger mechanisms and
        stateful alert queues for enterprise verifier workflows.
      </>
    ),
  },
  {
    label: 'Production AI & edge vision',
    body: (
      <>
        Integrated client-side RF-DETR object detection via ONNX Runtime Web for
        real-time ID document and selfie auto-capture, and deployed resilient
        LLM name-parsing workflows on the OpenAI API with automatic Gemini
        fallback.
      </>
    ),
  },
  {
    label: 'End-to-end cryptography',
    body: (
      <>
        Designed per-session WebSocket payload encryption using <M>A128CBC</M>{' '}
        with client-level feature-flag toggling and fail-closed guarantees,
        ensuring in-flight journey records cannot be tampered with.
      </>
    ),
  },
  {
    label: 'VAPT hardening & OWASP remediation',
    body: (
      <>
        Remediated critical and high-severity banking vulnerabilities:
        eliminated null-byte extension bypasses, blocked malicious PDF/CSV
        injection vectors, resolved SQL injection, and added HMAC-timestamped
        webhooks, OTP rate limiting and Cloudflare Turnstile CAPTCHA.
      </>
    ),
  },
  {
    label: 'Access control & governance',
    body: (
      <>
        Implemented server-side RBAC across decisioning APIs with
        approval/rejection audit trails and token refresh lifecycles, satisfying
        strict multi-tenant banking compliance.
      </>
    ),
  },
  {
    label: 'Data lifecycle & storage optimization',
    body: (
      <>
        Shipped an OU-scoped purge and archival engine with dynamic TTL
        retention, eliminated worker OOM crashes through serialized batch
        processing, and reclaimed <M>~32%</M> of database storage{' '}
        <M>(22 GB → 15 GB)</M> with scheduled VACUUM FULL / ANALYZE.
      </>
    ),
  },
  {
    label: 'Streaming telemetry & analytics',
    body: (
      <>
        Deployed Logstash ingestion parsers feeding ClickHouse and BigQuery
        schemas with automated partition TTLs, tracking step turnaround times,
        retry counts and funnel drop-off into real-time Metabase dashboards.
      </>
    ),
  },
  {
    label: 'International fintech rollouts',
    body: (
      <>
        Shipped compliant KYC/KYB journeys across <M>4 markets</M> (India,
        Philippines, UAE, Indonesia), covering <M>17+ document types</M>, MRZ
        checksum validation, 4K camera capture and National-ID QR parsing with
        Latin character support.
      </>
    ),
  },
];

const Experience: React.FC = () => (
  <section id="experience" className="section">
    <div className="container">
      <SectionHeading index="02" title="Experience" meta="sep 2023 — present" />

      <div className="role">
        <div className="role-head">
          <div>
            <h3 className="role-title">Software Engineer</h3>
            <p className="role-company">
              Algorisys Technologies
              <span className="role-client"> · client deputation: IDfy</span>
            </p>
          </div>
          <p className="role-meta mono">
            Enterprise KYC &amp; Identity Platform
            <span className="role-loc">Mumbai, India</span>
          </p>
        </div>

        <ol className="role-tasks">
          {tasks.map((task, idx) => (
            <li className="task" key={task.label}>
              <span className="task-index mono-label" aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div>
                <h4 className="task-label">{task.label}</h4>
                <p className="task-body">{task.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Experience;
