import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimateSharedLayout } from 'framer-motion';

import Panel from '../Panel/Panel';
import Cart from '../Cart/Cart';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import FloatingButton from '../FloatingButton/FloatingButton';

import './Navigation.css';
import logo from '../../assets/logo.svg';

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 40,
};

export default function Navigation({ scrollTarget }) {
  const [isPanel, setPanel] = useState(false);
  const [isLoginModal, setModal] = useState(false);
  const toggleLoginModal = () => setModal(!isLoginModal);
  const [loginSwitch, setLoginSwitch] = useState('Login');
  const toggleLoginSwitch = () => {
    if (loginSwitch === 'Login') setLoginSwitch('Register');
    else setLoginSwitch('Login');
  };
  const togglePanel = () => setPanel(!isPanel);
  const location = useLocation();
  const [isVisible, setVisible] = useState(true);
  const menuItems = [
    {
      name: 'Home',
      color: '#DB4437',
    },
    {
      name: 'Products',
      color: '#F4B400',
    },
    {
      name: 'About',
      color: '#0F9D58',
    },
    {
      name: 'Contact',
      color: '#663399',
    },
  ];
  window.lastYPos = 0;

  useEffect(() => {
    setVisible(true);
    const target = scrollTarget || window;
    function handleScroll() {
      const yPos = scrollTarget ? target.scrollTop : target.scrollY;
      const isScrollingUp = yPos < window.lastYPos || yPos === 0;
      setVisible(isScrollingUp);
      window.lastYPos = yPos;
    }
    target.addEventListener('scroll', handleScroll, false);
    return () => {
      target.removeEventListener('scroll', handleScroll, false);
    };
  }, [scrollTarget]);

  return (
    <>
      <div className="nav-space" />
      <motion.nav className="nav" transition={spring}>
        <img src={logo} alt="logo" className="logo" />
        <AnimateSharedLayout>
          {menuItems.map(item => (
            <Item
              name={item.name}
              key={item.color}
              color={item.color}
              isSelected={
                location.pathname.split('/')[1] === item.name.toLowerCase()
              }
            />
          ))}
        </AnimateSharedLayout>
        <Button onClick={toggleLoginModal} style={{ margin: 'auto' }}>
          Login
        </Button>
        <Cart />
      </motion.nav>
      <Panel className="PanelOuter" isOpen={isPanel} onClose={togglePanel}>
        {menuItems.map(item => (
          <PanelItem
            name={item.name}
            key={item.color}
            color={item.color}
            onClick={togglePanel}
            isSelected={
              location.pathname.split('/')[1] === item.name.toLowerCase()
            }
          />
        ))}
      </Panel>
      <FloatingButton onClick={togglePanel} isVisible={isVisible} />
      <Modal isOpen={isLoginModal} onClose={toggleLoginModal}>
        <div style={{ width: '400px', heigth: '400px' }} />
        <div className="login-switch-place">
          <div
            className="login-switch-text-container-left"
            role="button"
            tabIndex={0}
            onClick={toggleLoginSwitch}
            onKeyDown={toggleLoginSwitch}
          >
            <span>Login</span>
          </div>
          <div
            className="login-switch-text-container-right"
            role="button"
            tabIndex={0}
            onClick={toggleLoginSwitch}
            onKeyDown={toggleLoginSwitch}
          >
            <span>Register</span>
          </div>
          <motion.div
            initial={{ left: loginSwitch === 'Login' ? 0 : '100px' }}
            animate={{ left: loginSwitch === 'Login' ? 0 : '100px' }}
            layout="position"
            className="login-switch"
          >
            {loginSwitch}
          </motion.div>
        </div>
        {loginSwitch === 'Login' ? (
          <>
            <input
              type="text"
              key="login-email"
              name="login-email"
              className="big-input"
              placeholder="E-mail"
            />
            <input
              type="password"
              key="login-password"
              name="login-password"
              className="big-input"
              placeholder="Password"
            />
            <Button
              style={{
                width: '200px',
                margin: 'auto',
                marginBottom: '17px',
              }}
            >
              Login
            </Button>
          </>
        ) : (
          <>
            <input
              type="text"
              key="register-email"
              name="register-email"
              className="big-input"
              placeholder="E-mail"
            />
            <input
              type="password"
              key="register-password"
              name="register-password"
              className="big-input"
              placeholder="Create Password"
            />
            <input
              type="password"
              key="confirm-password"
              name="confirm-password"
              className="big-input"
              placeholder="Confirm Password"
            />
            <Button
              style={{
                width: '200px',
                margin: 'auto',
                marginBottom: '17px',
              }}
            >
              Register
            </Button>
          </>
        )}
      </Modal>
    </>
  );
}

function Item({ name, color, isSelected }) {
  return (
    <NavLink
      className="nav-item"
      activeClassName="nav-item is active"
      activeStyle={{ color }}
      to={`/${name.toLowerCase()}`}
    >
      <span>{name}</span>
      {isSelected && (
        <motion.div
          layoutId="nav-line"
          className="nav-line"
          animate={{ backgroundColor: color }}
        />
      )}
    </NavLink>
  );
}

function PanelItem({ name, color, onClick }) {
  return (
    <NavLink
      className="panel-nav-item"
      activeClassName="panel-nav-item is active"
      activeStyle={{ color }}
      onClick={onClick}
      to={`/${name.toLowerCase()}`}
    >
      {name}
    </NavLink>
  );
}
