import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Cadastro/Cadastro.module.css'
import Link from 'next/link'
import CadastroButton from '../components/Button/CadastroButton'
import CadastroUsuario from '../pages/api/CadastroUsuario'

const Cadastro = () => {
    return(
        <>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title> Cadastro </title>          
            </Head>

            <div className={styles.menu}>
                <div className={styles.mudarpage}>
                    <Link href={"/login"}>
                        <a> Login </a>
                    </Link>
                </div>   

                <div className={styles.mudarpage2}>
                    <Link href={"/cadastro"}>
                            <a> Cadastro </a>
                    </Link>
                </div>

                <form action="" method='POST' className={styles.form}>

                    <input type="text" name="Nome" placeholder="Digite seu Nome Completo"></input>

                    <input type="text" name="Repetir Nome" placeholder="Repita seu Nome"></input>

                    <input type="email" name="Email" placeholder="Digite seu Email"></input>

                    <input type="email" name="Repetir Email" placeholder="Repita o Email"></input>

                    <input type="password" name="Senha" placeholder="Senha"></input> 

                    <input type="password" name="Repitir Senha" placeholder="Repita a Senha" id-="RepitaSenha"></input>
                    
                </form>
                <Link href={"/"}>
                    <CadastroButton onClick={CadastroUsuario()} />
                </Link>

                <div className={styles.sustentabilidade}>
                    <Image src={"/img/Sustentabilidade.png"} height={"350vh"} width={"300vh"} alt={"Sustentabilidade"} />
                </div>

                <div className={styles.fantasmaCadastro}>
                    <Image src={"/img/Fantasma-Cadastro.png"} height={"350vh"} width={"280vh"} alt={"Fantasma Cadastro"} />
                </div>
            </div>
        </>
    )
}

export default Cadastro
