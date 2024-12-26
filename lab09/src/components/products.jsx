import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Products() {
    const productList = [
        { id: 1, name: 'Product 1', description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', description: 'Description of Product 2' },
        { id: 3, name: 'Product 3', description: 'Description of Product 3' },
        { id: 4, name: 'Product 4', description: 'Description of Product 4' },
        // Add more products as needed
    ];

    return (
        <div className="products">
            <h1>Our Products</h1>
            <ul>
                {productList.map((product) => (
                    <li key={product.id} className="product-item">
                        <Link to={`/product/${product.id}`}>
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
