import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>  {/* Add link to Products */}
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/user/johndoe">User Profile</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
