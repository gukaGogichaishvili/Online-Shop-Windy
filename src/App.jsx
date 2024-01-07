import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";


import {
  Cart,
  Checkout,
  CheckoutDetails,
  CheckoutPayment,
  Profile,
} from "./components";
import ProtectedRoute from "./ProtectedRoute";
import Redirected from "./Redirected";
import PageNotFound from "./components/PageNotFound";

function App() {
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          >
            <Route
              path="checkout"
              element={
                <ProtectedRoute>
                  <CheckoutDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="payment"
              element={
                <ProtectedRoute>
                  <CheckoutPayment />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/redirected" element={<Redirected />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
