import styles from '../../styles/Button/LoginButton.module.css'

const LoginButton= () => {
    return (
        <>
            <button className={styles.submit} id="Submit" type="submit"> Entrar </button>
        </>
    )
}

export default LoginButton;