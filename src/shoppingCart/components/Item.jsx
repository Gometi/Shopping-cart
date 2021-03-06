import React from 'react';
import "../../App.css";
const Item = (props) => {
    const { item, deleteItem, modalUpdate } = props;
    const handleDelete = () => {
        deleteItem(item.id);
    }
    const showModal = () => {
        let modalItem = { ...item, show: true }
        modalUpdate(modalItem)
    }

    return (
        <tr>
            <td>
                <div className="item">
                    <img className="image" src={item.image} alt="item" />
                    <div className="item-description">
                        <p>{item.name}</p>
                        <p>Style#: {item.style}</p>
                        <p className="color">Color: {item.color}</p>
                        <h5><span className="click" onClick={showModal}>EDIT |</span><span className="click" onClick={handleDelete}> X REMOVE |</span><span> SAVE FOR LATER</span></h5>
                    </div>
                </div>
            </td>
            <td>
                <p className="size">{item.size}</p>
            </td>
            <td className="quantity">
                <p><input type='text' value={item.quantity} readOnly /></p>
            </td>
            <td>
                <h4 className="price"><span>$</span> {item.price}</h4>
            </td>
        </tr>
    )

}

export default Item;