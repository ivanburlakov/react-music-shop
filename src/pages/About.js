import React, { useState } from "react";

import Lottie from "react-lottie";
import SuccessLottie from "../assets/lotties/success.json";
import ErrorLottie from "../assets/lotties/error.json";

import Modal from "../components/Modal/Modal.js";

const About = () => {
  const [isSuccessModal, setSuccessModal] = useState(false);
  const [isErrorModal, setErrorModal] = useState(false);

  const toggleSuccessModal = () => setSuccessModal(!isSuccessModal);
  const toggleErrorModal = () => setErrorModal(!isErrorModal);

  return (
    <div className="about">
      <button onClick={toggleSuccessModal}>success modal</button>
      <Modal isOpen={isSuccessModal} onClose={toggleSuccessModal}>
          <div className="SuccessModalInner">
          <h3>Your order is accepted!</h3>
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: SuccessLottie,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={100}
            width={100}
            style={{ position: "absolute", top: "75px" }}
          />
          </div>
      </Modal>
      <button onClick={toggleErrorModal}>error modal</button>
      <Modal isOpen={isErrorModal} onClose={toggleErrorModal}>
          <div className="ErrorModalInner">
          <h3>Ooops.. Something went wrong!</h3>
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData: ErrorLottie,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={230}
            width={230}
            style={{ position: "absolute", top: "12px" }}
          />
          </div>
      </Modal>
    </div>
  );
};

export default About;
