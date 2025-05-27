// src/components/Navbar.tsx
'use client';

import Link from "next/link";
import { FiHome, FiFolder } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="flex justify-end gap-4 mb-12">
      <Link 
        href="/" 
        className={`flex items-center gap-1 text-sm ${pathname === '/' ? 'font-medium' : 'hover:underline'}`}
      >
        <FiHome className="w-3.5 h-3.5" /> Home
      </Link>
      <Link 
        href="/projects" 
        className={`flex items-center gap-1 text-sm ${pathname === '/projects' ? 'font-medium' : 'hover:underline'}`}
      >
        <FiFolder className="w-3.5 h-3.5" /> Projects
      </Link>
    </nav>
  );
}
