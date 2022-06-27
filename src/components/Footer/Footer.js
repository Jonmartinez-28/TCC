import styles from '../../styles/Footer/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return(
        <>
            <div className={styles.footer}>

                <div className={styles.logo}>
                    <Image src={"/img/Logo.png"} height={"80vh"} width={"400vh"} alt={"Logo do Site"} />
                </div>

                <div className={styles.atendimento}>
                        <h2> Atendimento </h2>
                        <p> 7:30 às 18:00 horas</p>
                        <Link href={"mailto:contato.sustyle@gmail.com"}> 
                            <a target={"_blank"}> contato.sustyle@gmail.com </a> 
                        </Link>
                        <Link href={"/faleconosco"} >
                            <a> Fale Conosco</a>
                        </Link>
                </div>
        
                <div className={styles.categoria}>
                    <h2> Categorias </h2>
                    <a> Camisetas </a>
                    <a> Bermudas </a>
                    <a> Calças </a>
                    <a> Moletons </a>
                    <a> Jaquetas </a>
                    <a> Camisetas Personalizadas </a>
                    <a> Ferramentas </a>
                </div>

                <div className={styles.institucional}>
                    <h2> Institucional </h2>
                    <a> Quem Somos</a>
                    <a> Prazos de Entrega </a>
                    <a> Trocas e Devoluções </a>
                    <a> Política de Privacidade </a>
                </div>

            </div>
        </>
    )
}

export default Footer