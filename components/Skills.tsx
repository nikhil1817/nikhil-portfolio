import { skills } from "@/data/skills";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border rounded-xl p-5">
      <h3 className="font-semibold mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="text-sm border rounded-full px-3 py-1">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-20 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Skills</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <SkillGroup title="AI / ML" items={skills.ai_ml} />
        <SkillGroup title="Programming Languages" items={skills.languages} />
        <SkillGroup title="Full-Stack" items={skills.fullstack} />
        <SkillGroup title="Data" items={skills.data} />
        <SkillGroup title="Cloud & Tools" items={[...skills.cloud_devops, ...skills.frameworks_tools]} />
        <SkillGroup title="Methodology" items={skills.methodology} />
      </div>
    </section>
  );
}
