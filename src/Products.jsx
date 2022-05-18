import React, { useState } from "react";
import Cart from "./Cart";
import "./Products.css";

export default function Products() {
  const [disab, setdisab] = useState(false);

  let [Products, setProducts] = useState([
    {
      name: "product-1",
      price: "200",
      quantity: 1
    },
    {
      name: "product-2",
      price: "100",
      quantity: 1
    },
    {
      name: "product-3",
      price: "300",
      quantity: 1
    }
  ]);

  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);

  const addQ = (index) => {
    setCount(count + 1);
    Products[index].quantity = count + 1;
    console.log(Products[index].quantity);
  };
  const lessQ = (index) => {
    if (count > 0) {
      setCount(count - 1);
      Products[index].quantity = count - 1;
      console.log(Products[index].quantity);
    }
  };
  const addToCart = (obje) => {
    if (cart.includes(obje)) {
      alert("Already in Cart");
    } else {
      setCart([...cart, obje]);
      console.log(obje);
    }
  };
  return (
    <div className="Products">
      <div>
        {Products.map((item, i) => (
          <div key={i} className="Products-child">
            <li>Product Name: {item.name}</li>
            <li> Price:{item.price}</li>
            <li>
              Quantity:<button onClick={(index) => addQ(i)}>+</button>{" "}
              {item.quantity} <button onClick={(index) => lessQ(i)}>-</button>{" "}
            </li>
            <button className="addbtn" onClick={(obje) => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div>
        <Cart cart={cart} />
      </div>
    </div>
  );
}
