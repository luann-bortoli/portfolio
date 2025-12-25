import styles from '../styles/Header.module.css'

import moonIcon from '../assets/moon.svg'

export default function Header(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.content}>

                    <div className={styles.logoContainer}>

                        <span className={styles.iconBackground}>
                            <img src={moonIcon}/>
                        </span>

                        <div className={styles.logo}>
                            <p>Luann</p>
                            <p>de bortoli</p>
                        </div>

                    </div>

                    <div className={styles.sectionContainer}>

                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#sectionAbout">Sobre</a></li>
                            <li><a href="#sectionProjeto">Projetos</a></li>
                            <li><a href="#sectionContact">Contato</a></li>
                        </ul>

                    </div>

                    <div className={styles.buttonContainer}>
                        <button>PT</button>
                        <button>EN</button>
                    </div>

                </div>
            </div>
        </>
    )
}