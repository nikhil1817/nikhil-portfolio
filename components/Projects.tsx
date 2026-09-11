import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import MoreProjects from "./MoreProjects";

const FEATURED_COUNT = 4;

export default function Projects() {
  const featured = projects.slice(0, FEATURED_COUNT);
  const rest = projects.slice(FEATURED_COUNT);

  return (
    <section id="projects" className="px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Projects</h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.title} project={p} featured />
          ))}
        </div>

        {rest.length > 0 && <MoreProjects projects={rest} />}
      </div>
    </section>
  );
}
