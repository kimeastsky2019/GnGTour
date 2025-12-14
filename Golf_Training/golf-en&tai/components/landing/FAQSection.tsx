import Container from "./Container";

const faqs = [
  {
    q: "Do I need to know Korean beforehand?",
    a: "No. You can start with the D-4 Korean language program and then move into the main program with a D-2 visa.",
  },
  {
    q: "What level of English do I need?",
    a: "Basic English is helpful but not required. Daily life will mostly involve Korean, and coordinators help you during the early stages.",
  },
  {
    q: "Can I work part-time during my studies?",
    a: "Yes, international students in Korea can work part-time under specific visa regulations. We will guide you based on your situation.",
  },
  {
    q: "Is employment guaranteed after graduation?",
    a: "We cannot legally guarantee a job, but practical training, coaching, and our partner network significantly improve your chances.",
  },
  {
    q: "How long does document preparation take?",
    a: "Typically 2–4 months, depending on your country and the track you choose. Starting early is always recommended.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="border-b border-slate-800 bg-slate-950">
      <Container className="py-16 md:py-20">
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-100">
                <span>{item.q}</span>
                <span className="text-xs text-slate-500 group-open:hidden">
                  +
                </span>
                <span className="hidden text-xs text-slate-500 group-open:inline">
                  −
                </span>
              </summary>
              <div className="mt-2 text-sm text-slate-300">{item.a}</div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
