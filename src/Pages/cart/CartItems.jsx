import React, {useContext} from 'react'
import "./cart.css"

import { ShopContext } from '../../Context/ShopContext';

function CartItems(props) {
    const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
    const { id, productName, price, productImage } = props.data;

  return (
    <>
    <div className='cartItem'>
         <img src={productImage} alt="" />
         <div className="decsp">
            <p><b>{productName}</b></p>
            <p>$ {price} </p>
            <div className="countHandler">
                <button onClick={()=> removeFromCart(id)}>-</button>
                <input  value={cartItems[id]} />
                <button onClick={()=> addToCart(id)}>+</button>
            </div>
         </div>
    </div>
    </>
  )
}

export default CartItems