import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart, getCartTotal } = useCart();

    return (
        <div className="flex items-start justify-center h-screen">
            <div className="container w-[75%] mx-auto px-4 py-8 flex flex-col">
                <h1 className="text-3xl font-bold mb-6">Cart</h1>
                {cartItems.length === 0 ? (
                    <p className="flex-grow">Your cart is empty.</p>
                ) : (
                    <div className="flex flex-col flex-grow">
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
                                {/* <button className="border font-bold bg-yellow-800 rounded rounded-5 px-4 py-2 mt-4 inline-block py-2 px-4 text-white hover:text-gray-800
          hover:shadow-md duration-300 ease-in-out  hover:border-black hover:bg-white ">Get Started</button>
 */}
                            </div>
                        ))}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold">Total: ${getCartTotal()}</h3>
                            <button
                                onClick={clearCart}
                                className="border font-bold hover:bg-gray-700 rounded rounded-5 px-4 py-2 mt-4 inline-block py-2 px-4  hover:text-white
                                hover:shadow-md duration-300 ease-in-out  border-gray-700  bg-white">Clear cart
                            </button>
                        </div>
                        {/* <button className="border font-bold hover:bg-gray-700 rounded rounded-5 px-4 py-2 mt-4 inline-block py-2 px-4  hover:text-white
          hover:shadow-md duration-300 ease-in-out  border-gray-700  bg-white">Add to cart</button>
 */}
                    </div>
                )}
                <Link
                    to="/p"
                    className="mt-4 inline-block hover:text-black text-blue-600  font-semibold py-2 px-4 rounded"
                >
                    Back to Products
                </Link>
            </div>
        </div>
    );
};

export default CartPage;