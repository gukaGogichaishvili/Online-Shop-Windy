import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { useFilterContext } from '../context/FilterContext';



const ProductsList = () => {


  const { handlePageChange, totalProductsNumber, limit, filteredProducts } = useFilterContext();
  const { addToCart} = useContext(ShoppingCartContext);
  

  let totalPages = totalProductsNumber / 15;

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 0; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i+1}
        </button>
      );
    }

    return pageNumbers;
  };
 
  
  
  return (
    <div>{filteredProducts.map(product => {
      const { id, title, price, category, images } = product;

      return (
        <div className="simple-product-card max-w-sm mx-auto overflow-hidden shadow-lg rounded-lg" key={id}>
          <Link to={`/products/${id}`}><img src={images[0]} alt={title} className="product-image" />
          <div className="product-details">
            <h2 className="product-title">{title}</h2>
            <p className="product-price">${price}</p>
            <p className="product-category">{category.name}</p>
          </div>
          <button onClick={(e) => {  e.preventDefault(); addToCart(product); }}>Add To Cart</button>
          </Link>
        </div>
      );
    })}
    
    <div>{renderPageNumbers()}</div>
    </div>
  )
}

export default ProductsList;