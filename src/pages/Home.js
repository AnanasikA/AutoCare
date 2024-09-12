import React from "react";
import { FaTools, FaCarSide, FaUserTie, FaPhoneAlt } from "react-icons/fa";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

function Home() {
    const handleCallClick = () => {
        window.location.href = 'tel:+123456789'; // Zamień na numer telefonu
    };

    return (
        <section id="home" className="relative h-screen flex flex-col lg:flex-row items-center p-4 text-gray-100">
            {/* Tło wideo */}
            <div className="absolute inset-0 overflow-hidden z-10">
                <video className="w-full h-full object-cover" autoPlay muted loop>
                    <source src="https://videos.pexels.com/video-files/5200378/5200378-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="absolute inset-0 bg-black opacity-50 z-20"></div>

            {/* Treść */}
            <div className="relative z-30 flex flex-col items-start lg:w-1/2 p-4 space-y-6 lg:space-y-8 ml-6 lg:ml-16">
                <h1 className="text-5xl md:text-4xl font-bold animate-fadeInUp mb-8 lg:mb-12 hidden lg:block">Witamy w AutoCare Centrum</h1>
                <p className="text-xl md:text-lg max-w-lg mb-6 lg:mb-8 hidden lg:block">
                    Witamy w naszym warsztacie samochodowym, który z dumą i zaangażowaniem od wielu lat oferuje najwyższej jakości usługi dla naszych klientów. Nasza specjalizacja obejmuje szybkie i precyzyjne naprawy mechaniczne, profesjonalną wymianę opon oraz całodobową obsługę lawetową, zapewniając wsparcie każdego dnia tygodnia.
                </p>
                <p className="text-xl md:text-lg max-w-lg mb-8 lg:mb-12 hidden lg:block">
                    Stawiamy na indywidualne podejście do każdego klienta, dopasowując nasze usługi do specyficznych potrzeb i oczekiwań. Naszą misją jest nie tylko skuteczna naprawa samochodów, ale również zapewnienie pełnego komfortu i bezpieczeństwa na drodze. Nasze wartości – profesjonalizm, rzetelność i serdeczność – gwarantują, że mogą Państwo polegać na nas w każdej sytuacji.
                </p>
                <div className="mt-8 lg:mt-12 hidden lg:block">
                    <button onClick={handleCallClick} className="flex items-center bg-yellow-500 text-gray-100 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105">
                        <FaPhoneAlt className="text-2xl mr-2" />
                        Zadzwoń
                    </button>
                </div>
            </div>

            {/* Romby */}
            <div className="relative z-30 flex flex-col lg:w-1/2 p-4">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16 lg:mb-24">
                    <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <FaTools className="text-6xl text-yellow-500 mb-4" />
                            <p className="text-center text-gray-100 text-lg">Oferujemy szybkie i skuteczne naprawy, abyś mógł jak najszybciej wrócić na drogę</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <FaCarSide className="text-6xl text-yellow-500 mb-4" />
                            <p className="text-center text-gray-100 text-lg">Nasza laweta jest dostępna 24/7, aby pomóc Ci w każdej sytuacji.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <FaUserTie className="text-6xl text-yellow-500 mb-4" />
                            <p className="text-center text-gray-100 text-lg">Nasz doświadczony personel zapewnia najwyższą jakość usług.</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-60 h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-110">
                        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-4">
                            <FaPhoneAlt className="text-6xl text-yellow-500 mb-4" />
                            <p className="text-center text-gray-100 text-lg">Skontaktuj się z nami już teraz, aby uzyskać profesjonalną pomoc!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home; 














