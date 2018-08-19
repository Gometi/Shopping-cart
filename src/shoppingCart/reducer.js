import { List, Map } from 'immutable';

// const init = List([
//   Map({
//     id: 1,
//     isDone: false,
//     text: "good"
//   })
// ]);

const init = List([
  Map({
     id: 1,
        name: "Casual Business Strip",
        style: "MS13KT1906",
        color: "blue",
        price: 11.99,
        quantity: 1,
        image: require("../images/casual-business-strip.jpg")
  }),
   Map({
    id:2,
        name: "Girls Long Sleeve",
        style: "R13GT1304",
        color: "pink",
        price: 23.99,
        quantity: 1,
        image: require("../images/girls-long-sleeve.jpg")
  })
]);

 const  reducer = (cart = init, action) => {
  switch (action.type) {
      case 'EDIT':
      return cart.map(item =>{
        if(item.get('id') === action.payload.id){
          return item.update(action.payload.key, text => action.payload.value)
        }
        else {
          return item;
        }
      })
      case 'REMOVE':
      return cart.filter((item) =>{
           return item.get('id') !== action.payload.id
      })
    default:
      return cart;
  }
}

export default reducer;

