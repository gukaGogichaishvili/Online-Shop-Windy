import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { createIntent } from "../backend/backend";
import CheckoutForm from "./PaymentForm";
import { ShoppingCartContext } from "../context/ShoppingCartContext";


const stripePromise = loadStripe(
  "pk_test_51OVKpFA1Eg00czE2GkQ2TLBN5YYAtNTq62hNuKHE1pQHHwskSkVkiPhbrFbWZm2fQdM8vSwqUFLDdY5HJSqB7XqD008HMe6UUw",
);

const CheckoutPayment = () => {

  const [intent, setIntent] = useState();

  async function loadIntent() {
    const response = await createIntent();
    setIntent(response);
  }

  useEffect(() => {
    loadIntent();
  }, []);

  
  if (!intent) {
    return <div>Loading...</div>;
  }

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
        <Link className="step-item active" to="/checkout">
          <div className="step-progress">
            <span className="step-count">2</span>
          </div>
          <div className="step-label">
            <i className="ci-user-circle" />
            Details
          </div>
        </Link>
        <div className="step-item active current">
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
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: intent.client_secret }}
        >
          <CheckoutForm />
        </Elements>
      </section>
    </>
  );
};

export default CheckoutPayment;
