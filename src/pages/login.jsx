import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Login/Login.module.css';
import Link from 'next/link';

const Login = () => {
    return(
        <>
            <Head>
                <meta charSet="UTF-8"></meta>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title> Login </title>          
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
                    <input type="email" name="email" placeholder="E-mail" id="email"></input>
                    <input type="password" 
                    name="password" placeholder="Senha" id="senha"></input>
                </form>

                <div className={styles.esqueciSenha}>
                    <Link href={"#"}>
                        <a> Esqueci a senha </a>
                    </Link>
                </div>

                <div className={styles.esqueciEmail}>
                    <Link href={"#"}>
                        <a> Esqueci o email </a>
                    </Link>
                </div>

                <div className={styles.submit} >
                        <a> Entrar </a>
                </div>

                <div className={styles.sustentabilidade}>
                    <Image src={"/img/Sustentabilidade.png"} height={"350vh"} width={"300vh"} alt={"Sustentabilidade"} />
                </div>

                <div className={styles.fantasmaLogin}>
                    <Image src={"/img/Fantasma-Login.png"} height={"350vh"} width={"280vh"} alt={"Fantasma Login"} />
                </div>
            </div>

        </>
    )
}

export default Login;