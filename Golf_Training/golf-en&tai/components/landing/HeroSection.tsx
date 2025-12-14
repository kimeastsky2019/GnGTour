"use client";

import Container from "./Container";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"
    >
      <Container className="flex flex-col gap-10 py-16 md:flex-row md:items-center md:py-24">
        <div className="flex-1">
          <p className="mb-4 inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-200">
            Golf Caddy Study & Career Program · Jungwon University
          </p>
          <h1 className="mb-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
            Study in Korea.
            <br />
            <span className="text-emerald-300">
              Build your career in the golf industry.
            </span>
          </h1>
          <p className="mb-6 max-w-xl text-sm text-slate-300 md:text-base">
            A specialized program at Jungwon University for international
            students: learn professional golf caddy skills, study Korean, gain
            real practice on the field, and receive full support toward
            employment in Korea.
          </p>
          <ul className="mb-8 space-y-2 text-sm text-slate-200">
            <li>🎓 Accredited program at Jungwon University</li>
            <li>🏌️ Real training & hands-on practice at golf courses in Korea</li>
            <li>🛫 Full support for D-2 / D-4 visas and relocation</li>
          </ul>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#final-cta"
              className="rounded-full bg-emerald-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300"
            >
              Get a Free Consultation
            </a>
            <span className="text-xs text-slate-400">
              Discover how you can move to Korea and start your golf career.
            </span>
          </div>
        </div>

        <div className="flex-1">
          <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-900/70 p-5 md:mt-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Your Path to Korea
            </p>
            <ol className="space-y-3 text-sm text-slate-200">
              <li>
                <span className="font-semibold">1. Short profile</span> – Tell
                us your goals, budget, and background.
              </li>
              <li>
                <span className="font-semibold">2. Program & visa matching</span>{" "}
                – We recommend the right track (D-2, D-4, or C-3).
              </li>
              <li>
                <span className="font-semibold">3. Admission & documents</span>{" "}
                – Support with university admission and paperwork.
              </li>
              <li>
                <span className="font-semibold">4. Arrival & training</span> –
                Start your life and golf career journey in Korea.
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
