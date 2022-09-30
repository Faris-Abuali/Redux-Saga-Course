import { ActionType } from "../actionTypes";
import { Product } from "../types";

export interface ListAllProductsAction {
    type: ActionType.LIST_ALL_PRODUCTS;
    // payload: Product[];
}

export interface ListAllProductsActionSuccess {
    type: ActionType.LIST_ALL_PRODUCTS_SUCCESS;
    payload: Product[];
}

export interface SearchProductsAction {
    type: ActionType.SEARCH_PRODUCTS;
    query: string;
}

export interface SearchProductsActionSuccess {
    type: ActionType.SEARCH_PRODUCTS_SUCCESS;
    payload: Product[];
}

export type ProductAction = ListAllProductsAction | ListAllProductsActionSuccess | SearchProductsAction | SearchProductsActionSuccess;
