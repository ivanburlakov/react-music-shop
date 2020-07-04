import React from "react";
import "./App.css";
import "./button.css";
import "./components/Modal/Modal.css";
import "./components/Panel/Panel.css";

import Navigation from "./components/Navigation/Navigation.js";
import Main from "./components/Main/Main.js";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
