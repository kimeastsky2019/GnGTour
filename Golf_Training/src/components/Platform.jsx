import React from 'react';
import { BarChart3, ShieldCheck, Workflow, Users, Globe2, Smartphone } from 'lucide-react';

const features = [
  {
    title: "Advanced Analytics",
    desc: "실시간 분석과 커스터마이징 가능한 대시보드로 비즈니스 성과를 한눈에 파악합니다.",
    icon: BarChart3,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Enterprise Security",
    desc: "엔드투엔드 암호화와 SSO, 국제 인증으로 은행 수준의 보안을 제공합니다.",
    icon: ShieldCheck,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Workflow Automation",
    desc: "반복 업무를 자동화하고, 프로세스를 표준화하는 워크플로 엔진을 제공합니다.",
    icon: Workflow,
    color: "bg-purple-50 text-purple-600"
  },
  {
    title: "Team Collaboration",
    desc: "실시간 공동 편집과 코멘트 기능으로 팀 협업을 강화합니다.",
    icon: Users,
    color: "bg-pink-50 text-pink-600"
  },
  {
    title: "Global Scalability",
    desc: "멀티 리전 배포와 현지화 지원으로 글로벌 비즈니스를 확장합니다.",
    icon: Globe2,
    color: "bg-green-50 text-green-600"
  },
  {
    title: "Mobile Ready",
    desc: "어디서나 동일한 경험을 제공하는 반응형 웹·모바일 앱을 제공합니다.",
    icon: Smartphone,
    color: "bg-orange-50 text-orange-600"
  }
];

const Platform = () => {
  return (
    <section className="platform-section" id="platform">
      <div className="container">
        <div className="section-header">
          <h2>GnG 플랫폼으로 할 수 있는 일</h2>
          <p>분석, 보안, 자동화, 협업까지 디지털 전환에 필요한 기능을 통합 제공합니다.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="card-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
              <div className={`feature-visual ${feature.color}`}>
                <feature.icon size={48} strokeWidth={1.5} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .platform-section {
          padding: 100px 0;
          background: #fff;
        }
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--dark);
        }
        .section-header p {
          font-size: 1.1rem;
          color: #666;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
        }
        .feature-card {
          border: 1px solid #eee;
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .card-content {
          padding: 30px;
        }
        .card-content h3 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: var(--dark);
        }
        .card-content p {
          color: #666;
          line-height: 1.6;
          font-size: 0.95rem;
        }
        .feature-visual {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f8f9fa;
          margin: 0 20px 20px;
          border-radius: 12px;
        }
        .bg-blue-50 { background-color: #eff6ff; }
        .text-blue-600 { color: #2563eb; }
        .bg-indigo-50 { background-color: #eef2ff; }
        .text-indigo-600 { color: #4f46e5; }
        .bg-purple-50 { background-color: #f5f3ff; }
        .text-purple-600 { color: #7c3aed; }
        .bg-pink-50 { background-color: #fdf2f8; }
        .text-pink-600 { color: #db2777; }
        .bg-green-50 { background-color: #f0fdf4; }
        .text-green-600 { color: #16a34a; }
        .bg-orange-50 { background-color: #fff7ed; }
        .text-orange-600 { color: #ea580c; }
      `}</style>
    </section>
  );
};

export default Platform;
