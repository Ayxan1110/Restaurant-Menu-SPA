import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoChevronBack } from "react-icons/io5";
import CartItem from './CartItem';
import PaymentPopUp from './PaymentPopUp';
import { removeItemFromCart } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import "./Cart.css"

function Cart(){

    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    const [payment, setPayment] = useState(false)

    return (
        <div className="container mx-auto p-4">
            <Link className='flex items-center text-2xl font-bold' to="/"><IoChevronBack /> Go Back</Link>
            <h1 className="text-2xl font-bold mt-10">Cart</h1>
            {cartItems?.length === 0 ? (
                <p className="text-2xl mt-10 text-gray-500">Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems?.map(item => (
                        <CartItem key={item.id} item={item} onRemove={() => dispatch(removeItemFromCart(item))} />
                    ))}
                    <div className="mt-4">
                        <button
                            onClick={() => setPayment(true)}
                            className="bg-green-500 text-white text-2xl px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
            <PaymentPopUp isOpen={payment} onClose={() => setPayment(false)}/>
        </div>
    );
};

export default Cart;
