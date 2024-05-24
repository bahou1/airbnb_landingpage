import React from 'react';
import Image from '../assets/house.jpg';

const HouseListing = () => {
    return (
        <div className="container mx-auto pt-10 pb-10">
            <div className="w-72 h-72 Card-container rounded-lg">
                <div className="img-container" style={{ width: '100%', height: '100%' }}>
                    {/* Adjust the width and height to make the image bigger and square */}
                    <img className="rounded-lg w-full h-full object-cover" src={Image} alt="House" />
                </div>
                <div className="mt-2">
                    <h2 className="text-sm font-semibold">Listing Example</h2>
                    <h2 className="text-xs text-gray-400 font-light">700km away</h2>
                    <h2 className="text-xs text-gray-400 font-light">may 4-11</h2>
                    <h2 className="text-sm text-gray-900 font-semibold">MAD3,323 night</h2>
                </div>
            </div>
        </div>
    );
}

export default HouseListing;
