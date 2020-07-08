import React from "react";
import { Switch, Route } from 'react-router-dom';

import Products from '../../pages/Products.js';
import Contacts from '../../pages/Contacts.js';
import About from '../../pages/About.js';

const Main = () => (
  <Switch>
    <Route exact path='/' component={Products}></Route>
    <Route exact path='/about' component={About}></Route>
    <Route exact path='/contact' component={Contacts}></Route>
  </Switch>
);

export default Main;