import React from 'react';
import Cart from './cart';
import Products from './products';

import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';

const stripePromise = loadStripe(`${process.env.GATSBY_STRIPE_PUBLISHABLE}`);

const Store = () => {
  return (
    <CartProvider mode="checkout-session" stripe={stripePromise} currency="USD" successUrl="/success"  cancelUrl="/cancel">
    <Cart />
      <Products />
  </CartProvider>
  );
};

export default Store;