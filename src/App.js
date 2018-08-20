import React, { Component } from 'react';
import './App.css';
import Header from "./shoppingCart/components/Header";
import items from "./items";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";
import { ShoppingCart } from './shoppingCart/containers';
import { TodoList } from './shoppingCart/containers';

class App extends Component {
  constructor(){
    super();
    
  }
  
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
