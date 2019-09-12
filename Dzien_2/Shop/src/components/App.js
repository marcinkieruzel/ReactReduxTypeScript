import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//components
import Header from "./Header";
import Footer from "./Footer";
import Admin from "./Admin";
import Cart from "./Cart";
import Shop from "./Shop";

export default function App({}) {
  return (
    <>
    <Router>
        <Header />
        <Route exact path="/" component={Shop} />
        <Route path="/admin" component={Admin} />
        <Route path="/cart" component={Cart} />
        <Footer />
    </Router>
    </>
  )
}
