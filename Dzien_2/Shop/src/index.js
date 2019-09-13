import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import logger from 'redux-logger';
require('bootstrap/dist/css/bootstrap.min.css')

/**
 * [reducers description]
 * @type {[type]}
 */
 import shopReducer from './reducers/shopReducer';
 import productsReducer from './reducers/productsReducer';
 import adminFormReducer from './reducers/adminFormReducer';
 import cartReducer from './reducers/cartReducer';


const reducers = combineReducers({
  shop: shopReducer,
  products: productsReducer,
  adminForm: adminFormReducer,
  cart: cartReducer
})

const store = createStore(reducers, applyMiddleware(logger));


/**
 * Components
 */

import App from './components/App';

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector("#app")
  )
})
