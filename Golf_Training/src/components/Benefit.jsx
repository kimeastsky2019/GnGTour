import React from 'react';
import { TrendingUp, Award, Users, FileCheck, MessageCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useI18n } from '../i18n/LanguageContext';

const Benefit = () => {
    const { t } = useI18n();
    const { benefit } = t;
    const icons = [<TrendingUp />, <Award />, <Users />, <FileCheck />, <MessageCircle />, <Globe />];

    return (
        <section className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {benefit.title}
                </motion.h2>

                <div className="grid-3">
                    {benefit.items.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="card benefit-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="benefit-icon">{icons[index] || icons[0]}</div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style>{`
        .benefit-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2rem;
        }
        .benefit-icon {
          color: var(--secondary);
          margin-bottom: 1rem;
        }
        .benefit-icon svg {
          width: 40px;
          height: 40px;
        }
        .benefit-card h3 {
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
        }
        .benefit-card p {
          color: var(--gray);
          font-size: 0.95rem;
        }
      `}</style>
        </section>
    );
};

export default Benefit;
