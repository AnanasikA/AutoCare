import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Logo from "../assets/images/logo.png";
import Logo1 from "../assets/images/logo(1).png";
import { FaBars, FaTimes } from 'react-icons/fa'; // Ikony hamburgera i zamknięcia

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-800 text-white py-4 px-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo i tekst Tire Titans w jednej linii */}
                <div className="flex items-center space-x-3">
                <img 
                    src={Logo} 
                    alt="logo" 
                    className="w-5 h-5 md:w-10 md:h-10" 
                    style={{ filter: 'invert(1)' }} 
                />
                <a 
                    href="/" 
                    className="text-2xl md:text-3xl font-bold text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                TireFix
                </a>
                <img 
                    src={Logo1} 
                    alt="logo1" 
                    className="w-5 h-5 md:w-10 md:h-10" 
                    style={{ filter: 'invert(1)' }} 
                />
            </div>

                {/* Nawigacja dla większych ekranów */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="nav-link text-xl md:text-xl hover:text-yellow-500 transition-colors">
                        Home
                    </a>
                    <a href="#services" className="nav-link text-xl md:text-xl hover:text-yellow-500 transition-colors">
                        Usługi
                    </a>
                    <a href="#about" className="nav-link text-xl md:text-xl hover:text-yellow-500 transition-colors">
                        O nas
                    </a>
                    <a href="#contact" className="nav-link text-xl md:text-xl hover:text-yellow-500 transition-colors">
                        Kontakt
                    </a>
                </nav>

                {/* Przycisk hamburgera dla mniejszych ekranów */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-yellow-500 focus:outline-none">
                        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                    </button>
                </div>
            </div>

            {/* Rozwijane menu dla mniejszych ekranów */}
            {isOpen && (
                <nav className="md:hidden bg-gray-800 py-4">
                    <ul className="space-y-4 text-center">
                        <li>
                            <a href="#home" onClick={toggleMenu} className="block text-xl text-yellow-500 hover:text-yellow-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#services" onClick={toggleMenu} className="block text-xl text-yellow-500 hover:text-yellow-400">
                                Usługi
                            </a>
                        </li>
                        <li>
                            <a href="#about" onClick={toggleMenu} className="block text-xl text-yellow-500 hover:text-yellow-400">
                                O nas
                            </a>
                        </li>
                        <li>
                            <a href="#contact" onClick={toggleMenu} className="block text-xl text-yellow-500 hover:text-yellow-400">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}

export default Header;
