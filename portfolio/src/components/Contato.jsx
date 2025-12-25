import styles from '../styles/Contato.module.css'

import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import instagram from '../assets/instagram.svg'
import EmailPopup from './EmailPopup'

import { useState } from 'react'

export default function Contato(){

    const [msgName, setMsgName] = useState("")
    const [msgEmail, setMsgEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [handleEmpty, setHandleEmpty] = useState(false)

    function sendMsg(){
        if(msgName == ""){ handleEmpty == true }
        if(msgEmail == ""){ handleEmpty == true }
        if(msg == ""){ handleEmpty == true }


    }

    const [popupVisible, setPopupVisible] = useState(false);

    function copyEmail() {
        navigator.clipboard.writeText('luanndebortoli@gmail.com');
        setPopupVisible(true);
    }

    return(
        <>
            <EmailPopup show={popupVisible} timeout={3000} onClose={() => setPopupVisible(false)} />
            <div id="sectionContact" className={styles.container}>

                <p data-aos="zoom-in" className={styles.title}>Contato</p>

                <div className={styles.content}>

                    <div data-aos="fade-right" className={styles.leftContent}>

                        <div className="">
                            <p className={styles.descTitle}>Vamos trabalhar juntos!</p>
                            <p className={styles.desc}>Estou aberto a novas oportunidades, projetos freelance e colaborações. Se você tem uma ideia ou precisa de alguém para transformar um problema em solução, vamos conversar. <a onClick={()=> copyEmail()}>luanndebortoli@gmail.com</a></p>
                        </div>

                        <div className={styles.social}>
                            <span><img src={linkedin} alt="" /></span>
                            <span><img src={github} alt="" /></span>
                            <span><img src={instagram} alt="" /></span>
                        </div>
                    </div>

                    <div data-aos="fade-left" className={styles.rightContent}>

                        <div className={styles.inputGrid}>
                            
                            <div className={styles.field}>
                                <input value={msgName} onChange={(e)=> setMsgName(e.target.value)} type="text" placeholder=' ' />
                                <label>Nome</label>
                            </div>

                            <div className={styles.field}>
                                <input value={msgEmail} onChange={(e)=> setMsgEmail(e.target.value)} type="text" placeholder=' '/>
                                <label>E-mail</label>
                            </div>

                            <div className={styles.field}>
                                <textarea value={msg} onChange={(e)=> setMsg(e.target.value)} placeholder=' '/>
                                <label>Mensagem</label>
                            </div>

                            <button onClick={()=> sendMsg()}>Enviar mensagem</button>

                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}