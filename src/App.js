import React from 'react';
import './index.css';
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
    </main>
</div>
  );
}

export default App;
