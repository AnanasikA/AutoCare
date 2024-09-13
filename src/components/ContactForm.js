import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { send } from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // To track the status of the form submission

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send('service_564t3b6', 'template_27nzxn2', formData, 'vgMyUXe7D-ey-o5-Y')
      .then((result) => {
        console.log('Sukces:', result.text);
        setStatus('Dziękujemy za kontakt! Odpowiemy na Twoją wiadomość tak szybko, jak to możliwe.');
        setFormData({ name: '', email: '', message: '' }); // Clear the form fields
      }, (error) => {
        console.log('Błąd:', error.text);
        setStatus('Wystąpił problem z wysłaniem wiadomości. Proszę spróbować ponownie później.');
      });
  };

  return (
    <section className="bg-[#2c3e50] py-8 px-4" id="contact">
      <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-[#2c3e50] mb-6">Skontaktuj się z nami</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Imię"
            required
            className="border border-gray-300 rounded-md p-3 mb-4 text-lg placeholder-gray-500 focus:border-[#f39c12] focus:ring-1 focus:ring-[#f39c12] transition-all"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="border border-gray-300 rounded-md p-3 mb-4 text-lg placeholder-gray-500 focus:border-[#f39c12] focus:ring-1 focus:ring-[#f39c12] transition-all"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Wiadomość"
            required
            className="border border-gray-300 rounded-md p-3 mb-4 text-lg placeholder-gray-500 focus:border-[#f39c12] focus:ring-1 focus:ring-[#f39c12] transition-all"
          />
          <button
            type="submit"
            className="bg-[#f39c12] text-white py-3 px-6 rounded-md text-lg cursor-pointer transition-all transform hover:bg-[#e67e22] hover:scale-105 active:bg-[#d35400] active:scale-100"
          >
            Wyślij
          </button>
        </form>
        {status && <p className="mt-4 text-center text-lg text-[#2c3e50]">{status}</p>}
      </div>
    </section>
  );
}

export default ContactForm;


