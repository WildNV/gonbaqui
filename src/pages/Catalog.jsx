import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const allProducts = [
    { id: 1, name: "Detergente Líquido Industrial", category: "Industrial", description: "Alta concentración para lavado de ropa en grandes volúmenes.", presentation: "Galonera 5L", image: "https://images.unsplash.com/photo-1585435557343-3b092031a60c?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Desinfectante Pino", category: "Hogar", description: "Aroma duradero y desinfección profunda para pisos.", presentation: "Botella 1L", image: "https://images.unsplash.com/photo-1626074288005-4c6d446b7e61?auto=format&fit=crop&q=80&w=400" },
    { id: 3, name: "Hipoclorito de Sodio 10%", category: "Químicos", description: "Insumo base para blanqueadores y desinfección.", presentation: "Bidón 20L", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Limpiatodo Multiusos", category: "Hogar", description: "Ideal para todo tipo de superficies lavables.", presentation: "Galonera 4L", image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=400" },
    { id: 5, name: "Lejía Tradicional", category: "Hogar", description: "Blanqueador y desinfectante clásico.", presentation: "Botella 1L", image: "https://images.unsplash.com/photo-1585435557343-3b092031a60c?auto=format&fit=crop&q=80&w=400" },
    { id: 6, name: "Desengrasante Industrial", category: "Industrial", description: "Remueve grasa pesada en cocinas y talleres.", presentation: "Bidón 5L", image: "https://images.unsplash.com/photo-1626074288005-4c6d446b7e61?auto=format&fit=crop&q=80&w=400" },
    { id: 7, name: "Alcohol Etílico 70%", category: "Químicos", description: "Antiséptico y desinfectante de superficies.", presentation: "Litro", image: "https://images.unsplash.com/photo-1616335133742-53b0a701fa1c?auto=format&fit=crop&q=80&w=400" },
    { id: 8, name: "Bolsas de Basura Jumbo", category: "Accesorios", description: "Alta resistencia para residuos industriales.", presentation: "Paquete x 10", image: "https://images.unsplash.com/photo-1610427306301-8b2b64c6791d?auto=format&fit=crop&q=80&w=400" },
    { id: 9, name: "Guantes de Nitrilo", category: "Accesorios", description: "Protección química y biológica.", presentation: "Caja x 100", image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=400" },
];

const categories = ["Todos", "Hogar", "Industrial", "Químicos", "Accesorios"];

const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [activeCategory, setActiveCategory] = useState(() => {
        const initial = searchParams.get('cat');
        const match = categories.find(c => c.toLowerCase() === initial?.toLowerCase());
        return match || "Todos";
    });
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const initial = searchParams.get('cat');
        if (initial) {
            const match = categories.find(c => c.toLowerCase() === initial.toLowerCase());
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if (match && match !== activeCategory) {
                setActiveCategory(match);
            }
        }
    }, [searchParams]);

    const filteredProducts = allProducts.filter(p => {
        const matchesCategory = activeCategory === "Todos" || p.category === activeCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="page-container section">
            <div className="container">
                <h1 className="page-title text-center text-secondary">Catálogo de Productos</h1>

                {/* Filters & Search */}
                <div className="catalog-header">
                    <div className="search-bar">
                        <Search size={20} className="search-icon" />
                        <input
                            type="text"
                            placeholder="Buscar productos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="category-filters">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setSearchParams(cat === "Todos" ? {} : { cat: cat.toLowerCase() });
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Grid */}
                <div className="catalog-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(p => (
                            <ProductCard key={p.id} product={p} />
                        ))
                    ) : (
                        <div className="no-results">
                            <p>No se encontraron productos en esta categoría.</p>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
        .catalog-header {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            margin-bottom: 3rem;
            align-items: center;
        }
        .search-bar {
            position: relative;
            width: 100%;
            max-width: 500px;
        }
        .search-bar input {
            width: 100%;
            padding: 0.75rem 1rem 0.75rem 2.5rem;
            border: 1px solid var(--color-border);
            border-radius: 8px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.2s;
        }
        .search-bar input:focus {
            border-color: var(--color-primary);
        }
        .search-icon {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
            color: var(--color-text-light);
        }
        
        .category-filters {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            justify-content: center;
        }
        .filter-btn {
            padding: 0.5rem 1.25rem;
            border-radius: 20px;
            border: 1px solid var(--color-border);
            background: white;
            color: var(--color-text-main);
            cursor: pointer;
            transition: all 0.2s;
            font-weight: 500;
        }
        .filter-btn:hover {
            border-color: var(--color-primary);
            color: var(--color-primary);
        }
        .filter-btn.active {
            background-color: var(--color-primary);
            color: white;
            border-color: var(--color-primary);
        }

        .catalog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
        }
        .no-results {
            grid-column: 1 / -1;
            text-align: center;
            padding: 3rem;
            color: var(--color-text-light);
            font-size: 1.1rem;
        }
      `}</style>
        </div>
    );
};

export default Catalog;
