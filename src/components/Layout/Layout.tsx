import React, { ReactNode } from 'react';
import './Layout.css'
import NavButton from '../NavButton/NavButton';

interface LayoutProps {
  children: ReactNode; // Tipando 'children' como ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      <div className='col-12 navbar'>
        <div className='col-8 container-nav-user'>
          <span>Learn Japanese</span>
        </div>
        <div className='col-4 container-nav-button'>
          <div className='col-6 container-button'>
            <NavButton to="/" label='Página inicial' className='col-12' />
          </div>
          <div className='col-6 container-button'>
            <NavButton to="/about" label='Sobre o projeto' className='col-12' />
          </div>
        </div>
      </div>
      <div className='col-12 content'>{children}</div>
      <div className='col-12 footer'>
        <p>Projeto desenvolvido por: Higor dos Santos Pinho</p>
        <p>GitHub: <a href="https://github.com/zHigor3/">GitHub</a></p>
        <p>e-mail: contato-higorpinho@gmail.com</p>
      </div>
    </div>
  );
};

export default Layout;
