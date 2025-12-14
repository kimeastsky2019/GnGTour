import Container from "./Container";

type TrackCardProps = {
  title: string;
  body: string;
  bullets: string[];
  highlight?: boolean;
};

function TrackCard({ title, body, bullets, highlight }: TrackCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-5 ${
        highlight
          ? "border-emerald-500/40 bg-emerald-500/5"
          : "border-slate-800 bg-slate-900/70"
      }`}
    >
      <h3 className="mb-2 text-sm font-semibold md:text-base">{title}</h3>
      <p className="mb-3 text-sm text-slate-200">{body}</p>
      <ul className="mt-auto list-disc pl-4 text-xs text-slate-300">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function ProgramSection() {
  return (
    <section id="program" className="border-b border-slate-800 bg-slate-950">
      <Container className="py-16 md:py-20">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          What is this program?
        </h2>
        <p className="mb-10 max-w-3xl text-sm text-slate-300 md:text-base">
          This is a joint program between Jungwon University and partnered golf
          clubs in Korea, created specifically for international students. You
          will gain education, professional training, and relocation support
          into one of Korea&apos;s fastest-growing industries—the golf
          industry.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <TrackCard
            title="Track 1: University Degree (Visa D-2)"
            body="Enroll in Jungwon University’s academic program, receive professional golf caddy training, and build a long-term career path in Korea."
            bullets={[
              "Long-term stay in Korea",
              "Academic degree + caddy skills",
              "Career development opportunities",
            ]}
            highlight
          />
          <TrackCard
            title="Track 2: Korean Language + Career (Visa D-4 → D-2)"
            body="Start with intensive Korean, learn caddy fundamentals, then transition into the main university program with a D-2 visa."
            bullets={[
              "Ideal if you’re new to Korean",
              "Step-by-step adaptation",
              "Clear path from language to degree",
            ]}
          />
          <TrackCard
            title="Track 3: Short Visit & Exploration (Visa C-3)"
            body="Visit Korea for 2–10 days, see the campus and golf courses, and get guidance before you commit to a long-term plan."
            bullets={[
              "Perfect for testing the waters",
              "Campus & golf course tours",
              "Consultation about long-term options",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
