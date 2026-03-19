'use client';

import { statsData, skillsData } from '@/app/lib/data';

export default function StatsPage() {
  return (
    <main>
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 glow-text">
          $ git stats
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {statsData.map((stat, i) => (
            <div key={i} className="terminal-border p-6">
              <p className="text-green-600 text-sm mb-2">{stat.label}</p>
              <p className="text-4xl font-bold cyan-glow">{stat.value}</p>
              <p className="text-green-500 text-sm">{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* <div className="terminal-border p-6">
          <p className="text-green-600 text-sm mb-4">$ cat languages.txt</p>
          <div className="space-y-3">
            {skillsData.map((skill, idx) => (
              <div key={skill.name} className="flex items-center gap-3 group">
                <span className="text-cyan-400 w-40 group-hover:glow-text transition">{skill.name}</span>
                <div className="flex-1 bg-green-900 rounded h-2 overflow-hidden">
                  <div 
                    className="bg-cyan-400 h-full rounded transition-all duration-500 group-hover:shadow-lg group-hover:shadow-cyan-400"
                    style={{width: `${skill.proficiency}%`}}
                  ></div>
                </div>
                <span className="text-green-500 text-sm w-12 text-right font-bold">{skill.proficiency}%</span>
              </div>
            ))}
          </div>
        </div> */}

            <div className="mt-12 rounded-lg p-6 bg-linear-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-700 hover:border-green-400 hover:shadow-lg hover:shadow-green-400 transition-all duration-300">
          <h3 className="text-lg font-bold text-white mb-6 group-hover:text-green-300 transition">$ skill_matrix.json</h3>
          
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
              { lang: 'JavaScript / TypeScript', proficiency: 75 },
              { lang: 'React & Next.js', proficiency: 74 },
              { lang: 'Node.js & Express', proficiency: 71 },
              { lang: 'MongoDB', proficiency: 68 },
              { lang: 'Tailwind CSS', proficiency: 80 },
              { lang: 'Git & GitHub', proficiency: 71 },
              { lang: 'Next.js SSR/SSG', proficiency: 76 }
            ].map((skill) => (
              <div key={skill.lang} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-200 font-medium text-sm group-hover:text-green-300 transition">{skill.lang}</span>
                  <span className="text-cyan-400 font-bold text-xs">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded h-2.5 overflow-hidden border border-slate-700 group-hover:border-green-400 transition-all duration-300">
                  <div 
                    className="skill-progress h-full rounded transition-all duration-500"
                    style={{
                      background: 'linear-gradient(90deg, rgba(34, 211, 238, 1) 0%, rgba(0, 255, 136, 1) 100%)',
                      '--final-width': `${skill.proficiency}%`,
                      width: `${skill.proficiency}%`,
                      boxShadow: '0 0 15px rgba(34, 211, 238, 0.8)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <div className="mt-8 pt-6 border-t border-slate-700">
            <h4 className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['TypeScript', 'React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Git & GitHub'].map((tech) => (
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
      {/* </section> */}
      </section>
    </main>
  );
}

