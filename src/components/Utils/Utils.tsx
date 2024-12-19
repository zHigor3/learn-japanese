// src/components/NavButton.tsx
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Utils.css' // Arquivo CSS para estilos personalizados

interface NavButtonProps {
  to: string
  label: string
  bgColor?: string
  fontColor?: string
  className?: string
  onClick?: () => void
}

export const NavButton: React.FC<NavButtonProps> = ({ to, label, className = '', onClick, bgColor = "#333", fontColor = "#fff" }) => {
  const handleClick = () => {
    if (onClick) {
      onClick() // Executa a função de callback, se fornecida
    }
  }

  return (
    <Link 
      to={to} 
      className={`nav-button ${className}`} 
      onClick={handleClick} 
      style={{backgroundColor: bgColor, color: fontColor}}
    >
      {label}
    </Link>
  )
}

interface ButtonProps {
  label: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  )
}

interface DrawerMenuProps {
  children: ReactNode
  onShow: boolean
  onClose: () => void
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ children, onShow, onClose }) => {
  return (
    <div
      className={`drawer-overlay ${onShow ? "open" : ""}`}
      onClick={onClose}
    >
      <div className={`drawer-container ${onShow ? "slide-in" : "slide-out"}`}>
        {children}
      </div>
    </div>
  )
}
