import React from 'react';
import { ImBin } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartslice';

function Card2({ name, price, image, qty, id }) {
    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(RemoveItem({ id }));  // Dispatch the action to remove the item from the cart
    };
    const notify = () => {
        toast.error("Item Removed from Cart", {
            autoClose: 1000, // Increase the duration to 10 seconds (10000ms)
        }); 
    };

    return (
        <div className='w-full h-[140px] rounded-md p-2 shadow-xl bg-slate-100 shadow-lg border-3 border-slate-200  flex justify-between'>
            <div className='w-[70%] h-full flex gap-5'>
                <div className='w-[60%] h-full overflow-hidden rounded-md'>
                    <img src={image} alt="" className='object-cover w-full h-full shadow-lg border-1 border-orange-500' />
                </div>
                <div className='w-[10%] h-full flex-col gap-5'>
                    <div className='text-md text-orange-600 font-semibold'>{name}</div>
                    <div className='w-[100px] h-[50px] bg-slate-200 p-1 flex rounded-lg justify-center shadow-lg font-semibold border-1 border-orange-500'>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center font-bold rounded-md  text-2xl text-orange-500'  onClick={()=>{qty>1? dispatch(DecrementQty(id)):1}}
                    >-</button>
                        <span className='w-[40%] h-full bg-slate-200 flex justify-center font-bold items-center text-orange-500'>{qty}</span>
                        <button className='w-[30%] h-full bg-white justify-center flex font-bold  items-center rounded-md text-2xl text-orange-500'   onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
                    </div>
                </div>
            </div>
            <div>
            
                <div className='flex flex-col justify-start items-end gap-6'>
                    <span className='text-l text-green-500'>Rs {price}/-</span>
                    <ImBin className='text-red-500 w-[20px] h-[20px] cursor-pointer' onClick={()=>{
                        handleRemoveItem();
                        notify();
                    }} />
                </div>
            </div>
        </div>
    );
}

export default Card2;
