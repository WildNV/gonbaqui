import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Catálogo', path: '/catalogo' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Químicos GB Logo" className="logo-img" />
          <span className="logo-text">Químicos GB</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu desktop-only">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions desktop-only">
          <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <Phone size={18} />
            <span>Contáctanos</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn mobile-only" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => isActive ? 'mobile-nav-link active' : 'mobile-nav-link'}
                  onClick={toggleMenu}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <a href="https://wa.me/51999999999" className="btn btn-primary btn-block" onClick={toggleMenu}>
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .navbar {
          background-color: white;
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
        }
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-weight: 700;
          font-size: 1.25rem;
          color: var(--color-text-main);
        }
        .logo-img {
          height: 50px;
          width: auto;
          object-fit: contain;
        }
        .nav-menu {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          font-weight: 500;
          color: var(--color-text-main);
          padding: 0.5rem 0;
          position: relative;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--color-primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--color-primary);
        }
        .mobile-only { display: none; }
        
        .mobile-menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text-main);
        }

        .mobile-menu {
          display: none;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .desktop-only { display: none; }
          .mobile-only { display: block; }
          
          .mobile-menu {
            display: block;
            position: fixed;
            top: 80px;
            left: 0;
            width: 100%;
            height: calc(100vh - 80px);
            background: white;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            border-top: 1px solid var(--color-border);
            padding: 2rem;
          }
          .mobile-menu.open {
            transform: translateX(0);
          }
          .mobile-nav-links {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            font-size: 1.25rem;
          }
           .btn-block {
            width: 100%; 
            display: flex;
           }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
