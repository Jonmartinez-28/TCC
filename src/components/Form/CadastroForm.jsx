import { useFormik ,Formik, Form, Field} from 'formik'
import getServerSideProps from '../../pages/api/CadastroUsuario'
import styles from '../../styles/Cadastro/Cadastro.module.css'


const initialValues = {
    nome: '',
    email: '',
    senha: '',
}

const onSubmit = values => {
    console.log("Form data" + values)
}

const validate = values => {
    let errors = {};

    if(!values.name){
        errors.name = "Nome requirido"
    }

    if(!values.email){
        errors.name = " Email requrido Requirido"
    }
    
    if(!values.senha){
        errors.name = "Senha Requirida"
    }
    
    return errors
}

const CadastroForm = () =>{

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });
    

    return(
        <>
            <Formik>

                {() => (
                    <Form className={styles.form} onSubmit={getServerSideProps}>

                        <Field 
                            type="text" 
                            name="nome" 
                            placeholder="Digite seu Nome Completo" 
                            id="nome" 
                            onChange={formik.handleChange} 
                            value={formik.values.name} 
                        />

                        <Field 
                            type="email" 
                            mame="email" 
                            placeholder="Digite seu Email" 
                            id="email" 
                            onChange={formik.handleChange} 
                            value={formik.values.email}
                        />

                        <Field 
                            type="password" 
                            name="senha" 
                            placeholder="Senha" 
                            id="senha" 
                            onChange={formik.handleChange} 
                            value={formik.values.senha}
                        />

                        <button className={styles.cadastro} type='submit' name="cadastrar" id="cadastrar"> 
                            Cadastrar
                        </button>

                    </Form>
                )}

            </Formik>
        </>
    )
}

export default CadastroForm