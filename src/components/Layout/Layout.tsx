import React, { ReactNode, useState } from 'react'
import './Layout.css'
import { NavButton, DrawerMenu } from '../Utils/Utils'
import { Footer } from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

interface LayoutProps {
  children: ReactNode // Tipando 'children' como ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='layout'>
      <DrawerMenu onShow={toggleMenu} onClose={() => setToggleMenu(false)}>
        <div className='col-12 nav-button-container'>
          <NavButton 
            to="/" 
            label={t('navDrawer.home')} 
            className='col-12'
          />
        </div>
        <div className='col-12 nav-button-container'>
          <NavButton 
            to="/about" 
            label={t('navDrawer.about')} 
            className='col-12'
          />
        </div>
      </DrawerMenu>
      <div className='col-12 navbar'>
        <div className='col-12 container-nav-user'>
          <button onClick={() => setToggleMenu(true)} style={{backgroundColor: '#00000000', border: 0}}>
            <FontAwesomeIcon icon={faBars} color='white' fontSize={24} />
          </button>
          <span>あ {t('navDrawer.title')} </span>
          <div className="language-selector">

            <button onClick={() => changeLanguage('pt')}>PT</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
        </div>
      </div>

      <div className='col-12 content'>{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
