import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center px-6 pt-24"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Profile photo */}
        <div className="mb-6 rounded-full p-[3px] bg-gradient-to-r from-blue-400/70 to-blue-600/70">
          <div className="rounded-full bg-slate-950 p-1">
            <Image
              src="/profile.jpg"
              alt="Nikhil Krishnaprasad"
              width={120}
              height={120}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Hi, I'm{" "}
          <span className="text-blue-400">Nikhil Krishnaprasad</span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-white/70">
          Software Engineer | Full-Stack | ML & Data Systems | AI Engineer
        </p>

        <p className="mt-6 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed">
          I build scalable full-stack applications and AI-powered systems with experience in real-time
          software, machine learning, and data platforms.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="rounded-xl bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-400 transition"
          >
            Learn More About Me
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-white/15 px-6 py-3 font-medium text-white/90 hover:border-white/30 transition"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
