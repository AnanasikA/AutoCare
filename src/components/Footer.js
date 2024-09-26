import React from 'react';
import MapboxMap from './MapboxMap'; 
import MapMarker from '../assets/images/map-marker.png';
import Email from '../assets/images/email.png';
import Phone from '../assets/images/smartphone.png';
import 'tailwindcss/tailwind.css';

function Footer() {
    return (
        <footer className="relative bg-gradient-to-r from-custom-gray-1 to-custom-gray-2 text-[#ecf0f1] py-8 w-full text-sm">
            <div className="flex flex-wrap justify-between gap-8 px-4 max-w-screen-xl mx-auto">
                {/* Mapa */}
                <div className="flex-1 min-w-[300px] box-border">
                    <div className="text-center mb-5">
                        <h4 className="text-2xl font-bold text-yellow-500 mb-4 uppercase tracking-wider animate-fadeInHeader">Jak Dojechać?</h4>
                        <MapboxMap /> 
                    </div>
                </div>
                
                {/* Informacje kontaktowe */}
                <div className="flex-1 min-w-[300px] box-border">
                    <div className="flex flex-col gap-6">
                        <div className="text-left mb-6">
                            <h4 className="text-2xl font-bold text-yellow-500 mb-2 uppercase tracking-wider animate-fadeInHeader">Informacje Kontaktowe</h4>
                            <div className="flex items-center mt-2">
                                <img src={MapMarker} alt="Map marker" className="w-5 h-5 md:w-8 md:h-8 mr-3" />
                                <p className="text-lg">Adres: Ulica Przykładowa 123, Miasto</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <img src={Phone} alt="Phone" className="w-5 h-5 md:w-8 md:h-8 mr-3" />
                                <p className="text-lg">Telefon: +48 123 456 789</p>
                            </div>
                            <div className="flex items-center mt-2">
                                <img src={Email} alt="Email" className="w-5 h-5 md:w-8 md:h-8 mr-3" />
                                <p className="text-lg">Email: kontakt@example.com</p>
                            </div>
                        </div>

                        {/* Informacje o naprawach */}
                        <div className="text-left hidden lg:block">
                            <h4 className="text-2xl font-bold text-yellow-500 mb-2 uppercase tracking-wider animate-fadeInHeader">Laweta 24/7 i Szybka Wymiana Opon</h4>
                            <p className="text-lg mt-2">
                                Nasza firma oferuje całodobowe usługi lawetowe, zapewniając szybki i bezpieczny transport Twojego pojazdu w każdej sytuacji awaryjnej. 
                                Dodatkowo specjalizujemy się w wymianie opon, gwarantując profesjonalną obsługę, która pozwala Ci szybko wrócić na drogę. 
                                Niezależnie od pory dnia, nasz zespół jest gotowy, aby pomóc.
                            </p>
                        </div>

                        
                    </div>
                </div>
            </div>
            
            {/* Stopka prawa autorskie */}
            <div className="mt-5 text-center text-base border-t border-gray-700 pt-5">
                <p>&copy; 2024 Anastasiia Kupriianets. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;


