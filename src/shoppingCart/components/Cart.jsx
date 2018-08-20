import React from 'react';
import Item from './Item'
import '../../App.css';
import ItemModal from "./ItemModal";

const Cart = (props) => {
    const { cart, modal, update, remove, updateModal } = props;
    const add = () => {
        update({
            id: 1,
            key: "name",
            value: "mmakers dresss"
        });
        update({
            id: 1,
            key: "color",
            value: "dark red"
        });
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
            <table>
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


            <button onClick={add}>Item</button>
            <button onClick={modalUpdate}>modalUpdate</button>
            <ItemModal modal={modal.toJS()} modalUpdate={modalUpdate} />
        </div>
    );
}

export default Cart;