import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock submission
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div className="contact-page">
            <div className="page-header section bg-light">
                <div className="container text-center">
                    <h1 className="page-title text-secondary">Contáctanos</h1>
                    <p className="lead-text">Estamos listos para atender tus requerimientos y brindarte la mejor solución.</p>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Info */}
                        <div className="contact-info-card">
                            <h2>Información de Contacto</h2>
                            <div className="info-item">
                                <Phone className="info-icon" />
                                <div>
                                    <h3>Teléfono / WhatsApp</h3>
                                    <p>+51 999 999 999</p>
                                    <p>+51 999 999 998</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <Mail className="info-icon" />
                                <div>
                                    <h3>Correo Electrónico</h3>
                                    <p>ventas@quimicosayg.com</p>
                                    <p>atencion@quimicosayg.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <MapPin className="info-icon" />
                                <div>
                                    <h3>Dirección</h3>
                                    <p>Av. Principal 123, Zona Industrial</p>
                                    <p>Lima, Perú</p>
                                </div>
                            </div>

                            <div className="map-container">
                                {/* Google Map Mock - Replace with real embed iframe if available */}
                                <div className="map-placeholder">
                                    <span>Mapa de ubicación</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-container">
                            <h2>Envíanos un mensaje</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Nombre Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Teléfono</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Mensaje / Solicitud de Cotización</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">
                                    <Send size={18} /> Enviar Mensaje
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

            <style>{`
         .contact-grid {
             display: grid;
             grid-template-columns: 1fr;
             gap: 4rem;
         }
         @media (min-width: 900px) {
             .contact-grid {
                 grid-template-columns: 1fr 1.5fr;
             }
         }
         
         /* Info Side */
         .contact-info-card h2 {
             color: var(--color-secondary);
             margin-bottom: 2rem;
         }
         .info-item {
             display: flex;
             gap: 1rem;
             margin-bottom: 2rem;
         }
         .info-icon {
             color: var(--color-primary);
             width: 24px;
             height: 24px;
             margin-top: 5px;
         }
         .info-item h3 {
             font-size: 1.1rem;
             font-weight: 600;
             margin-bottom: 0.25rem;
         }
         .info-item p {
             color: var(--color-text-light);
             line-height: 1.4;
         }
         .map-placeholder {
             background-color: #e5e7eb;
             height: 250px;
             width: 100%;
             border-radius: 8px;
             display: flex;
             align-items: center;
             justify-content: center;
             color: #6b7280;
         }

         /* Form Side */
         .contact-form-container {
             background: white;
             padding: 2.5rem;
             border-radius: 12px;
             box-shadow: var(--shadow-md);
             border: 1px solid var(--color-border);
         }
         .contact-form-container h2 {
             margin-bottom: 2rem;
             color: var(--color-text-main);
         }
         .form-group {
             margin-bottom: 1.5rem;
         }
         .form-group label {
             display: block;
             margin-bottom: 0.5rem;
             font-weight: 500;
             color: var(--color-text-main);
         }
         .form-group input, 
         .form-group textarea {
             width: 100%;
             padding: 0.75rem;
             border: 1px solid #d1d5db;
             border-radius: 6px;
             font-size: 1rem;
             transition: border-color 0.2s;
         }
         .form-group input:focus, 
         .form-group textarea:focus {
             border-color: var(--color-primary);
             outline: none;
         }
         .btn-block {
             width: 100%;
         }
       `}</style>
        </div>
    );
};

export default Contact;
