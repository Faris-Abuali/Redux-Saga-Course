import { Product } from ".";
import { ActionType } from "../actionTypes";

export type ListAllProductsAction = {
    type: ActionType.LIST_ALL_PRODUCTS;
    // payload: Product[];
}

export type ListAllProductsActionSuccess = {
    type: ActionType.LIST_ALL_PRODUCTS_SUCCESS;
    payload: Product[];
}
