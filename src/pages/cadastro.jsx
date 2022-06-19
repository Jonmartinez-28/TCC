import Head from 'next/head'
import styles from '../styles/globals.css'

const Cadastro = () => {
    return(
        <>
        <Head>
            <meta charSet="UTF-8"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title> Cadastro </title>          
        </Head>

            <div className={styles.container}>
                <h1> Cadastro </h1>
            </div>
        </>
    )
}

export default Cadastro
