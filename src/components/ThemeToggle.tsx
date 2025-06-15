// src/components/ThemeToggle.tsx
'use client';

import { useState } from 'react';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon, FiChevronDown, FiMonitor } from 'react-icons/fi';

export default function ThemeToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const changeTheme = (selectedTheme: string) => {
    setTheme(selectedTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-1 text-s text-[#5a534c] hover:text-pink-300 dark:text-pink-200 dark:hover:text-pink-100 transition-colors"
      >
        {theme === 'light' ? (
          <FiSun className="w-5 h-5 opacity-50" />
        ) : theme === 'dark' ? (
          <FiMoon className="w-5 h-5" />
        ) : (
          <FiSun className="w-5 h-5 opacity-50" />
        )}
        <FiChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
 
      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 w-32 rounded-md shadow-lg bg-pink-50 dark:bg-gray-800 ring-1 ring-pink-200 dark:ring-pink-900 ring-opacity-50">
          <div className="py-1">
            <button
              onClick={() => changeTheme('light')}
              className="flex items-center w-full px-4 py-1 text-xs text-[#5a534c] dark:text-pink-200 hover:bg-pink-100 dark:hover:bg-pink-900/50"
            >
              <FiSun className="w-3 h-3 mr-2" /> Light
            </button>
            <button
              onClick={() => changeTheme('dark')}
              className="flex items-center w-full px-4 py-1 text-xs text-[#5a534c] dark:text-pink-200 hover:bg-pink-100 dark:hover:bg-pink-900/50"
            >
              <FiMoon className="w-3 h-3 mr-2" /> Dark
            </button>
            <button
              onClick={() => changeTheme('system')}
              className="flex items-center w-full px-4 py-1 text-xs text-[#5a534c] dark:text-pink-200 hover:bg-pink-100 dark:hover:bg-pink-900/50"
            >
              <FiMonitor className="w-3 h-3 mr-2" /> System
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
