import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

// Turns an object whose values are different reducer functions, into a single reducer function.
const reducers = combineReducers({
    cart: cartReducer,
    product: productReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;