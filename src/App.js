import React, { useState } from 'react';

import './App.css';
import './button.css';
import './components/Modal/Modal.css';
import './components/Panel/Panel.css';
import './components/CardList/CardList.css';
import './components/CategoryCardList/CategoryCardList.css';
import './components/Navigation/Navigation.css';
import './components/FloatingButton/FloatingButton.css';
import './responsive.css';

import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Context from './contexts/ScrollTargetContext';

const App = () => {
  const [scrollTarget, setScrollTarget] = useState('window');
  return (
    <Context.Provider value={setScrollTarget}>
      <Navigation scrollTarget={scrollTarget} />
      <Main />
    </Context.Provider>
  );
};

export default App;
