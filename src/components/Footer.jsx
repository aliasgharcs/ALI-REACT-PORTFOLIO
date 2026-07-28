import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-16 text-zinc-500 dark:text-zinc-600 text-sm border-t border-zinc-200 dark:border-zinc-900/60 mt-16 px-6 transition-colors duration-300 relative z-10">
      <p className="font-semibold">&copy; 2026 Ali Asghar. All rights reserved.</p>
      <p className="text-zinc-400 dark:text-zinc-700 mt-1.5 font-medium">Built using React and Tailwind CSS v4 Architecture.</p>
    </footer>
  );
}