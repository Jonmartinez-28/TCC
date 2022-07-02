import styles from '../../styles/Footer/Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return(
            <>
            <div className={styles.footer}>

                <div className={styles.logo}>
            <Image src={"/img/Logo.png"} height={"110vh"} width={"450vh"} alt={"Logo do Site"} />
                </div>
        
                <div className={styles.footerItens}>
                    <h2> Categorias </h2>
                    <a> Camisetas </a>
                    <a> Bermudas </a>
                    <a> Calças </a>
                    <a> Moletons </a>
                    <a> Jaquetas </a>
                    <a> Camisetas Personalizadas </a>
                    <a> Ferramentas </a>
                </div>

                <div className={styles.footerItens}>
                    <h2> Institucional </h2>

                    <Link href={"/quemsomos"}>
                        <a> Quem Somos</a>
                    </Link>

                    <Link href={"/prazosdeentrega"}>
                        <a> Prazos de Entrega </a>
                    </Link>

                    <Link href={"/trocasedevolucoes"}>
                        <a> Trocas e Devoluções </a>   
                    </Link>

                    <Link href={"/politicadeprivacidade"}>
                        <a> Política de Privacidade </a>
                    </Link>

                    <Link href={"/trabalheconosco"}>
                        <a> Trabalhe Cosnoco</a>
                    </Link>

                    <div className={styles.footerItens}>
                        <h2> FAQ </h2>
                        <Link href={"/faq"}>
                            <a> FAQ - Orientações</a>
                        </Link>
                    </div>

                </div>

                <div className={styles.footerItens}>
                        <h2> Atendimento </h2>
                        <p> Horário de Atendimento:</p>
                        <p> 07:30 às 18:00 - Segunda a Sábado </p>
                        <p> Endereço:</p>
                        <div className={styles.footerItens}>
                            <h2>Email</h2>  
                            <Link href={"mailto:contato.sustyle@gmail.com"}> 
                                <a target={"_blank"}> contato.sustyle@gmail.com </a> 
                            </Link>
                        </div>
                </div>

                <div className={styles.footerItens}>                        
                    <h2> Contato </h2>
                    <Link href={"/faleconosco"} >
                        <a> Fale Conosco</a>
                    </Link>
                </div>

            </div>
        </>
    )
}

export default Footer