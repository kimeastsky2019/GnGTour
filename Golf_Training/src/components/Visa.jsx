import React from 'react';
import { useI18n } from '../i18n/LanguageContext';

const Visa = () => {
    const { t } = useI18n();
    const { visa } = t;

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">{visa.title}</h2>
                <p className="section-subtitle">
                    {visa.subtitle}
                </p>

                <div className="grid-3">
                    {visa.cards.map((card) => (
                        <div className="card visa-card" key={card.badge}>
                            <div className="visa-badge">{card.badge}</div>
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="visa-outro">
                    <p>{visa.outro}</p>
                </div>
            </div>

            <style>{`
        .visa-card {
          text-align: center;
          border: 1px solid #eee;
        }
        .visa-badge {
          display: inline-block;
          background: var(--secondary);
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 700;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }
        .visa-card h3 {
          margin-bottom: 1rem;
        }
        .visa-outro {
          text-align: center;
          margin-top: 3rem;
          color: var(--gray);
        }
      `}</style>
        </section>
    );
};

export default Visa;
