import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart, getCartTotal } = useCart();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between py-6 border-b border-gray-300"
                        >
                            <div>
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p className="text-gray-600">${item.price}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="ml-4 inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold">Total: ${getCartTotal()}</h3>
                        <button
                            onClick={clearCart}
                            className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                        >
                            Clear Cart
                        </button>
                    </div>
                </div>
            )}
            <Link
                to="/p"
                className="mt-8 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
                Back to Products
            </Link>
        </div>
    );
};

export default CartPage;