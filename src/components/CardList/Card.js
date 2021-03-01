import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { RemoveScroll } from 'react-remove-scroll';
import Shiitake from 'shiitake';
import { ScrollTargetContext, CartContext } from '../../contexts';

export default function Card({ id, isSelected, title, text, price, src }) {
  const [isOpen, setOpen] = useState(false);
  const [zIndex, setIndex] = useState(0);
  const [inCart, setInCart] = useState();
  const scrollFrameRef = useRef();
  const setScrollTarget = useContext(ScrollTargetContext);
  const { cart, setCart } = useContext(CartContext);
  const spring = {
    type: 'spring',
    stiffness: 250,
    damping: 40,
  };

  function handleCartButton() {
    let cartCopy = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cartCopy.find(e => e.id === id);
    if (!item) {
      cartCopy.push({ id, title, price, src, quantity: 1 });
      setInCart(true);
    } else {
      cartCopy = cartCopy.filter(e => e.id !== id);
      setInCart(false);
    }
    localStorage.setItem('cart', JSON.stringify(cartCopy));
    setCart(cartCopy);
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
    function handleStorage() {
      const cartCopy = JSON.parse(localStorage.getItem('cart')) || [];
      const item = cartCopy.find(e => e.id === id);
      setInCart(!!item);
    }
    handleStorage();
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, [id]);

  useEffect(() => {
    const cartCopy = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cartCopy.find(e => e.id === id);
    setInCart(!!item);
  }, [id, cart]);

  useEffect(() => {
    if (isSelected) {
      setIndex(2);
      setScrollTarget(scrollFrameRef.current);
    } else {
      setOpen(false);
      setIndex(1);
      setScrollTarget(null);
    }
    return () => {
      setScrollTarget(null);
    };
  }, [isSelected, setScrollTarget]);

  return (
    <RemoveScroll enabled={isSelected}>
      <li className="card-place">
        <div
          style={{ zIndex }}
          className="card-frame"
          data-cardopen={isSelected}
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
                  <img className="card-img" src={src} alt="card-img" />
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
                    <h3 className="price">{price}$</h3>
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
        <motion.button
          layout="position"
          animate={{
            backgroundColor: !inCart ? '#FFDACD' : '#80e27e',
            color: !inCart ? '#FC8272' : '#087f23',
          }}
          className="buy"
          transition={spring}
          onClick={handleCartButton}
        >
          {!inCart ? (
            <span className="material-icons">add_shopping_cart</span>
          ) : (
            <span className="material-icons">shopping_cart</span>
          )}
        </motion.button>
      </li>
    </RemoveScroll>
  );
}
