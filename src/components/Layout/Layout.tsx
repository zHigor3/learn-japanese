import React, { ReactNode, useState } from 'react'
import './Layout.css'
import { NavButton, DrawerMenu } from '../Utils/Utils'
import { Footer } from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface LayoutProps {
  children: ReactNode // Tipando 'children' como ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='layout'>
      <DrawerMenu onShow={toggleMenu} onClose={() => setToggleMenu(false)}>
        <div className='col-12 nav-button-container'>
          <NavButton 
            to="/" 
            label='Home' 
            className='col-12'
            bgColor='#333'
            fontColor='#fff'
          />
        </div>
        <div className='col-12 nav-button-container'>
          <NavButton 
            to="/about" 
            label='Sobre o Projeto' 
            className='col-12'
            bgColor='#333'
            fontColor='#fff'
          />
        </div>
      </DrawerMenu>
      <div className='col-12 navbar'>
        <div className='col-12 container-nav-user'>
          <button onClick={() => setToggleMenu(true)} style={{backgroundColor: '#00000000', border: 0}}>
            <FontAwesomeIcon icon={faBars} color='white' fontSize={24} />
          </button>
          <span>あ Learn Japanese</span>
        </div>
      </div>

      <div className='col-12 content'>{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
