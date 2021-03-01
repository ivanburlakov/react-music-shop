import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import Shiitake from 'shiitake';

import './CategoryCardList.css';

const spring = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
};

export default function Card({ title, link, image }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  function handleImageLoaded() {
    setImageLoaded(true);
  }

  return (
    <motion.li
      className="category-place"
      whileHover={{ scale: 1.05 }}
      transition={spring}
    >
      <div className="category-img-place">
        <Skeleton
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
        />
        <motion.img
          animate={{
            opacity: !imageLoaded ? 0 : 1,
          }}
          transition={spring}
          className="category-img"
          src={image}
          onLoad={handleImageLoaded}
          alt="category-img"
        />
      </div>
      <div className="category-dimm" />
      <div className="category-title-container">
        <Shiitake className="category-title" lines={2} tagName="h2">
          {title}
        </Shiitake>
      </div>
      <Link to={`/products${link}`} className="card-open-link" />
    </motion.li>
  );
}
