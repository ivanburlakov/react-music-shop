import React, { useState } from 'react';

import Lottie from 'lottie-react';

import SuccessLottie from '../assets/lotties/success.json';
import ErrorLottie from '../assets/lotties/error.json';

import Modal from '../components/Modal/Modal';

const About = () => {
  const [isSuccessModal, setSuccessModal] = useState(false);
  const [isErrorModal, setErrorModal] = useState(false);

  const toggleSuccessModal = () => setSuccessModal(!isSuccessModal);
  const toggleErrorModal = () => setErrorModal(!isErrorModal);

  return (
    <div key="about" className="about">
      <button type="button" onClick={toggleSuccessModal}>
        success modal
      </button>
      <Modal isOpen={isSuccessModal} onClose={toggleSuccessModal}>
        <div className="SuccessModalInner">
          <h3>Your order is accepted!</h3>
          <Lottie
            animationData={SuccessLottie}
            loop={false}
            autoplay
            style={{
              position: 'absolute',
              top: '75px',
              height: 100,
              width: 100,
            }}
          />
        </div>
      </Modal>
      <button type="button" onClick={toggleErrorModal}>
        error modal
      </button>
      <Modal isOpen={isErrorModal} onClose={toggleErrorModal}>
        <div className="ErrorModalInner">
          <h3>Ooops.. Something went wrong!</h3>
          <Lottie
            animationData={ErrorLottie}
            loop={false}
            autoplay
            height={230}
            width={230}
            style={{
              position: 'absolute',
              top: '12px',
              height: 230,
              width: 230,
            }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default About;
