import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import Shiitake from 'shiitake';
import ScrollTargetContext from '../../contexts/ScrollTargetContext';

const spring = {
  type: 'spring',
  stiffness: 250,
  damping: 40,
};

export default function Card({ id, isSelected, title, text, price, image }) {
  const [isOpen, setOpen] = useState(false);
  const [zIndex, setIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const scrollFrameRef = useRef();
  const setScrollTarget = useContext(ScrollTargetContext);

  // const [isScale, setScale] = useState(1);

  function handleImageLoaded() {
    setImageLoaded(true);
  }

  function handleCardLayout() {
    if (isSelected) {
      setOpen(true);
    } else {
      setOpen(false);
      setIndex(0);
    }
  }

  useEffect(() => {
    if (isSelected) {
      setIndex(2);
      setScrollTarget(scrollFrameRef.current);
      document.body.classList.add('noscroll-body');
      document.documentElement.classList.add('noscroll');
    } else {
      setOpen(false);
      setIndex(1);
      setScrollTarget('window');
      document.body.classList.remove('noscroll-body');
      document.documentElement.classList.remove('noscroll');
    }
  }, [isSelected]);

  return (
    <li className="card-place">
      <div
        style={{ zIndex }}
        className="card-frame"
        data-cardopen={isSelected}
        // animate={{
        //   scale: isScale,
        // }}
        // transition={{ duration: 0.3}}
      >
        <motion.div
          className="card"
          layout
          onLayoutAnimationComplete={handleCardLayout}
          animate={{
            borderRadius: !isSelected ? 25 : 0,
          }}
          initial={{
            borderRadius: !isSelected ? 25 : 0,
          }}
          transition={spring}
        >
          <div
            ref={scrollFrameRef}
            data-cardopen={isSelected}
            className="card-content-frame"
          >
            <div className="card-content">
              <motion.div
                layout="position"
                transition={spring}
                data-cardopen={isSelected}
                className="img-place"
              >
                {/* <Skeleton
                  style={
                    imageLoaded
                      ? { display: 'none' }
                      : {
                          position: 'absolute',
                          top: 0,
                          height: '100%',
                          width: '100%',
                        }
                  }
                /> */}
                <img
                  className="card-img"
                  src={image}
                  onLoad={handleImageLoaded}
                  alt="card-img"
                />
              </motion.div>
              <motion.div
                layout="position"
                transition={spring}
                className="main-text"
              >
                <Shiitake
                  className="title"
                  lines={!isSelected ? 2 : 3}
                  tagName="h3"
                >
                  {title}
                </Shiitake>
                <div className="main-price">
                  <h3 className="price">{price}</h3>
                  {/* <motion.button
                    layout="position"
                    className="buy"
                    transition={spring}
                    onClick={cancel}
                  >
                    <span>Add</span>
                  </motion.button> */}
                </div>
              </motion.div>
              {isOpen && (
                <motion.p
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="main-body"
                  transition={spring}
                >
                  <span className="desc">{text}</span>
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      {!isSelected && (
        // <motion.div
        //   onHoverStart={() => {
        //     setScale(1.05);
        //   }}
        //   onHoverEnd={() => {
        //     setScale(1);
        //   }}
        // >
        <Link
          to={`${window.location.pathname}/${id}`}
          className="card-open-link"
          // onClick={() => {
          //   setScale(1);
          // }}
        />
        //
      )}
    </li>
  );
}
