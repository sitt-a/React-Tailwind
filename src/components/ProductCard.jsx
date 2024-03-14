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
            {/* <button
                onClick={handleAddToCart}
                className="mt-4 inline-block bg-yellow-800 hover:bg-white  hover:text-gray-800 hover:text-gray-800 text-white font-semibold py-2 px-4 rounded"
            >
                Add to Cart
            </button> */}
<button onClick={handleAddToCart} className="border font-bold hover:bg-gray-700 rounded rounded-5 px-4 py-2 mt-4 inline-block py-2 px-4  hover:text-white
          hover:shadow-md duration-300 ease-in-out  border-gray-700  bg-white">Add to cart</button>


        </div>
    );
};

export default ProductCard;