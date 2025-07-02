'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 gap-4">
        
        {/* Logo - her ekran */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl font-bold text-[#751944]"
        >
          ProfDux
        </motion.div>

        {/* Hamburger Icon - sadece mobilde sağda */}
        <button
          className="sm:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        {/* Navbar - masaüstünde görünür, mobilde toggle */}
        <motion.nav
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className={`
            text-gray-800 text-sm sm:text-base font-medium
            sm:flex flex-wrap justify-center gap-4 sm:gap-10
            ${isOpen ? 'flex flex-col absolute top-full left-0 w-full bg-white shadow-md py-4 sm:py-0 sm:static sm:shadow-none' : 'hidden sm:flex'}
          `}
          onClick={() => setIsOpen(false)}
        >
          {['Home', 'About', 'Pricing', 'Contact', 'Blog'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 
                         after:bg-[#751944] after:transition-all after:duration-300 after:origin-center 
                         hover:after:w-full hover:after:left-0 px-4 py-2 sm:px-0 sm:py-0"
            >
              {item}
            </a>
          ))}
        </motion.nav>

        {/* Buttons - sadece masaüstünde */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="hidden sm:flex flex-wrap justify-center gap-3"
        >
          <button className="px-4 py-2 text-sm sm:text-base rounded-full bg-[#47BA00] text-white transition hover:bg-green-700">
            Login
          </button>
          <button className="px-4 py-2 text-sm sm:text-base rounded-full bg-[#751944] text-white transition hover:bg-pink-700">
            Register
          </button>
        </motion.div>
      </div>
    </header>
  );
}
