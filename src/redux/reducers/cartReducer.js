import { ADD_TO_CART } from "../constants/action-types";
import { EDIT_ITEM } from "../constants/action-types";
import { DELETE_ITEM } from "../constants/action-types";

const initialState2 = {
    byId: ['1', '2'],
    cart: {
        '1': {
            id: 1,
            name: "Casual Business Strip",
            style: "MS13KT1906",
            color: "blue",
            price: 11.99,
            quantity: 1,
            image: require("../../images/casual-business-strip.jpg")
        },
        '2': {
            id: 2,
            name: "Girls Long Sleeve",
            style: "R13GT1304",
            color: "pink",
            price: 23.99,
            quantity: 1,
            image: require("../../images/girls-long-sleeve.jpg")
        }
    }
}

const cartReducer = (state = initialState2, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            console.log(state)
            return {
                byId: [...state.byId, action.id],
                cart: {
                    ...state.cart, [action.id]: action.payload
                }
            }
        }
        default:
            return { ...state };
    }
};
export default cartReducer;