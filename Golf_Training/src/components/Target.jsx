import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

const Target = () => {
  const { t } = useI18n();
  const { target } = t;

  return (
    <section className="section bg-light">
      <div className="container">
        <div className="target-grid">
          <div className="target-content">
            <h2 className="section-title align-left">{target.title}</h2>
            <p className="section-subtitle align-left">{target.subtitle}</p>

            <div className="target-list-container">
              <ul className="target-list">
                {target.items.map((item, index) => (
                  <li key={index} className="target-item">
                    <CheckCircle className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="target-image">
            <img src={`${import.meta.env.BASE_URL}golf-lifestyle.png`} alt="Golf Lifestyle" />
          </div>
        </div>
      </div>

      <style>{`
        .target-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .target-content {
          text-align: left;
        }
        .align-left {
          text-align: left;
          margin-left: 0;
        }
        .target-list-container {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }
        .target-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .target-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          font-size: 1.1rem;
          color: var(--dark);
        }
        .check-icon {
          color: var(--primary);
          min-width: 24px;
          margin-top: 2px;
        }
        .target-image img {
          width: 100%;
          height: auto;
          border-radius: 24px;
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15);
        }
        @media (max-width: 900px) {
          .target-grid { grid-template-columns: 1fr; }
          .target-image { order: -1; margin-bottom: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Target;
