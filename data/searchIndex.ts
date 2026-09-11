import { skills } from "./skills";
import { projects } from "./projects";
import { slugify } from "@/lib/slug";

export type SearchEntry = {
  label: string;
  type: "skill" | "project";
  category?: string;
  domId: string;
  sectionHref: string;
};

const skillCategoryLabels: Record<keyof typeof skills, string> = {
  ai_ml: "AI & Intelligent Systems",
  languages: "Programming Languages",
  fullstack: "Full-Stack",
  data: "Database & Data Engineering",
  cloud_devops: "Cloud & DevOps",
  frameworks_tools: "Cloud & DevOps",
  methodology: "Software Engineering",
};

function buildSkillEntries(): SearchEntry[] {
  const entries: SearchEntry[] = [];
  (Object.keys(skills) as (keyof typeof skills)[]).forEach((key) => {
    skills[key].forEach((item) => {
      entries.push({
        label: item,
        type: "skill",
        category: skillCategoryLabels[key],
        domId: `skill-${slugify(item)}`,
        sectionHref: "#skills",
      });
    });
  });
  return entries;
}

function buildProjectEntries(): SearchEntry[] {
  return projects.map((p) => ({
    label: p.title,
    type: "project",
    category: p.tech.join(", "),
    domId: `project-${slugify(p.title)}`,
    sectionHref: "#projects",
  }));
}

// Which projects used a given skill/tech — powers "jump to projects that use this"
export function projectsUsingSkill(skillLabel: string) {
  const needle = skillLabel.toLowerCase();
  return projects.filter((p) =>
    p.tech.some((t) => t.toLowerCase() === needle)
  );
}

function dedupe(entries: SearchEntry[]): SearchEntry[] {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.domId)) return false;
    seen.add(entry.domId);
    return true;
  });
}

export const searchIndex: SearchEntry[] = dedupe([
  ...buildSkillEntries(),
  ...buildProjectEntries(),
]);
