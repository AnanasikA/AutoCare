import React from "react";
import 'tailwindcss/tailwind.css'; 
import Tool from '../assets/images/tool.png';
import TowTruck from '../assets/images/tow-truck.png';
import Wheels from '../assets/images/wheels.png';
import Phone from '../assets/images/contact.png';
import FallbackImage from '../assets/images/home-bg.jpg';
import Video from '../assets/images/home-bg.mp4' 

const services = [
    {
        icon: <img src={Wheels} alt="Wheels Icon" className="w-10 h-10 md:w-16 md:h-16" style={{ filter: 'invert(1)'}} />,
        description: "Wymiana opon szybko i sprawnie!"
    },
    {
        icon: <img src={TowTruck} alt="Tow Truck Icon" className="w-10 h-10 md:w-16 md:h-16" style={{ filter: 'invert(1)'}} />,
        description: "Usługi lawetowe 24/7 w każdej sytuacji!"
    },
    {
        icon: <img src={Tool} alt="Tool Icon" className="w-10 h-10 md:w-16 md:h-16" style={{ filter: 'invert(1)'}} />,
        description: "Oferujemy szybkie i skuteczne naprawy."
    },
    {
        icon: <img src={Phone} alt="Phone Icon" className="w-10 h-10 md:w-16 md:h-16" style={{ filter: 'invert(1)'}} />,
        description: "Skontaktuj się z nami już teraz!"
    },
];

const ServiceCard = ({ icon, description }) => (
    <div className="cursor-pointer flex items-center justify-center w-36 h-36 md:w-60 md:h-60 border-4 border-yellow-500 relative transform rotate-45 transition-transform hover:scale-105 md:hover:scale-110 mx-8 mb-16">
        <div className="flex flex-col items-center justify-center transform rotate-[-45deg] p-2 md:p-4 font-sans">
            {icon}
            <p className="text-center text-gray-100 text-xs md:text-lg mt-2">{description}</p>
        </div>
    </div>
);


function Home() {
    function handleCallClick() {
        window.location.href = 'tel:+123456789'; // Przekierowanie do połączenia telefonicznego
    }

    return (
        <section id="home" className="relative flex flex-col 2xl:flex-row items-center p-4 text-gray-100 min-h-screen overflow-hidden font-sans">
            {/* Background video or fallback image */}
            <div className="absolute inset-0 overflow-hidden z-10">
                <video className="w-full h-full object-cover" autoPlay muted loop playsInline poster={FallbackImage}>
                    <source src={Video} type="video/mp4" />
                    <img src={FallbackImage} alt="fallback" className="w-full h-full object-cover" />
                </video>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 z-20"></div>

            {/* Content */}
            <div className="relative z-30 flex flex-col items-start w-full p-4 space-y-6 lg:space-y-10 ml-0 md:ml-6 lg:ml-16">
                <h1 className="text-3xl md:text-3xl lg:text-5xl font-bold animate-fadeInUp mb-12 lg:mb-14">
                    Witamy w TireFix
                </h1>
                <p className="text-base md:text-lg lg:text-xl max-w-lg mb-12 lg:mb-10">
                    Nasza misja to zapewnienie najwyższej jakości usług motoryzacyjnych, od wymiany opon po naprawy awaryjne i holowanie. Jesteśmy dostępni 24/7, aby pomóc Ci w każdej sytuacji drogowej. Niezależnie od tego, czy potrzebujesz szybkiej naprawy, czy wsparcia technicznego, nasz zespół doświadczonych specjalistów jest gotowy sprostać każdemu wyzwaniu. Zaufaj Tire Titans i ciesz się bezpieczną jazdą!
                </p>
                <div className="mt-6 md:mt-10 lg:mt-14">
                    <button 
                        onClick={handleCallClick} 
                        className="flex items-center bg-yellow-500 text-gray-100 text-sm md:text-lg px-4 py-2 md:px-8 md:py-4 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 md:text-xl"
                    >
                    <span className="mr-2">Skontaktuj się z nami</span>
                    <img src={Phone} alt="Phone Icon" className="w-5 h-5 md:w-7 md:h-7" style={{ filter: 'invert(1)' }} />
                    </button>
                </div>
            </div>

            {/* Service Cards */}
            <div className="relative z-30 flex flex-wrap justify-center w-full p-4 mt-12 mb-8 md:mt-24 lg:mt-32 gap-8">
                {services.map((service, index) => <ServiceCard key={index} {...service} />)}
            </div>
        </section>
    );
}

export default Home;  









