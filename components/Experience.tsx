import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-white">Experience</h2>

        <div className="relative">
          {/* timeline rail — justified here since roles are strictly chronological */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10 hidden md:block" />

          <div className="space-y-14">
            {experience.map((item) => (
              <div
                key={`${item.company}-${item.role}`}
                className="relative md:pl-10"
              >
                <span className="absolute left-0 top-2 hidden h-3.5 w-3.5 rounded-full border-2 border-[#C9914F] bg-[#0A0E14] md:block" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-lg text-white/70 mt-2">
                      {item.company} · {item.location}
                    </p>
                  </div>

                  <p className="font-mono text-sm text-[#C9914F]/80 md:text-right shrink-0">
                    {item.dates}
                  </p>
                </div>

                <ul className="list-disc ml-6 space-y-3 text-base md:text-lg text-white/75 leading-relaxed">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
