import React from "react";

import Mortal from "react-mortal";

const Modal = (props) => {
  const { isOpened, onClose, children } = props;

  return (
    <Mortal
      isOpened={isOpened}
      onClose={onClose}
      motionStyle={(spring, isVisible) => ({
        opacity: spring(isVisible ? 1 : 0),
        modalOffset: spring(isVisible ? 0 : -90, {
          stiffness: isVisible ? 100 : 300,
          damping: isVisible ? 10 : 40,
        }),
      })}
    >
      {(motion, isVisible) => (
        <div
          className="Modal"
          style={{
            pointerEvents: isVisible ? "auto" : "none",
          }}
        >
          <div
            className="ModalOverlay"
            onClick={onClose}
            style={{
              opacity: motion.opacity,
              pointerEvents: isVisible ? "auto" : "none",
            }}
          />
          <div
            className="ModalBody"
            style={{
              opacity: motion.opacity,
              transform: `translate3d(0, ${motion.modalOffset}px, 0)`,
            }}
          >
            {children}
          </div>
        </div>
      )}
    </Mortal>
  );
};

export default Modal;
