import React, { useState } from "react";
import "./styles.css";
import Phone from "../../assets/phone.jpg";
import Speaker from "../../assets/speaker.webp";
import Dress from "../../assets/dress.jpg";

export default function ProductSpecific(props) {
  const [val, setval] = useState(0);
  const {
    title = "Product Name",

    addClickAction,
    removeClickAction,
  } = props;
  return (
    <div className="product-specific">
    
      <img src={Dress} alt="" className="separate-full-img" />
      <img src={Speaker} alt="" className="separate-full-img" />
      <div className="product-name"> {title}</div>
      <br />
 
      {val < 1 ? (
        <span
          className="item-add-cart"
          onClick={() => {
            setval(val + 1);
            addClickAction();
          }}
        >
          Add
        </span>
      ) : (
        <span className="item-cart">
          <p
            className="item-remove-button"
            onClick={() => {
              setval(val - 1);

              removeClickAction();
            }}
          >
            -
          </p>
          <p className="item-quantity">{val}</p>
          <p
            className="item-add-button"
            onClick={() => {
              setval(val + 1);
              addClickAction();
            }}
          >
            +
          </p>
        </span>
      )}
    </div>
  );
}
