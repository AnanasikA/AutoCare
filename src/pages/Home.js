import React from "react";
import { FaPhone, FaTools, FaUserCog } from 'react-icons/fa';
import { GiTowTruck } from 'react-icons/gi';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

function Home() {
    const handleCallClick = () => {
        window.location.href = 'tel:+123456789'; // Zamień na numer telefonu
    };

    return (
        <section id="home" className="relative flex flex-col 2xl:flex-row items-center p-4 text-gray-100 min-h-screen overflow-hidden">
            {/* Tło wideo */}
            <div className="absolute inset-0 overflow-hidden z-10">
                <video className="w-full h-full object-cover" autoPlay muted loop style={{ minHeight: '100vh', maxHeight: '100%'}}>
                    <source src="https://videos.pexels.com/video-files/5200378/5200378-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

            {/* Treść */}
            <div className="relative z-30 flex flex-col items-start 2xl:w-1/2 p-4 space-y-6 2xl:space-y-8 ml-6 2xl:ml-16">
                <h1 className="text-5xl md:text-4xl font-bold animate-fadeInUp mb-8 2xl:mb-12 hidden xl:block lg:mt-12 xl:mt-16 2xl:mt-24">
                    Witamy w AutoCare Centrum
                </h1>
                <p className="text-xl md:text-lg max-w-lg mb-6 xl:mb-8 hidden xl:block">
                    Witamy w naszym warsztacie samochodowym, który z dumą i zaangażowaniem od wielu lat oferuje najwyższej jakości usługi dla naszych klientów. Nasza specjalizacja obejmuje szybkie i precyzyjne naprawy mechaniczne, profesjonalną wymianę opon oraz całodobową obsługę lawetową, zapewniając wsparcie każdego dnia tygodnia.
                </p>
                <p className="text-xl md:text-lg max-w-lg mb-8 xl:mb-12 hidden xl:block">
                    Stawiamy na indywidualne podejście do każdego klienta, dopasowując nasze usługi do specyficznych potrzeb i oczekiwań. Naszą misją jest nie tylko skuteczna naprawa samochodów, ale również zapewnienie pełnego komfortu i bezpieczeństwa na drodze. Nasze wartości – profesjonalizm, rzetelność i serdeczność – gwarantują, że mogą Państwo polegać na nas w każdej sytuacji.
                </p>
                <div className="mt-8 xl:mt-12 hidden xl:block">
                    <button 
                        onClick={handleCallClick} 
                        className="flex items-center bg-yellow-500 text-gray-100 text-lg px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 xl:text-xl xl:px-6 xl:py-3"
                    >
                        <span className="mr-2 xl:text-xl">Zadzwoń</span>
                        <FaPhone className="text-lg xl:text-xl" />
                    </button>
                </div>
            </div>

            {/* Romby */}
            <div className="relative z-30 flex flex-col 2xl:w-1/2 p-4 mt-16 md:mt-24 xl:mt-32 2xl:mt-40">
                {/* Romby dla większych ekranów */}
                <div className="hidden 2xl:flex flex-wrap gap-16 2xl:gap-24 mb-16 2xl:mb-24">
                    <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <FaTools className="text-6xl text-yellow-500 mb-4" />
                            <p className="text-center text-gray-100 text-lg">Oferujemy szybkie i skuteczne naprawy, abyś mógł jak najszybciej wrócić na drogę</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <GiTowTruck className="text-6xl text-yellow-500 mb-4" />
                            <p className="text-center text-gray-100 text-lg">Nasza laweta jest dostępna 24/7, aby pomóc Ci w każdej sytuacji.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <FaUserCog className="text-6xl text-yellow-500 mb-4" />
                            <p className="text-center text-gray-100 text-lg">Nasz doświadczony personel zapewnia najwyższą jakość <br /> usług.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <FaPhone className="text-6xl text-yellow-500 mb-4" />
                            <p className="text-center text-gray-100 text-lg">Skontaktuj się z nami już teraz, aby uzyskać profesjonalną <br /> pomoc!</p>
                        </div>
                    </div>
                </div>

                {/* Romby dla średnich ekranów (1450px - 880px) */}
                <div className="hidden 2xl:hidden md:flex flex-col gap-16 mb-16">
                    <div className="flex flex-row justify-between gap-16">
                        <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                            <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                                <FaTools className="text-6xl text-yellow-500 mb-4" />
                                <p className="text-center text-gray-100 text-lg">Oferujemy szybkie i skuteczne naprawy, abyś mógł jak najszybciej wrócić na drogę</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                            <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                                <GiTowTruck className="text-6xl text-yellow-500 mb-4" />
                                <p className="text-center text-gray-100 text-lg">Nasza laweta jest dostępna 24/7, aby pomóc Ci w każdej sytuacji.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between gap-16">
                        <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                            <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                                <FaUserCog className="text-6xl text-yellow-500 mb-4" />
                                <p className="text-center text-gray-100 text-lg">Nasz doświadczony personel zapewnia najwyższą jakość <br /> usług.</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                            <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                                <FaPhone className="text-6xl text-yellow-500 mb-4" />
                                <p className="text-center text-gray-100 text-lg">Skontaktuj się z nami już teraz, aby uzyskać profesjonalną <br /> pomoc!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Romby dla mniejszych ekranów */}
                <div className="flex flex-col md:hidden gap-6 mb-8">
                    <div className="flex items-center justify-center w-56 h-56 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <FaTools className="text-5xl text-yellow-500 mb-2" />
                            <p className="text-center text-gray-100 text-sm">Szybkie naprawy samochodów</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-56 h-56 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <GiTowTruck className="text-5xl text-yellow-500 mb-2" />
                            <p className="text-center text-gray-100 text-sm">Całodobowa obsługa lawetowa</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-56 h-56 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <FaUserCog className="text-5xl text-yellow-500 mb-2" />
                            <p className="text-center text-gray-100 text-sm">Profesjonalna obsługa</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-56 h-56 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <FaPhone className="text-5xl text-yellow-500 mb-2" />
                            <p className="text-center text-gray-100 text-sm">Skontaktuj się z nami!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;


















