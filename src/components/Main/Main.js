import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// import Products from "../../pages/Products.js";
import Home from '../../pages/Home';
import Contacts from '../../pages/Contacts';
import About from '../../pages/About';
import CardList from '../CardList/CardList';
import NotFoundPage from '../../pages/NotFoundPage';

const Main = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        {/* <Route path='/products' component={Products} /> */}
        <Route
          exact
          path={['/products/:id', '/products']}
          component={CardList}
        />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contacts} />
        <Route component={NotFoundPage} />
      </Switch>
    </AnimatePresence>
  );
};

export default Main;
