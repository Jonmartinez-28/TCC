import styles from '../../styles/Footer/Footer.module.css'

const Footer = () => {
    return(
        <>
            <footer className={styles.footer}> 
                <div className={styles.footer_itens}> 
                    <div>
                        <section>
                            <h6> ©️ Copyright</h6>
                            <h6> Todos os direitos reservados</h6>
                        </section>
                    </div>
                    <div>
                        <p> Desenvolvido por: 
                        <a href="mailto:contato.sustyle@gmail.com">sustyle@contato.com</a> </p>
                    </div>
                    <div>
                        <button> Contatos </button>
                        <button> Trabalhe Conosco!</button>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer