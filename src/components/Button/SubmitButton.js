import { signIn } from 'next-auth/react'
import styles from '../../styles/Button/SubmitButton.module.css'

const SubmitButton = () => {
    return <button className={styles.submit} id="Submit" onClick={() => signIn('email')}> Entrar </button>
}

export default SubmitButton;