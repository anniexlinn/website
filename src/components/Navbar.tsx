// src/components/Navbar.tsx
'use client';

import Link from "next/link";
import { FiHome, FiFolder } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isProjectsActive = pathname === '/' && typeof window !== 'undefined' && window.location.hash === '#projects';

  const handleScroll = (e: React.MouseEvent, target: 'top' | 'projects') => {
    e.preventDefault();
    if (pathname === '/') {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
        window.history.replaceState(null, '', target === 'top' ? '/' : '#projects');
      }
    } else {
      window.location.href = target === 'top' ? '/' : '/#projects';
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 py-4 px-6 md:px-12 z-50 bg-background">
      <div className="max-w-5xl mx-auto flex justify-end gap-4">
        <Link 
          href="/" 
          onClick={(e) => handleScroll(e, 'top')}
          className="text-sm flex items-center gap-1 text-foreground hover:text-[#f9a8d4] dark:hover:text-[#ffb6b6] transition-colors"
        >
          <FiHome className="w-3.5 h-3.5" /> Home
        </Link>
        <Link 
          href="#projects"
          onClick={(e) => handleScroll(e, 'projects')}
          className="text-sm flex items-center gap-1 text-foreground hover:text-[#f9a8d4] dark:hover:text-[#ffb6b6] transition-colors"
        >
          <FiFolder className="w-3.5 h-3.5" /> Projects
        </Link>
      </div>
    </nav>
  );
}
