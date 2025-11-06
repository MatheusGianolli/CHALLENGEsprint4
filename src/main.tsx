// src/main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// 1. --- ADICIONE ESTA IMPORTAÇÃO ---
import { BrowserRouter } from 'react-router-dom';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 2. --- ENVOLVA SEU APP COM O <BrowserRouter> --- */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)