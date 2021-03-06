import { List, Map } from 'immutable';

const init = List([
    Map({
        id: 1,
        name: "Casual Business Strip",
        style: "MS13KT1906",
        color: "blue",
        size: "Small",
        price: 11.99,
        quantity: 1,
        image: require("../../images/casual-business-strip.jpg")
    }),
    Map({
        id: 2,
        name: "Girls Long Sleeve",
        style: "R13GT1304",
        color: "pink",
        size: "Small",
        price: 23.99,
        quantity: 1,
        image: require("../../images/girls-long-sleeve.jpg")
    }),
    Map({
        id: 3,
        name: "Collar Plaid Shirt",
        style: "R13GT1304",
        color: "red",
        size: "Small",
        price: 30.99,
        quantity: 1,
        image: require("../../images/collar-plaid-shirt.jpg")
    }),
    Map({
        id: 4,
        name: "Cotton Linen",
        style: "R13GT1304",
        color: "blue",
        size: "Small",
        price: 27.99,
        quantity: 1,
        image: require("../../images/cotton-linen.jpg")
    })
]);

const cartReducer = (cart = init, action) => {
    switch (action.type) {
        case 'EDIT':
            return cart.map(item => {
                if (item.get('id') === action.payload.id) {
                    return item.update(action.payload.key, text => action.payload.value)
                }
                else {
                    return item;
                }
            })
        case 'REMOVE':
            return cart.filter(item => {
                return item.get('id') !== action.payload;
            })
        default:
            return cart;
    }
}

export default cartReducer;

