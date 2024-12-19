// src/components/NavButton.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavButton.css'; // Arquivo CSS para estilos personalizados

interface NavButtonProps {
  to: string;
  label: string;
  className?: string; // Permite adicionar classes adicionais ao botão, caso necessário
}

const NavButton: React.FC<NavButtonProps> = ({ to, label, className = '' }) => {
  return (
    <Link to={to} className={`nav-button ${className}`}>
      {label}
    </Link>
  );
};

export default NavButton;
