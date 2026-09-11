export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact</h2>

        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl">
          Interested in collaborating or hiring? Let’s connect.
        </p>

        <div className="border border-white/10 rounded-2xl p-8 md:p-10 bg-[#121821]/70">
          <div className="flex flex-col gap-4 text-lg">
            <a
              className="text-[#C9914F] hover:text-[#E0AE74] transition"
              href="mailto:nikhilkrishnaprasad@gmail.com"
            >
              nikhilkrishnaprasad@gmail.com
            </a>

            <a
              className="text-[#C9914F] hover:text-[#E0AE74] transition"
              href="https://github.com/nikhil1817"
              target="_blank"
            >
              GitHub
            </a>

            {/* TODO: replace with your real LinkedIn URL */}
            <a
              className="text-[#C9914F] hover:text-[#E0AE74] transition"
              href="https://linkedin.com/in/nikhil-krishnaprasad"
              target="_blank"
            >
              LinkedIn
            </a>

            <a
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium text-white/90 hover:border-[#C9914F]/60 hover:text-[#C9914F] transition mt-2"
              href="/Nikhil_Krishnaprasad.pdf"
              download
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
