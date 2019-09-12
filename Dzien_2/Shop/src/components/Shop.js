import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//components

export default function Shop({}){
  return (<div className="container">
    <h1>Strona sklepu</h1>
    <div className="row">
      <div className="col-4">
        <div class="card">
          <img src="https://www.kalendarzrolnikow.pl/upload/image/czekolada-art.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Czekolada</h5>
            <p class="card-text">Pychota</p>
            <p>40 zł</p>
            <a href="#" class="btn btn-primary">Dodaj do koszyka</a>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div class="card">
          <img src="https://www.kalendarzrolnikow.pl/upload/image/czekolada-art.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Czekolada</h5>
            <p class="card-text">Pychota</p>
            <p>40 zł</p>
            <a href="#" class="btn btn-primary">Dodaj do koszyka</a>
          </div>
        </div>
      </div>
    </div>
  </div>)
}
