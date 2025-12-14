import React from 'react';
import { MapPin, Briefcase, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/LanguageContext';

const Problem = () => {
  const { t } = useI18n();
  const { problem } = t;
  const icons = [<MapPin />, <Briefcase />, <Heart />];

  return (
    <section className="section bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{problem.title}</h2>
          <p className="section-subtitle">{problem.subtitle}</p>
        </motion.div>

        <div className="grid-3">
          {problem.cards.map((item, index) => (
            <motion.div
              key={item.title}
              className="card problem-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="icon-box">
                {icons[index] || icons[0]}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="problem-outro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>{problem.outro}</p>
        </motion.div>
      </div>

      <style>{`
        .bg-light { background-color: var(--light); }
        .problem-card {
          text-align: center;
          padding: 2.5rem 2rem;
        }
        .icon-box {
          width: 60px;
          height: 60px;
          background: rgba(102, 199, 179, 0.15);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }
        .icon-box svg {
          width: 30px;
          height: 30px;
        }
        .problem-card h3 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }
        .problem-card p {
          color: var(--gray);
        }
        .problem-outro {
          text-align: center;
          margin-top: 3rem;
          font-size: 1.2rem;
          font-weight: 600;
          color: var(--primary);
        }
      `}</style>
    </section>
  );
};

export default Problem;
