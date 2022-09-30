import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Test from "./components/Test";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from './state';
import { Routes, Route } from "react-router-dom";

function App() {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();
  // const {addToCart, removeFromCart, clearCart} = bindActionCreators(actionCreators.addToCart, dispatch);
  const { addToCart, removeFromCart, clearCart } = actionCreators;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
