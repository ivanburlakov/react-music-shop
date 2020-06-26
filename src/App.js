import React from "react";
import "./App.css";

import Navigation from "./components/Navigation.js";
import Main from "./components/Main.js";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
