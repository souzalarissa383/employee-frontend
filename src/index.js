// src/index.js (React 18+)
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importação correta para React 18+
import App from './App';

// Cria uma raiz (root) e renderiza o aplicativo
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);