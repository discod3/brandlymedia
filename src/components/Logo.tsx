import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.svg
      width="120"
      height="120"
      viewBox="0 0 120 120"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Elegant B shape */}
      <motion.path
        d="M40 30 
           L70 30 
           C85 30 85 50 70 50 
           L40 50 
           L40 30
           M40 50
           L75 50
           C90 50 90 75 75 75
           L40 75
           L40 30"
        fill="none"
        stroke="black"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      {/* Decorative underline */}
      <motion.path
        d="M35 85 L85 85"
        stroke="black"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      />
    </motion.svg>
  );
};

export default Logo;