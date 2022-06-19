import Head from 'next/head';
import styles from '../styles/Login/Login.module.css';

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
                <form action="">
                    <label htmlFor="email"> E-mail </label>
                    <input type="email" name="email" placeholder="E-mail" id="email"></input>
                    <label htmlFor="password"> Senha </label>
                    <input type="password" 
                    name="password" placeholder="Senha" id="senha"></input>
                    <input type="submit" value="Entrar "></input>
                    <a href="esquecisenha" className={styles.esquecisenha}> Esqueci a senha </a>
                </form>
            </div>
        </>
    )
}

export default Login;
