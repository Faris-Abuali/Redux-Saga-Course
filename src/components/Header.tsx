import React, { Component } from 'react';
import "./styles/header.css";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators, RootState } from '../state';
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const cart = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { searchProducts } = actionCreators;
  console.log("window.location.pathname: ", window.location.pathname);

  return (
    <div className="header">
      <h3 className="logo" onClick={() => navigate("/")}>Faris</h3>
      {window.location.pathname === "/" && (
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search products"
            onChange={(event: any) => searchProducts(event.target.value)(dispatch)}
          />
        </div>
      )}
      <Link to="/cart" className="cart-link">
        <div className="cart-section">
          <span>{cart?.length ?? 0}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt="cart-icon"
            height={25}
            width={25}
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
