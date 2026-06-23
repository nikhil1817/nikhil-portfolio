export default function Education() {
  return (
    <section id="education" className="px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">
          Education
        </h2>

        <div className="space-y-8">
          {/* Master's */}
          <div className="border border-white/10 rounded-2xl p-8 md:p-10 bg-[#020617]/60">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
              Master of Science in Computer Science
            </h3>

            <p className="text-slate-300 mt-2">
              Western Michigan University — Kalamazoo, MI
            </p>

            <p className="text-slate-400 mt-1">
              Expected April 2026
            </p>

            <div className="h-1 w-12 rounded bg-blue-500/60 my-6" />

            <ul className="list-disc ml-6 space-y-3 text-slate-300 text-base md:text-lg leading-relaxed">
              <li>Artificial Intelligence, Machine Learning, Distributed Systems, and Advanced Software Engineering</li>
              <li>Built AI-powered applications using RAG, Multi-Agent Systems, MCP, Semantic Search, and LLMs</li>
              <li>Developed scalable backend and full-stack systems using Java, Spring Boot, React, Next.js, PostgreSQL, Redis, and Docker</li>
            </ul>
          </div>

          {/* Bachelor's */}
          <div className="border border-white/10 rounded-2xl p-8 md:p-10 bg-[#020617]/60">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
              Bachelor of Engineering in Computer Science
            </h3>

            <p className="text-slate-300 mt-2">
              K.S. Institute of Technology — Bengaluru, India
            </p>

            <p className="text-slate-400 mt-1">
              Graduated 2021
            </p>

            <div className="h-1 w-12 rounded bg-blue-500/60 my-6" />

            <ul className="list-disc ml-6 space-y-3 text-slate-300 text-base md:text-lg leading-relaxed">
              <li>Strong foundation in data structures, algorithms, and software engineering</li>
              <li>Completed academic and practical projects in full-stack development and machine learning</li>
              <li>Built early experience with real-world problem solving and system design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
