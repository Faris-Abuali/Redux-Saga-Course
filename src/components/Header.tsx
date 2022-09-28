import React, { Component } from 'react';
import "./styles/header.css";
import { useSelector } from "react-redux";
import { RootState } from '../state';

function Header() {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="header">
      <h3>Faris</h3>
      <div className="cart-div">
        <span>{cart?.length ?? 0}</span>
        <img
          src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
          alt="cart-icon"
          height={25}
          width={25}
        />
      </div>
    </div>
  );
};

export default Header;
