import React from 'react';
import { Table, Button, FormControl } from "react-bootstrap";
import "../../App.css";

const Checkout = (props) =>{
     let price = 0;
     let AJS = 2.15;
      props.cart.map(item =>{
          price += (item.quantity * item.price); 
      })
      let subTotal = price.toFixed(2);
      let total = (price - AJS).toFixed(2);
      
    
      
    return(
        <div>
            <Table responsive>
                <tbody className="">
                    <tr className="checkout-table">
                        <td>ENTER PROMOTION CODE OR GIFT CARD</td>
                        <td >
                            <div className="code">
                                <FormControl style={{ width: "100px" }}
                                    type="text"
                                    value='AJ5'
                                    readOnly
                                />
                                <Button>APPLY</Button>
                        </div>
                        
                         </td>
                    </tr>
                    <tr>
                        <td><p>SUB TOTAL</p></td>
                        <td><h4>$ {subTotal}</h4></td>
                    </tr>
                    <tr>
                        <td><p>PROMOTIONAL CODE AJ5 APPLIED</p></td>
                        <td><h4>$ 2.15</h4></td>
                    </tr>
                    <tr>
                    <td>
                    <p>ESTIMATED SHIPPING <span>*</span></p>
                    <p>You qualify for free shipping because your order is over $50</p>
                    </td>
                    <td><p>FREE</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p>ESTIMATED TOTAL</p>
                            <p>Tax will be applied during checkout</p>
                        </td>
                        <td><h4>$ {total}</h4></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><a style={{ "textDecoration": "underline"}}>CONTINUE SHOPPING</a>  &nbsp;  &nbsp;
                            <Button bsStyle="primary">CHECKOUT</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Checkout;