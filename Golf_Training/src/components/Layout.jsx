import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">GnG International</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#platform">Platform</a>
          <a href="#solutions">Solutions</a>
          <a href="#customers">Customers</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <div className="lang-switch">
            <button className="lang-btn active">KR</button>
            <span className="divider">/</span>
            <button className="lang-btn">EN</button>
          </div>
          <a href="#contact" className="btn btn-primary btn-sm">문의하기</a>
        </div>
      </div>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
          background: transparent;
        }
        .header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          padding: 15px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          backdrop-filter: blur(10px);
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-weight: 800;
          font-size: 1.4rem;
          color: var(--dark);
          letter-spacing: -0.5px;
        }
        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .nav a {
          font-weight: 500;
          font-size: 0.95rem;
          color: var(--dark);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav a:hover {
          color: var(--primary);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .lang-switch {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #888;
        }
        .lang-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-weight: 600;
          color: #888;
          padding: 0;
        }
        .lang-btn.active {
          color: var(--dark);
        }
        .btn-sm {
          padding: 8px 20px;
          font-size: 0.9rem;
          border-radius: 50px;
        }
        @media (max-width: 900px) {
          .nav { display: none; }
        }
      `}</style>
    </header>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">GnG International</div>
          <div className="footer-info">
            <p>주식회사 지앤지 인터내셔널 | 대표: 김동호</p>
            <p>경기도 성남시 분당구 판교로 289번길 20, 판교테크노밸리 스타트업캠퍼스 2동 5층</p>
            <p>Copyright © 2025 GnG International. All rights reserved.</p>
          </div>
        </div>
      </div>
      <style>{`
        .footer {
          background: #f8f9fa;
          color: #666;
          padding: 60px 0;
          border-top: 1px solid #eee;
        }
        .footer-logo {
          font-weight: 800;
          font-size: 1.2rem;
          margin-bottom: 20px;
          color: var(--dark);
        }
        .footer-info p {
          margin-bottom: 8px;
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

