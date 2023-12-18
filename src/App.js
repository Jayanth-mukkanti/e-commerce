import React from 'react'
import "./App.css";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import ProductList from './ProductList/ProductList';
import Card from './Card/Card';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import { BrowserRouter, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { addToCart } from './cartSlice';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [searchItem, setSearchItem] = useState("");

  // Get the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart);

  // Calculate the count of unique items in the cart
  const uniqueItemCount = React.useMemo(() => {
    return cartItems.length > 0 ? new Set(cartItems.map(item => item.id)).size : "";
  }, [cartItems]);

  function renderButton() {
    if (isLoggedIn == true) {
      return <button className='mt-2' id='b1' onClick={() => { setIsLoggedIn(false) }}> Logout </button>
    } else {
      return <button className='mt-2' id='b1' onClick={() => { setIsLoggedIn(true) }}> Login </button>
    }
  }

  return (
    <>
      <BrowserRouter>
        <div className=' p-2 d-md-flex d-lg-flex bg-black text-white justify-content-evenly'>
          <h2> Products Store </h2>
          <input type='text' style={{ width: "500px", height: "40px" }} className='rounded text-center mt-1' placeholder='Enter your Product to Serach' value={searchItem} onChange={(e) => { setSearchItem(e.target.value) }} />
          <Link to="/" class="nav-link"> <h5 className='mt-2'> <i className="fa-solid fa-house "></i> Home </h5> </Link>
          <Link to="/ProductList" class="nav-link"> <h5 className='mt-2'> ProductList </h5> </Link>
          <Link to="/Cart"> <button id='AddtoCartButton' style={{ width: "100px", height: "30px" }} className='rounded mt-2'> Go To <FontAwesomeIcon icon={faShoppingCart} /> {uniqueItemCount} </button></Link>
          {renderButton()}
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Card' element={isLoggedIn == true ? <Card /> : <Navigate to='/' />} />
          <Route path='/ProductList' element={isLoggedIn == true ? <ProductList searchTerm={searchItem} /> : <Navigate to='/' />} />
          <Route path='/Cart' element={isLoggedIn == true ? <Cart /> : <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;