import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

const SingleProduct = () => {
  const { addToCart} = useContext(ShoppingCartContext);
  const [singleProductData, setSingleProductData] = useState({});
  const { id } = useParams();

  const singleProductUrl = 'https://dummyjson.com/products/';

  const goGetSingleProduct = async () => {
    let response = await fetch(singleProductUrl + id);
    let data = await response.json();
    setSingleProductData(data);
  };

  useEffect(() => {
    goGetSingleProduct();
  }, []);

  const { id: productId, title, price, description, category, images } = singleProductData;

  const handleAddToCart = () => {
    addToCart(singleProductData);
  };

  return (
    <div>
      {title ? (
        <div className="product-card" key={productId}>
          <div className="product-details">
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">${price}</p>
            <p className="product-category">{category.name}</p>
          </div>
          <div className="product-gallery">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Product ${id} - Image ${index + 1}`} />
            ))}
          </div>
          <div>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <Link to="/checkout">
              <button>Go to Checkout</button>
            </Link>
          </div>
        </div>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;