import React from 'react';
import { useI18n } from '../i18n/LanguageContext';

const Curriculum = () => {
    const { t } = useI18n();
    const { curriculum } = t;

    return (
        <section className="section bg-light">
            <div className="container">
                <h2 className="section-title">{curriculum.title}</h2>

                <div className="timeline">
                    {curriculum.steps.map((step, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-time">{step.time}</div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="timeline-note">{curriculum.note}</p>
            </div>

            <style>{`
        .timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          padding-left: 30px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--primary-light);
        }
        .timeline-item {
          margin-bottom: 3rem;
          position: relative;
        }
        .timeline-marker {
          position: absolute;
          left: -36px;
          top: 0;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--primary);
          border: 2px solid white;
          box-shadow: 0 0 0 2px var(--primary);
        }
        .timeline-time {
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          font-size: 0.9rem;
        }
        .timeline-content h3 {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        .timeline-content p {
          color: var(--gray);
        }
        .timeline-note {
          text-align: center;
          color: var(--gray);
          margin-top: 2rem;
          font-size: 0.95rem;
        }
      `}</style>
        </section>
    );
};

export default Curriculum;
