import Container from "./Container";

export default function TargetSection() {
  return (
    <section id="target" className="border-b border-slate-800 bg-slate-950">
      <Container className="py-16 md:py-20">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          Who is this program for?
        </h2>
        <p className="mb-8 max-w-3xl text-sm text-slate-300 md:text-base">
          This program is ideal for young people who want more than just a
          short study trip – they want a real profession and future in Korea.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="mb-3 text-sm text-slate-200">
              This program is right for you if you:
            </p>
            <ul className="list-disc pl-4 text-sm text-slate-200">
              <li>Are 18–30 and interested in studying in Korea</li>
              <li>
                Want to build a career in golf, sports hospitality, or customer
                service
              </li>
              <li>Prefer a structured, legal, and safe path to move abroad</li>
              <li>
                Are ready to invest time and effort into learning and
                professional growth
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="mb-3 text-sm text-slate-200">
              And your goals might include:
            </p>
            <ul className="list-disc pl-4 text-sm text-slate-200">
              <li>Living in Korea for study and work</li>
              <li>Gaining international experience in a growing industry</li>
              <li>Finding a clear, realistic career path</li>
              <li>
                Having support from coordinators who understand international
                students&apos; needs
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
