import { skills } from "@/data/skills";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-white/10 rounded-2xl p-8 md:p-10 bg-[#020617]/60">
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">{title}</h3>
      <div className="h-1 w-12 rounded bg-blue-500/60 mb-6" />

      <div className="flex flex-wrap gap-3">
        {items.map((s) => (
          <span
            key={s}
            className="text-base md:text-lg border border-white/10 text-slate-200 rounded-full px-4 py-2 bg-white/10 hover:bg-white/15 transition"
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
          <SkillGroup title="AI / ML" items={skills.ai_ml} />
          <SkillGroup title="Programming Languages" items={skills.languages} />
          <SkillGroup title="Full-Stack" items={skills.fullstack} />
          <SkillGroup title="Data" items={skills.data} />
          <SkillGroup
            title="Cloud & Tools"
            items={[...skills.cloud_devops, ...skills.frameworks_tools]}
          />
          <SkillGroup title="Methodology" items={skills.methodology} />
        </div>
      </div>
    </section>
  );
}
