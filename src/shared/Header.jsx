import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { MiniCart, SearchBar } from "../components";
import AuthLayout from "../auth/AuthLayout";
import { ToggleProfilePageContext } from "../context/ToggleProfilePageContext";

const Header = () => {
  const { token } = useContext(AuthContext);
  const { cart, calculateTotal} = useContext(ShoppingCartContext);
  const { setEditPage } = useContext(ToggleProfilePageContext);
  


  return (
    <>
      <AuthLayout />
      <div className="navbar-sticky bg-light">
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <Link
              className="navbar-brand d-none d-sm-block flex-shrink-0"
              to="/products"
            >
              <img src="assets/logo.png" width={85} alt="logo" />
            </Link>
            <Link
              className="navbar-brand d-sm-none flex-shrink-0 me-2"
              to="/products"
            >
              <img src="assets/logo.png" width={74} alt="logo" />
            </Link>
            <SearchBar />
            <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
         
              {!token ? (
                <a
                  className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2"
                  href="#signin-modal"
                  data-bs-toggle="modal"
                >
                  <div className="navbar-tool-icon-box">
                    <i className="navbar-tool-icon ci-user" />
                  </div>
                  <div className="navbar-tool-text ms-n3">Hello, Sign in</div>
                </a>
              ) : (
                <>
                  <Link
                    className="navbar-tool  d-lg-flex"
                    to="/profile"
                    onClick={() => {
                      setEditPage(false);
                    }}
                  >
                    <span className="navbar-tool-tooltip hrt">Wishlist</span>
                    <div className="navbar-tool-icon-box hrt">
                      <i className="navbar-tool-icon ci-heart" />
                    </div>
                  </Link>
                  <Link
                    className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2"
                    to="/profile"
                    onClick={() => {
                      setEditPage(true);
                    }}
                  >
                    <div className="navbar-tool-text ms-n3 ml-5 bg-primary rounded p-3" >My Account</div>
                  </Link>
                </>
              )}
              <div className="navbar-tool dropdown ms-3">
                <Link
                  className="navbar-tool-icon-box bg-secondary dropdown-toggle"
                  to="/cart"
                >
                  <span className="navbar-tool-label">
                    {cart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                  <i className="navbar-tool-icon ci-cart" />
                </Link>
                <Link className="navbar-tool-text" to="/cart">
                  <small>My Cart</small>${calculateTotal()}
                </Link>
                <MiniCart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
