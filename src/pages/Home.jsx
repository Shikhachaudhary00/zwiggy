import React, { useContext, useState } from 'react';
import Nav from '../component/Nav';
import Categories from '../../Category';
import Card from '../component/card';
import { food_items } from '../food';
import { dataContext } from '../context/UserContext';
import { ImCross } from "react-icons/im";
import Card2 from '../component/Card2';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CiBag1 } from "react-icons/ci";

function Home() {
    let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

    function filter(category) {
        console.log("Category clicked: ", category);  // Log clicked category
        if (category === "All") {
            setCate(food_items);
        } else {
            const filteredItems = food_items.filter(item => {
                // Normalize both categories to lowercase for case-insensitive comparison
                const itemCategory = item.food_category.toLowerCase();
                const clickedCategory = category.toLowerCase();
                console.log(`Comparing food_item category: ${itemCategory} with clicked category: ${clickedCategory}`); // Log comparison
                return itemCategory === clickedCategory;
            });
            console.log("Filtered items: ", filteredItems); // Check filtered items
            setCate(filteredItems);
        }
    }

    // Show popup on place order
    const pop = () => {
        toast.success("Item Placed", {
            autoClose: 1000, // Auto-close the toast after 1 second
        });
    };

    let items = useSelector(state => state.cart);
    let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0);
    let deliveryFree = 20;
    let taxes = subtotal * 0.5 / 100;
    let total = Math.floor(subtotal + deliveryFree + taxes);

    return (
    <div className="bg-orange-500 w-full min-h-screen">
    <Nav />
    {!input ? (
                <div className="flex flex-wrap justify-center items-center gap-6 w-[80%] m-19">
            {Categories.map((item) => {
                return (
                    <div
                        key={item.name} // Key for each category
                        className="w-[140px] h-[150px] bg-white flex flex-col px-5 justify-start items-center gap-5 text-[20px] font-semibold text-orange-600 rounded-md shadow-xl hover:bg-orange-100 cursor-pointer transition-all duration-200"
                        onClick={() => filter(item.name)}
                    >
                        {item.image}
                        {item.name}
                    </div>
                );
            })}
        </div>
    ) : null}

            <div className="w-full flex flex-wrap gap-5 px-5 p-20 justify-center items-center pt-18">
                {cate.map((item) => (
                    <Card
                        key={item.id} // Key for each card
                        name={item.food_name}
                        image={item.food_image}
                        price={item.price}
                        id={item.id}
                        type={item.food_type}
                    />
                ))}
            </div>

            <div className={` w-full h-full md:w-[45vw] h-[300vh] fixed top-0 right-0 bg-orange-500 shadow-xl p-5  transition-all overflow-auto  duration-500
    ${showCart ? "translate-x-0" : "translate-full"}`}>
                <header className='w-[100%] flex justify-between items-center text-white p-1'>
                    <span className='text-white font-bold text-2xl'>
                        Order Items
                    </span>
                    <span className=' w[20px] h[20px] text-white text-semibold text-2xl cursor-pointer hover:text-slate-200'
                        onClick={() => setShowCart(false)}>
                        <ImCross />
                    </span>
                </header>

                {items.length > 0 ? (
                    <>
                        <div className='w-full mt-3 flex flex-col gap-5 items-center'>
                            {items.map((item) => (
                                <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                            ))}
                        </div>
                        <div className='w-full border-t-2 border-white mt-2 flex flex-col gap-4 p-2'>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-lg text-white font-semibold'>Subtotal</span>
                                <span className='text-lg text-white'>Rs {subtotal}/-</span>
                            </div>
                        </div>

                        <div className='w-full mt-1 flex flex-col gap-4 p-1 rounded-md'>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-lg text-white font-semibold'>Delivery Fee</span>
                                <span className='text-lg text-white'>Rs {deliveryFree}/-</span>
                            </div>
                        </div>

                        <div className='w-full mt-1 flex flex-col gap-4 p-1 rounded-md'>
                            <div className='w-full flex justify-between items-center'>
                                <span className='text-lg text-white font-semibold'>Taxes</span>
                                <span className='text-lg text-white'>Rs {taxes}/-</span>
                            </div>
                        </div>
                        <div className='w-full border-t-2 border-white mt-2 flex flex-col gap-4 p-2 '></div>
                        <div className='w-full flex justify-between items-center'>
                            <span className='text-2xl text-white font-semibold'>Total</span>
                            <span className='text-2xl text-white'>Rs {total}/-</span>
                        </div>
                        <button className='cursor-pointer w-[80%]  ml-11 items-center justify-center p-2 mt-2 bg-white text-orange-500 font-semibold rounded-md hover:bg-green-600 hover:text-white transition-all duration 200 shadow-lg'
                            onClick={() => {
                                pop(); // Show success popup when placed
                            }}>
                            Place Order
                        </button>
                    </>
                ) : (
                    <div className='text-center text-white text-xl mt-6 pt-6 font-semibold '>Empty Cart</div>
                )}
            </div>
        </div>
    );
}

export default Home;
