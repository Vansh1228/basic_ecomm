import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart} from "phosphor-react";
import "./navbar.css"
import TotalCartItems from "../Pages/cart/TotalCartItems";


function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <Link to="/" >Shop</Link>
          <Link to="/cart" >
            <ShoppingCart size={32} />
            {/* <sup><TotalCartItems/></sup> */}
            
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
