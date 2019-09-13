import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import _ from 'lodash';

//components

export default function Cart({}) {

  const cart = useSelector(state => state.cart);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const [productsInCart, setProductsInCart] = useState([]);

  console.log("Cart", cart);

  useEffect(() => {
    let prods = cart.map((e,i) => {
      return (
        <tr>
          <th scope="row">{e.productName}</th>
          <td>{e.productPrice}</td>
        </tr>
      )
    });
    setProductsInCart(prods)
  }, [cart]);

  let total = 0;

  cart.forEach((e, i) => {
    if(!isNaN(Number(e.productPrice))) {
      total += Number(e.productPrice);
    }
  });

  const handleEmailChange = (e) => {
    setEmail(e.currentTarget.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && cart.length) {
      dispatch({type: 'ADD_USER_TO_PRODUCTS', payload: email});

      fetch('http://localhost:3000/orders', {
        method: "POST",
       headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(cart)
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })

      fetch('http://localhost:3000/clients', {
        method: "POST",
       headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({email: email})
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })


    }
  }

  return <div className="container">
    <h1>Koszyk klienta</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Produkt</th>
          <th scope="col">Cena</th>
        </tr>
      </thead>
      <tbody>
        {productsInCart}
      </tbody>
      <tfoot>
        <tr>
          <th scope="col">Razem</th>
          <th scope="col">{cart.length && total }</th>
        </tr>
      </tfoot>
    </table>

    <form onSubmit={handleSubmit} >
       <div class="form-group">
        <label for="exampleInputEmail1">Adres email</label>
        <input value={email} onChange={handleEmailChange} name="userEmail" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <button type="submit" className="btn btn-primary">Złóż zamówienie</button>
    </form>
  </div>
}
