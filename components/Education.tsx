export default function Education() {
    return (
      <section id="education" className="px-6 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Education</h2>
  
        <div className="space-y-8 max-w-4xl">
          {/* Master's */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="text-xl md:text-2xl font-semibold">
              Master of Science in Computer Science
            </h3>
            <p className="text-white/70 mt-1">
              Western Michigan University — Kalamazoo, MI
            </p>
            <p className="text-white/50 mt-1">
              Expected April 2026
            </p>
  
            <ul className="list-disc ml-5 mt-4 space-y-2 text-white/70">
              <li>Coursework: Machine Learning, Big Data,Algorithms, Database Systems, Artificial Intelligence, Generative AI,Advanced AI</li>
              <li>Hands-on projects in ML, NLP, and large-scale data processing</li>
            </ul>
          </div>
  
          {/* Bachelor's */}
          <div className="border border-white/10 rounded-xl p-6 bg-white/5">
            <h3 className="text-xl md:text-2xl font-semibold">
              Bachelor of Engineering in Computer Science
            </h3>
            <p className="text-white/70 mt-1">
              Visvesvaraya Technological University — Bengaluru, India
            </p>
            <p className="text-white/50 mt-1">
              Graduated 2021
            </p>
  
            <ul className="list-disc ml-5 mt-4 space-y-2 text-white/70">
              <li>Strong foundation in data structures, algorithms, and software engineering</li>
              <li>Completed academic projects in machine learning and full-stack development</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  