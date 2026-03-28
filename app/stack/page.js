'use client';

import { stackData } from '@/app/lib/data';

export default function StackPage() {
  return (
    <main>
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 glow-text">
          $ echo $TECH_STACK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stackData.map((stack) => (
            <div key={stack.category} className="terminal-border p-6">
              <h3 className="text-lg font-bold cyan-glow mb-4">$ {stack.category.toLowerCase()}</h3>
              <div className="space-y-2">
                {stack.items.map((item) => (
                  <p key={item} className="text-green-400 flex items-center">
                    <span className="mr-2">→</span> {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
