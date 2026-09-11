import { ProjectItem } from "@/data/projects";
import { slugify } from "@/lib/slug";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: ProjectItem;
  featured?: boolean;
}) {
  return (
    <div
      id={`project-${slugify(project.title)}`}
      className={`scroll-mt-32 border rounded-2xl transition ${
        featured
          ? "border-[#C9914F]/25 bg-[#121821]/85 p-8 md:p-10 hover:border-[#C9914F]/45"
          : "border-white/10 bg-[#121821]/50 p-6 hover:bg-[#121821]/70"
      }`}
    >
      {featured && (
        <span className="mb-4 inline-block rounded-full border border-[#C9914F]/40 px-3 py-1 font-mono text-[11px] tracking-wide text-[#C9914F]">
          Featured
        </span>
      )}

      <h3
        className={`font-semibold text-white mb-3 ${
          featured ? "text-2xl md:text-3xl" : "text-xl"
        }`}
      >
        {project.title}
      </h3>

      <p className={`text-slate-300 mb-6 ${featured ? "text-lg" : "text-sm"}`}>
        {project.summary}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className={`border border-white/10 text-slate-200 rounded-full bg-white/10 ${
              featured ? "text-base px-4 py-2" : "text-xs px-3 py-1"
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      {featured && (
        <ul className="list-disc ml-6 space-y-3 text-slate-300 text-base md:text-lg leading-relaxed mb-6">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          className={`inline-block rounded-xl font-medium text-white transition ${
            featured
              ? "bg-[#C9914F] px-6 py-3 hover:bg-[#DAA968]"
              : "border border-white/15 px-4 py-2 text-sm hover:border-[#C9914F]/60 hover:text-[#C9914F]"
          }`}
        >
          View on GitHub
        </a>
      )}
    </div>
  );
}
