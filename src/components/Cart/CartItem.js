import React, { useState } from 'react';
import Modal from './ItemModal';
import "./CartItem.css"

function CartItem({ item, onRemove }){
    const [modal, setModal] = useState(false)

    return (
        <div className="flex flex-col items-center justify-between py-2 border-b-2 border-black md:flex-row">
            <div className="flex gap-1 max-md:block max-md:w-full">
                <div className="flex gap-2 w-[450px] md:w-[250px] ">
                    <div className='flex items-center min-w-[100px]'>
                        <img className="max-h-20" src={`${item.img}`} alt={item.title} />
                    </div>
                    <div className="ml-5 flex items-center">
                        <div>
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <p className="text-2xl text-gray-700">${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <ul className="grid gap-5 ml-10 max-lg: grid-flow-col max-lg: grid-rows-3 max-md: flex-row max-md:grid-rows-1 max-md:mt-4 max-md:w-3/5 max-md:ml-3 max-md:flex max-md:flex-wrap max-sm:w-full text-[13px]">
                        {item.selectedToppings
                            ?
                            item.selectedToppings.map((item, index) => (
                                <li className='text-gray-500 list-disc' key={index}>{item}</li>
                            ))
                            :
                            item.toppings.map((item, index) => (
                                <li className='text-gray-500 list-disc' key={index}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div class="gap-1 flex lg:w-auto items-center max-md:justify-between max-md:w-full max-md:mt-6">
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
            <Modal isOpen={modal} item={item} onClose={() => setModal(false)}/>
        </div>
    );
};

export default CartItem;
