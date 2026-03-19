'use client';

import { useState } from 'react';
import { projectsData } from '@/app/lib/data';
import Link from 'next/link';

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <main>
      {/* Projects Section */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 glow-text">
          $ ls -la projects/
        </h2>
        <p className="text-green-600 mb-12 text-sm">total 6 featured projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className={`terminal-border p-6 group transition-all duration-300 cursor-pointer transform hover:scale-105 ${hoveredProject === idx ? 'shadow-lg shadow-cyan-400 border-cyan-400 bg-terminal-dark' : ''}`}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className={`text-lg font-bold transition-all duration-300 ${hoveredProject === idx ? 'cyan-glow text-cyan-300' : 'cyan-glow'}`}>
                  {project.name}
                </h3>
                <button
                  onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                  className={`text-sm px-2 py-1 rounded transition-all duration-300 font-bold ${hoveredProject === idx ? 'bg-cyan-400 text-terminal-dark shadow-lg shadow-cyan-400' : 'text-green-600 border border-green-600'}`}
                >
                  ★ {project.status} {expandedProject === idx ? '▼' : '▶'}
                </button>
              </div>
              <p className={`text-sm mb-4 transition-all duration-300 ${hoveredProject === idx ? 'text-green-300' : 'text-green-400'}`}>
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
                        const text = percent ? item.replace(` (${percent})`, '') : item;
                        return (
                          <li key={i} className="animate-fade-in flex items-center justify-between">
                            <span>{text}</span>
                            {percent && <span className="text-cyan-400 font-semibold ml-2">({percent})</span>}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p className="text-sm text-green-300 mt-2">{project.learning}</p>
                  )}
                </div>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className={`px-2 py-1 text-xs rounded transition-all duration-300 font-semibold ${hoveredProject === idx ? 'border-cyan-400 border-2 bg-cyan-400 text-terminal-dark shadow-lg shadow-cyan-400' : 'border border-green-700 text-green-400'}`}>
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
                    className={`inline-block px-4 py-2 rounded transition-all duration-300 font-bold ${hoveredProject === idx ? 'text-terminal-dark bg-cyan-400 shadow-lg shadow-cyan-400 hover:shadow-cyan-300' : 'text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-terminal-dark'}`}
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
                  className={`inline-block px-4 py-2 rounded transition-all duration-300 font-bold ${hoveredProject === idx ? 'text-terminal-dark bg-green-400 shadow-lg shadow-green-400 hover:shadow-green-300' : 'text-green-400 border border-green-400 hover:bg-green-400 hover:text-terminal-dark'}`}
                >
                  $ View Source →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
