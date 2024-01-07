import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

const Checkout = () => {
  const { cart, calculateTotal } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="page-title-overlap bg-dark pt-4">
        <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
          <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
                <li className="breadcrumb-item">
                  <a className="text-nowrap" href="index.html">
                    <i className="ci-home" />
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item text-nowrap">
                  <a href="shop-grid-ls.html">Shop</a>
                </li>
                <li
                  className="breadcrumb-item text-nowrap active"
                  aria-current="page"
                >
                  Checkout
                </li>
              </ol>
            </nav>
          </div>
          <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
            <h1 className="h3 text-light mb-0">Checkout</h1>
          </div>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          <Outlet />
          <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
            <div className="bg-white rounded-3 shadow-lg p-4 ms-lg-auto">
              <div className="py-2 px-xl-2">
                <div className="widget mb-3">
                  <h2 className="widget-title text-center">Order summary</h2>
                  {cart.map((item) => (
                    <div className="d-flex align-items-center pb-2 border-bottom">
                      <Link
                        to={`/products/${item.id}`}
                        className="d-block flex-shrink-0"
                      >
                        <img src={item.thumbnail} width={64} alt={item.title} />
                      </Link>
                      <div className="ps-2">
                        <h6 className="widget-product-title">
                          <Link to={`/products/${item.id}`}>{item.title}</Link>
                        </h6>
                        <div className="widget-product-meta">
                          <span className="text-accent me-2">
                            {item.price}
                            <small>$</small>
                          </span>
                          <span className="text-muted">x{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <ul className="list-unstyled fs-sm pb-2 border-bottom">
                  <li className="d-flex justify-content-between align-items-center">
                    <h6 className="me-2">Subtotal:</h6>
                    <h6 className="text-end">
                      {calculateTotal().toFixed(2)}
                      <small>$</small>
                    </h6>
                  </li>

                  <li className="d-flex justify-content-between align-items-center">
                    <h6 className="me-2">Quantity:</h6>
                    <h6 className="text-end">
                      {cart.reduce((total, item) => total + item.quantity, 0)}
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Checkout;
