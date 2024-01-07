import React, { useContext, useEffect, useState } from "react";
import "../theme.min.css";
import { useFilterContext } from "../context/FilterContext";
import { Link } from "react-router-dom";
import { useFetchContext } from "../context/FetchContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useRatingContext } from "../context/RatingContext";

const Home = () => {
  const { searchTerm, setSearchTerm, handleSearch } = useFilterContext();
  const { allProducts } = useFetchContext();


  const [topProducts, setTopProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
 const [salesProduct, setSalesProduct] = useState([]);

  const { addToCart } = useContext(ShoppingCartContext);
  const { renderStars } = useRatingContext();


  const getTopRatedProducts = () => {
    const sortedProducts = [...allProducts].sort((a, b) => b.rating - a.rating);
    const top3Products = sortedProducts.slice(0, 3);
    setTopProducts(top3Products);
  };

  const getPopularProducts = () => {
    const sortedProducts = [...allProducts].sort((a, b) => a.stock - b.stock);
    const popular3Products = sortedProducts.slice(0, 3);
    setPopularProducts(popular3Products);
  };

  const getSalesProducts = () => {
    const sortedProducts = [...allProducts].sort((a, b) => b.stock - a.stock);
    const popular3Products = sortedProducts.slice(0, 3);
    setSalesProduct(popular3Products);
  };

  useEffect(() => {
    getTopRatedProducts();
    getPopularProducts();
    getSalesProducts()
  }, [allProducts]);

  return (
    <>
      <section
        className="bg-accent bg-position-top-center bg-repeat-0 py-5"
        style={{ backgroundImage: "url(img/home/marketplace-hero.jpg)" }}
      >
        <div className="pb-lg-5 mb-lg-3">
          <div className="container py-lg-5 my-lg-5">
            <div className="row mb-4 mb-sm-5">
              <div className="col-lg-7 col-md-9 text-center text-sm-start">
                <h1 className="text-white lh-base">
                  <span className="fw-light">Over</span> 100{" "}
                  <span className="fw-light">top quality</span> Products{" "}
                  <span className="fw-light">of all sorts</span>, Tech, Clothig{" "}
                  <span className="fw-light">&amp;</span> Acessories{" "}
                  <span className="fw-light">and other</span>
                </h1>
                <h2 className="h5 text-white fw-light">
                  check out my website, visit the shop page next!
                </h2>
              </div>
            </div>
            <div className="row pb-lg-5 mb-4 mb-sm-5">
              <div className="col-lg-6 col-md-8">
                <div className="input-group input-group-lg flex-nowrap">
                  <i className="ci-search position-absolute top-50 translate-middle-y ms-3" />
                  <input
                    className="form-control rounded-start"
                    type="text"
                    placeholder="Start your search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        handleSearch();
                      }
                    }}
                  />
                  <Link
                    className="btn btn-primary btn-lg fs-base"
                    to="/products"
                  >
                    GO TO THE SHOP!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="container position-relative pt-3 pt-lg-0 pb-5 mt-lg-n10"
        style={{ zIndex: 10 }}
      >
        <div className="card px-lg-2 border-0 shadow-lg">
          <div className="card-body px-4 pt-5 pb-4">
            <h2 className="h3 text-center">Highest Rated</h2>
            <p className="text-muted text-center">
              Every week we hand-pick some of the best items from our collection
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {topProducts.map((topProduct) => (
              
                    <div className="card product-card-alt">
                      <div className="product-thumb">
                        <button className="btn-wishlist btn-sm" type="button">
                          <i className="ci-heart" />
                        </button>
                        <div className="product-card-actions">
                          <Link
                            className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                            to={`/products/${topProduct.id}`}
                          >
                            <i className="ci-eye" />
                          </Link>
                          <button
                            className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                            type="button"
                            onClick={(e) => {
                              e.preventDefault();
                              addToCart(topProduct);
                            }}
                          >
                            <i className="ci-cart" />
                          </button>
                        </div>
                        <Link
                          className="product-thumb-overlay"
                          to={`/products/${topProduct.id}`}
                        />
                        <img
                          src={topProduct.images[0]}
                          alt={topProduct.title}
                          style={{
                            width: "256px",
                            height: "256px",
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      </div>
                      <div className="card-body">
                        <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                          <div className="star-rating">
                            {renderStars(topProduct.rating).map(
                              (star, index) => (
                                <>{star}</>
                              )
                            )}
                          </div>
                        </div>
                        <h3 className="product-title fs-sm mb-2">
                          <Link to={`/products/${topProduct.id}`}>
                            {topProduct.title}
                          </Link>
                        </h3>
                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                          <div className="fs-sm me-2">
                            {topProduct.price}
                            <span className="fs-xs ms-1">$</span>
                          </div>
                        </div>
                      </div>
                    </div>
                
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container pb-5 mb-lg-3">
        <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
          <h2 className="h3 mb-0 pt-3 me-2">
            The most popular ones, hurry! they are running short!
          </h2>
        </div>
        <div className="row pt-2 mx-n2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {popularProducts.map((popularProduct) => (
      
              <div className="card product-card-alt flex flex-row">
                <div className="product-thumb">
                  <button className="btn-wishlist btn-sm" type="button">
                    <i className="ci-heart" />
                  </button>
                  <div className="product-card-actions">
                    <Link
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      to={`/products/${popularProduct.id}`}
                    >
                      <i className="ci-eye" />
                    </Link>
                    <button
                      className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(popularProduct);
                      }}
                    >
                      <i className="ci-cart" />
                    </button>
                  </div>
                  <Link
                    to={`/products/${popularProduct.id}`}
                    className="product-thumb-overlay"
                  />
                  <img
                    src={popularProduct.images[0]}
                    alt={popularProduct.title}
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex flex-wrap justify-content-between align-items-start pb-2">
                    <div className="star-rating">
                      {renderStars(popularProduct.rating).map((star, index) => (
                        <>{star}</>
                      ))}
                    </div>
                  </div>
                  <h3 className="product-title fs-sm mb-2">
                    <Link to={`/products/${popularProduct.id}`}>
                      {popularProduct.title}
                    </Link>
                  </h3>
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                      {popularProduct.price}
                      <small>$</small>
                    </div>
                  </div>
                </div>
              </div>
           
        ))}
      </div>
          </div>
        <div className="text-center">
          <Link
            className="btn btn-outline-accent mt-8"
            to='/products'
          >
            View more products
            <i className="ci-arrow-right fs-ms ms-1" />
          </Link>
        </div>
      </section>
      
      <section className="border-top py-5">
        <div className="container py-lg-2">
          <h2 className="h3 mb-3 pb-3 pb-lg-4 text-center text-lg-start">
            Sales
          </h2>
          <div className="row">
            <div className="col-lg-4 text-center text-lg-start pb-3 pt-lg-2">
              <div className="d-inline-block text-start">
                <div className="d-flex align-items-center pb-3">
                  <div
                    className="img-thumbnail rounded-circle flex-shrink-0"
                    style={{ width: "6.375rem" }}
                  >
                    <img
                      className="rounded-circle"
                      src="assets/logo.png"
                      alt="Online Shop Logo"
                    />
                  </div>
                  <div className="ps-3">
                    <h3 className="fs-lg mb-0">Go To Shop</h3>
                    <Link
                      className="btn btn-primary btn-sm m-3"
                      to='/products'
                    >
                      View products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {salesProduct.map((sales) => (
             <div className="card product-card-alt">
             <div className="product-thumb">
               <button className="btn-wishlist btn-sm" type="button">
                 <i className="ci-heart" />
               </button>
               <div className="product-card-actions">
                 <Link
                   className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                   to={`/products/${sales.id}`}
                 >
                   <i className="ci-eye" />
                 </Link>
                 <button
                   className="btn btn-light btn-icon btn-shadow fs-base mx-2"
                   onClick={() => {addToCart(sales)}}
                 >
                   <i className="ci-cart" />
                 </button>
               </div>
               <Link
                 className="product-thumb-overlay"
                 to={`/products/${sales.id}`}
               />
               <img
                 src={sales.images[0]}
                 alt={sales.title}
                 style={{ width: '400px', height: '400px', objectFit: 'cover' }} 
               />
             </div>
             <div className="card-body">
               <h3 className="product-title fs-sm mb-2">
                 <Link to={`/products/${sales.id}`}>
                  {sales.title}
                 </Link>
               </h3>
               <div className="d-flex flex-wrap justify-content-between align-items-center">
                 <div className="fs-sm me-2">
                  <span className="fs-xs ms-1">Sales</span>
                 </div>
                 <div className="bg-faded-accent text-accent rounded-1 py-1 px-2">
                   {sales.price}<small>$</small>
                 </div>
               </div>
             </div>
           </div>
          ))}
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
