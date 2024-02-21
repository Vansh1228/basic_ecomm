import React, { useState, useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function TotalCartItems() {
  const { cartItems, addToCart } = useContext(ShopContext);
  const [count, setCount] = useState(0);
  //const cartItemAmount = cartItems;
  // console.log(cartItemAmount);
  const changeCount = () => {
    console.log(count+(addToCart(id)));
    setCount(count+(addToCart(id)));
  };
  return (
    <>
      <div>
     { console.log(count+(addToCart(id)))}
        <input value={count} onChange={changeCount} />
      </div>
    </>
  );
}

export default TotalCartItems;
