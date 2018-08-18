import React, { Component } from 'react';
import Item from "./Item";
import "../App.css";
class ShoppingCart extends Component {
    constructor(props) {
     super(props)
        this.state = {products: this.props.items};
    }
componentDidMount(){
   
};

    render(){
        return (
            <div>
            <table>
                <tbody>
                    <tr>
                            <th>{this.state.products.length} ITEMS</th>
                            <th>SIZE</th>
                            <th>QTY</th>
                            <th>PRICE</th>
                        </tr>
                        {this.state.products.map((item, index) => (
                                <Item key={index} item={item} />
                        ))}
                </tbody>
            </table>
           
                
            </div>
        )
    }
}

export default ShoppingCart;