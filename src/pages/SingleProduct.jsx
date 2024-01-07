import React, { useContext, useEffect, useState } from "react";
import { useParams, Link} from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useRatingContext } from "../context/RatingContext";
import { useFetchContext } from "../context/FetchContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WishlistContext } from "../context/WishlistContext";
import { Breadcrumbs } from "../components";

const SingleProduct = () => {

 
  const { id } = useParams();
  const { allProducts } = useFetchContext();
  const { addToCart } = useContext(ShoppingCartContext);
  const { toggleWishlistItem, wishlist } = useContext(WishlistContext);
  const { renderStars } = useRatingContext();
  const [singleProductData, setSingleProductData] = useState({});
  const [activeImage, setActiveImage] = useState(0);


  const Slidersettings = {
    arrows: true,
    prevArrow: (
      <button className="slick-prev">
        <i className="ci-arrow-left"></i>
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <i className="ci-arrow-right"></i>
      </button>
    ),
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const singleProductUrl = "https://dummyjson.com/products/";

  const goGetSingleProduct = async () => {
    let response = await fetch(singleProductUrl + id);
    let data = await response.json();
    setSingleProductData(data);
  };

  const changeSingleProduct = async (prodId) => {
    let response = await fetch(singleProductUrl + prodId);
    let data = await response.json();
    setSingleProductData(data);
    setActiveImage(0);
  };
  useEffect(() => {
    goGetSingleProduct();
  }, []);

  const {
    id: productId,
    title,
    price,
    description,
    category,
    images,
    brand,
    stock,
    rating,
  } = singleProductData;

  const filteredProducts = allProducts
    .filter(
      (product) =>
        product.category === singleProductData.category ||
        product.brand === singleProductData.brand,
    )
    .slice(0, 5);

  return (
    <>
      {images ? (
        <>
          <div className="page-title-overlap bg-dark pt-4">
            <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
              <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                    <Breadcrumbs />
                    <li
                      className="breadcrumb-item text-nowrap active"
                      aria-current="page"
                    >
                      {title}
                    </li>
                  </ol>
                </nav>
              </div>
              <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
                <h1 className="h3 text-light mb-0">{title}</h1>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
              <div className="px-lg-3">
                <div className="row">
                  <div className="col-lg-7 pe-lg-0 pt-lg-4">
                    <div className="product-gallery">
                      <div className="product-gallery-preview order-sm-2">
                        
                          <div
                           
                            className={`product-gallery-preview-item active`}
                            id={`image-${activeImage}`}
                          >
                            <img
                              className="image-zoom"
                              src={images[activeImage]}
                              data-zoom={images[activeImage]}
                              alt="Product image"
                            />
                            <div className="image-zoom-pane" />
                          </div>
                      
                      </div>
                      <div className="product-gallery-thumblist order-sm-1">
                        {images.map((image, index) => (
                          <a
                            key={index}
                            className={`product-gallery-thumblist-item ${
                              activeImage === index ? "active" : ""
                            }`}
                            href={`#image-${index}`}
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveImage(index);
                            }}
                          >
                            <img src={image} alt="Product thumb" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 pt-4 pt-lg-0">
                    <div className="product-details ms-auto pb-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <a href="#reviews" data-scroll="">
                          <div className="star-rating">
                            {rating &&
                              renderStars(rating).map((star, index) => (
                                <>{star}</>
                              ))}
                            <i className="star-rating-icon ci-star" />
                            <span className="d-inline-block fs-sm text-body align-middle mt-1 ms-1">
                              Rating {rating}
                            </span>
                          </div>
                        </a>
                        <button
                          className="btn-wishlist me-0 me-lg-n3"
                          type="button"
                          title="Add to wishlist"
                          onClick={(e) => {
                            e.preventDefault();
                            toggleWishlistItem(singleProductData);
                          }}
                        >
                          <i
                            className={`ci-heart${
                              wishlist.some((wish) => wish.id === productId)
                                ? "-filled"
                                : ""
                            }`}
                          />
                        </button>
                      </div>
                      <div className="mb-3">
                        <span className="h3 fw-normal text-accent me-1">
                          {price}
                          <small>$</small>
                        </span>
                      </div>
                    </div>
                    <form className="mb-grid-gutter" method="post">
                      <div className="mb-3 d-flex align-items-center">
                        <button
                          className="btn btn-primary btn-shadow d-block w-100"
                          type="button"
                          onClick={() => addToCart(singleProductData)}
                        >
                          <i className="ci-cart fs-lg me-2" />
                          Add to Cart
                        </button>
                      </div>
                    </form>
                    <div className="accordion mb-4" id="productPanels">
                      <div className="accordion-item">
                        <h3 className="accordion-header">
                          <a
                            className="accordion-button"
                            href="#productInfo"
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="true"
                            aria-controls="productInfo"
                          >
                            <i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2" />
                            Product info
                          </a>
                        </h3>
                        <div
                          className="accordion-collapse collapse show"
                          id="productInfo"
                          data-bs-parent="#productPanels"
                        >
                          <div className="accordion-body">
                            <h6 className="fs-sm mb-2">Description</h6>
                            <ul className="fs-sm ps-4">
                              <li>{description}</li>
                            </ul>
                            <h6 className="fs-sm mb-2">Category </h6>
                            <ul className="fs-sm ps-4">
                              <li>{category}</li>
                            </ul>
                            <h6 className="fs-sm mb-2">Number Of Stock</h6>
                            <ul className="fs-sm ps-4">
                              <li>{stock}</li>
                            </ul>
                            <h6 className="fs-sm mb-2">Brand </h6>
                            <ul className="fs-sm ps-4">
                              <li>{brand}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-5 my-md-3">
            <h2 className="h3 text-center pb-4">You may also like</h2>
            <Slider {...Slidersettings}>
              {filteredProducts.map((product) => {
                return (
                  <div key={product.id}>
                    <div className="card product-card card-static">
                      <button
                        className="btn-wishlist btn-sm"
                        type="button"
                        data-bs-toggle="tooltip"
                        data-bs-placement="left"
                        title="Add to wishlist"
                      >
                        <i className="ci-heart" />
                      </button>
                      <Link
                        to={`/products/${product.id}`}
                        onClick={() => {
                          changeSingleProduct(product.id);
                        }}
                      >
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          style={{
                            width: "256px",
                            height: "256px",
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />

                        <div className="card-body py-2">
                          <h3 className="product-title fs-sm">
                            <span>{product.title}</span>
                          </h3>
                          <div className="d-flex justify-content-between">
                            <div className="product-price text-accent">
                              {product.price}
                              <small>$</small>
                            </div>
                            <div className="star-rating">
                              {rating &&
                                renderStars(rating).map((star, index) => (
                                  <>{star}</>
                                ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-800">Loading...</p>
      )}
    </>
  );
};

export default SingleProduct;
