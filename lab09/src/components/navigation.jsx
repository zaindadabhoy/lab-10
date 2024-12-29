import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();

  return (
    <nav>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/cart')}>Cart</button>
      <button onClick={() => navigate('/product/123')}>Product Details</button>
      <button onClick={() => navigate('/user/Zain')}>User Profile</button>
    </nav>
  );
}

export default Navigation;