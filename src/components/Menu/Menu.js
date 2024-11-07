import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from './MenuItem';
import { fetchMenuItems } from '../../redux/menuSlice';
import { IoCartOutline } from "react-icons/io5";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import "./Menu.css"

function Menu(){

    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.menu);
    const { cartItems } = useSelector((state) => state.cart);
    const checkInCart = (id) =>{
        return cartItems.some(item => item.id === id)
    }
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        mobile: {
          breakpoint: { max: 1024, min: 600 },
          items: 2
        },
        mobile2: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };      

    useEffect(() => {
        dispatch(fetchMenuItems());
    }, [dispatch]);

    return (
        <div className="container mx-auto my-20 p-4">
            <nav className="absolute top-5 left-10 text-2xl">
                <Link to="/cart" className='flex items-center py-1 px-2 gap-2 border-2 rounded border-black bg-white'><IoCartOutline /><span>{cartItems.length}</span></Link>
            </nav>
            <h1 className="text-5xl text-center font-bold mb-4">Menu</h1>
            <Carousel
                responsive={responsive}
                swipeable={true}
                infinite={true}
            >
                {items.map((item) => (
                    <MenuItem key={item.id} item={item} inCart={checkInCart(item.id)} />
                ))}
            </Carousel>
        </div>
    );
};

export default Menu;
