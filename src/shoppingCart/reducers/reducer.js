
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import modalReducer from "./modalReducer";

export default combineReducers({ cart: cartReducer, modal: modalReducer });

