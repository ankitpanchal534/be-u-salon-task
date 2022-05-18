import React, { useState } from "react";

export default function Cart(props) {
  // console.log(props)
  // const [bill, setBill] = useState(0)
  let bill = props.cart.map((item, i) => item.price * item.quantity);

  return (
    <div className="cart-parent">
      <div className="cart">
        My Cart
        {props.cart.map((item, i) => (
          <div key={i} className="cart-child">
            <li>Product Name: {item.name}</li>
            <li>Quantity: {item.quantity}</li>
            <li> Price:{item.price * item.quantity}</li>
          </div>
        ))}
      </div>
      <div className="Final-Bill">
        Final Bill
        <h1>Rs {bill.reduce((i, j) => i + j, 0)}</h1>
        <button>Pay Now</button>
      </div>
    </div>
  );
}
