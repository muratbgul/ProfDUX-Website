'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-bold text-[#751944]"
        >
          ProfDux
        </motion.div>

        {/* Hamburger Icon */}
        <button
          className="sm:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-[#751944]"></span>
            <span className="block w-6 h-0.5 bg-[#751944]"></span>
            <span className="block w-6 h-0.5 bg-[#751944]"></span>
          </div>
        </button>

        {/* Menü - Tablet ve üzeri */}
        <nav className="hidden sm:flex space-x-8 text-gray-800 text-base font-medium">
          {['Home', 'About', 'Pricing', 'Contact', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 
                         after:bg-[#751944] after:transition-all after:duration-300 after:origin-center 
                         hover:after:w-full hover:after:left-0"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden bg-white px-4 py-4 shadow-md"
          >
            <div className="flex flex-col space-y-4 text-gray-800 font-medium">
              {['Home', 'About', 'Pricing', 'Contact', 'Blog'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-[#751944] transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
