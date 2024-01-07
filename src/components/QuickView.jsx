import React, { useContext, useState } from "react";
import { useRatingContext } from "../context/RatingContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { WishlistContext } from "../context/WishlistContext";
import { Link } from "react-router-dom";

const QuickView = ({ data, activeImage, setActiveImage }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  const { renderStars } = useRatingContext();
  const { toggleWishlistItem, wishlist } = useContext(WishlistContext);


  return (
    <div className="modal-quick-view modal fade" id="quick-view" tabIndex={-1}>
      <div className="modal-dialog modal-xl">
        {!data ? (
          <div>Loading... </div>
        ) : (
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title product-title">{data.title}</h4>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-7 pe-lg-0">
                  <div className="product-gallery">
                    <div className="product-gallery-preview order-sm-2">
                      
                        <div
                          className='product-gallery-preview-item active'
                          id={`image-${activeImage}`}
                        >
                          <img
                            className="image-zoom"
                            src={data.images[activeImage]}
                            data-zoom={data.images[activeImage]}
                            alt="Product image"
                          />
                          <div className="image-zoom-pane" />
                        </div>
                      
                    </div>
                    <div className="product-gallery-thumblist order-sm-1">
                      {data.images.map((image, index) => (
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

                {/* Product details*/}
                <div className="col-lg-5 pt-4 pt-lg-0 image-zoom-pane">
                  <div className="product-details ms-auto pb-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <div className="star-rating">
                        {data.rating &&
                          renderStars(data.rating).map((star, index) => (
                            <>{star}</>
                          ))}
                      </div>

                      <button
                        className="btn-wishlist"
                        type="button"
                        data-bs-toggle="tooltip"
                        title="Add to wishlist"
                        onClick={() => toggleWishlistItem(data)}
                      >
                        <i  className={`ci-heart${
                          wishlist.some((wish) => wish.id === data.id)
                            ? "-filled"
                            : ""
                        }`} />
                      </button>
                    </div>
                    <div className="mb-3">
                      <span className="h3 fw-normal text-accent me-1">
                        {data.price}
                        <small>$</small>
                      </span>
                    </div>
                    <div className="position-relative me-n4 mb-3">
                      <div className="product-badge product-available mt-n1">
                        <i className="ci-security-check" />
                        Product available
                      </div>
                    </div>
                    <form className="mb-grid-gutter">
                      <div className="mb-3"></div>
                      <div className="mb-3 d-flex align-items-center">
                        <button
                          className="btn btn-primary btn-shadow d-block w-100"
                          onClick={(e) => {
                            addToCart(product);
                          }}
                        >
                          <i className="ci-cart fs-lg me-2" />
                          Add to Cart
                        </button>
                      </div>
                    </form>
                    <h5 className="h6 mb-3 pb-2 border-bottom">
                      <i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2" />
                      Product info
                    </h5>
                    <h6 className="fs-sm mb-2">Category</h6>
                    <ul className="fs-sm ps-4">
                      <li>{data.category}</li>
                    </ul>
                    <h6 className="fs-sm mb-2">Description</h6>
                    <ul className="fs-sm ps-4">
                      <li>{data.description}</li>
                    </ul>
                    <h6 className="fs-sm mb-2">{data.price}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickView;
