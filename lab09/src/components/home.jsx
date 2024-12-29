import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    const navigateToProduct = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <div className="container home-page">
            <h1>Welcome to Our E-Commerce Platform</h1>
            <p>Discover high-quality products tailored just for you. Shop with ease!</p>

            <div className="product-section">
                {/* Camera Category */}
                <div className="product-card">
                    <img
                        src="https://petapixel.com/assets/uploads/2023/09/PetaPixel-Background-copy-1-800x420.jpg"
                        alt="Camera"
                    />
                    <h2>Explore Cameras</h2>
                    <p>Find the best cameras to capture life's moments.</p>
                    <button onClick={() => navigateToProduct(1)}>View Cameras</button>
                </div>

                {/* Toy Category */}
                <div className="product-card">
                    <img
                        src="https://t3.ftcdn.net/jpg/00/74/44/28/360_F_74442850_C0PsTWPFlOfwcPA3AybYefXDBmnWVsWX.jpg"
                        alt="Toys"
                    />
                    <h2>Quality Toys</h2>
                    <p>Shop our wide range of fun and safe toys for kids.</p>
                    <button onClick={() => navigateToProduct(2)}>View Toys</button>
                </div>
                {/* Gadget Category */}
                <div className="product-card">
                    <img
                        src="https://assets.aboutamazon.com/dims4/default/315d9b7/2147483647/strip/true/crop/1280x720+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F19%2F68%2Fb69f14d04488bb8d1bb700699f32%2Fcharger.jpg"
                        alt="Gadgets"
                    />
                    <h2>Smart Gadgets</h2>
                    <p>Upgrade your tech with the latest gadgets and accessories.</p>
                    <button onClick={() => navigateToProduct(3)}>View Gadgets</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;