import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//components

export default function Admin({}) {

  const adminForm = useSelector(state => state.adminForm);
  const dispatch = useDispatch();

  console.log(adminForm);

  //Events
  const handleChange = (event) => {
    console.log("Change: ", this, event);

    dispatch({type: "CHANGE_FORM_STATE", payload: {[event.currentTarget.name]: event.currentTarget.value} });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({type: "ADD_PRODUCT", payload: adminForm});

    fetch('http://localhost:3000/products', {
      method: "POST",
     headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(adminForm)
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

  return <div className="container">
  <h1 style={{marginTop: "1em"}}>Dodaj produkt</h1>
    <form onSubmit={handleSubmit} >
      <div className="form-group">
        <label for="productName">Nazwa produktu</label>
        <input onChange={handleChange} type="text" value={adminForm.productName} name={"productName"} className="form-control" id="productName" placeholder="Podaj nazwę produktu" />
        <label for="productDescription">Opis produktu</label>
        <textarea className="form-control" id="productDescription" value={adminForm.productDescription} name="productDescription" onChange={handleChange}></textarea>

        <label for="productImage">Obrazek produktu</label>
        <input className="form-control" id="productImage" type="url" value={adminForm.productImage} name="productImage" onChange={handleChange} />

        <label for="productPrice">Cena w PLN</label>
        <input className="form-control" id="productPrice" type="number" value={adminForm.productPrice} name="productPrice" onChange={handleChange} />
       </div>
      <br />
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <h2 style={{marginTop: "1em"}}>Zamówienia</h2>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Email</th>
          <th scope="col">Produkty</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>kazik@kazikkoduje.pl</td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>Czekolada</td>
                  <td>20</td>
                </tr>
                <tr>
                  <td>Arbuz</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
}
