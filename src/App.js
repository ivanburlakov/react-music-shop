import React from 'react';
import './App.css';
import './button.css';
import './components/Modal/Modal.css';
import './components/Panel/Panel.css';
import './components/CardList/CardList.css';
import './components/CategoryCardList/CategoryCardList.css';
import './components/Navigation/Navigation.css';
import './responsive.css';

import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Main />
    </div>
  );
};

export default App;
