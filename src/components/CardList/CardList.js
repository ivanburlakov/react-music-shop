import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

import Card from './Card';
import Loading from '../Loading/Loading';
import './CardList.css';

const data = require('../../assets/products.json');

const CardList = ({ match, history }) => {
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.src;
        loadImg.onload = () => resolve(image.url);
        loadImg.onerror = err => reject(err);
      });
    };

    Promise.all(data.products.map(image => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch(err => console.log('Failed to load images', err));
  }, []);

  useEffect(() => {
    const { id } = match.params;
    const exists = data.products.find(el => el.id === id);
    if (id && !exists) {
      history.push('/404');
    }
  }, [match, history]);

  return (
    <AnimatePresence exitBeforeEnter>
      {!imgsLoaded ? (
        <Loading />
      ) : (
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key="card-section"
          className="card-section"
        >
          {data.products.map(card => (
            <Card
              key={card.id}
              isSelected={match.params.id === card.id}
              history={history}
              {...card}
              // TODO: this is for testing:
              text={data.sampleText}
            />
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );
};

export default CardList;
