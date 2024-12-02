import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Navbar() {
    //useSelector is like the subscriber of the data so that we can access any time we want.
    const items = useSelector((state)=>state.cart);
  return (
      <>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className='logo'>Redux Store</span>
              <Link className='navLink'to="/">Home</Link>
              <Link className='navLink' to="/cart">Cart</Link>
              <span className='cartCount'>Cart Items: {items.length }</span>
          </div>
      </>
  )
}

export default Navbar