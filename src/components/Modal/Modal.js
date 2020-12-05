import React from 'react';

import { Portal } from 'react-portal';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = (props) => {
  const { isOpen, onClose, children } = props;

  const spring = {
    type: 'spring',
    stiffness: isOpen ? 100 : 300,
    damping: isOpen ? 10 : 40,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Portal node={document && document.getElementById('modal')}>
          <div className="Modal">
            <motion.div
              className="ModalOverlay"
              onClick={onClose}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={spring}
            />
            <motion.div
              className="ModalBody"
              initial={{
                opacity: 0,
                transform: `translate3d(0, -90px, 0)`,
              }}
              animate={{
                opacity: 1,
                transform: `translate3d(0, 0px, 0)`,
              }}
              exit={{
                opacity: 0,
                transform: `translate3d(0, -90px, 0)`,
              }}
              transition={spring}
            >
              {children}
            </motion.div>
          </div>
        </Portal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
