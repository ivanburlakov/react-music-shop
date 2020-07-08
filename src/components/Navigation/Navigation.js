import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";

import Panel from "../Panel/Panel.js";

import logo from "../../assets/logo.svg";

const Navigation = () => {
  const [offsetWidth, setWidth] = useState(null);
  const [offsetLeft, setLeft] = useState(null);
  const [color, setColor] = useState(null);

  const [isPanel, setPanel] = useState(false);
  const togglePanel = () => setPanel(!isPanel);

  const Products = useRef(null);
  const About = useRef(null);
  const Contacts = useRef(null);

  const menuItems = {
    Products: {
      ref: Products,
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

  // eslint-disable-next-line
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(setCurrentPage);

  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="logo" />
      <NavLink
        ref={Products}
        exact
        className="nav-item"
        activeClassName="nav-item is active"
        activeStyle={{ color: menuItems.Products.color }}
        to="/"
        onClick={(e) => changeIndicator(e.target, menuItems.Products.color)}
      >
        Products
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
        className="indicator"
        style={{
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
          backgroundColor: `${color}`,
        }}
      ></span>
      <button className="btn btn--gamma" onClick={togglePanel}>
        <span>Menu</span>
      </button>
      <Panel className="PanelInner" isOpened={isPanel} onClose={togglePanel}>
        <NavLink
          exact
          className="panel-nav-item"
          activeClassName="panel-nav-item is active"
          activeStyle={{ color: menuItems.Products.color }}
          to="/"
          onClick={(e) => {
            changeIndicator(e.target, menuItems.Products.color);
            togglePanel();
          }}
        >
          Products
        </NavLink>
        <NavLink
          exact
          className="panel-nav-item"
          activeClassName="panel-nav-item is active"
          activeStyle={{ color: menuItems.About.color }}
          to="/about"
          onClick={(e) => {
            changeIndicator(e.target, menuItems.About.color);
            togglePanel();
          }}
        >
          About
        </NavLink>
        <NavLink
          exact
          className="panel-nav-item"
          activeClassName="panel-nav-item is active"
          activeStyle={{ color: menuItems.Contacts.color }}
          to="/contact"
          onClick={(e) => {
            changeIndicator(e.target, menuItems.Contacts.color);
            togglePanel();
          }}
        >
          Contacts
        </NavLink>
      </Panel>
    </nav>
  );
};

export default Navigation;
