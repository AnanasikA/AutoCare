import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../assets/styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <div className="footer-info">
                        <h4>Informacje Kontaktowe</h4>
                        <p>Adres: Ulica Przykładowa 123, Miasto</p>
                        <p>Telefon: +48 123 456 789</p>
                        <p>Email: kontakt@example.com</p>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-map">
                        <h4>Jak Dojechać?</h4>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.7014709309665!2d-0.12764738404223966!3d51.50735077963689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3232d00f83%3A0x57d4f7339b7a02d3!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1606930448563!5m2!1sen!2sus"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                <div className="footer-column">
                    <div className="footer-social">
                        <h4>Znajdź Nas Online</h4>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                            <span>Facebook</span>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter />
                            <span>Twitter</span>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                            <span>Instagram</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 My Complex Website. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;





