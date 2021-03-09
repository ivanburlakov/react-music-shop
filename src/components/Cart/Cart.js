import React, { useEffect, useState, useContext } from 'react';

import { RemoveScroll } from 'react-remove-scroll';
import { AnimatePresence, motion } from 'framer-motion';
import { Scrollbars } from 'react-custom-scrollbars';
import Shiitake from 'shiitake';
import { CartContext } from '../../contexts';
import './Cart.css';

export default function Cart() {
  const [isOpen, setOpen] = useState(false);
  const [isClosed, setClosed] = useState(true);
  const [openCalled, setOpenCalled] = useState(false);
  const toggleOpen = () => setOpenCalled(!openCalled);
  const { cart, setCart } = useContext(CartContext);
  const spring = {
    type: 'spring',
    stiffness: 300,
    damping: 40,
  };

  function handleLayout() {
    if (!openCalled) {
      setOpen(false);
      setClosed(true);
    } else {
      setOpen(true);
    }
  }

  useEffect(() => {
    if (!openCalled) {
      setOpen(false);
    } else {
      setClosed(false);
    }
  }, [openCalled]);

  useEffect(() => {
    function handleStorage() {
      const cartCopy = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(cartCopy);
    }
    handleStorage();
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
    };
  }, [setCart]);

  return (
    <>
      {openCalled && (
        <motion.div
          className="CartOverlay"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={toggleOpen}
        />
      )}
      <RemoveScroll enabled={openCalled}>
        <motion.div
          layout
          onLayoutAnimationComplete={handleLayout}
          initial={{ background: '#FFDACD' }}
          animate={{ background: openCalled ? '#FFFFFF' : '#FFDACD' }}
          className="CartBody"
          data-cartopen={openCalled}
          transition={spring}
          style={{
            borderRadius: '25px',
          }}
        >
          {isOpen && openCalled && (
            <AnimatePresence exitBeforeEnter>
              {cart.length >= 1 ? (
                <div className="cart-list">
                  <Scrollbars style={{ width: '100%', height: '100%' }}>
                    {cart.map(product => (
                      <CartItem key={product.id} {...product} />
                    ))}
                  </Scrollbars>
                </div>
              ) : (
                <motion.div
                  key="no-cart-items"
                  className="no-cart-items"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <span className="material-icons" style={{ fontSize: '68px' }}>
                    remove_shopping_cart
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          )}
          {isClosed && (
            <div
              className="CartButton"
              role="button"
              tabIndex={0}
              onClick={toggleOpen}
              onKeyDown={toggleOpen}
            >
              <motion.span
                className="material-icons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                shopping_cart
              </motion.span>
            </div>
          )}
        </motion.div>
      </RemoveScroll>
    </>
  );
}

function CartItem({ id, title, price, src, quantity }) {
  const [currentQuanity, setQuantity] = useState(quantity);
  const { cart, setCart } = useContext(CartContext);
  function removeItem() {
    let cartCopy = JSON.parse(localStorage.getItem('cart')) || [];
    cartCopy = cartCopy.filter(e => e.id !== id);
    localStorage.setItem('cart', JSON.stringify(cartCopy));
    setCart(cartCopy);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={`cart-item-${id}`}
      layout="position"
      className="cart-item"
    >
      <div className="cart-item-img-place">
        <img className="cart-item-img" src={src} alt="card-img" />
      </div>
      <div className="cart-item-title-container">
        <Shiitake className="cart-item-title" lines={2} tagName="span">
          Man dis so so cul yo dude cmon yo yeah
        </Shiitake>
        <input
          type="number"
          name="quantity"
          className="quantity-input"
          inputMode="numeric"
          min="1"
          max="100"
          pattern="\d"
          value={currentQuanity}
          onChange={e => {
            const { min, max } = e.target;
            const parsedMin = parseInt(min, 10);
            const parsedMax = parseInt(max, 10);
            const value = parseInt(e.target.value, 10);
            const regex = /\d/i;
            const match = e.target.value.match(regex);
            if (!match) {
              e.target.value = currentQuanity;
              return;
            }
            if (value < parsedMin || e.target.value === '') {
              e.target.value = parsedMin;
              setQuantity(parsedMin);
            } else if (value > parsedMax) {
              e.target.value = parsedMax;
              setQuantity(parsedMax);
            } else {
              setQuantity(value);
            }
            const itemIndex = cart.findIndex(el => el.id === id);
            const cartCopy = cart;
            cartCopy[itemIndex].quantity = e.target.value;
            setCart(cartCopy);
            localStorage.setItem('cart', JSON.stringify(cartCopy));
          }}
        />
      </div>
      <div
        role="button"
        tabIndex={0}
        className="cart-item-remove"
        onClick={removeItem}
        onKeyDown={removeItem}
      >
        <span className="material-icons">close</span>
      </div>
    </motion.div>
  );
}
