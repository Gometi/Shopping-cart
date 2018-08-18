import React, { Component } from 'react';
import "../App.css";
class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {...this.props.item};
    }

   

    render() {
        return (
                
                        <tr>
                            <td>
                                <div className="item">
                                    <img className="image" src={this.state.image} alt="item" />
                                    <div className="item-description">
                                        <p>{this.state.name}</p>
                                        <p>Style#: {this.state.style}</p>
                                        <p className="color">Color: {this.state.color}</p>
                                        <h5><span>EDIT |</span><span> X REMOVE |</span><span> SAVE FOR LATER</span></h5>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="size">S</p>
                            </td>
                            <td className="quantity">
                                <p><input type='text' value={this.state.quantity} readOnly /></p>
                            </td>
                            <td>
                                <h4 className="price"><span>$</span> {this.state.price}</h4>
                            </td>
                        </tr>
                   
        )
    }
}

export default Item;