import Container from "./Container";

type ProblemCardProps = {
  title: string;
  description: string;
};

function ProblemCard({ title, description }: ProblemCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <h3 className="mb-2 text-sm font-semibold md:text-base">{title}</h3>
      <p className="text-sm text-slate-300">{description}</p>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section id="why-now" className="border-b border-slate-800 bg-slate-950">
      <Container className="py-16 md:py-20">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          Why is this a major opportunity right now?
        </h2>
        <p className="mb-8 max-w-3xl text-sm text-slate-300 md:text-base">
          Many young people dream of studying and working abroad, but they often
          face the same three challenges when they think about Korea and the
          golf industry.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ProblemCard
            title="No Clear Path"
            description="It’s hard to understand where to start, what to apply for, and which visa is correct."
          />
          <ProblemCard
            title="No Defined Career"
            description="You want a stable income and real profession, but don’t know which career has long-term potential."
          />
          <ProblemCard
            title="Fear of Moving Abroad"
            description="Language barriers, cultural differences, and lack of support make relocation feel risky."
          />
        </div>
        <p className="mt-8 text-sm text-slate-300">
          This program is designed to solve all these problems in one place.
        </p>
      </Container>
    </section>
  );
}
