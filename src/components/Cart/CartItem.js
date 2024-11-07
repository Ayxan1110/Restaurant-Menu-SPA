import React, { useState } from 'react';
import Modal from './ItemModal';
import "./CartItem.css"

function CartItem({ item, onRemove }){
    const [modal, setModal] = useState(false)

    return (
        <div className="flex flex-col items-center justify-between py-2 border-b-2 border-black md:flex-row">
            <div className='flex gap-1'>
                <div>
                    <img className="w-auto max-h-24" src={`${item.img}`} alt={item.title} />
                </div>
                <div className='cart-item-name'>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-2xl text-gray-700">${item.price.toFixed(2)}</p>
                </div>
                <div className='cart-item-name'>
                    <ul className="grid grid-flow-col grid-rows-3 text-md">
                        {item.selectedToppings
                            ?
                            item.selectedToppings.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                            :
                            item.toppings.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div class="cart-buttons">
                <div>
                <button
                    onClick={onRemove}
                    className="px-4 py-2 text-xl text-white transition duration-300 bg-red-500 rounded hover:bg-red-600"
                >
                    Remove
                </button>
                <button
                    onClick={() => setModal(true)}
                    className="px-4 py-2 ml-5 text-xl text-white transition duration-300 bg-yellow-500 rounded hover:bg-yellow-600"
                >
                    Modify
                </button>
                </div>
            </div>
            <Modal isOpen={modal} item={item} onClose={() => setModal(false)}/>
        </div>
    );
};

export default CartItem;
