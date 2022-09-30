import { takeEvery, put } from "redux-saga/effects";
import { SearchProductsAction } from "../actions";
import { ActionType } from "../actionTypes";
// `takeEvery` spawns a saga on each action dispatched to the Store that matches pattern.

function* getProducts(): any {
    // console.log("SAGA invoked: getProducts");
    let data = yield fetch("http://localhost:3500/products");
    data = yield data.json();
    console.log("⭐ SAGA invoked: getProducts", data);
    yield put({ type: ActionType.LIST_ALL_PRODUCTS_SUCCESS, payload: data });
    /** `put` Creates an Effect description that instructs the middleware to dispatch an action to the Store. */
}
function* searchProducts(action: SearchProductsAction): any {
    let data = yield fetch(`http://localhost:3500/products?q=${action.query}`);
    data = yield data.json();
    yield put({ type: ActionType.SEARCH_PRODUCTS_SUCCESS, payload: data });
}

// a generator function
function* productSaga() {
    yield takeEvery(ActionType.LIST_ALL_PRODUCTS, getProducts);
    yield takeEvery(ActionType.SEARCH_PRODUCTS, searchProducts);
}

export default productSaga;
