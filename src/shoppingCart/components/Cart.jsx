import React from 'react';
import Item from './Item'
import '../../App.css';
import ItemModal from "./ItemModal";
import Checkout from "./Checkout";
import { Table } from "react-bootstrap";

const Cart = (props) => {
    const { cart, modal, update, remove, updateModal } = props;
    const itemUpdate = (item) => {      

        let keys = Object.keys(item);
        let values = Object.values(item);
        keys.map((key, index) => {
            update({
                id: item.id,
                key: key,
                value: values[index]
            });
        })
    }

    const deleteItem = (id) => {
        remove(id)
    }

    const modalUpdate = (item) => {
        let keys = Object.keys(item);
        let values = Object.values(item);
        keys.map((key, index)=> {
            updateModal({
                key: key,
                value: values[index]
            });
        })
        
    }

    return (
        <div className=''>
            <table responsive className="itemList">
                <tbody>
                    <tr>
                        <th>{cart.toJS().length} ITEMS</th>
                        <th>SIZE</th>
                        <th>QTY</th>
                        <th>PRICE</th>
                    </tr>
                    {cart.map(item => (
                        <Item key={item.get('id')} item={item.toJS()} deleteItem={deleteItem} modalUpdate={modalUpdate} />
                    ))}
                </tbody>
            </table>
            <ItemModal modal={modal.toJS()} modalUpdate={modalUpdate} itemUpdate={itemUpdate} />
            <Checkout cart={cart.toJS()}/>
        </div>
    );
}

export default Cart;