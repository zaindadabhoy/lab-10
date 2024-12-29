import React from 'react';
import '../App.css';

function ShoppingCartPage() {
    return (
        <div className="container cart-page">
            <h1>Your Shopping Cart</h1>
            
            <div className="cart-list">
                <div className="cart-item">
                    <img 
                        src="data:image/jpeg;base64,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" 
                        alt="Sony A6500" 
                    />
                    <div className="item-details">
                        <h2>Sony A6500</h2>
                        <p>Quantity: 1</p>
                        <p>Price: RS 500</p>
                    </div>
                </div>

                <div className="cart-item">
                    <img 
                        src="data:image/jpeg;base64,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" 
                        alt="Toy B" 
                    />
                    <div className="item-details">
                        <h2>Toy Truck</h2>
                        <p>Quantity: 2</p>
                        <p>Price: RS 2000</p>
                    </div>
                </div>
            </div>

            <div className="cart-total">
                <h2>Total: RS 2500</h2>
                <button>Checkout</button>
            </div>
        </div>
    );
}

export default ShoppingCartPage;