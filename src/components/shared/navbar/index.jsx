import React from "react";
import "./styles.css";
import logo from "../../../assets/amazon.svg";
import search from "../../../assets/search.svg";
import cart from "../../../assets/cart.svg";

function NavBar() {
  return (
    <div className="navbar">
      <img src= {logo} className="logo" alt="" />
      <div className="search">
        <input className="search-input" type="text" />
        <img src= {search} className="search-img" alt="" />
      </div>
      <div className="nav-tool">
        <div className="opt-1">
          <span className="text-opt">Sign In</span>
        </div>
        <div className="opt-1">
          <span className="text-opt"> Orders</span>
        </div>
        <div className="opt-1">
          <span className="text-opt">Prime</span>
        </div>
        <div className="cart">
            <img src= {cart} className="cart" alt="" />
            <span className=" text-opt cart-count">0</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
