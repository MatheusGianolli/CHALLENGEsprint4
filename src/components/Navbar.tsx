import React, { useState } from 'react';
// 1. Importe o 'Link' para a navegação SPA (Critério 1.I.b)
import { Link, NavLink } from 'react-router-dom';

// 2. Define os links de navegação
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/about" },
  { name: "Equipa", path: "/team" },
  { name: "FAQ", path: "/faq" },
  { name: "Contacto", path: "/contact" },
];

const Navbar: React.FC = () => {
  // 3. 'useState' para controlar o menu "hamburger" (aberto/fechado)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 4. Função para o 'NavLink' - destaca o link ativo
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'text-white bg-hc-blue px-3 py-2 rounded-md font-medium' // Estilo Ativo
      : 'text-gray-300 hover:bg-hc-blue-light hover:text-white px-3 py-2 rounded-md font-medium transition-colors'; // Estilo Padrão

  return (
    // 5. Usa as suas cores personalizadas (Critério 2)
    <nav className="bg-hc-blue-dark shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* 6. Logótipo (Link para a Home) */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              HC Teleatendimento
            </Link>
          </div>

          {/* 7. Menu Desktop (Escondido em telemóveis - 'hidden md:block') */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={getNavLinkClass}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* 8. Botão "Hamburger" (Mostrado APENAS em telemóveis - 'md:hidden') */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              {/* Ícone (Muda quando aberto/fechado) */}
              {!isMobileMenuOpen ? (
                // Ícone Hamburger (Barras)
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Ícone 'X' (Fechar)
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 9. Menu "Dropdown" do Telemóvel (Aparece quando 'isMobileMenuOpen' é true) */}
      {/* (Critério 2.I - Responsividade) */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={`${getNavLinkClass({ isActive: false })} block`} // 'block' para empilhar
              // Fecha o menu ao clicar num link
              onClick={() => setIsMobileMenuOpen(false)} 
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;