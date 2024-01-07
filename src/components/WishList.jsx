import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const WishList = () => {
  const { toggleWishlistItem, wishlist } = useContext(WishlistContext);

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();


  return (
    <section className="col-lg-8">
      <div className="d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
        <h6 className="fs-base text-light mb-0">
          List of items you added to wishlist:
        </h6>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          <i className="ci-sign-out me-2" />
          Sign out
        </button>
      </div>
      {wishlist.length > 0 ? (
        wishlist.map((wish) => (
          <div
            className="d-sm-flex justify-content-between mt-lg-4 mb-4 pb-3 pb-sm-2 border-bottom"
            key={wish.id}
          >
            <div className="d-block d-sm-flex align-items-start text-center text-sm-start">
              <Link
                to={`/products/${wish.id}`}
                className="d-block flex-shrink-0 mx-auto me-sm-4"
                style={{ width: "10rem" }}
              >
                <img src={wish.thumbnail} alt={wish.title} />
              </Link>
              <div className="pt-2">
                <h3 className="product-title fs-base mb-2">
                  <Link to={`/products/${wish.id}`}>{wish.title}</Link>
                </h3>
                <div className="fs-sm">
                  <span className="text-muted me-2">Brand:</span>
                  {wish.brand}
                </div>
                <div className="fs-sm">
                  <span className="text-muted me-2">Category:</span>
                  {wish.category}
                </div>
                <div className="fs-lg text-accent pt-2">
                  {wish.price}
                  <small>$</small>
                </div>
              </div>
            </div>
            <div className="pt-2 ps-sm-3 mx-auto mx-sm-0 text-center">
              <button
                className="btn btn-outline-danger btn-sm"
                type="button"
                onClick={() => {
                  toggleWishlistItem(wish);
                }}
              >
                <i className="ci-trash me-2" />
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2>Wishlist is empty</h2>
      )}
    </section>
  );
};

export default WishList;
