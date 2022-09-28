import { takeEvery, put } from "redux-saga/effects";
import { ActionType } from "../actionTypes";
// takeEvery Spawns a saga on each action dispatched to the Store that matches pattern.

function* getProducts(): any {
    // console.log("SAGA invoked: getProducts");
    let data = yield fetch("http://localhost:3500/products");
    data = yield data.json();
    console.log("⭐ SAGA invoked: getProducts", data);
    yield put({ type: ActionType.LIST_ALL_PRODUCTS_SUCCESS, payload: data });
    /** `put` Creates an Effect description that instructs the middleware to dispatch an action to the Store. */
}

// a generator function
function* productSaga() {
    yield takeEvery(ActionType.LIST_ALL_PRODUCTS, getProducts);
}

export default productSaga;
