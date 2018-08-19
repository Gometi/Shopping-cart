import { ADD_TO_CART } from "../constants/action-types";
import { EDIT_ITEM } from "../constants/action-types";
import { DELETE_ITEM } from "../constants/action-types";
import {Map, List, fromJS} from "immutable";

const initialState = {
    cart: [{
        id: 1,
        name: "Casual Business Strip",
        style: "MS13KT1906",
        color: "blue",
        price: 11.99,
        quantity: 1,
        image: require("../../images/casual-business-strip.jpg")
    },
    {
        id: 2,
        name: "Girls Long Sleeve",
        style: "R13GT1304",
        color: "pink",
        price: 23.99,
        quantity: 1,
        image: require("../../images/girls-long-sleeve.jpg")
    }
    ]
}
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

const initialState3 = {
    byId: ['1', '2'],
    cart: {
        '1': {
            id: 1,
            name: "dsdssa Business Strip",
            style: "MS13KT1906",
            color: "lsdsds",
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

// const dummyTodos = fromJS([
//     { id: 0, isDone: true, text: 'make components' },
//     { id: 1, isDone: false, text: 'design actions' },
//     { id: 2, isDone: false, text: 'implement reducer' },
//     { id: 3, isDone: false, text: 'connect components' }
// ]);
const init = fromJS(
    {id: 1, text: 'todoooooo'}
);

const rootReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            console.log(state.get('text'))
            return {}
        }
            
        
       
            // return state.push(Map(action.payload));
            // return{
            //     byId: [...state.byId, action.id],
            //     cart: {
            //         ...state.cart, [action.id]: action.payload
            //     }
            // }
        
        case EDIT_ITEM:{
            console.log('dddd')
            return {
                
                // ...state,
                // byId: [...state.byId],
                // cart: {
                //     ...state.cart,
                //     [action.id]:{
                //         ...state.cart[action.id],
                //         [action.id]: action.payload
                //     }
                // }
            }
        //    state.cart[action.id] = {
        //        ...state.cart[action.id], ...action.payload
        //    }
        //    console.log(state)
        //    return {...state}
        }
        case DELETE_ITEM:{
            console.log('delete', state)
            const prunIds = state.byId.filter(item =>{
                return item !== action.id
            })
            if(state.cart[1])
            delete state.cart[action.id]
            else if (state.cart[2]) delete state.cart[2]
            return {
                byId: prunIds,
                cart: state.cart
            }
        }
        default:
            return {...state};
    }
};
export default rootReducer;



// import { combineReducers } from "redux";
// import cartReducer from "./cartReducer";

// export default combineReducers({cart: cartReducer});