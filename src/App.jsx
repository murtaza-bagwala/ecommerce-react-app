import React, { useState } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';
import Details from './components/Details';
import Login from './components/Login';

export default function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  if (token) {
    sessionStorage.setItem('token', token);
  }

  return (
    <>
      <div className="content">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<h1>Hey Guys its just a home page</h1>} />
            <Route path="/:category" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </>
  );
}
