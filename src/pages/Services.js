import React from "react";
import { FaTools, FaCarSide } from "react-icons/fa";
import { GiTowTruck } from 'react-icons/gi';
import '../assets/styles/Services.css'

function Services() {
    return (
        <section id="services">
            <div className="services">
                    <div className="service-item">
                        <FaTools className="service-icon" />
                        <h2>Szybkie Naprawy</h2>
                        <p>
                            Nasz warsztat specjalizuje się w ekspresowych naprawach samochodowych, które pozwalają na minimalizację przestojów pojazdu. Nasz zespół wykwalifikowanych mechaników z wieloletnim doświadczeniem, jest gotowy, aby skutecznie rozwiązać każdy problem techniczny.
                        </p>
                    </div>
                    <div className="service-item">
                        <FaCarSide className="service-icon" />
                        <h2>Wymiana Opon</h2>
                        <p>
                            Oferujemy kompleksową i profesjonalną wymianę opon, dostosowaną do indywidualnych potrzeb Twojego pojazdu. Dzięki współpracy z czołowymi producentami opon, zapewniamy najwyższą jakość produktów.
                        </p>
                    </div>
                    <div className="service-item">
                        <GiTowTruck className="service-icon" />
                        <h2>Laweta 24/7</h2>
                        <p>
                            Nasza oferta obejmuje całodobową pomoc drogową i usługi lawetowe, które są dostępne 7 dni w tygodniu. Nasza flota lawet jest gotowa do działania o każdej porze.
                        </p>
                    </div>
                </div>        
        </section>
    );
}

export default Services;
