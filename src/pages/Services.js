import React from "react";
import 'tailwindcss/tailwind.css';
import RepairIcon from '../assets/images/tool.png';
import TireIcon from '../assets/images/tire-icon.svg';
import TowTruckIcon from '../assets/images/tow-truck.png';
import BackgroundImage from '../assets/images/service-bg.avif'; // Obraz w tle

function Services() {
    return (
        <section id="services" className="relative bg-gradient-to-r from-[#2c3e50] to-[#f39c12] py-16 px-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
            {/* Obraz w tle */}
            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10" style={{ backgroundImage: `url(${BackgroundImage})` }}></div>
            
            <div className="container mx-auto text-center mb-12 relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4">Nasza oferta</h2>
                <p className="text-left text-gray-100 text-xl">
                    Specjalizujemy się w kompleksowej wymianie opon oraz całodobowych usługach lawetowych. Nasz zespół zapewnia szybką i bezpieczną wymianę opon, dopasowując odpowiednie modele do warunków drogowych oraz preferencji klienta. Dbamy o wyważenie kół, kontrolę ciśnienia i dobór opon najlepszych marek, co przekłada się na bezpieczeństwo i komfort jazdy. <br /> 
                    Nasze usługi lawetowe są dostępne 24/7, gotowe do szybkiej reakcji w każdej sytuacji. Niezależnie od tego, czy Twój pojazd uległ awarii, czy potrzebujesz pomocy po wypadku, zapewniamy profesjonalny transport do wybranego miejsca.
                </p>
            </div>


            <div className="flex flex-wrap justify-around gap-8 relative z-10">
                {/* Pierwszy kafelek */}
                <div className="bg-white text-[#2c3e50] p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-lg relative transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#f39c12] rounded-t-lg"></div>
                    <div className="flex flex-col items-center">
                        <img src={RepairIcon} alt="Szybkie Naprawy" style={{ filter: 'invert(54%) sepia(93%) saturate(543%) hue-rotate(1deg) brightness(96%) contrast(95%)' }} className="w-20 h-20 mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Szybkie Naprawy</h3>
                        <p className="text-base text-xl leading-relaxed">
                            Nasz warsztat specjalizuje się w ekspresowych naprawach samochodowych, które pozwalają na minimalizację przestojów pojazdu.
                        </p>
                    </div>
                </div>

                {/* Drugi kafelek */}
                <div className="bg-white text-[#2c3e50] p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-lg relative transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#f39c12] rounded-t-lg"></div>
                    <div className="flex flex-col items-center">
                        <img src={TireIcon} alt="Wymiana Opon" style={{ filter: 'invert(54%) sepia(93%) saturate(543%) hue-rotate(1deg) brightness(96%) contrast(95%)' }} className="w-20 h-20 mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Wymiana Opon</h3>
                        <p className="text-base text-xl leading-relaxed">
                            Oferujemy kompleksową i profesjonalną wymianę opon, dostosowaną do indywidualnych potrzeb Twojego pojazdu. Dzięki współpracy z czołowymi producentami opon, zapewniamy najwyższą jakość produktów.
                        </p>
                    </div>
                </div>

                {/* Trzeci kafelek */}
                <div className="bg-white text-[#2c3e50] p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-lg relative transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#f39c12] rounded-t-lg"></div>
                    <div className="flex flex-col items-center">
                        <img src={TowTruckIcon} alt="Laweta 24/7" style={{ filter: 'invert(54%) sepia(93%) saturate(543%) hue-rotate(1deg) brightness(96%) contrast(95%)' }} className="w-20 h-20 mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Laweta 24/7</h3>
                        <p className="text-base text-xl leading-relaxed">
                            Nasza oferta obejmuje całodobową pomoc drogową i usługi lawetowe, które są dostępne 7 dni w tygodniu. Nasza flota lawet jest gotowa do działania o każdej porze.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;

