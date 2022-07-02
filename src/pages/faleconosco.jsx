import Head from 'next/head'
import styles from '../styles/Homep/Home.module.css'
import { Formik, Form, Field } from 'formik'

const FaleConosco = () => {
    return(
        <>
        <Head>
            <meta charSet="UTF-8"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title> Contatos </title>          
        </Head>
        
            <div className={styles.container}>
                <h1> Fale Conosco </h1>
            </div>


            <Formik>
                {() => (
                    <Form className={styles.form} method='post'>
                        <Field type/>
                        <Field />
                        <Field/>
                    </Form>
                )}
            </Formik>


        </>
    )
}

export default FaleConosco