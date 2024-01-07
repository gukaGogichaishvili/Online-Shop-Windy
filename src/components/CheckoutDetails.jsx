import React from "react";
import { Link } from "react-router-dom";

const CheckoutDetails = () => {
  return (
    <>
      <div className="steps steps-light pt-2 pb-3 mb-5">
        <Link to="/cart" className="step-item active">
          <div className="step-progress">
            <span className="step-count">1</span>
          </div>
          <div className="step-label">
            <i className="ci-cart" />
            Cart
          </div>
        </Link>
        <Link className="step-item active current" to="/checkout">
          <div className="step-progress">
            <span className="step-count">2</span>
          </div>
          <div className="step-label">
            <i className="ci-user-circle" />
            Details
          </div>
        </Link>
        <div className="step-item">
          <div className="step-progress">
            <span className="step-count">3</span>
          </div>
          <div className="step-label">
            <i className="ci-package" />
            Payment
          </div>
        </div>
      </div>

      <section className="col-lg-8">
        <h2 className="h6 pt-1 pb-3 mb-3 border-bottom">Shipping address</h2>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="checkout-fn">
                First Name
              </label>
              <input className="form-control" type="text" id="checkout-fn" />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="checkout-ln">
                Last Name
              </label>
              <input className="form-control" type="text" id="checkout-ln" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="checkout-email">
                E-mail Address
              </label>
              <input
                className="form-control"
                type="email"
                id="checkout-email"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="checkout-phone">
                Phone Number
              </label>
              <input className="form-control" type="text" id="checkout-phone" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="checkout-company">
                Company
              </label>
              <input
                className="form-control"
                type="text"
                id="checkout-company"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="checkout-country">
                Country
              </label>
              <select className="form-select" id="checkout-country">
                <option>Choose country</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
                <option>Switzerland</option>
                <option>USA</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="checkout-city">
                Country
              </label>
              <select className="form-select" id="checkout-city">
                <option>Choose city</option>
                <option>Amsterdam</option>
                <option>Berlin</option>
                <option>Geneve</option>
                <option>New York</option>
                <option>Paris</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="checkout-zip">
                ZIP Code
              </label>
              <input className="form-control" type="text" id="checkout-zip" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="checkout-address-1">
                Address 1
              </label>
              <input
                className="form-control"
                type="text"
                id="checkout-address-1"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="mb-3">
              <label className="form-label" htmlFor="checkout-address-2">
                Address 2
              </label>
              <input
                className="form-control"
                type="text"
                id="checkout-address-2"
              />
            </div>
          </div>
        </div>
        
        <div className=" d-lg-flex pt-4 mt-3">
          <div className="w-50 pe-3">
            <Link className="btn btn-secondary d-block w-100" to="/cart">
              <i className="ci-arrow-left mt-sm-0 me-1" />
              <span >Back to Cart</span>
              <span >Back</span>
            </Link>
          </div>
          <div className="w-50 ps-2">
            <Link className="btn btn-primary d-block w-100" to="/payment">
              <span >Proceed to Payment</span>
              <span >Next</span>
              <i className="ci-arrow-right mt-sm-0 ms-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutDetails;
