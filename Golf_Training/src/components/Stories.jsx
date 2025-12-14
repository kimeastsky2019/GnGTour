import React from 'react';
import { Quote } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

const Stories = () => {
  const { t } = useI18n();
  const { stories } = t;

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{stories.title}</h2>
        <p className="section-subtitle">
          {stories.subtitle}
        </p>

        <div className="grid-3">
          {stories.items.map((story) => (
            <div key={story.name} className="card story-card">
              <Quote className="story-icon" />
              <div className="story-meta">
                <span className="story-name">{story.name}</span>
                <span className="story-track">{story.track}</span>
              </div>
              <p className="story-quote">“{story.quote}”</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .story-card {
          position: relative;
          min-height: 260px;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: linear-gradient(160deg, rgba(255,255,255,0.95), rgba(246, 243, 234, 0.9));
        }
        .story-icon {
          color: var(--secondary);
          width: 24px;
          height: 24px;
        }
        .story-meta {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .story-name {
          font-weight: 700;
        }
        .story-track {
          color: var(--primary);
          font-size: 0.95rem;
        }
        .story-quote {
          color: var(--gray);
        }
      `}</style>
    </section>
  );
};

export default Stories;
