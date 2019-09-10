import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Home';
import './assets/scss/app.scss';

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <App />,
    document.querySelector("#app")
  )
})
