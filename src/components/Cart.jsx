import React, { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, calculateTotal } = useContext(ShoppingCartContext);


  

  return (
    <>
    <div className="page-title-overlap bg-dark pt-4">
    <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
      <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">
          </ol>
        </nav>
      </div>
      <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
        <h1 className="h3 text-light mb-0">Your cart</h1>
      </div>
    </div>
  </div>
  <div className="container pb-5 mb-2 mb-md-4">
    <div className="row">
  
      <section className="col-lg-8">
        <div className="d-flex justify-content-between align-items-center pt-3 pb-4 pb-sm-5 mt-1">
          <h2 className="h6 text-light mb-0">Products</h2>
          <Link
            className="btn btn-outline-primary btn-sm ps-2"
            to='/products'
          >
            <i className="ci-arrow-left me-2" />
            Continue shopping
          </Link>
        </div>
      {cart.length === 0 ? (
       <div><h3 className="divide-y divide-gray-300">Your cart is empty</h3></div> 
      ) : (
        <>
          
            {cart.map((item) => (
           <div className="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom" key={item.id}>
           <div className="d-block d-sm-flex align-items-center text-center text-sm-start">
             <a
               className="d-inline-block flex-shrink-0 mx-auto me-sm-4"
               href="shop-single-v1.html"
             >
               <img src={item.images[0]} width={160} alt="Product" />
             </a>
             <div className="pt-2">
               <h3 className="product-title fs-base mb-2">
                 <a href="shop-single-v1.html">{item.name}</a>
               </h3>
               <div className="fs-lg text-accent pt-2">
               {item.price.toFixed(2)}<small>$</small>
               </div>
             </div>
           </div>
           <div
             className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start"
             style={{ maxWidth: "9rem" }}
           >
             <span
               className="form-control"
               type="number" 
             >Quantity: {item.quantity}</span> 
             <button className="btn btn-link px-0 text-danger" type="button" onClick={() => removeFromCart(item.id)}>
               <i className="ci-close-circle me-2" />
               <span className="fs-sm">Remove</span>
             </button>
           </div>
         </div>
            ))}
          <div className="mt-4">
            <p className="font-semibold">
              Total Items:{" "}
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </p>
            <p className="font-semibold">
              Total Cost: ${calculateTotal().toFixed(2)}
            </p>
            <div className="mt-4 space-x-4">
              <button
                onClick={clearCart}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md focus:outline-none"
              >
                Clear Cart
              </button>
              <Link
                to='/checkout'
                className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md focus:outline-none"
              >
                Checkout
              </Link>
            </div>
          </div>
        </>
      )}
      </section>
    
      <aside className="col-lg-4 pt-4 pt-lg-0 ps-xl-5">
        <div className="bg-white rounded-3 shadow-lg p-4">
          <div className="py-2 px-xl-2">
            <div className="text-center mb-4 pb-3 border-bottom">
              <h2 className="h6 mb-3 pb-1">Subtotal</h2>
              <h3 className="fw-normal">
              {calculateTotal().toFixed(2)}<small>$</small>
              </h3>
            </div>

            <div className="text-center mb-4 pb-3 border-bottom">
              <h2 className="h6 mb-3 pb-1"> Total Items:{" "}
              </h2>
              <h3 className="fw-normal">
              {cart.reduce((total, item) => total + item.quantity, 0)}
              </h3>
            </div>
            <Link
              className="btn btn-primary btn-shadow d-block w-100 mt-4"
             to='/checkout' 
            >
              <i className="ci-card fs-lg me-2" />
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </aside>
    </div>
  </div>
  </>
  );
};

export default Cart;



