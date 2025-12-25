import styles from '../styles/About.module.css'
import SkillCard from './SkillCard'
import react from '../assets/react.svg'
import python from '../assets/python.svg'
import java from '../assets/java.svg'
import github from '../assets/githubp.svg'
import gear from '../assets/gear.svg'
import uiux from '../assets/uiux.svg'

export default function About(){

    const cards = [
        {
            icon: react, 
            title: "React",
            desc: "Hooks, React Router, consumo de APIs REST com Axios e integração com backend."
        },{
            icon: python,
            title: "Python",
            desc: "Flask, APIs REST, CRUD, integração com frontend e fundamentos da linguagem."
        },{
            icon: java,
            title: "Java",
            desc: "Fundamentos da linguagem, orientação a objetos e CRUD básico."
        },{
            icon: github,
            title: "Github",
            desc: "Versionamento com Git, organização de repositórios e colaboração em projetos."
        },{
            icon: gear,
            title: "Workflow",
            desc: "Scrum e Kanban para planejamento e organização do desenvolvimento."
        },{
            icon: uiux,
            title: "UI/UX",
            desc: "Anos de experiência com design gráfico, me aprofundando hoje em UIUX."
        }
    ]

    return(
        <>
            <div id="sectionAbout" className={styles.container}>

                <div data-aos="zoom-in" className={styles.titleContainer}>
                    <p className={styles.title}>Habilidades</p>
                    <p className={styles.desc}>Atuo principalmente no desenvolvimento frontend 
                        com React, mas matenho interesse crescente em 
                        desenvolvimento backend e full stack, por meio 
                        de projetos e estudos contínuos.</p>
                </div>

                <div className={styles.cardContainer}>
                    {cards.map((card, index)=>(
                        <div data-aos="zoom-in" key={index}>
                            <SkillCard {...card}/>
                        </div>                        
                    ))}
                </div>

            </div>
        </>
    )
}