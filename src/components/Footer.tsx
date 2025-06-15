// src/components/Footer.tsx
'use client';

import ThemeToggle from './ThemeToggle';

export default function Footer() {
  return (
    <footer className="mt-24 py-6 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex justify-between items-center text-sm text-[#5a534c] dark:text-[#e8c9c8]">
        <p>© 2025 Annie Lin</p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
