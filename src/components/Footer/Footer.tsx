"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
      className="w-full py-8 px-4 sm:px-10 md:px-20 text-white bg-[#751944] flex flex-col md:flex-row justify-between items-center gap-6"
    >
      {/* Sol */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center md:text-left"
      >
        <h3 className="text-2xl font-bold">ProfDux</h3>
        <p className="text-sm text-gray-300 mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>

      {/* Orta */}
      <motion.ul
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-300 text-center"
      >
        <li className="hover:text-white transition cursor-pointer">About</li>
        <li className="hover:text-white transition cursor-pointer">Features</li>
        <li className="hover:text-white transition cursor-pointer">Contact</li>
      </motion.ul>

      {/* Sağ */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="w-full md:w-auto flex justify-center md:justify-start"
      >
        <button
          onClick={scrollToTop}
          className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition"
        >
          Back to Top
        </button>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
