import Container from "./Container";

type StepProps = {
  step: number;
  title: string;
  description: string;
};

function RoadmapStep({ step, title, description }: StepProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 md:p-5">
      <div className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-400 text-sm font-bold text-slate-950">
        {step}
      </div>
      <div>
        <h3 className="mb-1 text-sm font-semibold md:text-base">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
    </div>
  );
}

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="border-b border-slate-800 bg-slate-950">
      <Container className="py-16 md:py-20">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          How does the training work?
        </h2>
        <p className="mb-8 max-w-3xl text-sm text-slate-300 md:text-base">
          Here is an example of a typical journey if you start from Korean
          language study and move into the main program.
        </p>
        <div className="space-y-4">
          <RoadmapStep
            step={1}
            title="Months 1–6: Korean Language + Golf Basics"
            description="Intensive Korean language study plus introduction to golf rules, etiquette, and caddy fundamentals."
          />
          <RoadmapStep
            step={2}
            title="Months 7–24: University Classes + Professional Training"
            description="Academic coursework at Jungwon University, combined with specialized training in golf caddy work, service, and golf club operations."
          />
          <RoadmapStep
            step={3}
            title="On-Site Practice at Golf Courses"
            description="Hands-on practice at partnered golf courses, interacting with clients, staff, and real golf environments."
          />
          <RoadmapStep
            step={4}
            title="Career Support & Job Search"
            description="Guidance on resumes, job applications, and finding opportunities in Korea’s golf industry."
          />
        </div>
      </Container>
    </section>
  );
}
