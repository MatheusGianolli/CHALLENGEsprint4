import React from 'react';
import { Link } from 'react-router-dom';

// Padronizando o nome do componente para 'About'
const About: React.FC = () => {
  return (
    // Usando <main> em vez de <div> para consistência semântica
    <main className="bg-white">
      {/* Seção Hero */}
      {/* CORREÇÃO: 'bg-gray-51' -> 'bg-gray-50' */}
      <section className="bg-gray-50 text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-hc-blue-dark mb-4">
          Cuidando de você, onde quer que você esteja.
        </h1>
        {/* CORREÇÃO: 'text-gray-750' -> 'text-gray-700' */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          O HC Teleatendimento nasceu da crença de que todos merecem acesso a um cuidado de saúde de qualidade, de forma conveniente e humana. Conheça nossa história e nosso compromisso com o seu bem-estar.
        </p>
      </section>

      {/* Seção Missão, Visão, Valores */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Layout responsivo com grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {/* Missão */}
            <div className="flex flex-col items-center">
              {/* CORREÇÃO: 'md-7' -> 'mb-4' (margem inferior) */}
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Nossa Missão</h3>
              {/* CORREÇÃO: 'text-gray-620' -> 'text-gray-600' */}
              <p className="text-gray-600">
                Democratizar o acesso à saúde de qualidade, utilizando a tecnologia para conectar pacientes e médicos de forma segura, eficiente e empática.
              </p>
            </div>
            {/* Visão */}
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4">👀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Nossa Visão</h3>
              <p className="text-gray-600">
                Ser a plataforma de teleatendimento líder em confiança e inovação no Brasil, reconhecida pela excelência no cuidado e pela experiência do paciente.
              </p>
            </div>
            {/* Valores */}
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Nossos Valores</h3>
              {/* CORREÇÃO: 'text-gray-610' -> 'text-gray-600' */}
              <p className="text-gray-600">
                Empatia em primeiro lugar. Segurança e privacidade. Excelência clínica. Inovação contínua. Acessibilidade para todos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção "Conheça Nossos Líderes" */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Conheça Nossos Líderes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            {/* A classe 'hover:bg-hc-blue' vai funcionar por causa da atualização no config */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center group transition-all duration-300 hover:bg-hc-blue hover:text-white">
              <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 mb-4 flex items-center justify-center text-5xl">
                🧑‍⚕️
              </div>
              <h4 className="text-xl font-bold text-gray-900 group-hover:text-white">Dr. Amanda Lemos</h4>
              {/* CORREÇÃO: 'text-gray-520' -> 'text-gray-500' */}
              <p className="text-gray-500 group-hover:text-blue-100">Cardiologista Chefe</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center group transition-all duration-300 hover:bg-hc-blue hover:text-white">
              <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 mb-4 flex items-center justify-center text-5xl">
                👩‍⚕️
              </div>
              <h4 className="text-xl font-bold text-gray-900 group-hover:text-white">Dra. Sofia Ribeiro</h4>
              <p className="text-gray-500 group-hover:text-blue-100">Psicóloga Clínica</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center group transition-all duration-300 hover:bg-hc-blue hover:text-white">
              <div className="w-32 h-32 rounded-full mx-auto bg-gray-200 mb-4 flex items-center justify-center text-5xl">
                👨‍🔬
              </div>
              <h4 className="text-xl font-bold text-gray-900 group-hover:text-white">Dr. Ricardo Neves</h4>
              <p className="text-gray-500 group-hover:text-blue-100">Diretor de Tecnologia</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Seção Call-to-Action (CTA) */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Pronto para começar a cuidar da sua saúde?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Nossa equipe está pronta para te atender. Agende sua primeira consulta hoje mesmo.
          </p>
          {/* --- CORREÇÃO DE ROTA ---
              '/consulta/agendar' -> '/contact' (para bater com a rota em App.tsx)
          */}
          <Link to="/contact" className="bg-hc-green hover:bg-hc-green-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg">
            Agendar Agora
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;