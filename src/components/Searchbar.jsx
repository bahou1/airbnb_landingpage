import React from 'react';

const Searchbar = () => {
    return (
        <div className="text-sm flex justify-center rounded-lg pt-0.25 pb-5 border-b-2 border-stone-200">
            <div className="flex items-center bg-white border border-stone-300 p-1.5 px-4 rounded-full border-black shadow-xl px-2">
                <button className="mr-20 flex flex-col items-start pl-8 pl-4 pb-1.5 pt-1.5 pl-5 hover:bg-stone-200 hover:rounded-full">
                    <span>where</span>
                    <span className="text-gray-400">Search destinations</span>
                </button>
                <button className="pr-9 pl-9 flex flex-col items-start bg-transparent border-l  border-gray-300 pl-4 pb-1.5 pt-1.5 hover:bg-stone-200 hover:rounded-full">
                    <span>Check in</span>
                    <span className="text-gray-400">Add dates</span>
                </button>
                <button className="pr-9 pl-9 mr-4 flex flex-col items-start bg-transparent border-l border-gray-300 pl-4 pb-1.5 pt-1.5 hover:bg-stone-200 hover:rounded-full">
                    <span>Check out</span>
                    <span className="text-gray-400">Add dates</span>
                </button>
                <button className="pr-20 pl-4 border-l  border-gray-300 flex flex-col items-start bg-transparent pl-4 pb-1.5 pt-1.5 hover:bg-stone-200 hover:rounded-full">
                    <span>who</span>
                    <span className="text-gray-400">Add guests</span>
                </button>
                <button>
                    <div className="search-icon bg-rose-500 p-3 ml-7 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Searchbar;
