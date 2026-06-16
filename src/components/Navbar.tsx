'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8 md:px-14">
        <Link href="/" className="nav-logo">
          annie lin
        </Link>

        <div className="flex items-center gap-10">
          <Link href="/#work" className="nav-link">work</Link>
          <Link href="/art" className="nav-link">fun</Link>
          <Link href="/about" className="nav-link">about</Link>
        </div>
      </div>
    </nav>
  );
}
