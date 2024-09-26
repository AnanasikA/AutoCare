import React from "react";
import 'tailwindcss/tailwind.css';
import BackgroundImage from '../assets/images/car-bg.jpg'; // Dodaj obraz w tle

function About() {
    return (
        <section id="about" className="relative bg-gradient-to-r from-[#f39c12] to-[#2c3e50] py-16 px-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
            {/* Obrazek w tle */}
            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10" style={{ backgroundImage: `url(${BackgroundImage})` }}></div>

            <div className="container mx-auto text-center mb-12 relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4">O nas</h2>
                <p className="text-left text-gray-100 text-xl">
                    Witaj w <strong>TireFix</strong> – Twoim zaufanym partnerze w zakresie wymiany opon i usług lawetowych. Specjalizujemy się w szybkiej i profesjonalnej wymianie opon, zapewniając bezpieczeństwo i komfort jazdy przez cały rok. <br />
                    Dodatkowo, świadczymy całodobowe usługi lawetowe, dostępne 24 godziny na dobę, 7 dni w tygodniu. Niezależnie od tego, gdzie i kiedy potrzebujesz pomocy, nasza laweta jest gotowa, aby bezpiecznie przetransportować Twój pojazd do wybranego miejsca.
                </p>
            </div>


            <div className="bg-white text-[#2c3e50] p-8 w-full md:w-2/3 lg:w-1/2 mx-auto rounded-lg shadow-lg relative z-10">
            <h3 className="text-2xl font-semibold mb-4">Nasza misja</h3>
                <p className="text-lg leading-relaxed mb-4">
                    Specjalizujemy się w szybkiej i profesjonalnej wymianie opon, co jest kluczowe dla bezpieczeństwa Twojej jazdy, zwłaszcza w sezonie zimowym i letnim. Nasz zespół zapewnia nie tylko wymianę, ale również kontrolę stanu opon, w tym wyważenie kół i sprawdzenie ciśnienia, co zwiększa komfort jazdy oraz przedłuża żywotność opon. Oferujemy szeroki wybór opon renomowanych marek, dostosowanych do różnych potrzeb i warunków drogowych.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Dodatkowo, oferujemy całodobowe usługi lawetowe 24/7. Bez względu na to, czy Twój pojazd uległ awarii, miałeś wypadek, czy potrzebujesz przetransportować pojazd na dłuższą odległość, nasza laweta jest zawsze gotowa do akcji. Zajmujemy się holowaniem zarówno samochodów osobowych, jak i dostawczych, zapewniając szybki i bezpieczny transport do najbliższego warsztatu lub wybranego miejsca.
                </p>
                <h3 className="text-2xl font-semibold mb-4">Nasze usługi obejmują:</h3>
                <ul className="list-disc list-inside text-lg leading-relaxed mb-4">
                    <li><strong>Bieżące naprawy samochodowe:</strong> Od drobnych usterek po kompleksowe naprawy.</li>
                    <li><strong>Wymiana opon:</strong> Profesjonalna wymiana i wyważanie opon.</li>
                    <li><strong>Usługi lawetowe 24/7:</strong> Pomoc drogowa o każdej porze dnia i nocy.</li>
                </ul>
                <p className="text-lg leading-relaxed">
                    Dziękujemy za zaufanie i zapraszamy do skorzystania z naszych usług!
                </p>
            </div>
        </section>
    );
}

export default About;





