import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className='text-center'>
      <h2 className='text-dark'>Your Cart --- Total Price: ${totalPrice.toFixed(2)} </h2>
      {cartItems.length === 0 ? (
        <h3>Your cart is empty....</h3>
      ) : (
        <div  className='d-md-flex flex-wrap justify-content-center' >
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
