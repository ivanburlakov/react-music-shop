import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimateSharedLayout } from 'framer-motion';

import Panel from '../Panel/Panel';
import Cart from '../Cart/Cart';
import FloatingButton from '../FloatingButton/FloatingButton';

import './Navigation.css';
import logo from '../../assets/logo.svg';

const spring = {
  type: 'spring',
  stiffness: 400,
  damping: 40,
};

export default function Navigation({ scrollTarget }) {
  // const { scrollY } = useViewportScroll();

  const [isPanel, setPanel] = useState(false);
  const togglePanel = () => setPanel(!isPanel);
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

  const location = useLocation();
  const [lastYPos, setLastYPos] = useState(0);
  const [isVisible, setVisible] = useState(true);

  useEffect(() => {
    const target = scrollTarget || window;
    function handleScroll() {
      const yPos = scrollTarget ? target.scrollTop : target.scrollY;
      const isScrollingUp = yPos < lastYPos;
      setVisible(isScrollingUp);
      setLastYPos(yPos);
    }
    target.addEventListener('scroll', handleScroll, false);
    return () => {
      target.removeEventListener('scroll', handleScroll, false);
    };
  }, [lastYPos, scrollTarget]);

  useEffect(() => {
    setVisible(true);
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
              // isSelected={`/${item.name.toLowerCase()}` === location.pathname.match(new RegExp(`^/${item.name.toLowerCase()}`))}
            />
          ))}
        </AnimateSharedLayout>
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
      <FloatingButton
        scrollTarget={scrollTarget}
        onClick={togglePanel}
        isVisible={isVisible}
      />
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
