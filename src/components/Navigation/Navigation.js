import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimateSharedLayout } from "framer-motion";

import Panel from "../Panel/Panel.js";

import logo from "../../assets/logo.svg";

const Navigation = () => {
  // const { scrollY } = useViewportScroll();

  const [isPanel, setPanel] = useState(false);
  const togglePanel = () => setPanel(!isPanel);

  const menuItems = [
    {
      name: "Products",
      color: "orange",
    },
    {
      name: "About",
      color: "green",
    },
    {
      name: "Contact",
      color: "rebeccapurple",
    },
  ];

  const location = useLocation();

  return (
    <AnimateSharedLayout>
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        {menuItems.map((item) => (
          <Item
            name={item.name}
            key={item.color}
            color={item.color}
            isSelected={`/${item.name.toLowerCase()}` === location.pathname}
          />
        ))}
        <button className="btn btn--gamma" onClick={togglePanel}>
          <span>Menu</span>
        </button>
          <Panel className="PanelOuter" isOpen={isPanel} onClose={togglePanel}>
            {menuItems.map((item) => (
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
    </AnimateSharedLayout>
  );
};

function Item({ name, color, isSelected }) {
  return (
    <NavLink
      className="nav-item"
      activeClassName="nav-item is active"
      activeStyle={{ color: color }}
      to={`/${name.toLowerCase()}`}
    >
      {name}
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
      activeStyle={{ color: color }}
      onClick={onClick}
      to={`/${name.toLowerCase()}`}
    >
      {name}
    </NavLink>
  );
}

export default Navigation;
