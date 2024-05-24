import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className=" container mx-auto pt-3.5">
            <div className="flex justify-between items-center px-4 py-2 text-xs-13  5 text-grey">
                <div className="">
                    <img src={logo} className='' width="102" height="32" alt="Logo" />
                </div>

                <div className="right-90">
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-black ml-2'>Stays</button>
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-neutral-400 ml-2'>Experiences</button>
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-neutral-400 ml-2'>Online Experiences</button>
                </div>

                <div className="flex items-center">
                    <button class='text-2xs px-4 py-2 rounded-2xl hover:bg-zinc-200 text-sm hover:shadow-xl transition duration-300'>Airbnb you Home</button>
                    <div className="langue" class='mr-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hover:shadow-xl transition duration-300 mr-4 rounded-2xl hover:bg-zinc-200 px-3 py-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </div>
                    <button class="flex items-center px-3.5 py-3 border border-zinc-300 rounded-3xl ease-in-out hover:shadow-xl transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-1 w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>



                </div>

            </div >

        </div >
    );
};

export default Navbar;
