import createSagaMiddleware from "@redux-saga/core";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import productSaga from "./sagas/productSaga";

const sagaMiddleware = createSagaMiddleware();
//Creates a Redux middleware and connects the Sagas to the Redux Store. 👆
const store: EnhancedStore = configureStore({
    reducer: reducers,
    middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;