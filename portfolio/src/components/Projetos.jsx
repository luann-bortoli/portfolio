import styles from '../styles/Projetos.module.css'
import ProjetoCard from './ProjetoCard'
import react from '../assets/react.svg'
import python from '../assets/python.svg'
import java from '../assets/java.svg'

import crudify from '../assets/crudify.png'
import utilix from '../assets/utilix.png'
import kanban from '../assets/kanban.png'
import cloudfy from '../assets/cloudfy.png'

export default function Projetos(){

    const cards = [
        {
            title: "Crudify",
            desc: "Aplicação full stack para gerenciamento de cadastros, desenvolvida com ReactJS e Python com Flask, inclui funcionalidades de adicionar, editar, visualizar e excluir registros, com persistência de dados.",
            icons: [react, python],
            href: "https://github.com/luann-bortoli/crudify-fullstack",
            img: crudify
        },{
            title: "Utilix",
            desc: "Utilix é uma aplicação web voltada à centralização de ferramentas utilitárias, inclui calculadora, geradores e avaliadores de senha, contadores de caracteres, etc.",
            icons: [react],
            href: "https://github.com/luann-bortoli/utilix-frontend",
            img: utilix
        },{
            title: "Cloudfy",
            desc: "Aplicação para gerenciamento de cadastros desenvolvida com Java, incluindo operações de criação, edição, visualização e exclusão, com persistência de dados.",
            icons: [react, java],
            href: "https://github.com/luann-bortoli/cloudfy-fullstack",
            img: cloudfy
        },{
            title: "Kanban Board Manager",
            desc: "Aplicação full stack para gerenciamento de tarefas em formato Kanban Board, desenvolvida com Python com Flask e React, inclui criar tarefas e movê-las entre colunas, com persistência de dados.",
            icons: [react, python],
            href: "https://github.com/luann-bortoli/kanban-manager-fullstack",
            img: kanban
        }
    ]

    return(
        <>
            <div id="sectionProjeto" className={styles.container}>
                <div data-aos="zoom-in" className={styles.title}>
                    <p>Projetos recentes</p>
                </div>
                <div className={styles.projectContainer}>
                    {cards.map((card, index)=>(
                        <div key={index} data-aos="zoom-in">
                            <ProjetoCard {...card}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}