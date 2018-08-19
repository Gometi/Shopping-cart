import React, { Component } from 'react';
import Item from "./Item";
import AddItem from "./AddItem";
import "../App.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Immutable from 'immutable';

// const mapStateToProps = state => {
//     return { cart: state.cart, byId: state.byId };
// };
const mapStateToProps = state => {
    return { todos: state };
};

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changed: ""
        }
    }
    componentDidMount() {
    }
    
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>4 ITEMS</th>
                            <th>SIZE</th>
                            <th>QTY</th>
                            <th>PRICE</th>
                        </tr>
                        {/* {this.props.byId.map((id, index) => (
                            <Item key={index} item={this.props.cart[id]} />
                        ))} */}
                    </tbody>
                </table>
            </div>
        )
    }
}

// const ItemList = ({ cart, byId }) => (

//     <div>
//         <table>
//             <tbody>
//                 <tr>
//                     <th>{byId.length} ITEMS</th>
//                     <th>SIZE</th>
//                     <th>QTY</th>
//                     <th>PRICE</th>
//                 </tr>
//                 {byId.map((id, index) => (
//                            <Item key={index} item={cart[id]} />
//                      ))}
//             </tbody>
//         </table>
//     </div>
// );
const ShoppingCart = connect(mapStateToProps)(ItemList);

ItemList.propTypes = {
    cart: PropTypes.object.isRequired,
    byId: PropTypes.array.isRequired
};
// render(){
//     return (
//         <div>
//         <table>
//             <tbody>
//                 <tr>
//                         <th>{this.state.products.length} ITEMS</th>
//                         <th>SIZE</th>
//                         <th>QTY</th>
//                         <th>PRICE</th>
//                     </tr>
//                     {this.state.products.map((item, index) => (
//                             <Item key={index} item={item} />
//                     ))}
//             </tbody>
//         </table>


//         </div>
//     )
// }


export default ShoppingCart;