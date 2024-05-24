import React from 'react';

function Footer() {
    return (
        <footer className="mt-10 bg-white border-t">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-gray-700">© 2024 Airbnb, Inc.</span>
                    <span className="mx-2">·</span>
                    <ul className="flex">
                        <li><a href="#" className="text-gray-700">Privacy</a></li>
                        <li><a href="#" className="text-gray-700 ml-2">Terms</a></li>
                        <li><a href="#" className="text-gray-700 ml-2">Sitemap</a></li>
                    </ul>
                </div>
                <div className="flex items-center flex-grow justify-end">
                    <span className="text-gray-700 mr-4">English (CA)</span>
                    <button className="flex items-center">
                        <span className="text-gray-700">$</span>
                        <span className="mr-6 text-gray-700 ml-1">CAD</span>
                    </button>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-700 mr-2">Support & resources</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
