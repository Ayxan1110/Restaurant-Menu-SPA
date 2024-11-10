import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../redux/cartSlice';
import { MdKeyboardArrowDown } from "react-icons/md";
import StarRating from './StarRating';
import "./MenuItem.css"

function MenuItem({ item, inCart }) {

    const [show, showInfo] = useState(false)
    const dispatch = useDispatch();

    return (
        <div className="cursor-pointer p-4 rounded-lg shadow-md h-full my-[10px]">
            <img draggable={false} className='image' width="100%" height="100%" src={item.img} alt={item.title} />
            <h2 className="text-3xl mt-4 font-semibold h-[4rem]">{item.title}</h2>            
            <div className="mt-10 flex justify-between items-center">
                <StarRating rating={item.rating} />
                <p className="text-3xl font-bold">${item.price.toFixed(2)}</p>
            </div>
            <p onClick={() => showInfo(!show)} className="cursor-pointer text-lg mt-2 flex justify-between items-center">Detailed information <MdKeyboardArrowDown /></p>
            <div className={`description${show ? ' expanded' : ''}`}>
                <p className="mt-5">{item.description}</p>
                <br />
                <p>Ingredients:</p>
                <ul className='ml-4 mt-4'>
                {item.toppings.map((item, index) => (
                    <li className="list-disc" key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
                ))}
                </ul>
            </div>
            <button
                onClick={() => !inCart ? dispatch(addItemToCart(item)) : dispatch(removeItemFromCart(item))}
                className={`mt-4 text-white text-lg px-4 py-2 rounded ${inCart ? "hover:bg-red-800 bg-red-500" : "hover:bg-green-800 bg-green-500"} transition duration-300}`}
            >
                {inCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
};

export default MenuItem;
