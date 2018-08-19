import React from 'react';
import "../../App.css";
const Item = (props)=> {
    const { item, deleteItem } = props;
    const handleDelete = ()=>{
       deleteItem(2);
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
                                        <h5><span>EDIT |</span><span onClick={handleDelete}> X REMOVE |</span><span> SAVE FOR LATER</span></h5>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="size">S</p>
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