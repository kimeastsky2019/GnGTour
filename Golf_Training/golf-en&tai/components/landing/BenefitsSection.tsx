import Container from "./Container";

const benefits = [
  {
    title: "A High-Demand Career",
    description:
      "Learn structured golf caddy skills and professional customer service for real golf course environments.",
  },
  {
    title: "Study at Jungwon University",
    description:
      "Gain education at a Korean university with opportunities in sports, hospitality, and tourism.",
  },
  {
    title: "Real Practice & Employment Support",
    description:
      "Hands-on training at partnered golf courses plus help with job search and career planning.",
  },
  {
    title: "Legal & Safe Pathway to Korea",
    description:
      "Guidance for D-2, D-4, and C-3 visas, including required documents and timelines.",
  },
  {
    title: "Language & Life Support",
    description:
      "Coordinators support you with Korean language learning, adaptation, and daily life issues.",
  },
  {
    title: "Long-Term Opportunities",
    description:
      "Build international experience and open doors for a long-term career in Korea.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="border-b border-slate-800 bg-slate-950">
      <Container className="py-16 md:py-20">
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
          What will you gain?
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
            >
              <h3 className="mb-2 text-sm font-semibold md:text-base">
                {b.title}
              </h3>
              <p className="text-sm text-slate-300">{b.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
