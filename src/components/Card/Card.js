import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";

function ClosedCardContent({ imageVisible, title, price, src }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  function handleImageLoaded() {
    setImageLoaded(true);
  }
  if (imageVisible) {
    return null;
  }
  return (
    <>
      <div className="img-place">
        <Skeleton
          style={
            imageLoaded
              ? { display: "none" }
              : {
                  position: "absolute",
                  borderRadius: "25px",
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
    </>
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
  const [text, setText] = useState("not done");
  // const [imageVisible, setImage] = useState(false);

  // function openCard() {}

  useEffect(() => {
    isOpen && (document.body.style.overflow = "hidden");
    !isOpen && (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <div className="card-place">
      <p style={{position: 'absolute', zIndex: 100}}>{text}</p>
      <motion.div
        animate
        layout
        onLayoutAnimationComplete={()=>{setText("done")}}
        // whileHover={{ scale: 1.05 }}
        data-cardopen={isOpen}
        transition={{ type: "spring", stiffness: 300, damping: 40 }}
        onClick={() => {
          setOpen(!isOpen);
        }}
        className="card"
      >
        <ClosedCardContent
          // imageVisible={imageVisible}
          title={title}
          price={price}
          src={src}
        />
      </motion.div>
    </div>
  );
}
