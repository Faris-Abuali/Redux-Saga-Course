import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Test from "./components/Test";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, RootState } from './state';

function App() {
  const cart = useSelector((state: RootState) => state.cart);

  const dispatch = useDispatch();
  // const {addToCart, removeFromCart, clearCart} = bindActionCreators(actionCreators.addToCart, dispatch);
  const { addToCart, removeFromCart, clearCart } = actionCreators;

  const product = {
    id: 1,
    name: 'test',
    price: 10,
    quantity: 13,
    url: "https://picsum.photos/200/300"
  };

  return (
    <div className="App">
      {/* <Test />
      <h1>{cart?.length}</h1>
      <button onClick={() => addToCart(product)(dispatch)}>Add to cart</button>
      <button onClick={() => removeFromCart(1)(dispatch)}>Remove from cart</button>
      <button onClick={() => clearCart()(dispatch)}>clearCart</button> */}


      <Header />
      <Main />
      {/* <Routes>
        <Route path="/" element={<Main />} />
      </Routes> */}
    </div>
  );
}

export default App;
