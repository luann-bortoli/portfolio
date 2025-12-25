import styles from '../styles/ProjetoCard.module.css'
import arrow from '../assets/arrowlink.svg'

export default function ProjetoCard({title, desc, icons, href, img}){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <p className={styles.title}>{title}</p>
                    {icons.map((icon, index) => (
                        <img src={icon} key={index}/>
                    ))}
                </div>
                <div style={{backgroundImage: `url(${img})`}} className={styles.imageContainer}>

                </div>

                <p className={styles.desc}>{desc}</p>

                <a href={href} target='_blank'>Repositório <img src={arrow}/></a>
            </div>
        </>
    )
}