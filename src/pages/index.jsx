import Head from 'next/head'
import styles from '../styles/Homep/Home.module.css'
import { useSession } from 'next-auth/react'

const Home = () => {
    const { data:session } = useSession();
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