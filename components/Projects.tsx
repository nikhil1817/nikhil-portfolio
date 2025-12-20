import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <div key={p.title} className="border rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600 mb-4">{p.summary}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="text-sm border rounded-full px-3 py-1">
                  {t}
                </span>
              ))}
            </div>

            <ul className="list-disc ml-5 space-y-2 text-gray-700 mb-4">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            {p.github && (
              <a
                href={p.github}
                target="_blank"
                className="inline-block px-4 py-2 border rounded-lg"
              >
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
