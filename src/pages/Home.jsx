import React from 'react';
import { ArrowRight, Home, Factory, FlaskConical, Package, CheckCircle, Truck, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

// Mock Data
const categories = [
    { id: 1, name: "Limpieza Hogar", icon: <Home size={32} />, path: "/catalogo?cat=hogar" },
    { id: 2, name: "Limpieza Industrial", icon: <Factory size={32} />, path: "/catalogo?cat=industrial" },
    { id: 3, name: "Insumos Químicos", icon: <FlaskConical size={32} />, path: "/catalogo?cat=quimicos" },
    { id: 4, name: "Accesorios", icon: <Package size={32} />, path: "/catalogo?cat=accesorios" },
];

const featuredProducts = [
    { id: 1, name: "Detergente Líquido Industrial", category: "Industrial", description: "Alta concentración para lavado de ropa en grandes volúmenes.", presentation: "Galonera 5L", image: "https://images.unsplash.com/photo-1585435557343-3b092031a60c?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Desinfectante Pino", category: "Hogar", description: "Aroma duradero y desinfección profunda para pisos.", presentation: "Botella 1L", image: "https://images.unsplash.com/photo-1626074288005-4c6d446b7e61?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Hipoclorito de Sodio 10%", category: "Químicos", description: "Insumo base para blanqueadores y desinfección.", presentation: "Bidón 20L", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Limpiatodo Multiusos", category: "Hogar", description: "Ideal para todo tipo de superficies lavables.", presentation: "Galonera 4L", image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "Alcohol Etílico 70%", category: "Químicos", description: "Antiséptico y desinfectante de superficies.", presentation: "Litro", image: "https://images.unsplash.com/photo-1616335133742-53b0a701fa1c?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Guantes de Nitrilo", category: "Accesorios", description: "Protección química y biológica para tu seguridad.", presentation: "Caja x 100", image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=400" },
];

const HomePage = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Insumos químicos y productos de limpieza para hogar e industria</h1>
                    <p>Calidad, seguridad y entrega confiable para tu negocio y familia.</p>
                    <div className="hero-buttons">
                        <Link to="/catalogo" className="btn btn-primary">Ver Catálogo</Link>
                        <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            Cotizar por WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Nuestras Categorías</h2>
                    <div className="categories-grid">
                        {categories.map(cat => (
                            <Link to={cat.path} key={cat.id} className="category-card">
                                <div className="icon-wrapper">{cat.icon}</div>
                                <h3>{cat.name}</h3>
                                <ArrowRight size={20} className="arrow-icon" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center">Productos Destacados</h2>
                    <div className="grid-3">
                        {featuredProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                    <div className="text-center" style={{ marginTop: '2rem' }}>
                        <Link to="/catalogo" className="btn btn-outline">Ver todos los productos</Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section bg-primary-light">
                <div className="container">
                    <h2 className="section-title text-center">¿Por qué elegirnos?</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <CheckCircle size={40} className="text-primary" />
                            <h3>Calidad Garantizada</h3>
                            <p>Productos formulados con los mejores estándares.</p>
                        </div>
                        <div className="feature-item">
                            <Users size={40} className="text-primary" />
                            <h3>Atención Personalizada</h3>
                            <p>Asesoría experta para encontrar lo que necesitas.</p>
                        </div>
                        <div className="feature-item">
                            <Truck size={40} className="text-primary" />
                            <h3>Envíos Confiables</h3>
                            <p>Reparto local y envíos a nivel regional.</p>
                        </div>
                        <div className="feature-item">
                            <Clock size={40} className="text-primary" />
                            <h3>Experiencia</h3>
                            <p>Años brindando soluciones de limpieza.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="section-title">¿Cómo comprar?</h2>
                    <div className="process-steps">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h3>Elige tus productos</h3>
                            <p>Revisa nuestro catálogo.</p>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <h3>Contáctanos</h3>
                            <p>Envía tu pedido por WhatsApp.</p>
                        </div>
                        <div className="step-line"></div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <h3>Recibe o Recoge</h3>
                            <p>Coordinamos el pago y entrega.</p>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        /* Hero */
        .hero {
          background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1920'); /* Scientific/Clean background usually works well */
          background-size: cover;
          background-position: center;
          height: 80vh;
          max-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 0 1rem;
        }
        .hero-content h1 {
            font-size: clamp(2rem, 5vw, 3.5rem);
            margin-bottom: 1rem;
            line-height: 1.2;
            font-weight: 800;
        }
        .hero-content p {
            font-size: clamp(1rem, 3vw, 1.25rem);
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        .hero-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        /* Titles */
        .section-title {
            font-size: 2rem;
            margin-bottom: 3rem;
            color: var(--color-secondary);
            font-weight: 700;
            position: relative;
            display: inline-block;
        }
        .text-center .section-title::after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background-color: var(--color-primary);
            margin: 0.5rem auto 0;
            border-radius: 2px;
        }

        /* Categories */
        .categories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1.5rem;
        }
        .category-card {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: var(--shadow-sm);
            text-align: center;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            border: 1px solid transparent;
            color: var(--color-text-main);
        }
        .category-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-md);
            border-color: var(--color-primary);
        }
        .icon-wrapper {
            background-color: #f0fdf4;
            color: var(--color-primary);
            padding: 1rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .arrow-icon {
            opacity: 0;
            transition: opacity 0.3s;
            color: var(--color-primary);
        }
        .category-card:hover .arrow-icon {
            opacity: 1;
        }

        /* Features */
        .bg-primary-light {
            background-color: #f0fdf4;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 2rem;
            text-align: center;
        }
        .feature-item h3 {
            margin: 1rem 0 0.5rem;
            color: var(--color-secondary);
        }

        /* Process */
        .process-steps {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 1rem;
            flex-wrap: wrap;
        }
        .step {
            flex: 1;
            min-width: 200px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 1;
        }
        .step-number {
            width: 50px;
            height: 50px;
            background-color: var(--color-secondary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        .step-line {
            flex: 1;
            height: 2px;
            background-color: #e5e7eb;
            margin-top: 25px;
            display: none; /* Hidden on mobile */
        }
        @media (min-width: 768px) {
            .step-line { display: block; }
        }
      `}</style>
        </div>
    );
};

export default HomePage;
