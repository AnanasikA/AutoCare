import React, { useState } from 'react';
import '../assets/styles/ContactForm.css';
import { send } from '@emailjs/browser';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log('Sukces:', result.text);
      }, (error) => {
        console.log('Błąd:', error.text);
      });
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h2 className="contact-form-title">Skontaktuj się z nami</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Imię"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Wiadomość"
            required
          />
          <button type="submit">Wyślij</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;


