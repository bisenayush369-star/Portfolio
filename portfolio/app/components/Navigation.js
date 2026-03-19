'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 z-40 border-b-2 border-green-900 bg-opacity-80 bg-terminal-dark backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold glow-text flex items-center gap-2 hover:opacity-80 transition">
          <span className="status-indicator"></span>
          &gt; <span className="cyan-glow">Portfolio</span> <span className="cursor">_</span>
        </Link>
        <ul className="flex gap-6 text-sm">
          <li>
            <Link 
              href="/projects" 
              className={`hover:text-cyan-400 transition ${isActive('/projects') ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}
            >
              $ projects
            </Link>
          </li>
          <li>
            <Link 
              href="/resume" 
              className={`hover:text-cyan-400 transition ${isActive('/resume') ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}
            >
              $ resume
            </Link>
          </li>
          <li>
            <Link 
              href="/stats" 
              className={`hover:text-cyan-400 transition ${isActive('/stats') ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}
            >
              $ stats
            </Link>
          </li>
          <li>
            <Link 
              href="/stack" 
              className={`hover:text-cyan-400 transition ${isActive('/stack') ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}
            >
              $ stack
            </Link>
          </li>
          <li>
            <Link 
              href="/roles" 
              className={`hover:text-cyan-400 transition ${isActive('/roles') ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}
            >
              $ roles
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={`hover:text-cyan-400 transition ${isActive('/contact') ? 'text-cyan-400 border-b-2 border-cyan-400' : ''}`}
            >
              $ contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
