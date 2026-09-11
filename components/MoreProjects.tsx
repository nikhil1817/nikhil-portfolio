"use client";

import { useState } from "react";
import { ProjectItem } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export default function MoreProjects({ projects }: { projects: ProjectItem[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-10">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="flex items-center gap-2 font-mono text-sm text-white/60 hover:text-[#C9914F] transition"
      >
        <span>{expanded ? "Hide" : "Show"} {projects.length} more projects</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {expanded && (
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      )}
    </div>
  );
}
