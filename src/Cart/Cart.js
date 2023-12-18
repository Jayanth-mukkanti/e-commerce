// Cart.js
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem'; // Assuming you have a CartItem component

function Cart() {
  const cartItems = useSelector(state => state.cart);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0); 

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




// // Cart.js
// import React, { useState } from 'react';

// function Cart ({ image, title, price }) {
//   const [quantity, setQuantity] = useState(1);

//   const increment = () => {
//     setQuantity(quantity + 1);
//   };

//   const decrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div className="cart-item">
//       {/* <div>
//       <h2>Cart Items</h2>
//       {cartItems.map((item, index) => (
//         <Cart key={index} {...item} />
//       ))}
//     </div> */}
//       <div className="quantity">
//         <button onClick={decrement}>-</button>
//         <span>{quantity}</span>
//         <button onClick={increment}>+</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
