import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateItemToppings } from '../../redux/cartSlice';
import './ItemModal.css';

function Modal({ isOpen, onClose, item }) {
  const [selectedToppings, setSelectedToppings] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      setSelectedToppings(item.selectedToppings || item.toppings || []);
    }
  }, [isOpen, item]);

  if (!isOpen) return null;

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedToppings((prev) => [...prev, value]);
    } else {
      setSelectedToppings((prev) => prev.filter((topping) => topping !== value));
    }
  };

  const handleSave = () => {
    dispatch(updateItemToppings({ itemId: item.id, selectedToppings }));
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-2xl mb-4">Choose ingredients you want to remove:</h3>
        <form>
          {item.toppings?.map((topping, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={`topping-${index}`}
                name={topping}
                value={topping}
                checked={selectedToppings.includes(topping)}
                onChange={handleCheckboxChange}
              />
              <label className="ml-2 text-lg" htmlFor={`topping-${index}`}>
                {topping}
              </label>
            </div>
          ))}
          <button
            type="button"
            className="mt-5 bg-yellow-500 text-white px-4 py-2 text-xl rounded hover:bg-yellow-600 transition duration-300"
            onClick={handleSave}
          >
            Save
          </button>
        </form>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
