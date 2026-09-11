import { skills } from "@/data/skills";
import { slugify } from "@/lib/slug";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-white/10 rounded-2xl p-8 md:p-10 bg-[#121821]/70">
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">{title}</h3>
      <div className="h-1 w-12 rounded bg-[#C9914F]/60 mb-6" />

      <div className="flex flex-wrap gap-3">
        {items.map((s) => (
          <span
            key={s}
            id={`skill-${slugify(s)}`}
            className="text-base md:text-lg border border-white/10 text-slate-200 rounded-full px-4 py-2 bg-white/10 hover:bg-white/15 transition scroll-mt-32"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Skills</h2>

        <div className="grid lg:grid-cols-2 gap-6">
          <SkillGroup title="AI and Intelligent Systems" items={skills.ai_ml} />
          <SkillGroup title="Programming Languages" items={skills.languages} />
          <SkillGroup title="Full-Stack" items={skills.fullstack} />
          <SkillGroup title="Database and Data Engineering" items={skills.data} />
          <SkillGroup
            title="Cloud & Devops"
            items={[...skills.cloud_devops, ...skills.frameworks_tools]}
          />
          <SkillGroup title="Software Engineering" items={skills.methodology} />
        </div>
      </div>
    </section>
  );
}
