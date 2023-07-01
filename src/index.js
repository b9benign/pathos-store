import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import UserProvider from './context/user-context';
import CartProvider from './context/cart-context';
import ListProvider from './context/list-context';
import LovedProvider from './context/loved-context';

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
