import React from 'react';
// 1. Importa as ferramentas de rota
import { Routes, Route } from 'react-router-dom';

// 2. Importa os componentes de layout (que aparecem sempre)
import  Navbar  from './components/Navbar';
import  Footer  from './components/Footer';

// 3. Importa TODAS as suas páginas (as que mudam)
import Home from './pages/Home';
import About from './pages/About';
import Integrantes from './pages/Integrantes';
import Faq from './pages/Faq';
import Contact from './pages/Contato';
import Team from './pages/Integrantes';

// Define o componente principal da Aplicação
const App: React.FC = () => {
  return (
    // 4. Define o layout principal (flex-col para o rodapé ficar em baixo)
    <div className="flex flex-col min-h-screen bg-gray-50"> 
      
      {/* 5. A Navbar aparece em TODAS as páginas */}
      <Navbar />
      
      {/* 6. O conteúdo principal (que vai mudar) */}
      <main className="flex-grow">
        {/* 7. O Roteador decide qual página mostrar aqui */}
        <Routes>
          {/* Rotas Estáticas (Critério 1.I.a) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />

          {/* Rota de Redirecionamento/Not Found (Critério 1.I.c) */}
          <Route path="*" element={
            <div className="container mx-auto p-10 text-center">
              <h1 className="text-4xl font-bold text-red-600">Erro 404</h1>
              <p className="text-xl text-gray-700 mt-2">Página não encontrada.</p>
            </div>
          } />
        </Routes>
      </main>
      
      {/* 8. O Rodapé aparece em TODAS as páginas */}
      <Footer />
    </div>
  );
};

// Exporta o componente App para o main.tsx usar
export default App;
