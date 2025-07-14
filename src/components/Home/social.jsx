import React from 'react';
import { motion } from 'framer-motion';

const Social = () => {
  return (
    <div className="home__social">
      <motion.a
        href="https://www.instagram.com/official_abhiv2004?igsh=bGVyd3p6dDUzYmZt"
        className="home_social-icon"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <i className="uil uil-instagram"></i>
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/aviralkumar60/"
        className="home_social-icon"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <i className="uil uil-linkedin"></i>
      </motion.a>

      <motion.a
        href="https://github.com/aviralkumar60"
        className="home_social-icon"
        target="_blank"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <i className="uil uil-github-alt"></i>
      </motion.a>
    </div>
  );
};

export default Social;
