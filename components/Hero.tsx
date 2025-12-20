export default function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Software Engineer | Full-Stack | ML & Data Systems | AI Engineer
        </h1>
  
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-6">
          I build scalable full-stack applications and AI-powered systems with
          experience in real-time software, machine learning, and data platforms.
        </p>
  
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            View Projects
          </a>
  
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            className="px-6 py-3 border border-black rounded-lg"
          >
            GitHub
          </a>
        </div>
      </section>
    );
  }
  