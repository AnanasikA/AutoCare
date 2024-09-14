import React from 'react';
import MapboxMap from './MapboxMap'; // Importuj komponent mapy
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

function Footer() {
    return (
        <footer className="bg-[#2c3e50] text-[#ecf0f1] py-5 w-full text-sm relative animate-fadeInFooter">
            <div className="flex flex-wrap justify-between gap-8 px-4 max-w-screen-xl mx-auto">
                {/* Mapa */}
                <div className="flex-1 min-w-[300px] box-border">
                    <div className="text-center mb-5">
                        <h4 className="text-2xl font-bold text-[#f39c12] mb-4 uppercase tracking-wider animate-fadeInHeader">Jak Dojechać?</h4>
                        <MapboxMap /> {/* Dodaj komponent mapy */}
                    </div>
                </div>
                
                {/* Informacje kontaktowe */}
                <div className="flex-1 min-w-[300px] box-border">
                    <div className="flex flex-col gap-6">
                        {/* Sekcja Informacje Kontaktowe */}
                        <div className="text-left mb-6">
                            <h4 className="text-2xl font-bold text-[#f39c12] mb-2 uppercase tracking-wider animate-fadeInHeader">Informacje Kontaktowe</h4>
                            <div className="flex items-center mt-2">
                                <FaMapMarkerAlt className="text-[#f39c12] text-xl mr-3" />
                                <p className="text-lg">Adres: Ulica Przykładowa 123, Miasto</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <FaPhoneAlt className="text-[#f39c12] text-xl mr-3" />
                                <p className="text-lg">Telefon: +48 123 456 789</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <FaEnvelope className="text-[#f39c12] text-xl mr-3" />
                                <p className="text-lg">Email: kontakt@example.com</p>
                            </div>
                        </div>

                        {/* Sekcja Naprawy Samochodowe */}
                        <div className="text-left hidden lg:block">
                            <h4 className="text-2xl font-bold text-[#f39c12] mb-2 uppercase tracking-wider animate-fadeInHeader">Naprawy Samochodowe</h4>
                            <p className="text-lg mt-2">Oferujemy szybkie i profesjonalne naprawy wszelkich usterek mechanicznych i elektrycznych. Nasz doświadczony zespół pracuje 24/7.</p>
                        </div>

                        {/* Godziny otwarcia */}
                        <div className="text-left hidden lg:block">
                            <h4 className="text-2xl font-bold text-[#f39c12] mb-2 uppercase tracking-wider animate-fadeInHeader">Godziny Otwarcia</h4>
                            <p className="text-lg mt-2">Czynne 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 text-center text-base">
                <p>&copy; 2024 My Complex Website. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
