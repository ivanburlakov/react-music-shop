import React from 'react';

import { Portal } from 'react-portal';
import { motion } from 'framer-motion';
import { FocusOn } from 'react-focus-on';

import './Panel.css';

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 40,
};

const Panel = ({ isOpen, onClose, children }) => {
  return (
    <FocusOn
      enabled={isOpen}
      onClickOutside={onClose}
      onEscapeKey={onClose}
      autoFocus
      returnFocus
    >
      <Portal node={document && document.getElementById('modal')}>
        <div
          className="Panel"
          style={{
            pointerEvents: isOpen ? 'auto' : 'none',
          }}
        >
          <motion.div
            className="PanelOverlay"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={spring}
            style={{
              pointerEvents: isOpen ? 'auto' : 'none',
            }}
          />
          <motion.div
            className="PanelBody"
            initial={{ transform: `translate3d(0, +100%, 0)` }}
            animate={{
              transform: isOpen
                ? `translate3d(0, 0%, 0)`
                : `translate3d(0, +100%, 0)`,
            }}
            transition={spring}
          >
            {children}
          </motion.div>
        </div>
      </Portal>
    </FocusOn>
  );
};

export default Panel;
