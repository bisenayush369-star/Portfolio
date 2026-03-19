import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Developer Portfolio",
  description: "Ayush Bisen - Full Stack Developer | MERN Stack Specialist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-terminal-dark text-terminal-green font-mono`}>
        {/* Scanlines effect */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-5 bg-repeat" 
             style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, currentColor 2px, currentColor 4px)'}}></div>
        
        <Navigation />
        {children}
        
        {/* Footer */}
        <footer className="border-t-2 border-green-900 px-6 py-12 text-center text-green-600 text-sm">
          <p>$ echo &quot;Building elegant solutions to complex problems&quot; &amp;&amp; exit 0</p>
          <p className="mt-2">© 2026 Ayush Bisen. Built with Next.js &amp; passion for clean code.</p>
          <p className="mt-1 text-green-700">Open for freelance projects, startup collaborations &amp; full-time opportunities</p>
        </footer>
      </body>
    </html>
  );
}
