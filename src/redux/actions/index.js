import { ADD_TO_CART } from "../constants/action-types";
import { EDIT_ITEM } from "../constants/action-types";
import { DELETE_ITEM } from "../constants/action-types";
export const addToCart = (item, id) => ({ type: ADD_TO_CART, payload: item, id: id });
export const editItem = (item, id) => ({type: EDIT_ITEM, payload: item, id: id});
export const deleteItem = (id) => ({ type: DELETE_ITEM, id: id});