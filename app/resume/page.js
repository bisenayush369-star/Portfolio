"use client";

export default function ResumePage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main>
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 glow-text">
          $ download --resume
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="terminal-border p-12 text-center">
            <div className="mb-8">
              <p className="text-green-400 text-lg mb-4">Download My Resume</p>
              <p className="text-green-600 text-sm mb-6">
                Full-Stack Developer | MERN Stack | AI-Assisted Development
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="px-8 py-4 rounded font-bold text-lg transition-all duration-300 transform hover:scale-105 text-terminal-dark bg-cyan-400 shadow-lg shadow-cyan-400 hover:shadow-cyan-300 hover:shadow-2xl"
            >
              ⬇ Download Resume (PDF)
            </button>

            <p className="text-green-600 text-xs mt-8">
              Includes projects, technical skills, and real-world development experience with AI-assisted workflows
            </p>

            <p className="text-green-400 text-xs mt-4">
              → Open to freelance projects and full-time opportunities
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="terminal-border p-6 text-center hover:border-green-400 hover:shadow-lg hover:shadow-green-400 transition-all duration-300 cursor-pointer group">
              <p className="text-cyan-400 font-bold text-2xl mb-2 group-hover:text-green-300 transition">1.5+</p>
              <p className="text-green-400 text-sm group-hover:text-green-300 transition">Real-World Learning Experience</p>
            </div>
            <div className="terminal-border p-6 text-center hover:border-green-400 hover:shadow-lg hover:shadow-green-400 transition-all duration-300 cursor-pointer group">
              <p className="text-cyan-400 font-bold text-2xl mb-2 group-hover:text-green-300 transition">6+</p>
              <p className="text-green-400 text-sm group-hover:text-green-300 transition">Projects Built</p>
            </div>
            <div className="terminal-border p-6 text-center hover:border-green-400 hover:shadow-lg hover:shadow-green-400 transition-all duration-300 cursor-pointer group">
              <p className="text-cyan-400 font-bold text-2xl mb-2 group-hover:text-green-300 transition">10+</p>
              <p className="text-green-400 text-sm group-hover:text-green-300 transition">Technologies Used</p>
            </div>
          </div>

          <div className="mt-12 terminal-border p-6">
            <h3 className="text-lg font-bold cyan-glow mb-4">
              $ quick.contact
            </h3>
            <p className="text-green-400 text-sm mb-6">
              Interested in working together? Feel free to reach out via email
              or connect on LinkedIn.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=bisenayush369@gmail.com&tf=cm"
                className="px-4 py-2 rounded border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-bold"
              >
                $ Email Me
              </a>
              <a
                href="https://github.com/bisenayush369-star"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded transition-all duration-300 font-bold border border-green-400 text-green-400 hover:bg-green-400 hover:text-terminal-dark hover:scale-105"
              >
                $ Github
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
