import React from 'react';

import { motion } from 'framer-motion';

import './FloatingButton.css';
import menu from '../../assets/menu.svg';

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 40,
};

const FloatingButton = ({ onClick, isVisible }) => {
  return (
    <motion.div
      className="floating-button"
      animate={{ y: isVisible ? 0 : 100 }}
      transform={spring}
      onClick={onClick}
    >
      <img src={menu} alt="menu" className="floating-button-icon" />
    </motion.div>
  );
};

export default FloatingButton;
