export default function Contact() {
    return (
      <section id="contact" className="px-6 md:px-20 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600 mb-6">
          Interested in collaborating or hiring? Let’s connect.
        </p>
  
        <div className="flex flex-col gap-2">
          <a className="underline" href="mailto:nikhilkrishnaprasad@gmail.com">
            nikhilkrishnaprasad@gmail.com
          </a>
          <a className="underline" href="https://github.com/nikhil1817" target="_blank">
            GitHub
          </a>
          <a className="underline" href="https://www.linkedin.com/in/nikhil-subramanya-095334189/" target="_blank">
            LinkedIn
          </a>
        </div>
      </section>
    );
  }
  