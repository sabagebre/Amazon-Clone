import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Results from './Pages/Results/Results'
import Cart from './Pages/Cart/Cart'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'


const stripePromise = loadStripe(
  "pk_test_51QxZwTLgrvAkHyzF4zm2cioSpnOL71QGzSGPgYdxBSiuWV115fig9TvCvQ7C7Sl3iEY2nBKIm7r87kJPgC3lknpQ00jR5ZflxB"
);

function Routing() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />

      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productID" element={<ProductDetail />} />
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
    </Routes>
  );
}

export default Routing