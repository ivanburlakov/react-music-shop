import React from 'react';

import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

import LoadingLottie from '../../assets/lotties/46864-lovely-cats.json';
import './Loading.css';

function Loading() {
  return (
    <motion.div
      key="loading"
      className="center-message"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Lottie
        animationData={LoadingLottie}
        loop
        autoplay
        style={{ height: 400, width: 400 }}
      />
      <span className="loading-message">
        <span>Loading</span>
        <span className="loading-dots" />
      </span>
    </motion.div>
  );
}

export default Loading;
