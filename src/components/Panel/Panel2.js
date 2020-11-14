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
        panelOffset: spring(isVisible ? 0 : -100, {
          stiffness: isVisible ? 170 : 300,
          damping: isVisible ? 26 : 40,
        }),
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
            className="PanelOverlay"
            onClick={onClose}
            style={{
              opacity: motion.opacity,
              pointerEvents: isVisible ? "auto" : "none",
            }}
          />
          <div
            className="PanelBody"
            style={{
              transform: `translate3d(0, ${motion.panelOffset}%, 0)`,
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
