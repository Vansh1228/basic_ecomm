import React from 'react'
import {PRODUCTS} from "../../products"
import Product from "./Product"
import "./shop.css"
import logo from "../../Assets/logo.webp"

function Shop() {
  return (
    <>
    <div className="shop">
        <div className="shopTitle">
            <h1>Shopify</h1>
            <img src={logo} alt="" className="logo" />
        </div>
        <div className="products">
            {PRODUCTS.map((product)=>{
                return(
                    < Product data = {product}/>
                )
            })} 
        </div>

    </div>
    </>
  )
}

export default Shop