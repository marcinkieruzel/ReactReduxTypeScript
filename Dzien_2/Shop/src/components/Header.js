import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//components

export default function Header({}) {
  return (
    <header className="navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <ul className="navbar-nav" style={{flexDirection: "row"}}>
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/cart">Cart</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
        </ul>
      </div>
    </header>
  )
}
