import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Panel from '../Panel/Panel.js'

import logo from "../../assets/logo.svg";

const Navigation = () => {
  const [offsetWidth, setWidth] = useState(null);
  const [offsetLeft, setLeft] = useState(null);
  const [color, setColor] = useState(null);

  const [isPanel, setPanel] = useState(false);
  const togglePanel = () => setPanel(!isPanel);

  const Home = useRef(null);
  const About = useRef(null);
  const Contacts = useRef(null);

  const menuItems = {
    Home: {
      ref: Home,
      color: "orange",
    },
    About: {
      ref: About,
      color: "green",
    },
    Contacts: {
      ref: Contacts,
      color: "rebeccapurple",
    },
  };

  function changeIndicator(e, color) {
    setWidth(e.offsetWidth);
    setLeft(e.offsetLeft);
    setColor(color);
  }

  function setCurrentPage() {
    Object.keys(menuItems).forEach((key) => {
      if (
        menuItems[key].ref.current.className === "nav-item nav-item is active"
      ) {
        changeIndicator(menuItems[key].ref.current, menuItems[key].color);
      }
    });
  }

  useEffect(setCurrentPage);

  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="logo" />
      <NavLink
        ref={Home}
        exact
        className="nav-item"
        activeClassName="nav-item is active"
        activeStyle={{ color: menuItems.Home.color }}
        to="/"
        onClick={(e) => changeIndicator(e.target, menuItems.Home.color)}
      >
        Home
      </NavLink>
      <NavLink
        ref={About}
        exact
        className="nav-item"
        activeClassName="nav-item is active"
        activeStyle={{ color: menuItems.About.color }}
        to="/about"
        onClick={(e) => changeIndicator(e.target, menuItems.About.color)}
      >
        About
      </NavLink>
      <NavLink
        ref={Contacts}
        exact
        className="nav-item"
        activeClassName="nav-item is active"
        activeStyle={{ color: menuItems.Contacts.color }}
        to="/contact"
        onClick={(e) => changeIndicator(e.target, menuItems.Contacts.color)}
      >
        Contacts
      </NavLink>
      <span
        style={{
          position: "absolute",
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
          backgroundColor: `${color}`,
          bottom: "0px",
          height: "5px",
          transition: ".4s",
          zIndex: "1",
          borderRadius: "8px 8px 0 0",
        }}
      ></span>
      <button className="btn btn--gamma" onClick={togglePanel}>
        <span>Cart</span>
      </button>
      <Panel isOpened={isPanel} onClose={togglePanel}>
          <div>{"I'm a panel"}</div>
        </Panel>
    </nav>
  );
};

export default Navigation;
