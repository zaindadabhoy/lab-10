import React, { useState } from 'react';
import '../App.css';

function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', quantity: 1, price: 100 },
        { id: 2, name: 'Product 2', quantity: 2, price: 150 },
    ]);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

    return (
        <div className="cart">
            <h1>Your Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h3>Total: ${totalPrice}</h3>
                    <button>Proceed to Checkout</button>
                </div>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
}

export default Cart;
