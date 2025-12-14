import Container from "./Container";

export default function UniversitySection() {
  return (
    <section id="university" className="border-b border-slate-800 bg-slate-950">
      <Container className="py-16 md:py-20">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
          Jungwon University
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm text-slate-300 md:text-base">
              Jungwon University is a modern private university in Korea known
              for its programs in sports, hospitality, and tourism. The school
              welcomes international students and provides a supportive
              environment for those who want to grow academically and
              professionally.
            </p>
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Safe and scenic campus environment</li>
              <li>Dormitory and facilities for international students</li>
              <li>Active student life with clubs and events</li>
              <li>
                Partnerships with golf clubs for training and employment
                opportunities
              </li>
            </ul>
          </div>
          <div>
            <div className="h-56 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
            <p className="mt-3 text-xs text-slate-500">
              (Placeholder for campus or golf course photo. Replace with a real
              image later.)
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
