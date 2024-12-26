import React, { useEffect, useState } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Sample product data based on the id (you can replace it with real data)
        const fetchedProduct = {
            id: id,
            name: `Product ${id}`,
            description: `Detailed description of Product ${id}`,
            price: 100 + parseInt(id), // Simple price logic
        };
        setProduct(fetchedProduct);
    }, [id]);

    return (
        <div className="product-details">
            {product ? (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                    <button>Add to Cart</button>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
}

export default ProductDetails;
