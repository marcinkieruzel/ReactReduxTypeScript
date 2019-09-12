import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//components

export default function Cart({}) {
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
        <tr>
          <th scope="row">Czekolada</th>
          <td>20</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="col">Razem</th>
          <th scope="col">20</th>
        </tr>
      </tfoot>
    </table>

    <form>
       <div class="form-group">
        <label for="exampleInputEmail1">Adres email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      ...
      <br />
      <button type="submit" className="btn btn-primary">Złóż zamówienie</button>
    </form>
  </div>
}
