// src/components/Footer.tsx

'use client';

import ThemeToggle from './ThemeToggle';

export default function Footer() {
  return (
    <footer className="mt-23 flex justify-between items-center text-xs text-[#5a534c] dark:text-gray-400">
      <p>© 2025 Annie Lin</p>
      <ThemeToggle />
    </footer>
  );
}
