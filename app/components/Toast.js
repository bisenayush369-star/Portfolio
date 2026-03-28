'use client';

import { useEffect, useState } from 'react';

export default function Toast({ message, type = 'success', onClose }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for animation to complete
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const isSuccess = type === 'success';
  const icon = isSuccess ? '✔' : '✖';
  const colors = isSuccess
    ? 'border-green-400 bg-green-900/20 text-green-300 shadow-[0_0_20px_rgba(74,222,128,0.5)]'
    : 'border-red-400 bg-red-900/20 text-red-300 shadow-[0_0_20px_rgba(248,113,113,0.5)]';

  return (
    <div
      className={`fixed bottom-6 right-6 p-4 rounded-lg border-2 ${colors} backdrop-blur-sm transition-all duration-300 z-50 max-w-sm ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.02) 0px, rgba(255,255,255,.02) 1px, transparent 1px, transparent 2px)',
      }}
    >
      <div className="flex items-start gap-3">
        <span className={`text-lg font-bold ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
          {icon}
        </span>
        <p className="text-sm font-medium leading-snug">{message}</p>
      </div>
    </div>
  );
}
