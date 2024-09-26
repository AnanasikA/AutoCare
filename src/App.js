import React from 'react';
import './index.css';
import Phone from './assets/images/contact.png';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="text-base font-normal ml-0 transition-all duration-300">
        <Home />
        <About />
        <Services />
        <ContactForm />
        <Footer />
      </main>

      {/* Fixed "Zadzwoń" button */}
      <a 
        href="tel:+48123456789" 
        className="fixed bottom-4 right-4 bg-[#f39c12] text-white py-3 px-6 rounded-full text-lg shadow-lg flex items-center hover:bg-[#e67e22] hover:scale-105 transition-transform duration-300 z-50"
      >
      <img src={Phone} alt="phone" className="w-5 h-5 md:w-8 md:h-8 mr-2" style={{ filter: 'invert(1)' }} />
        Skontaktuj się z nami
      </a>
    </div>
  );
}

export default App;

