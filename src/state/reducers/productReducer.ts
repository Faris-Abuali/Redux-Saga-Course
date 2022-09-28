
import { ListAllProductsActionSuccess } from "../actions/productAction";
import { ActionType } from "../actionTypes";

const initialState: any = [];

const reducer = (payload = initialState, action: ListAllProductsActionSuccess) => {
    // the action is the object received from the action function:

    switch (action.type) {
        case ActionType.LIST_ALL_PRODUCTS_SUCCESS:
            return [...action.payload];
        default:
            return payload;
    }
}

export default reducer;