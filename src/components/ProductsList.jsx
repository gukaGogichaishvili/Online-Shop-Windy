import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useFilterContext } from "../context/FilterContext";
import { useRatingContext } from "../context/RatingContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductsList = ({ handleQuickViewModal }) => {
  
  const { filteredProducts } = useFilterContext();
  
  const { addToCart } = useContext(ShoppingCartContext);

  const { renderStars } = useRatingContext();

  const { toggleWishlistItem, wishlist } = useContext(WishlistContext);


  return (
    <div className="row mx-n2">
      {filteredProducts.map((product) => {
        const { id, title, price, category, images, rating } = product;

        return (
          <div className="col-md-4 col-sm-6 px-2 mb-4" key={id}>
            {images && (
              <>
                <Link to={`/products/${id}`}>
                  <div className="card product-card mb-10 shadow-sm">
                    <button
                      className="btn-wishlist btn-sm"
                      type="button"
                      title="Add to wishlist"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlistItem(product);
                      }}
                    >
                      <i
                        className={`ci-heart${
                          wishlist.some((wish) => wish.id === product.id)
                            ? "-filled"
                            : ""
                        }`}
                      />
                    </button>
                    <div className="card-img-top d-block overflow-hidden">
                      <img
                        src={images[0]}
                        alt={title}
                        style={{
                          width: "256px",
                          height: "256px",
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                    <div className="card-body py-2">
                      <div className="product-meta d-block fs-xs pb-1" href="#">
                        {category.name}
                      </div>
                      <h3 className="product-title fs-sm">{title}</h3>
                      <div className="d-flex justify-content-between">
                        <div className="product-price">
                          <span className="text-accent">
                            {price}
                            <small>$</small>
                          </span>
                        </div>
                        <div className="star-rating">
                          {rating &&
                            renderStars(rating).map((star, index) => (
                              <>{star}</>
                            ))}
                        </div>
                      </div>
                    </div>
                    <div className="card-body card-body-hidden">
                      <button
                        className="btn btn-primary btn-sm mb-2"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(product);
                        }}
                      >
                        <i className="ci-cart fs-sm me-1" />
                        Add to Cart
                      </button>
                      <div className="text-center">
                        <a
                          className="nav-link-style fs-ms"
                          href="#quick-view"
                          data-bs-toggle="modal"
                          onMouseDown={() => {
                            handleQuickViewModal(product);
                          }}
                        >
                          <i className="ci-eye align-middle me-1" />
                          Quick view
                        </a>
                      </div>
                    </div>
                  </div>
                  <hr className="d-sm-none" />
                </Link>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
