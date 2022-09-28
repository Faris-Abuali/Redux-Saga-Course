import { ActionType } from '../actionTypes';

interface AddAction {
    type: ActionType.ADD_TO_CART;
    payload: object;
}

interface RemoveAction {
    type: ActionType.REMOVE_FROM_CART;
    payload: number; // product's id
}

interface ClearAction {
    type: ActionType.CLEAR_CART;
}

export type CartAction = AddAction | RemoveAction | ClearAction;
