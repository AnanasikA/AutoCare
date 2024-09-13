import React from 'react';
import './index.css';
import { FaPhoneAlt } from 'react-icons/fa';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
    <Header />
    <main className='text-3xl font-bold duration-300 ml-0'>
      <Home />
      <About />
      <Services />
      <ContactForm />
      <Footer />

      {/* Przycisk "Zadzwoń" */}
      <a href="tel:+48123456789" className="fixed bottom-4 right-4 bg-[#f39c12] text-white py-3 px-6 rounded-full text-lg shadow-lg flex items-center hover:bg-[#e67e22] transition-colors">
                <FaPhoneAlt className="mr-2" />
                Zadzwoń
            </a>
    </main>
</div>
  );
}

export default App;
