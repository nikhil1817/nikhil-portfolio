export default function About() {
  const highlights = [
    { label: "Location", value: "Kalamazoo, MI" },
    { label: "Experience", value: "3+ years" },
    { label: "Focus", value: "Full-Stack + ML/NLP" },
    { label: "Education", value: "MS CS (June 2026)" },
  ];

  return (
    <section id="about" className="px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
          About <span className="text-blue-400">Nikhil</span>
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main text card */}
          <div className="lg:col-span-2 border border-white/10 rounded-2xl p-8 md:p-10 bg-[#020617]/60">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              I’m <span className="text-white font-semibold">Nikhil Krishnaprasad</span>, a Software Engineer
              with 3+ years of experience building scalable full-stack applications, real-time systems, and
              ML/NLP solutions. I enjoy turning complex problems into clean, maintainable software and
              building intelligent, data-driven products. I’m currently pursuing my Master’s in Computer
              Science at Western Michigan University.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Software Engineering",
                "ML & Data Systems",
                "NLP (Transformers/BERT)",
                "Next.js / React / Node",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm md:text-base text-slate-200 hover:bg-white/15 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Highlights card */}
          <div className="border border-white/10 rounded-2xl p-8 md:p-10 bg-[#020617]/60">
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
              Highlights
            </h3>
            <div className="h-1 w-12 rounded bg-blue-500/60 mb-6" />

            <div className="space-y-5">
              {highlights.map((h) => (
                <div key={h.label} className="flex items-start justify-between gap-4">
                  <p className="text-slate-400">{h.label}</p>
                  <p className="text-slate-200 font-medium text-right">{h.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#projects"
                className="inline-block w-full text-center rounded-xl bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-400 transition"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
