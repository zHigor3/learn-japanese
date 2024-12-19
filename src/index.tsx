import React from 'react';
import ReactDOM from 'react-dom/client'; // Importando do 'react-dom/client'

const App = () => <h1>Olá, React com TypeScript!</h1>;

// Obtendo o elemento raiz do DOM
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Elemento root não encontrado');

// Criando a raiz para renderização
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
