
import { CartAction } from "../actions";
import { ActionType } from "../actionTypes";
import { Product } from "../types";

const initialState: any = [];

const reducer = (payload = initialState, action: CartAction) => {
    // the action is the object received from the action function:

    switch (action.type) {
        case ActionType.ADD_TO_CART:
            return [...payload, action.payload];
        case ActionType.REMOVE_FROM_CART:
            return payload.filter((item: Product) => item?.id !== action.payload);
        case ActionType.CLEAR_CART:
            return [];
        default:
            return payload;
    }
}

export default reducer;