import { useState } from 'react';
import styles from '../styles/Footer.module.css';
import moon from '../assets/moon.svg';

import EmailPopup from './EmailPopup';

export default function Footer() {
  const [popupVisible, setPopupVisible] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText('luanndebortoli@gmail.com');
    setPopupVisible(true);
  }

  return (
    <>
      <EmailPopup show={popupVisible} timeout={3000} onClose={() => setPopupVisible(false)} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <span><img src={moon}/></span>
            <div className={styles.logoTitle}>
              <p>Luann</p>
              <p>de Bortoli</p>
            </div>
          </div>

          <div className={styles.sections}>
            <p>Seções</p>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#sectionAbout">Sobre</a></li>
              <li><a href="#sectionProjeto">Projetos</a></li>
              <li><a href="#sectionContact">Contato</a></li>
            </ul>
          </div>

          <div className={styles.sections}>
            <p>Social</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/luann-de-bortoli-354bba34b/">Linkedin</a></li>
              <li><a href="https://github.com/luann-bortoli">Github</a></li>
              <li><a href="https://www.instagram.com/luannbortoli/">Instagram</a></li>
              <li><a onClick={()=> copyEmail()}>E-mail</a></li>
            </ul>
          </div>
        </div>

        <hr />

        <p className={styles.footerTitle}>© 2025 Luann de Bortoli. Todos os direitos reservados.</p>
      </div>
    </>
  )
}
