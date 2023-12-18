// CartItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addToCart } from '../cartSlice';

function CartItem({ item }) {

    const { id, title, image, price, rating } = item;

    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };
    
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };    

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(item));
    };

    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 product-wrapper align-items-center">
                <div className='product-card'>
                    <img
                        className='product-thumbnail'
                        src={image}
                    />
                    <p> <b>Title:</b> {title} </p>
                    <p> <b>Price:</b> {price} $ </p>
                    <p> <b>Rating:</b> {rating.rate} / 5 </p>
                    <span className='bg-danger text-white p-1 m-2'> Up to 50% - 60% off </span> <span className='text-danger fw-semibold'> Deal </span>
                    <button className='bg-warning text-black p-1 m-2 border border-3 rounded' onClick={handleRemoveFromCart} > Remove from Cart </button>
                    <div className="quantity">
                        <button style={{ width: "25px", height: "30px" }} className='me-2' onClick={decrement}><b> - </b></button>
                        <span><b className='fs-5'>{quantity}</b></span>
                        <button style={{ width: "25px", height: "30px" }} className='ms-2' onClick={increment}><b> + </b></button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartItem;

{/* <div>
    <img src={image} style={{ width: '50px', height: '50px' }} />
    <p>{title}</p>
    <p>${price}</p>
    Add any other details you want to display
</div> */}



