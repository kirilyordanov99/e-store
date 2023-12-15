import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Terms,
  Checkout,
  PageNotFound,
} from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/footer.css" element={<Checkout />} />
        <Route path="/Navbar.css" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);