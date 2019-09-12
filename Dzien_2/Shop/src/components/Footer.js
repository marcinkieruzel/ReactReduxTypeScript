import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//components

export default function Footer({}){
  return <div class="bg-dark">
    <p class="container" style={{padding: "20px", color: "white"}}>KazikKoduje 2018</p>
  </div>
}
