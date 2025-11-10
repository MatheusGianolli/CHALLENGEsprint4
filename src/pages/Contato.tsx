import React, { useState } from 'react';
import { useForm, type SubmitHandler } from "react-hook-form";


// Interface para os dados do formulário
type FormInputs = {
  nome: string;
  email: string;
  mensagem: string;
};

// Padronizando o nome do componente para 'Contact'
const Contact: React.FC = () => {
  // Estado para controlar se o formulário foi enviado com sucesso
  const [isSent, setIsSent] = useState(false);

  // Trazendo 'reset' do useForm para limpar o formulário
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  
  // Função de envio
  const onSubmit: SubmitHandler<FormInputs> = data => {
    // Aqui é onde você futuramente chamará sua API Java
    console.log("Dados do formulário:", data);

    // --- CORREÇÃO (Sem alert!) ---
    // 1. Em vez de alert(), mudamos o estado para 'true'
    setIsSent(true);
    // 2. Limpamos o formulário
    reset();
  };

  return (
    // Usando <main> e removendo o <div> desnecessário
    <main className="bg-gray-60 min-h-screen py-16">
      <div className="container mx-auto px-6">

        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-hc-blue-dark mb-4">Estamos aqui para ajudar.</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Tem alguma dúvida, sugestão ou precisa de suporte? Use o formulário abaixo ou entre em contato por um de nossos canais.
          </p>
        </div>

        {/* Container Principal com Duas Colunas */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-12">

          {/* Coluna Esquerda: Informações de Contato */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Nossos Canais de Atendimento</h2>
            <div className="space-y-6">
              {/* Telefone */}
              <div className="flex items-start">
                <span className="text-3xl mr-4">📞</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Suporte por Telefone</h3>
                  <p className="text-gray-600">Disponível de Seg a Sex, das 8h às 18h.</p>
                  {/* Cor 'text-hc-blue' será adicionada ao config */}
                  <a href="tel:+5511999999999" className="text-hc-blue hover:underline font-semibold">(11) 99999-9999</a>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-start">
                <span className="text-3xl mr-4">📧</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Email Geral</h3>
                  <p className="text-gray-600">Para dúvidas e informações gerais.</p>
                  <a href="mailto:contato@hcteleatendimento.com.br" className="text-hc-blue hover:underline font-semibold">contato@hcteleatendimento.com.br</a>
                </div>
              </div>
              {/* Endereço */}
              <div className="flex items-start">
                <span className="text-3xl mr-4">📍</span>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Nosso Endereço</h3>
                  <p className="text-gray-600">Av. Paulista, 1234 - São Paulo, SP</p>
                  <p className="text-gray-600">CEP: 01310-100</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário ou Mensagem de Sucesso */}
          <div>
            {/* --- LÓGICA DE EXIBIÇÃO ---
                Se 'isSent' for falso, mostra o formulário.
                Se for verdadeiro, mostra a mensagem de sucesso.
            */}
            {!isSent ? (
              // --- O FORMULÁRIO ---
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-5">
                  <label htmlFor="nome" className="block mb-2 font-medium text-gray-700">Nome Completo</label>
                  <input 
                    id="nome" 
                    {...register("nome", { required: "O nome é obrigatório" })} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hc-blue-light transition-shadow"
                    placeholder="Seu nome completo"
                  />
                  {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    {...register("email", { required: "O email é obrigatório", pattern: { value: /^\S+@\S+$/i, message: "Email inválido"} })} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hc-blue-light transition-shadow"
                    placeholder="seu.email@exemplo.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div className="mb-5">
                  <label htmlFor="mensagem" className="block mb-2 font-medium text-gray-700">Mensagem</label>
                  <textarea 
                    id="mensagem" 
                    {...register("mensagem", { required: "A mensagem é obrigatória" })} 
                    className="w-full p-3 border border-gray-300 rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-hc-blue-light transition-shadow"
                    placeholder="Escreva sua dúvida ou sugestão aqui..."
                  ></textarea>
                  {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-hc-green hover:bg-hc-green-dark text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            ) : (
              // --- MENSAGEM DE SUCESSO (Substitui o 'alert') ---
              <div className="flex flex-col items-center justify-center h-full bg-green-50 p-8 rounded-lg">
                <span className="text-6xl">✅</span>
                <h3 className="text-2xl font-bold text-green-800 mt-4 mb-2">Mensagem Enviada!</h3>
                <p className="text-green-700 text-center">Obrigado pelo seu contato. Responderemos em breve.</p>
                {/* Botão para recarregar o formulário */}
                <button 
                  onClick={() => setIsSent(false)}
                  className="mt-6 bg-hc-green hover:bg-hc-green-dark text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Enviar Nova Mensagem
                </button>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </main>
  );
};
export default Contact;