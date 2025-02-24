import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {
    let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext);

    useEffect(() => {
        let newlist = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input));
        setCate(newlist);
    }, [input]);

    let items = useSelector(state => state.cart); // Ensure you're accessing the correct state.

    return (
        <div className='w-full h-30 flex justify-between items-center px-5 md:px-8'>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <MdFastfood className='w-[30px] h-[30px] text-orange-600' />
            </div>
            <form className='w-[45%] md:w-[70%] h-[60px] bg-white flex items-center px-5 py-2 gap-10 rounded-md shadow-md' onSubmit={(e) => e.preventDefault()}>
                <FaSearch className='text-orange-600 w-[20px] h-[20px]' />
                <input
                    type="text"
                    placeholder='Search Items...'
                    className='w-[100%] outline-none text-[15px]'
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
            </form>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer' onClick={() => setShowCart(true)}>
                <span className='absolute top-0 right-1 text-orange-600 font-bold'>{items.length}</span>
                <RiShoppingBag3Fill className='w-[30px] h-[30px] text-orange-600' />
            </div>
        </div>
    );
}

export default Nav;
