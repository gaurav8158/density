import React, { useState } from 'react'
import logo from "../../assets/logo.png"
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className= " text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-lg font-semibold"><img src={logo} /></a>

                {/* Responsive Navbar */}
                <nav className="md:flex items-center space-x-4">
                    <div className='md:flex space-x-4 items-center max-md:hidden'>
                        <a href="#" className="hover:underline">Career</a>
                        <a href="#" className="hover:underline">Blog</a>
                        <a href="#" className="hover:underline">Leaderboard</a>
                        <a href="#" className="hover:underline">Fees</a>

                        <button class="bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 hover:from-green-500 hover:via-lime-500 hover:to-yellow-500 bg-opacity-80 hover:bg-opacity-100 text-white font-semibold py-2 px-4 rounded">
                            Click me
                        </button>
                    </div>

                    {/* Responsive Dropdown Menu */}
                    <div className="md:hidden relative">
                        <button onClick={toggleNavbar} className="text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="absolute top-0 right-0 mt-12 bg-transparent p-2 space-y-2 flex flex-col ">
                                <a href="#" className="hover:bg-gray-400 px-4 py-2 rounded-sm">Career</a>
                                <a href="#" className="hover:bg-gray-400 px-4 py-2 rounded-sm">Blog</a>
                                <a href="#" className="hover:bg-gray-400 px-4 py-2 rounded-sm">Leaderboard</a>
                                <a href="#" className="hover:bg-gray-400 px-4 py-2 rounded-sm">Fees</a>

                                <button class="bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 hover:from-green-500 hover:via-lime-500 hover:to-yellow-500 bg-opacity-80 hover:bg-opacity-100 text-white font-semibold py-2 px-4 rounded">
                                    Click me
                                </button>
                            </div>
                        )}
                    </div>
                    {/* End Responsive Dropdown Menu */}


                </nav>

                {/* Mobile Menu Button */}

            </div>
        </header>
    )
}

export default Nav