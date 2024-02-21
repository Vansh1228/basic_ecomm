import React from 'react'
import {createContext, useContext, useState}from "react"
import { PRODUCTS } from '../products'
import Product from '../Pages/shop/Product'

export const ShopContext = createContext(null)

function ShopContextProvider(props) {

  const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]){

        let itemInfo = PRODUCTS.find((product)=> product.id===Number(item))
        totalAmount += cartItems[item]*itemInfo.price
      }
    }
    return totalAmount
  }
   
       //Default cart is 0
       const getDefCart = ()=>{
        let cart = {}
        for(let i=1;i<PRODUCTS.length+1;i++){
          cart[i] = 0
        }
        return cart
       }
     const [cartItems, setCartItems] = useState(getDefCart())
    

   
   const addToCart = (itemId) => {
      setCartItems ((prev)=>({...prev, [itemId]: prev[itemId]+1}))
   }

   const removeFromCart = (itemId) => {
    setCartItems ((prev)=>({...prev, [itemId]: prev[itemId]-1}))
 }

 const contextValue = {cartItems, addToCart,removeFromCart , getTotalCartAmount}
 console.log(cartItems);

 
  return (
    <>
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    </>
  )
}

export default ShopContextProvider
