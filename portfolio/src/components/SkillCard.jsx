import styles from '../styles/SkillCard.module.css'

export default function SkillCard({title, desc, icon}){
    return(
        <>
            <div className={styles.container}>
                <img src={icon}/>
                <p className={styles.title}>{title}</p>
                <hr />
                <p>{desc}</p>
            </div>
        </>
    )
}