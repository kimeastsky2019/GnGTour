import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useI18n } from '../i18n/LanguageContext';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item" onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h3>{question}</h3>
                {isOpen ? <ChevronUp /> : <ChevronDown />}
            </div>
            {isOpen && <div className="faq-answer"><p>{answer}</p></div>}
        </div>
    );
};

const FAQ = () => {
    const { t } = useI18n();
    const { faq } = t;

    return (
        <section className="section bg-light">
            <div className="container">
                <h2 className="section-title">{faq.title}</h2>

                <div className="faq-list">
                    {faq.items.map((item, index) => (
                        <FAQItem key={index} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>

            <style>{`
        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }
        .faq-item {
          background: white;
          margin-bottom: 1rem;
          border-radius: 8px;
          padding: 1.5rem;
          cursor: pointer;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }
        .faq-item:hover {
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-question h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }
        .faq-answer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #eee;
          color: var(--gray);
        }
      `}</style>
        </section>
    );
};

export default FAQ;
