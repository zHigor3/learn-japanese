// src/components/NavButton.tsx
import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Utils.css'
import { NavButtonProps, ButtonProps, DrawerMenuProps } from './UtilsInterfaces'

export const NavButton: React.FC<NavButtonProps> = ({ to, label, className = '', onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <Link 
      to={to} 
      className={`nav-button ${className}`} 
      onClick={handleClick}
    >
      {label}
    </Link>
  )
}

export const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <button onClick={handleClick} className={`button ${className}`} >
      {label}
    </button>
  )
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

export const LoadArchive = async (type: string, archive: string) => {
  try {
    const data = await import(`../../assets/${type}/${archive}.${type}`);
    return { status: "success", payload: data.default};
  }
  catch(error) {
    console.log(error)
    return { status: "error", payload: error }
  }
};
