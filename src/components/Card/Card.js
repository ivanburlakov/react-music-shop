import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "react-loading-skeleton";

function ClosedCardContent({ isVisible, title, price, src }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  function handleImageLoaded() {
    setImageLoaded(true);
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="img-place">
            <Skeleton
              style={
                imageLoaded
                  ? { display: "none" }
                  : {
                      position: "absolute",
                      borderTopLeftRadius: "25px",
                      borderTopRigthRadius: "25px",
                      height: "100%",
                      width: "100%",
                    }
              }
            />
            <motion.img
              animate={{ opacity: imageLoaded ? 1 : 0 }}
              className="card-img"
              src={src}
              onLoad={handleImageLoaded}
              alt="card-img"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// function OpenCardContent({ title, price, src }) {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   function handleImageLoaded() {
//     setImageLoaded(true);
//   }
//   return (
//     <>
//       <div className="img-place">
//         <Skeleton
//           style={
//             imageLoaded
//               ? { display: "none" }
//               : {
//                   position: "absolute",
//                   borderTopRightRadius: "25px",
//                   borderTopLeftRadius: "25px",
//                   borderBottomRightRadius: 0,
//                   borderBottomLeftRadius: 0,
//                   height: "100%",
//                   width: "100%",
//                 }
//           }
//         />
//         <img
//           className="card-img"
//           data-imageLoaded={imageLoaded}
//           src={src}
//           onLoad={handleImageLoaded}
//           alt="card-img"
//         />
//       </div>
//       {/* <h3 className="title">{title}</h3>
//           <p className="price">{price}$</p> */}
//       {/* <div className="buy" onClick={() => setCardOpen(true)}>
//         <p className="buy_text">Buy</p>
//       </div> */}
//     </>
//   );
// }

export default function Card({ title, price, src }) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <div className="card-place">
      <div className="card-frame" data-cardopen={isOpen}>
        <motion.div
          className="card"
          layout
          animate={!isOpen ? { borderRadius: "25px" } : { borderRadius: "0px" }}
          initial={!isOpen ? { borderRadius: "25px" } : { borderRadius: "0px" }}
          onAnimationStart={()=>{console.log("started")}}
          onAnimationComplete={()=>{console.log("ended")}}
          whileHover={
            !isOpen
              ? {
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, .15)",
                }
              : {}
          }
          transition={{ type: "spring", stiffness: 200, damping: 40 }}
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <ClosedCardContent
            isVisible={!isOpen}
            title={title}
            price={price}
            src={src}
          />
        </motion.div>
      </div>
    </div>
  );
}
