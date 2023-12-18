import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../cartSlice';

function ProductList({searchTerm}) {

  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (productData) => {
    dispatch(addToCart(productData));
  };

  const uniqueItemCount = Array.from(new Set(cartItems.map(item => item.id))).length;

  return (
    <>
      <div className="container">
        <div className="row">
          {filteredProducts.map((product, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card 
              key={i} 
              productData={product} 
              onAddToCart={handleAddToCart}  
              isDisabled={cartItems.some((item) => item.id === product.id)} 
              uniqueItemCount={uniqueItemCount}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
