
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// --- ADICIONADO: Imports para a API ---
import { getRecursos } from '../services/api'; // Ajuste o caminho se necessário
import {  } from '../types/index'; // Ajuste o caminho e o nome da interface

// Padronizando o nome do componente para "Home" e usando React.FC
const Home: React.FC = () => {

  // --- Estados Existentes (Frases Motivacionais) ---
  const motivationalPhrases = [
    "Cuidar da sua saúde é um ato de coragem. Estamos aqui para ajudar.",
    "Um pequeno passo hoje para o seu bem-estar de amanhã.",
    "Você não está sozinho(a). Nossa equipe está a um clique de distância.",
    "Priorizar sua saúde é o maior investimento que você pode fazer.",
    "Gratidão pela vida não é dizer obrigado, é cuidar de si mesmo. ",
    "Olhe para si com olhos de amor e pratique o autocuidado, assim você apreciará quem realmente é.",
    "Não é egoísmo cuidar da sua saúde mental.Cuide de si mesmo antes de qualquer outro ser.",
    "Não é uma atitude egoísta priorizar cuidar de si próprio. Egoísmo é ser uma pessoa tóxica por não estar bem. Quando cuido de mim, deixo circular no mundo minha melhor versão, espalhando paz e bem."
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // --- ADICIONADO: Estados para os dados da API ---
  // (Renomeei para 'apiData' para não ter conflito)
  const [apiData, setApiData] = useState<any[]>([]);
  const [apiLoading, setApiLoading] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);


  // --- useEffect Existente (Frases) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % motivationalPhrases.length);
    }, 5000); // Troca a frase a cada 5 segundos

    return () => clearInterval(timer);
  }, [motivationalPhrases.length]); // Dependência correta

  // --- ADICIONADO: useEffect para buscar dados da API ---
  // Um componente pode ter vários useEffect!
  useEffect(() => {
    // Função async interna para buscar os dados
    async function fetchData() {
      try {
        setApiError(null);
        setApiLoading(true);

        // Chama a função do seu 'api.ts'
        const recursosDaApi = await getRecursos();
        
        // Guarda os dados no novo estado
        setApiData(recursosDaApi);

      } catch (err) {
        // Guarda o erro no novo estado
        setApiError('Falha ao carregar os recursos. Tente novamente.');
        console.error(err);
      } finally {
        // Para de carregar
        setApiLoading(false);
      }
    }

    fetchData(); // Executa a busca
  }, []); // O array vazio [] garante que rode só uma vez


  // --- Renderização ---
  return (
    <main>
      {/* ========================================================== */}
      {/* SEÇÃO HERO (Seu código original - sem mudanças) */}
      {/* ========================================================== */}
      <section className="bg-blue-50 text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-hc-blue-dark mb-4">
          Bem-vindo ao Atendimento Digital HC
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Sua saúde conectada a você, onde quer que esteja. Acesso rápido, seguro e humano a cuidados médicos de qualidade.
        </p>
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link to="/contact" className="bg-hc-green hover:bg-hc-green-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Agendar Consulta
          </Link>
          <Link to="/about" className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-full transition-colors duration-300">
            Saiba Mais
          </Link>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SEÇÃO FRASE MOTIVACIONAL (Seu código original - sem mudanças) */}
      {/* ========================================================== */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-gray-600 italic">
            "{motivationalPhrases[currentPhraseIndex]}"
          </p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SEÇÃO SERVIÇOS/CARDS (Seu código original - sem mudanças) */}
      {/* ========================================================== */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Como podemos te ajudar hoje?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link to="/contact" className="block p-8 bg-white rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">📅</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Agendar Consulta</h4>
              <p className="text-gray-600">Encontre especialistas e marque sua teleconsulta em poucos minutos.</p>
            </Link>
            {/* Card 2 */}
            <Link to="/" className="block p-8 bg-white rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">🔬</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Resultados de Exames</h4>
              <p className="text-gray-600">Acesse seus resultados de forma segura e prática, de qualquer lugar.</p>
            </Link>
            {/* Card 3 */}
            <Link to="/contact" className="block p-8 bg-white rounded-lg shadow-lg text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Fale com Suporte</h4>
              <p className="text-gray-600">Nossa equipe está pronta para ajudar com qualquer dúvida sobre a plataforma.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SEÇÃO 3 PASSOS (Seu código original - sem mudanças) */}
      {/* ========================================================== */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">Teleatendimento em 3 Passos Simples</h3>
          <div className="flex flex-col md:flex-row justify-center items-center text-center gap-10">
            {/* Passo 1 */}
            <div className="flex-1">
              <div className="text-5xl mb-4">1️⃣</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Agende</h4>
              <p className="text-gray-600">Escolha o profissional e o melhor horário para você.</p>
            </div>
            <div className="text-2xl text-gray-300 hidden md:block">→</div>
            {/* Passo 2 */}
            <div className="flex-1">
              <div className="text-5xl mb-4">2️⃣</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Conecte-se</h4>
              <p className="text-gray-600">No dia e hora marcados, acesse o link da consulta em seu dispositivo.</p>
            </div>
            <div className="text-2xl text-gray-300 hidden md:block">→</div>
            {/* Passo 3 */}
            <div className="flex-1">
              <div className="text-5xl mb-4">3️⃣</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Fale com o Médico</h4>
              <p className="text-gray-600">Receba seu atendimento com a mesma qualidade e segurança de uma consulta presencial.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* ========================================================== */}
      {/* --- ADICIONADO: SEÇÃO DE DADOS VINDOS DA API --- */}
      {/* ========================================================== */}
      <section className="py-16 bg-blue-50"> {/* Fundo azul-claro para diferenciar */}
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
            {/* ===> MUDE ESTE TÍTULO para algo que faça sentido (ex: "Especialidades Disponíveis") */}
            Nossos Recursos da API
          </h3>

          {/* --- ADICIONADO: Lógica de Loading/Error/Data --- */}
          {/* Mostra 'Carregando...' enquanto busca dados */}
          {apiLoading && (
            <p className="text-center text-lg p-10">Carregando...</p>
          )}

          {/* Mostra o erro se a API falhar */}
          {apiError && (
            <p className="text-center text-lg p-10 text-red-600">{apiError}</p>
          )}

          {/* Se NÃO está carregando E NÃO deu erro, mostra os dados */}
          {!apiLoading && !apiError && (
            <>
              {/* Grid responsivo para os cards da API */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Loop .map() para criar um card para cada item */}
                {apiData.map((item: any) => (
                  <div 
                    // ===> MUDE 'item.id' para a sua chave primária (id, cpf, etc)
                    key={item.id} 
                    className="border border-gray-200 rounded-lg shadow-lg p-6 bg-white"
                  >
                    {/* ===> MUDE 'item.nome' e 'item.preco' para os seus dados */}
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.nome}</h4>
                    <p className="text-gray-700">Crm: {item.crm}</p>
                  </div>
                ))}
              </div>

              {/* Mensagem caso a API retorne uma lista vazia */}
              {apiData.length === 0 && (
                <p className="text-center text-lg p-10 text-gray-500">
                  Nenhum recurso encontrado no momento.
                </p>
              )}
            </>
          )}
          {/* --- Fim da Lógica da API --- */}

        </div>
      </section>
      
    </main>
  );
};

export default Home;