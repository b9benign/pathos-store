import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import UserProvider from './context/user-context';
import CartProvider from './context/cart-context';
import ListProvider from './context/list-context';
import LovedProvider from './context/loved-context';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NJH9wB6Wg8FhT26RHodA1lB6L7x6OfK3oUEJ2ozoMX1GnUKspv76lBmyLDO5khPqYM10vVATqhusnroauD1oa2100tVgvtr6q');
const options = {
  mode: 'payment',
  currency: 'usd',
  amount: 10000
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <LovedProvider>
          <CartProvider>
            <ListProvider>
              <App />
            </ListProvider>
          </CartProvider>
        </LovedProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
