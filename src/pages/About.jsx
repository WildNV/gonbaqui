import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import logo from '../assets/logo.jpg';

const About = () => {
    return (
        <div className="about-page">
            <div className="page-header section glass-bg">
                <div className="container text-center">
                    <h1 className="page-title text-secondary">Sobre Químicos GB</h1>
                    <p className="lead-text">
                        Somos una empresa dedicada a la comercialización y distribución de insumos químicos
                        y productos de limpieza de la más alta calidad.
                    </p>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-image">
                            {/* Placeholder for real team/office photo */}
                            <div className="image-placeholder">
                                <img src={logo} alt="Nuestra Empresa" className="about-logo" />
                            </div>
                        </div>
                        <div className="about-content">
                            <h2>Nuestra Historia</h2>
                            <p>
                                Fundada con la visión de proveer soluciones integrales de limpieza, Químicos GB ha crecido
                                hasta convertirse en un aliado estratégico para hogares y empresas en la región.
                                Nos caracterizamos por nuestra seriedad, compromiso y la calidad certificada de nuestros productos.
                            </p>
                            <p>
                                Trabajamos tanto con venta al por menor como abastecimiento industrial, adaptándonos
                                a las necesidades de cada cliente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-light">
                <div className="container">
                    <div className="values-grid">
                        <div className="value-card">
                            <Target size={48} className="value-icon" />
                            <h3>Misión</h3>
                            <p>
                                Proveer productos químicos y de limpieza eficientes y seguros,
                                mejorando la calidad de vida y operaciones de nuestros clientes.
                            </p>
                        </div>
                        <div className="value-card">
                            <Eye size={48} className="value-icon" />
                            <h3>Visión</h3>
                            <p>
                                Ser reconocidos como la empresa líder en abastecimiento de insumos de limpieza
                                a nivel nacional, destacando por nuestra innovación y servicio.
                            </p>
                        </div>
                        <div className="value-card">
                            <Award size={48} className="value-icon" />
                            <h3>Valores</h3>
                            <p>
                                Compromiso, Integridad, Calidad y Orientación al Cliente son los pilares
                                que guían cada una de nuestras acciones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
         .lead-text {
            font-size: 1.25rem;
            max-width: 800px;
            margin: 0 auto;
            color: var(--color-text-light);
         }
         .about-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 3rem;
            align-items: center;
         }
         @media (min-width: 768px) {
            .about-grid { grid-template-columns: 1fr 1fr; }
         }
         .image-placeholder {
            background-color: var(--color-bg-light);
            height: 300px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            box-shadow: var(--shadow-md);
         }
         .about-logo {
            max-width: 80%;
            max-height: 80%;
         }
         .about-content h2 {
            color: var(--color-secondary);
            margin-bottom: 1.5rem;
            font-size: 2rem;
         }
         .about-content p {
            margin-bottom: 1rem;
            font-size: 1.1rem;
         }

         .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
         }
         .value-card {
            background: white;
            padding: 2.5rem;
            border-radius: 12px;
            text-align: center;
            box-shadow: var(--shadow-sm);
            transition: transform 0.3s;
         }
         .value-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
         }
         .value-icon {
            color: var(--color-primary);
            margin-bottom: 1.5rem;
         }
         .value-card h3 {
            margin-bottom: 1rem;
            color: var(--color-secondary);
            font-size: 1.5rem;
         }
       `}</style>
        </div>
    );
};

export default About;
