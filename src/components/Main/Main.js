import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import Products from "../../pages/Products.js";
import Home from '../../pages/Home';
import Contacts from '../../pages/Contacts';
import About from '../../pages/About';
import CardList from '../CardList/CardList';

const Main = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route path="/home" component={Home} />
    {/* <Route path='/products' component={Products} /> */}
    <Route path={['/products/:id', '/products']} component={CardList} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contacts} />
  </Switch>
);

export default Main;
