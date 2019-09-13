import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//components

export default function Shop({}){

  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(res => {
      dispatch({type: "ADD_PRODUCTS", payload: res})
    })
  }, []);

  const jsxProducts = products.map((e,i) => {
    return (
      <div className="col-4">
        <div class="card">
          <img src={e.productImage} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{e.productName}</h5>
            <p class="card-text">{e.productDescription}</p>
            <p>{e.productPrice}</p>
            <a href="#" class="btn btn-primary">Dodaj do koszyka</a>
          </div>
        </div>
      </div>
    )
  })

  return (<div className="container">
    <h1>Strona sklepu</h1>
    <div className="row">
      {jsxProducts}
    </div>
    </div>
  )
}
