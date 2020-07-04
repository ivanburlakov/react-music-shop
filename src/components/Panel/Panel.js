import React from "react";

import Mortal from "react-mortal";

const Panel = (props) => {
  const { isOpened, onClose, children } = props;

  return (
    <Mortal
      isOpened={isOpened}
      onClose={onClose}
      motionStyle={(spring, isVisible) => ({
        opacity: spring(isVisible ? 1 : 0),
        panelOffset: spring(isVisible ? 0 : 100),
      })}
    >
      {(motion, isVisible) => (
        <div
          className="Panel"
          style={{
            pointerEvents: isVisible ? "auto" : "none",
          }}
        >
          <div
            className="Panel--overlay"
            onClick={onClose}
            style={{
              opacity: motion.opacity,
              pointerEvents: isVisible ? "auto" : "none",
            }}
          />
          <div
            className="Panel--body"
            style={{
              transform: `translate3d(${motion.panelOffset}%, 0, 0)`,
            }}
          >
            {children}
          </div>
        </div>
      )}
    </Mortal>
  );
};

export default Panel;
