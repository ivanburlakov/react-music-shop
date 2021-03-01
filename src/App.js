import React, { useState } from 'react';

import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import { ScrollTargetContext, CartContext } from './contexts';

const App = () => {
  const [scrollTarget, setScrollTarget] = useState(null);
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Navigation cart={cart} setCart={setCart} scrollTarget={scrollTarget} />
      <ScrollTargetContext.Provider value={setScrollTarget}>
        <Main />
      </ScrollTargetContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
