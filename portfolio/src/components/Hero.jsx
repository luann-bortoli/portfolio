import styles from '../styles/Hero.module.css'

import photo from '../assets/photo.png'
import download from '../assets/download.svg'
import arrow from '../assets/arrow.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'

export default function Hero(){

    return(
        <>
            <div className={styles.container}>

                <div data-aos="fade-right" data-aos-delay="500" className={styles.leftContent}>
                    <div className={styles.nameContainer}>
                        <p>Olá, me chamo</p>
                        <p>Luann de Bortoli</p>
                        <p>Fullstack | UIUX </p>
                    </div>

                    <div className={styles.buttonContainer}>
                        <a href={"#sectionAbout"}>Saiba mais<img src={arrow}/></a>
                        <a>Download CV<img src={download}/></a>
                    </div>

                    <div className={styles.socialContainer}>
                        <p>Me encontre:</p>
                        <a href="https://www.linkedin.com/in/luann-de-bortoli-354bba34b/" target='_blank'><img src={linkedin}/></a>
                        <a href="https://github.com/luann-bortoli" target='_blank'><img src={github}/></a>
                        <a href="https://www.instagram.com/luannbortoli/" target='_blank'><img src={instagram}/></a>
                    </div>

                </div>

                <div data-aos="fade-left" data-aos-delay="500" className={styles.rightContent}>

                    <div className={styles.picContainer}>
                        <div className={styles.pic}>
                            <img src={photo} alt="" />
                        </div>
                    </div>

                    <div className={styles.cardContainer}>
                        <span>
                            <p>5+</p>
                            <p>Projetos fullstack finalizados</p>
                        </span>
                        <span>
                            <p>100%</p>
                            <p>Foco em aprendizado prático</p>
                        </span>
                        <span>
                            <p>6+</p>
                            <p>Anos de experiência com design gráfico</p>
                        </span>
                    </div>

                </div>

            </div>
        </>
    )
}