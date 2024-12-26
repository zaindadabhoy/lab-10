import React, { useEffect, useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

function User() {
    const { username } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Mock user data for demonstration
        const fetchedUser = {
            username: username,
            name: `${username.charAt(0).toUpperCase() + username.slice(1)} Doe`,
            email: `${username}@example.com`,
        };
        setUser(fetchedUser);
    }, [username]);

    return (
        <div className="user-profile">
            {user ? (
                <div>
                    <h1>{user.name}'s Profile</h1>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Loading user profile...</p>
            )}
        </div>
    );
}

export default User;
