import React from "react"
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faNodeJs, faReact, faCss, faBootstrap } from '@fortawesome/free-brands-svg-icons'

export const Footer: React.FC = () => {
   return (
      <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
               <h4>Sobre o Desenvolvedor</h4>
               <p>Desenvolvido por <strong>Higor dos Santos Pinho</strong>, um entusiasta de tecnologia e desenvolvimento web.</p>
            </div>
            <div className="footer-section">
               <h4>Contato</h4>
               <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a href="mailto:contato-higorpinho@outlook.com">contato-higorpinho@outlook.com</a></p>
               <p><FontAwesomeIcon icon={faLinkedin} /> LinkedIn: <a href="https://www.linkedin.com/in/higor-pinho-99b814208/" target="_blank" rel="noopener noreferrer">Higor dos Santos Pinho</a></p>
               <p><FontAwesomeIcon icon={faGithub} /> GitHub: <a href="https://github.com/zHigor3" target="_blank" rel="noopener noreferrer">github.com/zHigor3</a></p>
            </div>
            <div className="footer-section">
               <h4>Tecnologias Utilizadas</h4>
               <ul>
                  <li><FontAwesomeIcon icon={faNodeJs} /> Node.js</li>
                  <li><FontAwesomeIcon icon={faReact} /> React & TypeScript</li>
                  <li><FontAwesomeIcon icon={faCss} /> CSS</li>
                  <li><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</li>
               </ul>
            </div>
            <div className="footer-section">
               <h4>Links Importantes</h4>
               <ul>
               <li><Link to="/about">Sobre</Link></li>
               </ul>
            </div>
         </div>
         <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Higor dos Santos Pinho. Todos os direitos reservados.</p>
         </div>
      </footer>
   )
}