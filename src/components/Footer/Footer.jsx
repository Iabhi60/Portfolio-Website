import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import "./footer.css";

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 20 }} // Start off-screen and transparent
      animate={{ opacity: 1, y: 0 }} // Animate to on-screen and fully opaque
      transition={{ duration: 0.5 }} // Duration of the animation
    >
      <div className="footer container">
        <h1 className="footer__title">Aviral Kumar</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#Devs" className="footer__link">Devs</a>
          </li>
        </ul>

        <div className="footer__social">
          <a 
            href="https://www.instagram.com/official_abhiv2004?igsh=bGVyd3p6dDUzYmZt" 
            className="footer__social-link" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/aviralkumar60/" 
            className="footer__social-link" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
          
          <a 
            href="https:" 
            className="footer__social-link" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
        <span className="footer__copy">&#169; Aviral. All rights reserved</span>
      </div>
    </motion.footer>
  );
}

export default Footer;
