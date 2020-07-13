import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";

const Card = (props) => {
  const { title, price, src } = props;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);


  function handleImageLoaded() {
    setImageLoaded(true);
  }

  return (
    <div className={`card${cardOpen ? " opened" : ""}`}>
      <div className="img-place">
        <Skeleton
          style={
            imageLoaded
              ? { display: "none" }
              : {
                  position: "absolute",
                  borderTopRightRadius: "25px",
                  borderTopLeftRadius: "25px",
                  borderBottomRightRadius: 0,
                  borderBottomLeftRadius: 0,
                  height: "100%",
                  width: "100%",
                }
          }
        />
        <img
          className={`card-img${imageLoaded ? " loaded" : ""}`}
          src={src}
          onLoad={handleImageLoaded}
          alt="card-img"
        />
      </div>
      <h3 className="title">{title}</h3>
      <p className="price">{price}$</p>
      {/* <div className="buy" onClick={() => setCardOpen(true)}>
        <p className="buy_text">Buy</p>
      </div> */}
    </div>
  );
};

export default Card;
