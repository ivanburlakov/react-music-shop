import React, { useEffect, useState, useContext } from 'react';

import { FocusOn } from 'react-focus-on';
import { AnimatePresence, motion } from 'framer-motion';
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
    <FocusOn
      enabled={openCalled}
      onClickOutside={toggleOpen}
      onEscapeKey={toggleOpen}
      autoFocus
      returnFocus
    >
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
                <div className="cart-scroll">
                  {cart.map(product => (
                    <CartItem key={product.id} {...product} />
                  ))}
                </div>
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
    </FocusOn>
  );
}

function CartItem({ id, title, price, src, quantity }) {
  const { setCart } = useContext(CartContext);
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
      key={id}
      layout="position"
      className="cart-item"
    >
      <div className="cart-item-img-place">
        <img className="cart-item-img" src={src} alt="card-img" />
      </div>
      <div className="cart-item-title-container">
        <Shiitake lines={2} tagName="h3">
          Yooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
        </Shiitake>
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
