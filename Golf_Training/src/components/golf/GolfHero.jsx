import React from 'react';
import { GraduationCap, Flag, Plane, Sparkles } from 'lucide-react';
import { useI18n } from '../../i18n/LanguageContext';

const GolfHero = () => {
  const { t } = useI18n();
  const { hero } = t;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles className="badge-icon" />
              <span>{hero.badge}</span>
            </div>
            <h1>{hero.title}</h1>
            <p className="hero-subtitle">
              {hero.subtitle}
            </p>

            <div className="hero-features">
              {hero.features.map((item, index) => {
                const Icon = [GraduationCap, Flag, Plane][index] || GraduationCap;
                return (
                  <div key={item} className="feature-item">
                    <div className="feature-icon-box">
                      <Icon className="icon" />
                    </div>
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>

            <div className="cta-group">
              <a href="#consultation" className="btn btn-primary btn-lg">
                {hero.cta}
              </a>
              <p className="cta-sub">
                {hero.ctaSub}
              </p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-wrapper">
              <img src={`${import.meta.env.BASE_URL}golf-university.png`} alt="Grand University Golf Course" />
              <div className="floating-card">
                <div className="stat">Open for 2025</div>
                <div className="label">Applications Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 180px 0 100px;
          background-color: #F6F3EA; /* Light beige background matches theme */
          overflow: hidden;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-content {
          max-width: 600px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: var(--primary);
          padding: 8px 16px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border: 1px solid rgba(214, 160, 76, 0.2);
        }
        .badge-icon { width: 16px; height: 16px; }
        
        h1 {
          font-size: 3.5rem;
          font-weight: 800;
          font-family: var(--font-heading);
          margin-bottom: 1.5rem;
          line-height: 1.1;
          color: var(--dark);
        }
        
        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2.5rem;
          color: var(--gray);
          line-height: 1.6;
        }

        .hero-features {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 3rem;
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--dark);
        }
        .feature-icon-box {
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          color: var(--secondary);
        }
        .icon {
          width: 20px;
          height: 20px;
        }

        .btn-lg {
          padding: 18px 36px;
          font-size: 1.1rem;
          box-shadow: 0 10px 20px rgba(15, 59, 46, 0.2);
        }
        .cta-sub {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: var(--gray);
        }

        /* Right Column Visual */
        .hero-visual {
          position: relative;
        }
        .image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: visible; /* Allow floating elements to stick out if needed, or hidden if contained */
        }
        .image-wrapper img {
          width: 100%;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15);
          transform: perspective(1000px) rotateY(-2deg);
          transition: transform 0.5s ease;
        }
        .image-wrapper:hover img {
          transform: perspective(1000px) rotateY(0deg);
        }
        
        .floating-card {
          position: absolute;
          bottom: 40px;
          left: -30px;
          background: white;
          padding: 1rem 1.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-left: 4px solid var(--secondary);
          animation: float 4s ease-in-out infinite;
        }
        .floating-card .stat {
          font-weight: 800;
          color: var(--dark);
          font-size: 1.1rem;
        }
        .floating-card .label {
          font-size: 0.85rem;
          color: var(--gray);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-content { margin: 0 auto; }
          .hero-visual { margin-top: 3rem; }
          .feature-item { justify-content: center; }
          .floating-card { left: 50%; transform: translateX(-50%); bottom: -20px; width: max-content; }
          @keyframes float {
             0% { transform: translate(-50%, 0px); }
             50% { transform: translate(-50%, -10px); }
             100% { transform: translate(-50%, 0px); }
          }
        }
      `}</style>
    </section>
  );
};

export default GolfHero;
