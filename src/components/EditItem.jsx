import React, { Component } from "react";
import { connect } from "react-redux";
import { editItem } from "../redux/actions/index";
import { deleteItem } from "../redux/actions/index";
import { addToCart } from "../redux/actions/index";
import itemList from "../items";

const mapDispatchToProps = dispatch => {
    return {
        editItem: (item, id) => dispatch(editItem(item, id))
    };
};
// const mapDispatchToProps = dispatch => {
//     return {
//         deleteItem: (id) => dispatch(deleteItem(id))
//     };
// };
// const mapDispatchToProps = dispatch => {
//     return {
//         addToCart: (item, id) => dispatch(addToCart(item, id))
//     };
// };

class items extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(){
      let i = { ...itemList[0], color: "yellow", name: "some shirt" }
            this.props.editItem(i, 1);
    // this.props.deleteItem(1);
    // let item = {
    //     id: 3,
    //     name: "Bradley Shirt",
    //     style: "R13GT1304",
    //     color: "violet",
    //     price: 20.99,
    //     quantity: 1,
    //     image: require("../images/girls-long-sleeve.jpg")
    // }
    // this.props.addToCart(item, '3');

    }
    
    render() {
        return (
            <div>
                <input type="button" value="Click" onClick={this.handleSubmit}/>
            </div>
        )
    }
}

const EditItem = connect(null, mapDispatchToProps)(items);
export default EditItem;