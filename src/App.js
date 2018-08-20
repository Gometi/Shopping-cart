import React, { Component } from 'react';
import './App.css';
import Header from "./shoppingCart/components/Header";

import { ShoppingCart } from './shoppingCart/containers';

class App extends Component {
  
  render() {
    return (
      <div className="container">
      <Header/>
      <ShoppingCart/>
      </div>
    );
  }
}

export default App;
