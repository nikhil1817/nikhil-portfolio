import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Projects</h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border border-white/10 rounded-2xl p-8 md:p-10 bg-[#020617]/60 hover:bg-[#020617]/75 transition"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                {p.title}
              </h3>
              <p className="text-slate-300 text-lg mb-6">{p.summary}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-base border border-white/10 text-slate-200 rounded-full px-4 py-2 bg-white/10"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <ul className="list-disc ml-6 space-y-3 text-slate-300 text-base md:text-lg leading-relaxed mb-6">
                {p.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  className="inline-block rounded-xl bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-400 transition"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
