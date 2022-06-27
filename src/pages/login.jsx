import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Login/Login.module.css';
import Link from 'next/link';
import LoginButton from '../components/Button/LoginButton';
import { Formik, Field, Form} from 'formik'

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

                <Formik 
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    render={( values, err) => (
                        <Form action="" method='POST' className={styles.form}>
                            <Field type="email" name="email" placeholder="E-mail"></Field>
                            <Field type="password" name="password" placeholder="Senha"></Field>
                        </Form>
                    )} 
                />

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

                <LoginButton />

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