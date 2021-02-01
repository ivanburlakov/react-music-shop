import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import menu from '../../assets/menu.svg';

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 40,
};

const FloatingButton = ({ scrollTarget, onClick }) => {
  const [lastYPos, setLastYPos] = useState(0);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    let target;
    if (scrollTarget === 'window') {
      target = window;
    } else {
      target = scrollTarget;
    }

    function handleScroll() {
      let yPos;
      if (scrollTarget === 'window') {
        yPos = target.scrollY;
      } else {
        yPos = target.scrollTop;
      }
      const isScrollingUp = yPos < lastYPos;

      setVisible(isScrollingUp);
      setLastYPos(yPos);
    }

    target.addEventListener('scroll', handleScroll, false);

    return () => {
      target.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos, scrollTarget]);

  useEffect(() => {
    setVisible(true);
  }, [scrollTarget]);

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
