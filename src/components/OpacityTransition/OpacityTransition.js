import React from 'react';
import { motion } from 'framer-motion';

const OpacityTransition = ({ className, key, children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    key={key}
    className={className}
  >
    {children}
  </motion.div>
);

export default OpacityTransition;
