import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';
function Navbar (){
    return (
        <div className="nav">
            <ul>
                <li className="li">
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                    <Link to="/user/:userId">User</Link>
                    
                </li>
            </ul>
        </div>
    )
}
export default Navbar;


