import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <Link
                to={`/products/${product.id}`}

            >
                <img
                    className="w-full h-48 object-cover mb-4"
                    src={product.image}
                    alt={product.name}
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p> </Link>
            <button
                onClick={handleAddToCart}
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
                Add to Cart
            </button>



        </div>
    );
};

export default ProductCard;