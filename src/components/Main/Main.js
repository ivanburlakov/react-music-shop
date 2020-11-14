import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// import Products from "../../pages/Products.js";
import Home from "../../pages/Home.js";
import Contacts from "../../pages/Contacts.js";
import About from "../../pages/About.js";
import CardList from "../../components/CardList/CardList.js";

const Main = () => (
  <>
    <Route exact path="/" component={Home}>
      <Redirect to="/products" />
    </Route>
    <Route path={["/products/:id", "/products"]} component={CardList} />
    <Route path="/about" component={About}></Route>
    <Route path="/contact" component={Contacts}></Route>
  </>
);

export default Main;
