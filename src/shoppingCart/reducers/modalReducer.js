import { Map } from 'immutable';
const init = Map({
    id: 1,
    name: "Casual Business Strip",
    style: "MS13KT1906",
    color: "blue",
    size: "Small",
    price: 11.99,
    quantity: 1,
    image: require("../../images/casual-business-strip.jpg"),
    show: false
})


const modalReducer = (item = init, action) => {
    switch (action.type) {
        case 'UPDATE_MODAL':
                    return item.update(action.payload.key, text => action.payload.value)
        default:
            return item;
    }
}

export default modalReducer;