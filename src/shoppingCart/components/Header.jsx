import React from "react";
import "../../App.css"
let Header = () => {
    return (
        <div className="container">
            <h1 className="title">YOUR SHOPPING CART</h1>
            <p className="cart-message">If the cart is completely empty then we shall again add back the products for you</p>
            <hr className="line" />
        </div>
    )
}
export default Header;