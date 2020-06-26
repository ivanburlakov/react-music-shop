import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const menuItems = {
    Home: {
      color: 'orange',
    },
    About: {
      color: 'green',
    },
    Contacts: {
      color: 'rebeccapurple',
    },
  }

  const [offsetWidth, setWidth] = useState(84);
  const [offsetLeft, setLeft] = useState(26);
  const [color, setColor] = useState("orange");

  function switchMenu(e, color) {
    setWidth(e.target.offsetWidth);
    setLeft(e.target.offsetLeft);
    setColor(color);
  }

  return (
    <nav className="nav">
      <NavLink
        refs="Home"
        exact
        className="nav-item"
        activeClassName="nav-item is active"
        activeStyle={{ color: menuItems.Home.color }}
        to="/"
        onClick={(e) => switchMenu(e, menuItems.Home.color)}
      >
        Home
      </NavLink>
      <NavLink
        refs="About"
        exact
        className="nav-item"
        activeClassName="nav-item is active"
        activeStyle={{ color: menuItems.About.color }}
        to="/about"
        onClick={(e) => switchMenu(e, menuItems.About.color)}
      >
        About
      </NavLink>
      <NavLink
        refs="Contacts"
        exact
        className="nav-item"
        activeClassName="nav-item is active"
        activeStyle={{ color: menuItems.Contacts.color }}
        to="/contact"
        onClick={(e) => switchMenu(e, menuItems.Contacts.color)}
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
    </nav>
  );
};

export default Navigation;
