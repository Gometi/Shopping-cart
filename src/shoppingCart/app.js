import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/reducer';
import { ShoppingCart } from './containers';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <ShoppingCart />
  </Provider>,
  document.getElementById('app')
);

