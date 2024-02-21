import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Cart from "./Pages/cart/Cart";
import Shop from "./Pages/shop/Shop";
import ShopContextProvider from "./Context/ShopContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <ShopContextProvider>
          <Router>
            <Navbar></Navbar>

            <Routes>
              <Route path="/" element={<Shop />} /> //Main page of website
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
        </ShopContextProvider>
      </div>
    </>
  );
}

export default App;
