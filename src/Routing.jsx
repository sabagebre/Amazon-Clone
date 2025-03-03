// import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Order from "./Pages/Order/Order";
import Cart from "./pages/Cart/Cart";

import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import LayOut from "./components/LayOut/LayOut";

const stripePromise = loadStripe(
  "pk_test_51QxZwTLgrvAkHyzF4zm2cioSpnOL71QGzSGPgYdxBSiuWV115fig9TvCvQ7C7Sl3iEY2nBKIm7r87kJPgC3lknpQ00jR5ZflxB"
);

const Routing = () => {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/payments"
        element={
          <ProtectedRoute msg={"You must log in to pay"} redirect={"/payments"}>
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute
            msg={"You must log in to access your orders"}
            redirect={"/orders"}
          >
            <Elements stripe={stripePromise}>
              <Order />
            </Elements>
          </ProtectedRoute>
        }
      />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productID" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />

      <Route path="/auth" element={<Auth />} />
    </Routes>
    // </Router>
  );
};

export default Routing;
