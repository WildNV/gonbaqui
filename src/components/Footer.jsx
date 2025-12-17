import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Químicos GB" className="logo-img-sm" />
            <span className="brand-name">Químicos GB</span>
          </div>
          <p className="footer-tagline">
            Calidad química que impulsa tu éxito. Soluciones integrales de limpieza e insumos para hogar e industria.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/catalogo">Catálogo de Productos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contáctanos</h3>
          <div className="contact-item">
            <Phone size={18} />
            <span>+51 999 999 999</span>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <span>ventas@quimicosayg.com</span>
          </div>
          <div className="contact-item">
            <MapPin size={18} />
            <span>Av. Principal 123, Lima, Perú</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Químicos GB. Todos los derechos reservados.</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-text-main);
          color: white;
          padding-top: var(--spacing-xl);
          margin-top: auto;
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: bold;
            font-size: 1.2rem;
        }
        .logo-img-sm {
            height: 40px;
            width: auto;
            border-radius: 4px; /* Optional if logo needs it */
        }
        .footer-tagline {
          color: #9ca3af;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .social-icons {
          display: flex;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .social-icons a {
          color: white;
          opacity: 0.8;
        }
        .social-icons a:hover {
          opacity: 1;
          color: var(--color-primary);
        }
        .footer-links h3, .footer-contact h3 {
          color: white;
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
        }
        .footer-links ul {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          color: #d1d5db;
          text-decoration: none !important;
          border: none !important;
        }
        .footer-links a:hover {
          color: var(--color-primary);
          padding-left: 5px;
        }
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: #d1d5db;
        }
        .footer-bottom {
          border-top: 1px solid #374151;
          padding: 1.5rem 0;
          color: #9ca3af;
          font-size: 0.9rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
