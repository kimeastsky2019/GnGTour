import React, { useState, useEffect } from 'react';
import { useI18n } from '../../i18n/LanguageContext';

export const GolfHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t, languages } = useI18n();

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
        <div className="logo">
          <img src={`${import.meta.env.BASE_URL}gng-logo.png`} alt="GnG Tour" />
          <span className="logo-text">GnG Tour</span>
        </div>
        <nav className="nav">
          <a href="#program">{t.nav.program}</a>
          <a href="#benefits">{t.nav.benefits}</a>
          <a href="#faq">{t.nav.faq}</a>
          <div className="lang-switch">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-btn ${language === lang.code ? 'active' : ''}`}
                onClick={() => setLanguage(lang.code)}
                type="button"
              >
                {lang.label}
              </button>
            ))}
          </div>
          <a href="#consultation" className="btn-nav">{t.nav.consultation}</a>
        </nav>
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
          background: rgba(246, 243, 234, 0.75);
          color: var(--dark);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(0,0,0,0.03);
        }
        .header.scrolled {
          background: rgba(255, 255, 255, 0.95);
          padding: 15px 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 12px;
        }
        .logo-text {
          font-weight: 800;
          font-size: 20px;
          color: var(--primary);
          letter-spacing: -0.5px;
          font-family: var(--font-heading);
        }
        .logo img {
          height: 40px;
          width: auto;
        }
        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .lang-switch {
          display: flex;
          gap: 0.25rem;
          align-items: center;
          padding: 4px;
          background: rgba(0,0,0,0.04);
          border-radius: 999px;
        }
        .lang-btn {
          border: none;
          background: transparent;
          padding: 6px 10px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 0.85rem;
          cursor: pointer;
          color: var(--dark);
        }
        .lang-btn.active {
          background: var(--primary);
          color: white;
        }
        .nav a {
          font-weight: 500;
          font-size: 0.95rem;
        }
        .nav a:hover {
          color: var(--primary);
        }
        .btn-nav {
          background: var(--secondary);
          color: var(--dark);
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 600;
        }
        .header.scrolled .btn-nav {
          background: var(--primary);
          color: white;
        }
        @media (max-width: 768px) {
          .nav { display: none; } /* Mobile menu not implemented for simplicity */
        }
      `}</style>
    </header>
  );
};

export const GolfFooter = () => {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={`${import.meta.env.BASE_URL}gng-logo.png`} alt="GnG Tour" style={{ height: '50px' }} />
          </div>
          <p>{t.footer.note}</p>
          <div className="footer-license">
            <div className="license-title">관광사업 등록증</div>
            <div className="license-columns">
              <div className="license-block">
                <div>상호: 주식회사 지앤지 인터내셔널</div>
                <div>성명: 김동호</div>
                <div>주소: 경기도 성남시 분당구 판교로 289번길 20, 판교테크노밸리 스타트업캠퍼스 2동 5층 (삼평동)</div>
                <div>업종: 종합여행업 (제 2025-000013호)</div>
              </div>
              <div className="license-block">
                <div>Свидетельство о регистрации туристической компании</div>
                <div>Торговое название: G&amp;G International Co., Ltd.</div>
                <div>Представитель: Ким Донхо</div>
                <div>Адрес: 289beon-gil, Pangyoro 20, Bundang-gu, Seongnam-si, Gyeonggi-do, Pangyo Techno Valley Startup Campus, корпус 2, 5 этаж (Сампхён-дон)</div>
                <div>Вид деятельности: комплексное туристическое агентство (№ 2025-000013)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .footer {
          background: var(--dark);
          color: white;
          padding: 3rem 0;
          text-align: center;
        }
        .footer-logo {
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 1rem;
        }
        .footer p {
          color: #999;
          font-size: 0.9rem;
        }
        .footer-license {
          margin-top: 1.5rem;
          color: #ccd3e0;
          text-align: left;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          padding: 1.2rem;
        }
        .license-title {
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: white;
        }
        .license-columns {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }
        .license-block {
          font-size: 0.9rem;
          line-height: 1.5;
        }
      `}</style>
    </footer>
  );
};
