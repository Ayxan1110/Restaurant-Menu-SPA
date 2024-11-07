import React from 'react';
import "./CheckoutItem.css"

function CheckoutItem({ item }){
    return (
        <>
            <div className="cart-item flex justify-between items-center border-b border-b-2 border-black py-2">
                <div>
                    <img className="max-h-24 w-auto" src={`${item.img}`} alt={item.title} />
                </div>
                <div className='cart-item-name'>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-gray-700 text-2xl">${item.price.toFixed(2)}</p>
                </div>
            </div>
        </>
    );
};

export default CheckoutItem;
