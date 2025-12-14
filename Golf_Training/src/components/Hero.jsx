import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-text">
          <div className="hero-tagline">AI · DATA · PLATFORM</div>
          <h1>AI와 데이터로 산업의<br />미래를 설계하는 기술 기업</h1>
          <p className="hero-desc">
            지엔지인터내셔널은 교육, 에너지, 제조, 공공 분야의 디지털 전환을<br className="desktop-br" />
            실질적인 비즈니스 성과로 연결하는 AI 기반 플랫폼 기업입니다.
          </p>
          <div className="hero-actions">
            <a href="#platform" className="btn btn-primary">플랫폼 둘러보기</a>
            <a href="#contact" className="btn btn-outline">데모 요청</a>
          </div>
          <p className="hero-footer-text">에너지, 교육, 공공 프로젝트에서 검증된 AI · 데이터 솔루션</p>
        </div>

        <div className="hero-image">
          <div className="dashboard-mockup">
            <div className="mockup-header">
              <div className="dots">
                <span></span><span></span><span></span>
              </div>
              <div className="address-bar">gng-platform.com/dashboard</div>
            </div>
            <div className="mockup-body">
              <div className="sidebar">
                <div className="sidebar-item active"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
                <div className="sidebar-item"></div>
              </div>
              <div className="main-view">
                <div className="chart-row">
                  <div className="chart-card lg">
                    <div className="chart-title">Revenue Growth</div>
                    <div className="chart-placeholder bar-chart">
                      <div className="bar" style={{ height: '40%' }}></div>
                      <div className="bar" style={{ height: '60%' }}></div>
                      <div className="bar" style={{ height: '75%' }}></div>
                      <div className="bar" style={{ height: '50%' }}></div>
                      <div className="bar" style={{ height: '85%' }}></div>
                      <div className="bar" style={{ height: '95%' }}></div>
                    </div>
                  </div>
                  <div className="chart-card sm">
                    <div className="chart-title">User Activity</div>
                    <div className="chart-placeholder pie-chart"></div>
                  </div>
                </div>
                <div className="chart-row">
                  <div className="chart-card full">
                    <div className="chart-title">System Performance</div>
                    <div className="chart-placeholder wave-chart"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mockup-label">GnG 플랫폼 대시보드 예시</div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 180px 0 100px;
          background: #fff;
          overflow: hidden;
        }
        .hero-container {
          display: flex;
          align-items: center;
          gap: 60px;
        }
        .hero-text {
          flex: 1;
          max-width: 600px;
        }
        .hero-tagline {
          color: var(--primary);
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 2px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .hero h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 24px;
          color: #111;
          letter-spacing: -1px;
        }
        .hero-desc {
          font-size: 1.15rem;
          color: #555;
          line-height: 1.7;
          margin-bottom: 40px;
        }
        .hero-actions {
          display: flex;
          gap: 16px;
          margin-bottom: 40px;
        }
        .btn {
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .btn-primary {
          background: var(--primary);
          color: white;
          border: 2px solid var(--primary);
        }
        .btn-primary:hover {
          background: var(--primary-dark);
          border-color: var(--primary-dark);
          transform: translateY(-2px);
        }
        .btn-outline {
          background: transparent;
          color: var(--dark);
          border: 2px solid #ddd;
        }
        .btn-outline:hover {
          border-color: var(--dark);
          background: var(--dark);
          color: white;
          transform: translateY(-2px);
        }
        .hero-footer-text {
          font-size: 0.9rem;
          color: #888;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .hero-footer-text::before {
          content: '';
          display: block;
          width: 20px;
          height: 2px;
          background: #ddd;
        }
        
        .hero-image {
          flex: 1.2;
          position: relative;
        }
        .dashboard-mockup {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 40px 80px -20px rgba(0,0,0,0.15);
          border: 1px solid #eee;
          overflow: hidden;
          position: relative;
        }
        .mockup-header {
          background: #f8f9fa;
          padding: 12px 20px;
          border-bottom: 1px solid #eee;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .dots {
          display: flex;
          gap: 6px;
        }
        .dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ddd;
        }
        .dots span:nth-child(1) { background: #ff5f56; }
        .dots span:nth-child(2) { background: #ffbd2e; }
        .dots span:nth-child(3) { background: #27c93f; }
        .address-bar {
          background: #fff;
          border-radius: 6px;
          padding: 4px 12px;
          font-size: 0.8rem;
          color: #999;
          flex: 1;
          text-align: center;
          border: 1px solid #eee;
        }
        .mockup-body {
          display: flex;
          height: 400px;
          background: #fcfcfc;
        }
        .sidebar {
          width: 60px;
          background: #1e293b;
          padding: 20px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .sidebar-item {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255,255,255,0.1);
        }
        .sidebar-item.active {
          background: var(--primary);
        }
        .main-view {
          flex: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .chart-row {
          display: flex;
          gap: 20px;
        }
        .chart-card {
          background: #fff;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
          border: 1px solid #eee;
        }
        .chart-card.lg { flex: 2; }
        .chart-card.sm { flex: 1; }
        .chart-card.full { flex: 1; width: 100%; }
        .chart-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 12px;
        }
        .chart-placeholder {
          background: #f8f9fa;
          border-radius: 8px;
          height: 120px;
          position: relative;
        }
        .bar-chart {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          padding-bottom: 10px;
          gap: 8px;
        }
        .bar {
          width: 12%;
          background: var(--primary);
          border-radius: 4px 4px 0 0;
          opacity: 0.8;
        }
        .pie-chart {
          border-radius: 50%;
          width: 100px;
          height: 100px;
          margin: 10px auto;
          background: conic-gradient(var(--primary) 0% 60%, #e2e8f0 60% 100%);
        }
        .wave-chart {
          background: linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
          border-bottom: 2px solid var(--primary);
        }
        .mockup-label {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          backdrop-filter: blur(4px);
        }

        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
          }
          .hero-text { margin-bottom: 40px; }
          .hero-actions { justify-content: center; }
          .hero-footer-text { justify-content: center; }
          .hero-footer-text::before { display: none; }
          .hero h1 { font-size: 2.5rem; }
          .desktop-br { display: none; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

