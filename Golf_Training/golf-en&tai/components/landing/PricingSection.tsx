import Container from "./Container";

type PricingCardProps = {
  title: string;
  description: string;
};

function PricingCard({ title, description }: PricingCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <h3 className="mb-2 text-sm font-semibold md:text-base">{title}</h3>
      <p className="text-sm text-slate-300">{description}</p>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="border-b border-slate-800 bg-slate-950">
      <Container className="py-16 md:py-20">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          Pricing & What&apos;s Included
        </h2>
        <p className="mb-8 max-w-3xl text-sm text-slate-300 md:text-base">
          The exact cost depends on the track (D-2, D-4, or C-3) and program
          length. During your consultation, we&apos;ll help design a plan that
          matches your budget and goals.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <PricingCard
            title="Track D-2 — University Degree"
            description="Long-term academic study at Jungwon University plus professional caddy training."
          />
          <PricingCard
            title="Track D-4 → D-2 — Language + Degree"
            description="Start with Korean language study, then move into the degree program and professional track."
          />
          <PricingCard
            title="Track C-3 — Short Visit"
            description="Short-term visit to explore the campus, golf courses, and program before making a long-term decision."
          />
        </div>
        <ul className="mt-6 list-disc pl-4 text-sm text-slate-300">
          <li>Program & visa consultation and guidance</li>
          <li>Document preparation and pre-check</li>
          <li>Admission support for Jungwon University or language course</li>
          <li>Theory and practical training as part of the program</li>
          <li>Partial support for dormitory or recommended housing</li>
          <li>Coordinator support during your stay in Korea</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">
          Exact tuition, housing costs, and payment plans can be discussed in
          detail during your consultation.
        </p>
      </Container>
    </section>
  );
}
