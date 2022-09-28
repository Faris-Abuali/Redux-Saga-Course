// action creators are functions that dispatch actions

import { Product, CartAction, ListAllProductsAction } from "../actions";
import { ActionType } from "../actionTypes";
import { Dispatch } from "redux";

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