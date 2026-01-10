export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-20 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Contact</h2>

        <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl">
          Interested in collaborating or hiring? Let’s connect.
        </p>

        <div className="border border-white/10 rounded-2xl p-8 md:p-10 bg-[#020617]/60">
          <div className="flex flex-col gap-4 text-lg">
            <a
              className="text-blue-400 hover:text-blue-300 transition"
              href="mailto:nikhilkrishnaprasad@gmail.com"
            >
              nikhilkrishnaprasad@gmail.com
            </a>

            <a
              className="text-blue-400 hover:text-blue-300 transition"
              href="https://github.com/your-username"
              target="_blank"
            >
              GitHub
            </a>

            <a
              className="text-blue-400 hover:text-blue-300 transition"
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
