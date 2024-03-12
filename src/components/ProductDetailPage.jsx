import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ProductsData from '../data/ProductsData';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const ProductDetailPage = () => {
    const history = useHistory();
    const { id } = useParams();
    const product = ProductsData.find((product) => product.id === parseInt(id));
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(product);
    };

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/12 flex items-start">
                    <button
                        onClick={() => history.goBack()}
                        className="inline-block text-black font-semibold py-2 px-4 rounded"
                        style={{ position: 'absolute', left: '70px', top: '90px', fontSize: '24px' }}
                    >
                        &larr;
                    </button>
                </div>
                <div className="md:w-5/12">
                    <img
                        className="w-full object-cover"
                        src={product.image}
                        alt={product.name}
                    />
                </div>
                <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">

                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-600">${product.price}</p>
                    <p className="text-gray-800 mt-4">{product.description}</p>
                    <Link
                        to="/cart"
                        className="text-black  hover:text-blue-600 font-semibold pb-2 rounded left-0 "
                    >
                        <FaShoppingCart className='w-12 h-6' />
                    </Link>
                    <button
                        onClick={handleAddToCart}
                        className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded "
                    >
                        Add to Cart
                    </button>


                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
