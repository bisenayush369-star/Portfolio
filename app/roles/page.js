'use client';

import { useState } from 'react';
import { rolesData } from '@/app/lib/data';
import Link from 'next/link';

export default function RolesPage() {
  const [hoveredRole, setHoveredRole] = useState(null);

  const handleInterestedClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <section className="px-6 py-20 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-3 glow-text">
            $ roles.open()
          </h2>
          <p className="text-green-600 text-sm font-mono mb-4">
            &gt; Fetching available opportunities...
          </p>
          <div className="inline-block terminal-border px-4 py-2 border-2 border-green-600">
            <p className="text-green-400 font-bold text-sm font-mono">
              ◆ 6 collaboration opportunities available
            </p>
          </div>
        </div>

        {/* Availability Status */}
        <div className="mb-12 terminal-border p-4 border-l-4 border-l-cyan-400 bg-terminal-dark bg-opacity-50">
          <p className="text-xs text-green-600 font-mono mb-2">$ status</p>
          <p className="text-sm text-green-400 flex items-center gap-2">
            <span className="text-cyan-400">🟢</span>
            Available for freelance, startups, and junior developer roles
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {rolesData.map((role, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredRole(idx)}
              onMouseLeave={() => setHoveredRole(null)}
              className={`terminal-border p-6 transition-all duration-300 transform ${
                hoveredRole === idx 
                  ? 'shadow-lg shadow-cyan-400 border-cyan-400 scale-103 bg-terminal-dark bg-opacity-95' 
                  : 'hover:shadow-md hover:shadow-green-600 hover:border-green-600'
              }`}
            >
              {/* Role Title with Arrow */}
              <div className="flex items-start gap-3 mb-3">
                <span className={`text-xl transition-all duration-300 inline-block shrink-0 ${hoveredRole === idx ? 'translate-x-1 text-cyan-400' : 'text-green-500'}`}>
                  ▶
                </span>
                <h3
                  className={`text-lg font-bold transition-all duration-300 ${
                    hoveredRole === idx ? 'text-cyan-300' : 'text-green-400'
                  }`}
                >
                  {role.title}
                </h3>
              </div>

              {/* Description - Concise Single Line */}
              <p
                className={`text-sm ml-8 mb-4 transition-all duration-300 line-clamp-2 ${
                  hoveredRole === idx ? 'text-green-300' : 'text-green-500'
                }`}
              >
                {role.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="ml-8 mb-4">
                <p className="text-xs text-cyan-400 font-semibold mb-2">$ tech_stack:</p>
                <div className="flex flex-wrap gap-2">
                  {role.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded transition-all duration-300 font-semibold h-6 flex items-center ${
                        hoveredRole === idx
                          ? 'bg-cyan-400 text-terminal-dark border border-cyan-400'
                          : 'border border-cyan-400 text-cyan-400'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Proof Indicators */}
              <div className="ml-8 mb-5 terminal-border border-l-2 border-l-green-600 p-3 bg-green-900 bg-opacity-10">
                <p className="text-xs text-green-400 font-semibold mb-2">$ proof:</p>
                <ul className="space-y-1">
                  {role.proof.map((proofItem) => (
                    <li key={proofItem} className="text-xs text-green-500">
                      → {proofItem}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons - Equal Width */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <button
                  onClick={handleInterestedClick}
                  className={`px-3 py-3 rounded text-center transition-all duration-300 font-bold text-sm ${
                    hoveredRole === idx
                      ? 'bg-cyan-400 text-terminal-dark shadow-lg shadow-cyan-400 hover:shadow-cyan-300'
                      : 'bg-cyan-400 text-terminal-dark border border-cyan-400 shadow-md shadow-cyan-400'
                  }`}
                >
                  Interested →
                </button>
                <a
                  href={role.portfolio_link}
                  target={role.portfolio_link.startsWith('http') ? '_blank' : '_self'}
                  rel={role.portfolio_link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className={`px-3 py-3 rounded text-center transition-all duration-300 font-bold text-sm ${
                    hoveredRole === idx
                      ? 'bg-green-600 text-terminal-dark shadow-lg shadow-green-600 hover:shadow-green-500'
                      : 'border border-green-400 text-green-400 hover:bg-green-900'
                  }`}
                >
                  View Work
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA Section */}
        <div id="contact-section" className="terminal-border p-8 border-2 border-cyan-400 shadow-lg shadow-cyan-400 bg-terminal-dark bg-opacity-90">
          <div className="mb-4">
            <p className="text-xs text-green-600 font-mono">$ echo &quot;Let&apos;s build something together&quot;</p>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-center text-cyan-300">Interested in working together?</h3>
          <p className="text-green-400 text-sm mb-8 leading-relaxed text-center max-w-md mx-auto">
            If one of these roles matches your needs, let&apos;s collaborate and build something impactful.
          </p>
          <div className="flex gap-4 flex-wrap justify-center items-center">
            {/* <a
              href="mailto:ayushbisen.dev@gmail.com"
              className="px-8 py-3 rounded transition-all duration-300 font-bold text-terminal-dark bg-cyan-400 shadow-2xl shadow-cyan-400 hover:shadow-cyan-300 hover:scale-105 border border-cyan-300"
            >
              
            </a> */}
            <Link href="/contact" className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-terminal-dark transition font-bold">
              Contact Me →
            </Link>
            <Link
              href="/resume"
              className="px-8 py-3 rounded transition-all duration-300 font-bold border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-terminal-dark hover:scale-105"
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
