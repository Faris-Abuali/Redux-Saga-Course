// action creators are functions that dispatch actions

import { CartAction, ListAllProductsAction, SearchProductsAction } from "../actions";
import { ActionType } from "../actionTypes";
import { Dispatch } from "redux";
import { Product } from "../types";

export const addToCart = (product: Product) => {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch({ type: ActionType.ADD_TO_CART, payload: product });
    }
};

export const removeFromCart = (productId: number) => {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch({ type: ActionType.REMOVE_FROM_CART, payload: productId });
    }
};

export const clearCart = () => {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch({ type: ActionType.CLEAR_CART });
    }
};

export const listAllProducts = () => {
    return (dispatch: Dispatch<ListAllProductsAction>) => {
        dispatch({ type: ActionType.LIST_ALL_PRODUCTS, payload: [] });
    }
};

export const searchProducts = (query: string) => {
    return (dispatch: Dispatch<SearchProductsAction>) => {
        dispatch({ type: ActionType.SEARCH_PRODUCTS, query });
    }
}