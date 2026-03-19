'use client';

import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from '../components/Toast';

const SERVICE_ID = 'service_ew5v0c8';
const TEMPLATE_ID = 'template_vy0v2go'; // Replace with your EmailJS template ID
const PUBLIC_KEY = 'MJCGZw-mVn5036pOc'; // Replace with your EmailJS public key

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setToast({ type: 'success', message: '✔ Message sent successfully!' });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setToast({ type: 'error', message: '✖ Failed to send message. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>   
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 glow-text">
          $ contact --form
        </h2>

        <div className="terminal-border p-8">
          {submitted ? (
            <div className="text-center">
              <p className="text-green-400 text-lg mb-2">✓ Message sent successfully!</p>
              <p className="text-green-600 text-sm">I&apos;ll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-green-600 text-sm mb-2">$ name:</label>
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
                <label className="block text-green-600 text-sm mb-2">$ email:</label>
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
                <label className="block text-green-600 text-sm mb-2">$ message:</label>
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
                  isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-cyan-400 hover:text-terminal-dark'
                }`}
              >
                {isLoading ? '$ sending...' : '$ send --message'}
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
                href="https://www.linkedin.com/in/ayush-bisen-53a970398/"
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
      
      {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}
    </div>
  );
}
