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
                className="mt-4 absolute mr-24 top-4 inline-block text-yellow-800 hover:bg-gray-100 text-white font-semibold py-2 px-4 rounded right-0"
            >
                <FaShoppingCart className='w-12 h-6 inline-block' /> ({cartItems.length})
            </Link>
            <h1 className="text-2xl font-bold mb-6 ml-32">Products</h1>
            <div className='w-[80%] mx-auto'><div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ProductsData.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            </div>

        </div>
    );
};

export default ProductsPage;