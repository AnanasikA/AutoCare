import React from "react";
import { FaTools, FaCarSide } from "react-icons/fa";
import { GiTowTruck } from 'react-icons/gi';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

function Services() {
    return (
        <section id="services" className="bg-[#ecf0f1] py-16 px-4">
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-4xl font-bold text-[#2c3e50] mb-4">Nasza oferta</h2>
                <p className="text-lg text-gray-700">
                    Oferujemy szeroki zakres usług samochodowych, które są dostosowane do indywidualnych potrzeb naszych klientów. Nasz zespół specjalistów zapewnia najwyższą jakość i profesjonalizm w każdym aspekcie naszej pracy.
                </p>
            </div>
            <div className="flex flex-wrap justify-around gap-8">
                <div className="bg-[#2c3e50] text-[#ecf0f1] p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-lg relative transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#f39c12] rounded-t-lg"></div>
                    <div className="flex flex-col items-center">
                        <FaTools className="text-[#f39c12] text-6xl mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Szybkie Naprawy</h3>
                        <p className="text-base leading-relaxed">
                            Nasz warsztat specjalizuje się w ekspresowych naprawach samochodowych, które pozwalają na minimalizację przestojów pojazdu. Nasz zespół wykwalifikowanych mechaników z wieloletnim doświadczeniem, jest gotowy, aby skutecznie rozwiązać każdy problem techniczny.
                        </p>
                    </div>
                </div>
                <div className="bg-[#2c3e50] text-[#ecf0f1] p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-lg relative transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#f39c12] rounded-t-lg"></div>
                    <div className="flex flex-col items-center">
                        <FaCarSide className="text-[#f39c12] text-6xl mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Wymiana Opon</h3>
                        <p className="text-base leading-relaxed">
                            Oferujemy kompleksową i profesjonalną wymianę opon, dostosowaną do indywidualnych potrzeb Twojego pojazdu. Dzięki współpracy z czołowymi producentami opon, zapewniamy najwyższą jakość produktów.
                        </p>
                    </div>
                </div>
                <div className="bg-[#2c3e50] text-[#ecf0f1] p-8 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-lg relative transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#f39c12] rounded-t-lg"></div>
                    <div className="flex flex-col items-center">
                        <GiTowTruck className="text-[#f39c12] text-6xl mb-4" />
                        <h3 className="text-2xl font-semibold mb-4">Laweta 24/7</h3>
                        <p className="text-base leading-relaxed">
                            Nasza oferta obejmuje całodobową pomoc drogową i usługi lawetowe, które są dostępne 7 dni w tygodniu. Nasza flota lawet jest gotowa do działania o każdej porze.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;

