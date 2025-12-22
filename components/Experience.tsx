import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20 py-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Experience</h2>

      <div className="space-y-10">
        {experience.map((item) => (
          <div
            key={`${item.company}-${item.role}`}
            className="border border-white/15 rounded-2xl p-8 md:p-10 bg-white/5"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  {item.role}
                </h3>

                {/* optional accent line (looks premium) */}
                <div className="h-1 w-16 rounded bg-blue-500/60 mt-3 mb-4" />

                <p className="text-lg text-white/70">
                  {item.company} • {item.location}
                </p>
              </div>

              <p className="text-base text-white/50 md:text-right">
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
    </section>
  );
}
