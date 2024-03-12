import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductsData from '../data/ProductsData';
import { useCart } from '../contexts/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
const ProductsPage = () => {
    const { cartItems } = useCart();

    return (
        <div className="container mx-auto px-4 py-8 relative">
            <Link
                to="/cart"
                className="mt-4 absolute  top-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded right-0"
            >
                <FaShoppingCart className='w-12 h-6 inline-block' /> ({cartItems.length})
            </Link>
            <h1 className="text-3xl font-bold mb-6">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ProductsData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    );
};

export default ProductsPage;