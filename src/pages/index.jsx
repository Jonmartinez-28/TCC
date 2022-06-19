import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/Homep/Home.module.css'

const Home = () => {
    return(
        <>
        <Head>
            <meta charSet="UTF-8"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title> Sustyle </title>          
        </Head>

            <div className={styles.container}>
                <h1> Teste </h1>
            </div>
        </>
    )
}

export default Home;