import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimateSharedLayout } from 'framer-motion';

import Panel from '../Panel/Panel';
import FloatingButton from '../FloatingButton/FloatingButton';

import logo from '../../assets/logo.svg';

const Navigation = ({ scrollTarget }) => {
  // const { scrollY } = useViewportScroll();

  const [isPanel, setPanel] = useState(false);
  const togglePanel = () => setPanel(!isPanel);

  const menuItems = [
    {
      name: 'Home',
      color: 'red',
    },
    {
      name: 'Products',
      color: 'orange',
    },
    {
      name: 'About',
      color: 'green',
    },
    {
      name: 'Contact',
      color: 'rebeccapurple',
    },
  ];

  const location = useLocation();

  return (
    <AnimateSharedLayout>
      <div className="nav-space" />
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        {menuItems.map(item => (
          <Item
            name={item.name}
            key={item.color}
            color={item.color}
            isSelected={`/${item.name.toLowerCase()}` === location.pathname}
            // isSelected={`/${item.name.toLowerCase()}` === location.pathname.match(new RegExp(`^/${item.name.toLowerCase()}`))}
          />
        ))}
        <Panel className="PanelOuter" isOpen={isPanel} onClose={togglePanel}>
          {menuItems.map(item => (
            <PanelItem
              name={item.name}
              key={item.color}
              color={item.color}
              onClick={togglePanel}
              isSelected={`/${item.name.toLowerCase()}` === location.pathname}
            />
          ))}
        </Panel>
      </nav>
      <FloatingButton scrollTarget={scrollTarget} onClick={togglePanel} />
    </AnimateSharedLayout>
  );
};

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

export default Navigation;
