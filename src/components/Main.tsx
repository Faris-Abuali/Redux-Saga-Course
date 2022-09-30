import React, { Component, useCallback, useEffect } from 'react';
import { useDispatch } from "react-redux";
// import { listProducts } from "../redux/ProductAction";
import { useSelector } from "react-redux";
import "./styles/Main.css";
import { RootState } from '../state';
import { actionCreators } from '../state/';

function Main() {
  const dispatch = useDispatch();
  const { cart, product: productsList } = useSelector((state: RootState) => state);



  console.log("MainComponent productData: ", productsList);
  console.log("MainComponent cartData: ", cart);

  // console.log("PROUDCT DATA: ", productData);
  const { addToCart, clearCart, listAllProducts } = actionCreators;

  const fetchAllProducts = useCallback(() => {
    listAllProducts()(dispatch);
  }, []);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);


  return (
    <div className="main-container">
      <button onClick={() => clearCart()(dispatch)}>Clear cart</button>
      <button onClick={() => fetchAllProducts()} title="Refresh List all products">
        <img
          src="https://img.icons8.com/ios-glyphs/240/1A1A1A/refresh--v1.png"
          alt="refresh-icon"
          height={12}
          width={12}
        ></img>
      </button>
      <div className="products-container">
        {productsList?.map((product: any) => {
          return (
            <div className="product-card" key={product.id}>
              <h3 className="product-name" title={product.name}>
                {product.name}
              </h3>
              {/* <h1 data-tooltip="Tooltip help here!" data-flow="right">CSS Tooltips</h1> */}

              <p>${product.price}</p>
              <p>{product.color}</p>
              <img
                width={200}
                height={200}
                src={product?.url}
                alt={product?.name}
              />
              <div className="card-actions">
                <button onClick={() => addToCart(product)(dispatch)}>
                  Add to cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
