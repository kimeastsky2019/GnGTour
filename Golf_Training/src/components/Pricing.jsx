import React from 'react';
import { Check } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

const Pricing = () => {
    const { t } = useI18n();
    const { pricing } = t;

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">{pricing.title}</h2>
                <p className="section-subtitle">
                    {pricing.subtitle}
                </p>

                <div className="pricing-box">
                    <h3>{pricing.includesTitle}</h3>
                    <ul className="pricing-list">
                        {pricing.includes.map((item, index) => (
                            <li key={index}>
                                <Check className="check-icon" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="pricing-cta">
                        <a href="#consultation" className="btn btn-primary">
                            {pricing.cta}
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        .pricing-box {
          max-width: 700px;
          margin: 0 auto;
          background: white;
          border: 1px solid #eee;
          border-radius: 12px;
          padding: 3rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .pricing-box h3 {
          text-align: center;
          margin-bottom: 2rem;
          font-size: 1.5rem;
        }
        .pricing-list {
          margin-bottom: 2.5rem;
        }
        .pricing-list li {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        .pricing-list .check-icon {
          color: var(--primary);
          width: 20px;
          height: 20px;
        }
        .pricing-cta {
          text-align: center;
        }
      `}</style>
        </section>
    );
};

export default Pricing;
