import React, { useState } from 'react';
import Modal from './ItemModal';
import "./CartItem.css"

function CartItem({ item, onRemove }){
    const [modal, setModal] = useState(false)

    return (
        <div className="cart-item flex justify-between items-center border-b border-b-2 border-black py-2">
            <div>
                <img className="max-h-24 w-auto" src={`${item.img}`} alt="photo" />
            </div>
            <div className='cart-item-name'>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-700 text-2xl">${item.price.toFixed(2)}</p>
            </div>
            <div className='cart-item-name'>
                <ul className="text-md grid grid-rows-3 grid-flow-col">
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
            <div>
                <button
                    onClick={onRemove}
                    className="bg-red-500 text-white px-4 py-2 text-xl rounded hover:bg-red-600 transition duration-300"
                >
                    Remove
                </button>
                <button
                    onClick={() => setModal(true)}
                    className="ml-5 bg-yellow-500 text-white px-4 py-2 text-xl rounded hover:bg-yellow-600 transition duration-300"
                >
                    Modify
                </button>
            </div>
            <Modal isOpen={modal} item={item} onClose={() => setModal(false)}/>
        </div>
    );
};

export default CartItem;
