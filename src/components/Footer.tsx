// src/components/Footer.tsx
// export default function Footer() {
//   return (
//     <footer className="mt-24 text-xs text-[#5a534c]">
//       <p>© 2025 Annie Lin</p>
//     </footer>
//   );
// }

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
