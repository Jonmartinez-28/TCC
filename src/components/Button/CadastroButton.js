import Link from 'next/link';
import styles from '../../styles/Button/CadastroButton.module.css'

const CadastroButton = () => {
    return(
        <>  
            <button className={styles.cadastro} type='submit'> Cadastrar </button>
        </>
    )
}

export default CadastroButton;