import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                {product.image ? (
                    <img src={product.image} alt={product.name} className="product-img" />
                ) : (
                    <div className="placeholder-img" style={{ backgroundColor: '#e5e7eb', height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                        No Imagen
                    </div>
                )}
            </div>
            <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                    <span className="product-presentation">{product.presentation}</span>
                    <Link to="/contacto" className="btn btn-outline btn-sm">Cotizar</Link>
                </div>
            </div>

            <style>{`
        .product-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.2s, box-shadow 0.2s;
          border: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }
        .product-image-container {
          height: 200px;
          background-color: var(--color-bg-light);
          overflow: hidden;
        }
        .product-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .product-info {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .product-category {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--color-text-light);
          margin-bottom: 0.5rem;
        }
        .product-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-main);
          margin-bottom: 0.5rem;
        }
        .product-description {
          font-size: 0.9rem;
          color: var(--color-text-light);
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }
        .product-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: auto;
        }
        .product-presentation {
            font-size: 0.85rem;
            font-weight: 500;
            color: var(--color-secondary);
            background-color: #eff6ff;
            padding: 2px 8px;
            border-radius: 4px;
        }
        .btn-sm {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
        }
      `}</style>
        </div>
    );
};

export default ProductCard;
