import Image from "next/image";
import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[75vh] items-center justify-center px-6 pb-16 pt-28"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-black" />

        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C9914F]/[0.12] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Profile Image */}
        <div className="mb-6 rounded-full bg-gradient-to-r from-[#C9914F]/70 to-[#7C531F]/70 p-[3px]">
          <div className="rounded-full bg-slate-950 p-1">
            <Image
              src="/profile.jpg"
              alt="Nikhil Krishnaprasad"
              width={150}
              height={150}
              className="h-[150px] w-[150px] rounded-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="text-[#C9914F]">
            Nikhil Krishnaprasad
          </span>
        </h1>

        {/* Roles */}
        <p className="mt-4 text-xl text-white/70 md:text-2xl">
          Software Engineer | AI Engineer | Full-Stack Developer
        </p>

        {/* Introduction */}
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl">
          I design and build scalable software systems, AI-powered
          applications, and cloud-native platforms with expertise in backend
          engineering, distributed systems, full-stack development, and
          intelligent automation.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="rounded-xl bg-[#C9914F] px-6 py-3 font-medium text-white transition hover:bg-[#DAA968]"
          >
            Learn More About Me
          </a>

          <a
            href="#projects"
            className="rounded-xl border border-white/15 px-6 py-3 font-medium text-white/90 transition hover:border-white/30"
          >
            View My Projects
          </a>

          <a
            href="/nikhil.pdf"
            download
            className="rounded-xl border border-white/15 px-6 py-3 font-medium text-white/90 transition hover:border-[#C9914F]/60 hover:text-[#C9914F]"
          >
            Download Resume
          </a>
        </div>

        {/* Search */}
        <div className="mt-6 flex w-full max-w-md flex-col items-center gap-2">
          <SearchBar />

          <p className="text-xs text-white/35">
            Try &quot;RAG&quot;, &quot;Docker&quot;, or &quot;Next.js&quot; to
            jump straight to the relevant skill or project.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-white/50">
          <div>
            <span className="font-semibold text-white">3+</span> years
            experience
          </div>

          <div>
            <span className="font-semibold text-white">11</span> projects
            shipped
          </div>

          <div>
            <span className="font-semibold text-white">MS CS</span> @ Western
            Michigan University
          </div>
        </div>
      </div>
    </section>
  );
}