import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

function UserProfilePage() {
    const { username } = useParams();

    return (
        <div className="container user-profile">
            <img 
                src="https://i.pinimg.com/474x/a7/bf/b8/a7bfb8d7457507e3bd9d5ef4b8e1da6d.jpg" 
                alt="User Avatar" 
            />
            <h1>{username}</h1>
            <p>
                Welcome, {username}! We're thrilled to have you with us. 
                Feel free to explore our platform, update your profile, 
                or browse through your order history.
            </p>
        </div>
    );
}

export default UserProfilePage;