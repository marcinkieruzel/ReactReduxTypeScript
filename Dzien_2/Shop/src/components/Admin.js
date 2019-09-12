import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//components

export default function Admin({}) {
  return <div className="container">
  <h1 style={{marginTop: "1em"}}>Dodaj produkt</h1>
    <form>
      <div className="form-group">
        <label for="productName">Nazwa produktu</label>
        <input type="text" className="form-control" id="productName" placeholder="Podaj nazwę produktu" />
      </div>
      ... Stwórz brakujące pola ...
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
