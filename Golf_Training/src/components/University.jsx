import React from 'react';
import { useI18n } from '../i18n/LanguageContext';

const University = () => {
  const { t } = useI18n();
  const { university } = t;

  return (
    <section className="section bg-light">
      <div className="container">
        <h2 className="section-title">{university.title}</h2>

        <div className="uni-content">
          <div className="uni-text">
            <p className="uni-desc">
              {university.description}
            </p>
            <ul className="uni-list">
              {university.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="uni-image">
            <div className="uni-visual">
              <div className="uni-visual-title">{university.visualTitle}</div>
              <p>{university.visualSubtitle}</p>
              <div className="uni-visual-tags">
                {university.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .uni-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .uni-desc {
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        .uni-list {
          list-style: disc;
          padding-left: 1.5rem;
        }
        .uni-list li {
          margin-bottom: 1rem;
          font-size: 1.05rem;
        }
        .uni-image img {
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        .uni-visual {
          background: linear-gradient(140deg, rgba(15, 59, 46, 0.9), rgba(15, 59, 46, 0.7)), url('${import.meta.env.BASE_URL}golf-university.png');
          background-size: cover;
          background-position: center;
          color: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(15, 59, 46, 0.25);
          position: relative;
          overflow: hidden;
        }
        .uni-visual-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .uni-visual-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .uni-visual-tags span {
          background: rgba(255,255,255,0.14);
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .uni-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default University;
