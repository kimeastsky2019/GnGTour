import Container from "./Container";

export default function FinalCTASection() {
  return (
    <section
      id="final-cta"
      className="bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <Container className="py-16 md:py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-semibold md:text-3xl">
            Ready to find out if this program is right for you?
          </h2>
          <p className="mb-8 text-sm text-slate-300 md:text-base">
            Submit your information, and our consultant will contact you with
            visa options, costs, and recommended tracks based on your language
            level and goals.
          </p>
        </div>
        <form className="mx-auto grid max-w-xl gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="Name" name="name" placeholder="Your full name" />
            <FormField
              label="Country of residence"
              name="country"
              placeholder="Where you live now"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <FormField label="Age" name="age" placeholder="e.g. 22" />
            <FormField
              label="WhatsApp / Telegram"
              name="messenger"
              placeholder="+66..., @username"
            />
          </div>
          <FormField
            label="Email"
            name="email"
            placeholder="you@example.com"
          />
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Which track are you interested in?
            </label>
            <select
              name="track"
              className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 focus:ring"
            >
              <option value="">Select an option</option>
              <option value="d2">University Degree (D-2)</option>
              <option value="d4">Korean Language + Degree (D-4 → D-2)</option>
              <option value="c3">Short Visit & Exploration (C-3)</option>
              <option value="unsure">Not sure yet / Need advice</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Tell us briefly about your situation
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="For example: current studies or job, language level, and what you hope to achieve in Korea."
              className="mt-1 w-full resize-none rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 focus:ring"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-emerald-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
          >
            Submit Application
          </button>
          <p className="text-center text-[10px] text-slate-500">
            By submitting this form, you agree that we may contact you about
            the golf caddy study program and related opportunities.
          </p>
        </form>
      </Container>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  placeholder?: string;
};

function FormField({ label, name, placeholder }: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none ring-emerald-500/40 focus:ring"
      />
    </div>
  );
}
