import store from "./store/index";
import { addToCart } from "./actions/index";
window.store = store;
window.addToCart = addToCart;