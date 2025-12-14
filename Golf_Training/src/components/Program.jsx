import React from 'react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/LanguageContext';

const Program = () => {
  const { t } = useI18n();
  const { program } = t;

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{program.title}</h2>
          <p className="section-subtitle">{program.subtitle}</p>
        </motion.div>

        <div className="program-layout">
          <motion.div
            className="program-image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="program-visual">
              <div className="visual-title">{program.visualTitle}</div>
              <ul>
                {program.visualList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="visual-note">{program.visualNote}</div>
            </div>
          </motion.div>

          <div className="program-tracks">
            {program.tracks.map((item, index) => (
              <motion.div
                key={item.title}
                className="card program-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="track-badge">{item.badge}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .program-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }
        .program-visual {
          border-radius: 24px;
          padding: 2.5rem;
          background: linear-gradient(145deg, rgba(15, 59, 46, 0.9), rgba(15, 59, 46, 0.8)), url('${import.meta.env.BASE_URL}golf-program.png');
          background-size: cover;
          background-position: center;
          color: white;
          box-shadow: 0 20px 60px -10px rgba(15, 59, 46, 0.25);
          position: relative;
          overflow: hidden;
        }
        .program-visual .visual-title {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.8);
        }
        .program-visual ul {
          list-style: disc;
          padding-left: 1.5rem;
          display: grid;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .visual-note {
          font-weight: 700;
          color: var(--secondary);
        }
        .program-tracks {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .program-card {
          position: relative;
          border-left: 4px solid var(--primary);
          border-top: none;
          padding: 2rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .track-badge {
          position: absolute;
          top: 2rem;
          right: 2rem;
          background: var(--light);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .program-card h3 {
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
          text-align: left;
          padding-right: 80px;
        }
        .program-card p {
          color: var(--gray);
          text-align: left;
          font-size: 0.95rem;
        }
        @media (max-width: 900px) {
          .program-layout { grid-template-columns: 1fr; }
          .program-image { order: -1; margin-bottom: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Program;
