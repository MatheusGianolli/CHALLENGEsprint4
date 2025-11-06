import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Importa o layout principal da aplicação
import App from './App';
// 2. Importa o CSS com as diretivas do Tailwind
import './index.css';
// 3. Importa o sistema de rotas
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 4. "Abraça" toda a aplicação com o roteador */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);