import React from 'react';
import Item from './Item'
import '../../App.css';

 const Cart = (props) => {
    const { cart, update, remove } = props;
    const add = () => {
        update({
            id: 1,
            key: "name",
            value: "mmakers dresss" });
            update({
            id: 1,
            key: "color",
            value: "dark red" });
    }

    const deleteItem = (id) => {
     remove(id)
    }

    return (
        <div className='todo'>
            <table>
                    <tbody>
                        <tr>
                            <th>{cart.toJS().length} ITEMS</th>
                            <th>SIZE</th>
                            <th>QTY</th>
                            <th>PRICE</th>
                        </tr>
                        {cart.map(item => (
                        <Item key={item.get('id')} item={item.toJS()} deleteItem={deleteItem} />
                ))}
                    </tbody>
                </table>
                

            <button onClick={add}>Item</button>
        </div>
    );
}

export default Cart;