import React from "react";

function About() {
    return (
        <section id="about" className="py-12 bg-[#ecf0f1]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[2c3e50] mb-6">O nas</h2>
                <p className="text-lg text-gray-700 mb-4">
                    Witaj w <strong>AutoCare Centrum</strong> – Twoim zaufanym partnerze w dziedzinie napraw samochodowych. Jesteśmy zespołem doświadczonych mechaników, którzy z pasją i zaangażowaniem zajmują się bieżącymi naprawami samochodów, wymianą opon oraz świadczeniem usług lawetowych dostępnych 24 godziny na dobę, 7 dni w tygodniu.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Nasza misja to zapewnienie Ci najwyższej jakości usług w zakresie konserwacji i naprawy pojazdów, abyś mógł cieszyć się bezpieczną i komfortową jazdą. Wykorzystujemy najnowsze technologie i narzędzia, aby zagwarantować skuteczne rozwiązanie każdego problemu, z którym możesz się zmierzyć.
                </p>
                <h3 className="text-2xl font-semibold text-[#f39c12] mb-4">Nasze usługi obejmują:</h3>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                    <li><strong>Bieżące naprawy samochodowe:</strong> Od drobnych usterek po kompleksowe naprawy, zawsze dbamy o precyzyjne i szybkie rozwiązanie problemów z Twoim pojazdem.</li>
                    <li><strong>Wymiana opon:</strong> Oferujemy fachową wymianę opon oraz ich wyważanie, zapewniając optymalną przyczepność i bezpieczeństwo na drodze.</li>
                    <li><strong>Usługi lawetowe 24/7:</strong> Bez względu na porę dnia i nocy, jesteśmy gotowi, aby pomóc Ci w przypadku awarii lub wypadku – nasza laweta jest zawsze dostępna.</li>
                </ul>
                <p className="text-lg text-gray-700">
                    Dzięki naszemu doświadczeniu i profesjonalnemu podejściu do każdej naprawy, możesz być pewien, że Twój samochód jest w dobrych rękach. Dziękujemy za zaufanie i zapraszamy do skorzystania z naszych usług!
                </p>
            </div>
        </section>
    );
}

export default About;


