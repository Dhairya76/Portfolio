import React, { useEffect, useRef, useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { EMAIL } from '../siteConfig';
import './CopyEmail.css';

type State = 'idle' | 'copied' | 'failed';

/**
 * A `mailto:` link does nothing at all on a machine with no mail client
 * registered — no error, no tab, nothing. Plenty of people read mail in a
 * browser tab, so the address is also shown as selectable text with a copy
 * button, and contact never silently dead-ends.
 */
const isMac = /mac/i.test(navigator.platform || navigator.userAgent);

const CopyEmail: React.FC = () => {
  const [state, setState] = useState<State>('idle');
  const addressRef = useRef<HTMLAnchorElement>(null);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setState('copied');
    } catch {
      // Some browsers deny clipboard-write outright. Select the address so
      // the keyboard shortcut we're about to suggest actually does something.
      const node = addressRef.current;
      if (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
      setState('failed');
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState('idle'), 2500);
  };

  return (
    <span className="copy-email">
      <a ref={addressRef} href={`mailto:${EMAIL}`} className="copy-email-address">
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={copy}
        className="copy-email-btn"
        aria-label={`Copy email address ${EMAIL}`}
      >
        {state === 'copied' ? (
          <FiCheck size={13} aria-hidden="true" />
        ) : (
          <FiCopy size={13} aria-hidden="true" />
        )}
      </button>
      <span className="copy-email-status" role="status">
        {state === 'copied' && 'copied'}
        {state === 'failed' && (isMac ? 'selected — ⌘C' : 'selected — Ctrl+C')}
      </span>
    </span>
  );
};

export default CopyEmail;
