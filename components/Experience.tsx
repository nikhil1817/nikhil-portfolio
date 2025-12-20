import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience</h2>

      <div className="space-y-6">
        {experience.map((item) => (
          <div key={`${item.company}-${item.role}`} className="border rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-semibold">{item.role}</h3>
                <p className="text-gray-600">{item.company} • {item.location}</p>
              </div>
              <p className="text-sm text-gray-500">{item.dates}</p>
            </div>

            <ul className="list-disc ml-5 space-y-2 text-gray-700">
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
