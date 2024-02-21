import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../Context/ShopContext";
import "./cart.css";
import {useNavigate} from "react-router-dom"
import { SmileySad } from "phosphor-react";

import CartItems from "./CartItems";
function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmt = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <>
      <div className="Cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div>
          {PRODUCTS.map((products) => {
            if (cartItems[products.id] !== 0) {
              return <CartItems data={products} />;
            }
          })}
        </div>
      
      {totalAmt>0?
      <div className="checkout">
        <p>Total Cart Value: $ {totalAmt} </p>
        <button onClick={()=> navigate("/")}>
          Continue Shopping
        </button>
        <button>Checkout</button>
      </div>
      : <div className="empty">

        <h1>Your Cart is Empty <SmileySad className="smiley" size={42}  /></h1>
        
      </div>}
      </div>

    </>
  );
}

export default Cart;
