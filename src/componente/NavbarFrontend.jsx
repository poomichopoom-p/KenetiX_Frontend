import React from 'react';
import ActionButton from './ActionButton';

export default function Navbar({ setPage, currentPage }) {
    return (
        <nav className="flex justify-between items-center p-5 bg-black text-white border-b border-gray-800 sticky top-0 z-50">
            <div className="text-s font-slim">Generation Thailand</div>

            <div className="flex gap-8 grow justify-center">
                git merge upstream/main
                <button
                    onClick={() => setPage('allProduct')}
                    className={`text-sm transition-colors ${currentPage === 'allProduct' ? 'text-[#b4ff39] font-bold' : 'text-gray-400 hover:text-white'}`}
                >
                    All Products
                </button>

                <button
                    onClick={() => setPage('allBrand')}
                    className={`text-sm transition-colors ${currentPage === 'allBrand' ? 'text-[#b4ff39] font-bold' : 'text-gray-400 hover:text-white'}`}
                >
                    All Brands
                </button>


                <button
                    onClick={() => setPage('howWork')}
                    className={`text-sm transition-colors ${currentPage === 'howWork' ? 'text-[#b4ff39] font-bold' : 'text-gray-400 hover:text-white'}`}
                >
                    How It Works
                </button>

                <button
                    onClick={() => setPage('contact')}
                    className={`text-sm transition-colors ${currentPage === 'contact' ? 'text-[#b4ff39] font-bold' : 'text-gray-400 hover:text-white'}`}
                >
                    Contact Us
                </button>

                <div>
                    <ActionButton text="Let's Start" onClick={() => setPage('login')} />
                </div>
            </div>
        </nav>
    );
}