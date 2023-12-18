import React from 'react'
import { useNavigate } from 'react-router';
import "./index.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../cartSlice';

function Card({ productData, onAddToCart, isDisabled, uniqueItemCount }) {

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const { title, image, price, rating } = productData;

  const handleAddToCart = () => {
    onAddToCart(productData); // Use the onAddToCart function
    // Navigate("/Cart");
  };

  return (
    <>
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 product-wrapper">
        <div className='product-card'>
          <img
            className='product-thumbnail'
            src={image}
          />
          <p> <b>Title:</b> {title} </p>
          <p> <b>Price:</b> {price} $ </p>
          <p> <b>Rating:</b> {rating.rate} / 5 </p>
          <span className='bg-danger text-white p-1 m-2'> Up to 50% - 60% off </span> <span className='text-danger fw-semibold'> Deal </span>
          <button
            className='bg-warning text-black p-1 m-2 border border-3 rounded'
            onClick={handleAddToCart}
            disabled={isDisabled}
          >
            {isDisabled ? 'In Cart' : 'Add to Cart'}
          </button>
        </div>

      </div>
    </>
  )
}

export default Card;

