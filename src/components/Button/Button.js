import React from 'react';

import { motion } from 'framer-motion';

import './Button.css';

const Button = ({
  onClick,
  disabled,
  color,
  backgroundColor,
  style,
  children,
}) => {
  return (
    <motion.button
      type="button"
      initial={{
        color: disabled ? '#989997' : color || '#FC8272',
        backgroundColor: disabled ? '#989997' : backgroundColor || '#FFDACD',
        pointerEvents: disabled ? 'none' : 'auto',
      }}
      animate={{
        color: disabled ? '#989997' : color || '#FC8272',
        backgroundColor: disabled ? '#989997' : backgroundColor || '#FFDACD',
        pointerEvents: disabled ? 'none' : 'auto',
      }}
      onClick={onClick}
      className="button"
      disabled={disabled ? 'disabled' : ''}
      style={style}
    >
      {children}
    </motion.button>
  );
};
export default Button;
