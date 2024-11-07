import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CheckoutItem from './CheckoutItem';
import "./PaymentPopUp.css"

function PaymentPopUp({ isOpen, onClose }){

  const { cartItems } = useSelector((state) => state.cart);

  const finalPrice = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  const [video, setVideo] = useState(false);

  useEffect(() =>{
    setVideo(false);
  }, [onClose])

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3 className='text-2xl mb-4'>Total: <span className="font-bold text-3xl">{finalPrice}</span></h3>
        <ul>
            {cartItems?.map(item => (
                <CheckoutItem key={item.id} item={item} />
            ))}
        </ul>
        <button
            onClick={() => setVideo(true)}
            className="mt-5 cursor-pointer text-white w-full bg-green-500 px-4 py-2 text-xl rounded text-center inline-block"
        >
            Pay
        </button>
        {video &&
            <iframe
            title="ricknroll"
            width="360"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            allow="autoplay; encrypted-media"
            allowFullScreen
            ></iframe>
        }
        <button className="modal-close" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default PaymentPopUp;
