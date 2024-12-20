import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client'; // Importando do 'react-dom/client'
import App from './App';
import './i18n'

// Obtendo o elemento raiz do DOM
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Elemento root não encontrado');

// Criando a raiz para renderização
const root = ReactDOM.createRoot(rootElement);
root.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
