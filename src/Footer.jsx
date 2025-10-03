import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column footer__left">
          <div className="footer__brand-row">
            <svg width="38" height="38" viewBox="0 0 100 100" style={{marginRight: 10, marginBottom: -5}}>
              <circle cx="50" cy="50" r="43" stroke="#222" strokeWidth="7" fill="none"/>
              <text x="50%" y="57%" textAnchor="middle" fontSize="28" fill="#222" fontFamily="Arial" dy=".3em">◎</text>
            </svg>
            <span className="footer__brand">Continue</span>
          </div>
          <div className="footer__sub">Ship faster with Continuous AI</div>
          <div className="footer__nav-row">
            <div className="footer__group">
              <a href="https://example.com/pricing" target="_blank" rel="noopener noreferrer">Pricing</a>
              <a href="https://example.com/docs" target="_blank" rel="noopener noreferrer">Docs</a>
              <a href="https://partner.example.com" target="_blank" rel="noopener noreferrer">Partners</a>
            </div>
            <div className="footer__group">
              <span>
                <a href="https://example.com/about" target="_blank" rel="noopener noreferrer">About Us</a>
                <a href="https://example.com/careers" target="_blank" rel="noopener noreferrer" className="badge-hiring-inline">
                  <span className="badge-hiring">We're hiring!</span>
                </a>
              </span>
              <a href="https://blog.example.com" target="_blank" rel="noopener noreferrer">Blog</a>
              <a href="https://amplified.dev" target="_blank" rel="noopener noreferrer">amplified.dev</a>
            </div>
          </div>
          <div className="footer__privacy">Privacy Notice</div>
        </div>
        <div className="footer__column footer__right">
          <div className="footer__subscribe-title">Subscribe to updates</div>
          <div className="footer__newsletter-row">
            <span>
              Join <a href="https://newsletter.example.com" target="_blank" rel="noopener noreferrer">our newsletter</a> to learn more
            </span>
            <form className="footer__subscribe-form" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Email address" className="footer__input" required />
              <button type="submit" className="footer__input-btn" aria-label="Subscribe">→</button>
            </form>
          </div>
          <div className="footer__socials">
            <span className="footer__copyright">
                © 2025 Continue, Inc.
            </span>
            <a href="https://butterfly.example.com" target="_blank" rel="noopener noreferrer" aria-label="Butterfly">
              <span style={{fontSize: '1.4em'}}>🦋</span>
            </a>
            <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="X">
              <span style={{fontSize: '1.3em'}}>𝕏</span>
            </a>
            <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="23" height="23" viewBox="0 0 40 40">
                <rect width="40" height="40" rx="8" fill="#f4f4f4"/>
                <text x="9" y="28" fontSize="24" fill="#0072b1" fontWeight="bold">in</text>
              </svg>
            </a>
            <a href="https://github.com/yourrepo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                <path fill="#181717" d="M12 2C6.477 2 2 6.485..."/>
              </svg>
            </a>
            <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <svg width="23" height="23" viewBox="0 0 24 24" fill="none">
                <path fill="#5865F2" d="M22 24c-.23 0-.426-.164-.478-.386l-1.208-5.507c-2.905.628-5.9.628-8.803 0l-1.209 5.507A.483.483 0 010 24V.48C0 .218.218 0 .48 0h23.04c.263 0 .48.218.48.48v23.04a.48.48 0 01-.48.48z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
