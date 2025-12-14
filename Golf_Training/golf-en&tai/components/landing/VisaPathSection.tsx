import Container from "./Container";

type VisaCardProps = {
  title: string;
  description: string;
  bullets: string[];
};

function VisaCard({ title, description, bullets }: VisaCardProps) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <h3 className="mb-2 text-sm font-semibold md:text-base">{title}</h3>
      <p className="mb-3 text-sm text-slate-300">{description}</p>
      <ul className="mt-auto list-disc pl-4 text-xs text-slate-400">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function VisaPathSection() {
  return (
    <section id="visa" className="border-b border-slate-800 bg-slate-950">
      <Container className="py-16 md:py-20">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          Visas and your pathway to Korea
        </h2>
        <p className="mb-8 max-w-3xl text-sm text-slate-300 md:text-base">
          We help you select the right visa and guide you from application to
          arrival in Korea.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <VisaCard
            title="D-2 — Student Visa"
            description="For students admitted to Jungwon University’s academic programs."
            bullets={[
              "Long-term stay in Korea",
              "Renewable based on study duration",
              "Ideal for full degree programs",
            ]}
          />
          <VisaCard
            title="D-4 — Korean Language Visa"
            description="For intensive Korean language study and preparation for academic programs."
            bullets={[
              "Start with language and cultural adaptation",
              "Transition to D-2 after language improvement",
              "Great for beginners in Korean",
            ]}
          />
          <VisaCard
            title="C-3 — Short-Term Visit Visa"
            description="For short visits, tours, and exploration trips before making a long-term decision."
            bullets={[
              "2–10 day visit to Korea",
              "Tour the campus and golf courses",
              "Discuss long-term options with advisors",
            ]}
          />
        </div>
        <p className="mt-6 text-sm text-slate-300">
          At each stage, you&apos;ll receive clear instructions, document
          checklists, and support from our team.
        </p>
      </Container>
    </section>
  );
}
