import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import '../assets/styles/Header.css'; // Import custom CSS for animations
import { FaMapMarkerAlt } from 'react-icons/fa';

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <header className="fixed w-full z-50 bg-[#2c3e50]/80 py-4 flex items-center px-6">
            {/* Only show the button when menu is closed */}
            {!isMenuOpen && (
                <button 
                    className="text-xl text-white md:hidden mr-4" 
                    onClick={toggleMenu}
                >
                    ☰
                </button>
            )}

            <div 
                className={`text-2xl font-bold text-white flex-grow md:flex-grow-0 ${isMenuOpen ? 'text-right' : 'text-center'} md:text-left`}
            >
                AutoCare Centrum
            </div>

            {/* Menu for larger screens */}
            <nav className="hidden md:flex md:justify-end flex-grow">
                <ul className="flex space-x-6 text-lg text-white">
                    <li><a href="#home" className="underline-animation hover:text-[#f39c12]">Home</a></li>
                    <li><a href="#about" className="underline-animation hover:text-[#f39c12]">O nas</a></li>
                    <li><a href="#services" className="underline-animation hover:text-[#f39c12]">Nasza oferta</a></li>
                    <li><a href="#contact" className="underline-animation hover:text-[#f39c12]">Kontakt</a></li>
                </ul>
            </nav>

            {/* Menu for smaller screens */}
            <nav 
                className={`fixed top-0 left-0 h-full w-64 bg-[#2c3e50]/80 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-40 flex flex-col`}
            >
                <div className="flex justify-end p-4">
                    <button className="text-xl text-white" onClick={toggleMenu}>×</button>
                </div>
                <ul className="flex flex-col items-center space-y-6 text-lg text-white py-4 flex-grow">
                    <li><a href="#home" className="underline-animation hover:text-[#f39c12]">Home</a></li>
                    <li><a href="#about" className="underline-animation hover:text-[#f39c12]">O nas</a></li>
                    <li><a href="#services" className="underline-animation hover:text-[#f39c12]">Nasza oferta</a></li>
                    <li><a href="#contact" className="underline-animation hover:text-[#f39c12]">Kontakt</a></li>
                </ul>
                {/* Find Us Icon */}
                <div className="flex justify-center items-center space-x-4 p-4 mt-auto">
                    <a href="#contact" className="flex items-center text-white hover:text-[#f39c12]">
                        <FaMapMarkerAlt size={24} />
                        <span className="ml-2">Znajdź Nas</span>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;



