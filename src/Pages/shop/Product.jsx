import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function Product(props) {
  const { id, productName, price, productImage } = props.data;

  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="descp">
        <p>
          <b>{productName}</b>
        </p>
        <p>$ {price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)} >
          Add to Cart <br/>
           {cartItemAmount > 0 && ((<>{ cartItemAmount }</>))}
        </button>
      </div>
    </div>
  );
}

export default Product;
