import React from "react"
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faNodeJs, faReact, faCss, faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
   const { t, i18n } = useTranslation();

   return (
      <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
               <h4>{t('footer.aboutDev')}</h4>
               <p>{t('footer.devBy')} <strong>Higor dos Santos Pinho</strong>, {t('footer.personality')}</p>
            </div>
            <div className="footer-section">
               <h4>{t('footer.contact')}</h4>
               <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:contato-higorpinho@outlook.com">contato-higorpinho@outlook.com</a></p>
               <p><FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="https://www.linkedin.com/in/higor-pinho-99b814208/" target="_blank" rel="noopener noreferrer">Higor dos Santos Pinho</a></p>
               <p><FontAwesomeIcon icon={faGithub} /> GitHub: <a href="https://github.com/zHigor3" target="_blank" rel="noopener noreferrer">github.com/zHigor3</a></p>
            </div>
            <div className="footer-section">
               <h4>{t('footer.tecUsed')}</h4>
               <ul>
                  <li><FontAwesomeIcon icon={faNodeJs} /> Node.js</li>
                  <li><FontAwesomeIcon icon={faReact} /> React & TypeScript</li>
                  <li><FontAwesomeIcon icon={faCss} /> CSS</li>
                  <li><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>
               </ul>
            </div>
            <div className="footer-section">
               <h4>{t('footer.importantLinks')}</h4>
               <ul>
               <li><Link to="/about">{t('footer.about')}</Link></li>
               </ul>
            </div>
         </div>
         <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Higor dos Santos Pinho. {t('footer.rights')}</p>
         </div>
      </footer>
   )
}