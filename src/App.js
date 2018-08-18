import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import items from "./items";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <ShoppingCart items={items}/>
      </div>
    );
  }
}

export default App;
