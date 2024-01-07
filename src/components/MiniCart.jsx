import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

const MiniCart = () => {
  const { cart, removeFromCart, calculateTotal } = useContext(ShoppingCartContext);


  return (
    <div className="dropdown-menu dropdown-menu-end">
      <div
        className="widget widget-cart px-3 pt-2 pb-3"
        style={{ width: "20rem" }}
      >
        <div
          style={{ height: "15rem" }}
          data-simplebar=""
          data-simplebar-auto-hide="false"
        >
          {cart.length === 0 ? (
            <div>
              <h6 className="divide-y divide-gray-300">Your cart is empty</h6>
            </div>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  className="widget-cart-item pb-2 border-bottom"
                  key={item.id}
                >
                  <button
                    className="btn-close text-danger"
                    type="button"
                    aria-label="Remove"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                  <div className="d-flex align-items-center">
                    <a className="flex-shrink-0" href="shop-single-v1.html">
                      <img src={item.images[0]} width={64} alt="Product" />
                    </a>
                    <div className="ps-2">
                      <h6 className="widget-product-title">
                        <a href="shop-single-v1.html">{item.name}</a>
                      </h6>
                      <div className="widget-product-meta">
                        <span className="text-accent me-2">
                          {item.price}
                          <small>$</small>
                        </span>
                        <span className="text-muted">x {item.quantity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <div className="fs-sm me-2 py-2">
            <span className="text-muted">Subtotal:</span>
            <span className="text-accent fs-base ms-1">
              {calculateTotal().toFixed(2)}
              <small>$</small>
            </span>
          </div>
          <Link
            className="btn btn-outline-secondary btn-sm"
            to={cart.length > 0 ? "/cart" : "#"}
            onClick={(e) => {
              if (cart.length === 0) {
                e.preventDefault();
                alert("First add items to the cart");
              }
            }}
          >
            Expand cart
            <i className="ci-arrow-right ms-1 me-n1" />
          </Link>
        </div>
        <Link
          className={`btn btn-${
            cart.length > 0 ? "primary" : "secondary"
          } btn-sm d-block w-100`}
          to={cart.length > 0 ? "/checkout" : "#"}
          onClick={(e) => {
            if (cart.length === 0) {
              e.preventDefault();
              alert("To go to Checkout, First add items to the cart");
            }
          }}
        >
          <i className="ci-card me-2 fs-base align-middle" />
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default MiniCart;
