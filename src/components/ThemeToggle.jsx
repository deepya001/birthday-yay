import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

const ThemeToggle = ({ theme, setTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`fixed top-6 right-6 z-40 p-3 rounded-full backdrop-blur-xl border transition-all duration-500 ${
        theme === 'dark'
          ? 'bg-white/10 border-white/20 hover:bg-white/20 text-cream'
          : 'bg-black/10 border-black/20 hover:bg-black/20 text-gray-900'
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ? (
          <FiSun size={24} />
        ) : (
          <FiMoon size={24} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
