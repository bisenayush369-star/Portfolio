"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Toast from "./components/Toast";

const SERVICE_ID = "service_ew5v0c8";
const TEMPLATE_ID = "template_vy0v2go"; // Replace with your EmailJS template ID
const PUBLIC_KEY = "MJCGZw-mVn5036pOc"; // Replace with your EmailJS public key

export default function Home() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setToast({ type: "success", message: "✔ Message sent successfully!" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setToast({
        type: "error",
        message: "✖ Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center justify-center px-6 py-20 border-b-2 border-green-900">
        <div className="max-w-4xl w-full terminal-border p-12">
          <div className="mb-4">
            <p className="text-sm text-green-700">$ whoami</p>
            <p className="text-sm text-green-600">
              fetching user information...
            </p>
          </div>
          <h1 className="text-5xl font-bold mb-4 glow-text">
            Hello, I&apos;m <span className="cyan-glow">Ayush Bisen</span>
          </h1>
          <p className="text-xl text-green-300 mb-4">
            Full Stack Developer | MERN Stack Specialist | Web Architect
          </p>
          <p className="text-green-400 mb-8 leading-relaxed">
            Building scalable, high-performance web applications using the MERN
            stack. I specialize in designing clean user interfaces, building
            reliable backend systems, and delivering smooth user experiences.
            Open to freelance projects, startup collaborations, and full-time
            opportunities.
          </p>
          <div className="flex gap-4 mb-6 flex-wrap">
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-terminal-dark transition font-bold"
            >
              $ Get In Touch
            </Link>
            <a
              href="https://github.com/bisenayush369-star"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-terminal-dark transition font-bold"
            >
              $ View GitHub
            </a>
          </div>
          <div className="text-sm text-green-600 mb-8">
            <p>
              &gt; Status: Open for freelance projects, startups &amp; full-time
              roles
            </p>
            <p>&gt; Last updated: 2026</p>
          </div>

          {/* Quick Navigation */}
          <div className="border-t-2 border-green-900 pt-6 mt-6">
            <p className="text-green-600 text-sm mb-4">$ quick-navigation</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link
                href="/projects"
                className="px-3 py-2 border border-green-700 text-green-400 hover:bg-green-900 hover:text-green-300 transition text-center text-sm font-bold"
              >
                → Projects
              </Link>
              <Link
                href="/resume"
                className="px-3 py-2 border border-green-700 text-green-400 hover:bg-green-900 hover:text-green-300 transition text-center text-sm font-bold"
              >
                → Resume
              </Link>
              <Link
                href="/stats"
                className="px-3 py-2 border border-green-700 text-green-400 hover:bg-green-900 hover:text-green-300 transition text-center text-sm font-bold"
              >
                → Stats
              </Link>
              <Link
                href="/stack"
                className="px-3 py-2 border border-green-700 text-green-400 hover:bg-green-900 hover:text-green-300 transition text-center text-sm font-bold"
              >
                → Stack
              </Link>
              <Link
                href="/roles"
                className="px-3 py-2 border border-green-700 text-green-400 hover:bg-green-900 hover:text-green-300 transition text-center text-sm font-bold"
              >
                → Roles
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-terminal-dark transition text-center text-sm font-bold"
              >
                → Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 glow-text">
          $ ls -la projects/
        </h2>
        <p className="text-green-600 mb-12 text-sm">
          total 6 featured projects
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "KeyOps (Password Manager)",
              desc: "Full-stack password manager built with secure credential storage, NextAuth-based authentication, and production-ready REST APIs. Focused on backend security, async handling, and solving real-world deployment challenges like Render cold starts.",
              learning: [
                "• Password security → hashing & safe storage implementation (+25%)",
                "• NextAuth → secure routes & session management (+20%)",
                "• MongoDB Atlas → cloud DB setup & optimization (+15%)",
                "• REST APIs → efficient CRUD operations (+15%)",
                "• Render issue fix → async handling & retry logic (+20%)",
                "• API security → validation & middleware practices (+10%)",
                "• Debugging skills → stronger problem-solving mindset (+30%)",
              ],
              tags: ["MongoDB", "Express", "React", "Node.js"],
              status: "Database Management",
              link: "https://github.com/bisenayush369-star/KeyOps-Password-Manager",
              liveLink: "https://key-ops.netlify.app/",
            },
            {
              name: "Get Me A Coffee",
              desc: "A full-stack creator support platform enabling users to send small payments ('coffee') with messages. Built with dynamic routing, authentication, and real-world payment handling, focusing on smooth UX and reliable backend workflows.",
              learning: [
                "• SVG optimization → better UI consistency & performance (+20%)",
                "• Payment integration debugging → handled failures & edge cases (+25%)",
                "• Dynamic routing & APIs → improved data flow efficiency (+15%)",
                "• NextAuth auth system → secure user & session handling (+20%)",
                "• GitHub workflow → cleaner, scalable project structure (+10%)",
                "• Debugging mindset → stronger real-world problem solving (+30%)",
              ],
              tags: ["React", "Razorpay", "Tailwind CSS", "Next.js", "MongoDB"],
              status: "Payment Web",
              link: "https://github.com/bisenayush369-star/Get-Me-A-Coffee",
              liveLink: "https://get-me-a-coffee.netlify.app/",
            },
            {
              name: "Spotify Clone",
              desc: "A modern music streaming UI inspired by Spotify, featuring interactive media controls, playlist management, and responsive design for smooth user experience across devices.",
              learning: [
                "• UI design → recreated Spotify interface with modern styling (+25%)",
                "• Media controls → handled play/pause & progress interactions (+20%)",
                "• Responsive layout → optimized UI across devices (+20%)",
                "• Component structure → reusable and clean UI design (+15%)",
                "• State handling → efficient dynamic UI updates (+15%)",
                "• UI debugging → improved UX & responsiveness (+20%)",
              ],
              tags: ["HTML", "CSS", "JavaScript"],
              status: "Featured",
              link: "https://github.com/bisenayush369-star/Spotify-Clone",
              liveLink: "https://spotify-clone-u.netlify.app/",
            },
            {
              name: "X (Twitter) UI Clone",
              desc: "A frontend-focused social media clone inspired by X (Twitter), built with modern UI practices, dynamic rendering, and real-time interactions. Focused on responsive design, component structure, and seamless frontend-backend integration.",
              learning: [
                "• Tailwind CSS → real-world responsive UI development (+25%)",
                "• AI image automation → dynamic image updates on frontend (+20%)",
                "• State management → smoother real-time UI rendering (+15%)",
                "• Component design → reusable and scalable UI structure (+10%)",
                "• API integration → seamless frontend-backend connection (+15%)",
                "• UI debugging → better responsiveness & styling fixes (+20%)",
              ],
              tags: ["HTML", "Tailwind CSS", "JavaScript"],
              status: "UI Design With AI",
              link: "https://github.com/bisenayush369-star/X-Clone",
              liveLink: "https://x-cloane.netlify.app/",
            },
            {
              name: "Netflix Clone",
              desc: "A static frontend clone of Netflix built using HTML and CSS, focused on mastering core web fundamentals, layout structuring, and real-world UI replication.",
              learning: [
                "• HTML fundamentals → structured clean and semantic layouts (+30%)",
                "• CSS styling → recreated Netflix UI with real-world design practice (+25%)",
                "• Responsive design → adapted layouts for multiple screen sizes (+20%)",
                "• Flexbox & layout → improved positioning and alignment skills (+20%)",
                "• UI precision → better spacing, fonts & visual consistency (+15%)",
                "• Frontend confidence → built first complete project independently (+30%)",
              ],
              tags: ["HTML", "CSS"],
              status: "UI Design",
              link: "https://github.com/bisenayush369-star/Netflix",
              liveLink: "https://netflex-ayushdevx.netlify.app/",
            },
            {
              name: "Task Manager",
              desc: "A task management application for creating, organizing, and tracking daily tasks, built with React for fast updates and a clean, scalable user interface.",
              learning: [
                "• State management → handled dynamic task updates efficiently (+25%)",
                "• CRUD operations → add, edit, delete functionality (+20%)",
                "• UI design → clean and user-friendly interface (+15%)",
                "• Event handling → smooth user interaction logic (+20%)",
                "• Local data handling → improved task persistence (+15%)",
                "• Debugging basics → stronger frontend problem-solving (+20%)",
              ],
              tags: ["React", "Vite", "Javascript", "Tailwind CSS"],
              status: "Todo",
              link: "https://github.com/bisenayush369-star/TODO-LIST",
              liveLink: "https://work-setup.netlify.app/",
            },
          ].map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`terminal-border p-6 group transition-all duration-300 cursor-pointer transform hover:scale-105 ${hoveredProject === idx ? "shadow-lg shadow-cyan-400 border-cyan-400 bg-terminal-dark" : ""}`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3
                  className={`text-lg font-bold transition-all duration-300 ${hoveredProject === idx ? "cyan-glow text-cyan-300" : "cyan-glow"}`}
                >
                  {project.name}
                </h3>
                <button
                  onClick={() =>
                    setExpandedProject(expandedProject === idx ? null : idx)
                  }
                  className={`text-sm px-2 py-1 rounded transition-all duration-300 font-bold ${hoveredProject === idx ? "bg-cyan-400 text-terminal-dark shadow-lg shadow-cyan-400" : "text-green-600 border border-green-600"}`}
                >
                  ★ {project.status} {expandedProject === idx ? "▼" : "▶"}
                </button>
              </div>
              <p
                className={`text-sm mb-4 transition-all duration-300 ${hoveredProject === idx ? "text-green-300" : "text-green-400"}`}
              >
                {project.desc}
              </p>
              {expandedProject === idx && project.learning && (
                <div className="mb-4 p-3 bg-green-900 bg-opacity-30 rounded border border-green-700">
                  <p className="text-sm text-green-300">
                    <span className="font-bold text-cyan-400">Learning:</span>
                  </p>
                  {Array.isArray(project.learning) ? (
                    <ul className="text-sm text-green-300 mt-2 space-y-1 ml-2">
                      {project.learning.map((item, i) => {
                        const percentMatch = item.match(/\(([+\d%]+)\)$/);
                        const percent = percentMatch ? percentMatch[1] : null;
                        const text = percent
                          ? item.replace(` (${percent})`, "")
                          : item;
                        return (
                          <li
                            key={i}
                            className="animate-fade-in flex items-center justify-between"
                          >
                            <span>{text}</span>
                            {percent && (
                              <span className="text-cyan-400 font-semibold ml-2">
                                ({percent})
                              </span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-sm text-green-300 mt-2">
                      {project.learning}
                    </p>
                  )}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 text-xs rounded transition-all duration-300 font-semibold ${hoveredProject === idx ? "border-cyan-400 border-2 bg-cyan-400 text-terminal-dark shadow-lg shadow-cyan-400" : "border border-green-700 text-green-400"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 flex-wrap">
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-4 py-2 rounded transition-all duration-300 font-bold ${hoveredProject === idx ? "text-terminal-dark bg-cyan-400 shadow-lg shadow-cyan-400 hover:shadow-cyan-300" : "text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-terminal-dark"}`}
                  >
                    ◆ Preview Live
                  </a>
                ) : (
                  <span className="inline-block px-4 py-2 rounded font-bold border border-gray-600 text-gray-500 cursor-not-allowed">
                    ◆ Coming Soon
                  </span>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-4 py-2 rounded transition-all duration-300 font-bold ${hoveredProject === idx ? "text-terminal-dark bg-green-400 shadow-lg shadow-green-400 hover:shadow-green-300" : "text-green-400 border border-green-400 hover:bg-green-400 hover:text-terminal-dark"}`}
                >
                  $ View Source →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section
        id="stats"
        className="px-6 py-20 max-w-7xl mx-auto border-t-2 border-green-900"
      >
        <h2 className="text-3xl font-bold mb-12 glow-text">$ git stats</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="terminal-border p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-400 transition-all duration-300 cursor-pointer group">
            <p className="text-green-600 text-sm mb-2">$ projects --built</p>
            <p className="text-4xl font-bold cyan-glow group-hover:text-green-300 transition">
              6+
            </p>
            <p className="text-green-500 text-sm group-hover:text-green-300 transition">
              Projects Built
            </p>
          </div>
          <div className="terminal-border p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-400 transition-all duration-300 cursor-pointer group">
            <p className="text-green-600 text-sm mb-2">$ fullstack --apps</p>
            <p className="text-4xl font-bold cyan-glow group-hover:text-green-300 transition">
              3+
            </p>
            <p className="text-green-500 text-sm group-hover:text-green-300 transition">
              Full-Stack Apps
            </p>
          </div>
          <div className="terminal-border p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-400 transition-all duration-300 cursor-pointer group">
            <p className="text-green-600 text-sm mb-2">$ apis --built</p>
            <p className="text-4xl font-bold cyan-glow group-hover:text-green-300 transition">
              10+
            </p>
            <p className="text-green-500 text-sm group-hover:text-green-300 transition">
              REST APIs Built
            </p>
          </div>
          <div className="terminal-border p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-400 transition-all duration-300 cursor-pointer group">
            <p className="text-green-600 text-sm mb-2">
              $ tools --technologies
            </p>
            <p className="text-4xl font-bold cyan-glow group-hover:text-green-300 transition">
              12+
            </p>
            <p className="text-green-500 text-sm group-hover:text-green-300 transition">
              Tools & Technologies
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-green-400 text-sm">
            → Building scalable full-stack applications with real-world problem
            solving
          </p>
        </div>

        <div className="mt-12 rounded-lg p-6 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-700 hover:border-green-400 hover:shadow-lg hover:shadow-green-400 transition-all duration-300">
          <h3 className="text-lg font-bold text-white mb-6 group-hover:text-green-300 transition">
            $ skill_matrix.json
          </h3>

          <style>{`
            @keyframes slideInWidth {
              from { width: 0; opacity: 0; }
              to { width: var(--final-width); opacity: 1; }
            }
            .skill-progress {
              animation: slideInWidth 2.5s ease-out forwards;
            }
          `}</style>

          <div className="space-y-5">
            {[
              { lang: "JavaScript / TypeScript", proficiency: 75 },
              { lang: "React & Next.js", proficiency: 74 },
              { lang: "Node.js & Express", proficiency: 71 },
              { lang: "MongoDB", proficiency: 68 },
              { lang: "Tailwind CSS", proficiency: 80 },
              { lang: "Git & GitHub", proficiency: 71 },
              { lang: "Next.js SSR/SSG", proficiency: 76 },
            ].map((skill) => (
              <div key={skill.lang} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-200 font-medium text-sm group-hover:text-green-300 transition">
                    {skill.lang}
                  </span>
                  <span className="text-cyan-400 font-bold text-xs">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded h-2.5 overflow-hidden border border-slate-700 group-hover:border-green-400 transition-all duration-300">
                  <div
                    className="skill-progress h-full rounded transition-all duration-500"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(34, 211, 238, 1) 0%, rgba(0, 255, 136, 1) 100%)",
                      "--final-width": `${skill.proficiency}%`,
                      width: `${skill.proficiency}%`,
                      boxShadow: "0 0 15px rgba(34, 211, 238, 0.8)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express",
                "Tailwind CSS",
                "Git & GitHub",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 border border-slate-600 text-slate-300 text-xs font-medium rounded hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-400 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="stack"
        className="px-6 py-20 max-w-7xl mx-auto border-t-2 border-green-900"
      >
        <h2 className="text-3xl font-bold mb-4 glow-text">
          $ echo $TECH_STACK
        </h2>
        <p className="text-green-400 mb-12 text-sm">
          → Full-stack developer focused on scalable apps, performance & AI-assisted development
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              category: "Frontend",
              items: [
                "React / Next.js",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "HTML5 & CSS3",
                "Vite",
              ],
            },
            {
              category: "Backend",
              items: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST API Development",
                "Authentication (NextAuth)",
                "Database Design",
              ],
            },
            {
              category: "Tools",
              items: [
                "Git & GitHub",
                "VS Code",
                "API Testing (Postman)",
                "Deployment: Render, Vercel, Netlify",
                "Performance Optimization",
              ],
            },
            {
              category: "Specialization",
              items: [
                "MERN Stack",
                "Scalable App Structure",
                "UI/UX Design",
                "API Integration",
                "Responsive UI Design",
              ],
            },
            {
              category: "AI Tools",
              items: [
                "Claude AI → code generation, debugging & complex problem solving",
                "ChatGPT → UI building, logic structuring & rapid iteration",
                "GitHub Copilot → real-time coding assistance",
                "Prompt engineering → building features & components using AI",
                "AI image automation → dynamic frontend image handling",
              ],
            },
          ].map((stack) => (
            <div key={stack.category} className="terminal-border p-6 hover:border-green-400 hover:shadow-lg hover:shadow-green-400 transition-all duration-300 group">
              <h3 className="text-lg font-bold cyan-glow mb-4 group-hover:text-green-300 transition">
                $ {stack.category.toLowerCase()}
              </h3>
              <div className="space-y-2">
                {stack.items.map((item) => (
                  <p key={item} className="text-green-400 flex items-center group-hover:text-green-300 transition">
                    <span className="mr-2">→</span> {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 py-20 max-w-4xl mx-auto border-t-2 border-green-900"
      >
        <h2 className="text-3xl font-bold mb-4 glow-text">$ contact --form</h2>
        <p className="text-green-400 mb-12 text-sm">
          → Interested in working together? I build scalable full-stack applications with modern tools and AI-assisted development.
        </p>

        <div className="terminal-border p-8">
          {submitted ? (
            <div className="text-center">
              <p className="text-green-400 text-lg mb-2">
                ✓ Message sent successfully!
              </p>
              <p className="text-green-600 text-sm">
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-green-600 text-sm mb-2">
                  $ name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="YOUR_NAME"
                  required
                  className="w-full bg-terminal-dark border-2 border-green-900 text-terminal-green px-4 py-2 focus:border-cyan-400 focus:shadow-lg"
                />
              </div>

              <div>
                <label className="block text-green-600 text-sm mb-2">
                  $ email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full bg-terminal-dark border-2 border-green-900 text-terminal-green px-4 py-2 focus:border-cyan-400 focus:shadow-lg"
                />
              </div>

              <div>
                <label className="block text-green-600 text-sm mb-2">
                  $ message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className="w-full bg-terminal-dark border-2 border-green-900 text-terminal-green px-4 py-2 focus:border-cyan-400 focus:shadow-lg resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-terminal-dark border-2 border-cyan-400 text-cyan-400 py-3 font-bold transition ${
                  isLoading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-cyan-400 hover:text-terminal-dark"
                }`}
              >
                {isLoading ? "$ sending..." : "$ send --message"}
              </button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-green-900">
            <p className="text-green-600 text-sm mb-4">$ connect --social</p>
            <div className="flex gap-6 flex-wrap">
              <a
                href="https://github.com/bisenayush369-star"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                GitHub
              </a>
              <a
                href="https://x.com/AyushdevX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                X (Twitter)
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-bisen-a24236401/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                LinkedIn
              </a>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&to=bisenayush369@gmail.com&tf=cm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
