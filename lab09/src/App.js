import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import ProductDetails from './components/productDetails';
import Products from './components/products';
import User from './components/user';
import Cart from './components/cart';
import Navbar from './components/navbar';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />  {/* Products Route */}
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path="/user/:username" element={<User />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
