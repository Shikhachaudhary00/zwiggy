import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiRoastChicken } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartslice';
import { toast } from 'react-toastify';

function Card({ name, image, id, price, type }) {
    let dispatch = useDispatch();
    const popup = () => {
        toast.success("Item Added ", {
            autoClose: 1000, // Increase the duration to 10 seconds (10000ms)
        }); 
    };

    return (
        <div className='w-[282px] h-[380px] bg-white rounded-md p-3 m-1 relative flex flex-col gap-3 shadow-lg hover:border-9 border-orange-100'>
            {/* Image Section */}
            <div className='w-[100%] h-[90%] overflow-hidden rounded-md relative mb-2'>
                <img src={image} alt="Food item" className='object-cover w-full h-full' />
            </div>

            {/* Title Section */}
            <div className='text-2xl font-bold px-3 mt-1'>
                {name}
            </div>

            {/* Price and Veg Info */}
            <div className='w-full flex justify-between items-center px-5 font-semibold text-orange-500'>
                <div> Rs {price}/-</div>
                <div className='flex justify-center items-center text-orange-500 text-lg font-bold'>
                    {type === 'veg' ? <LuLeafyGreen style={{ color: 'green' }} /> : <GiRoastChicken style={{ color: 'red' }} />}
                    <span style={{ color: type === 'veg' ? 'green' : 'red' }}>{type}</span>
                </div>
            </div>

            {/* Add Item Button */}
            <button 
                className='cursor-pointer w-full p-3 mt-3 bg-orange-600 text-white font-semibold rounded-md hover:bg-green-600 transition-all duration 200 shadow-lg'
                onClick={() => {dispatch(AddItem({ id, name, price, image, qty: 1 }));
                popup()}}>
                Add Item
            </button>
        </div>
    );
}

export default Card;
