import NavBar from './NavBar'
import Footer from './Footer'
import styles from '../styles/MainContainer/mainContainer.module.css'
import favicon from '../../public/favicon.ico'

const MainContainer = ({children}) => {
    return(
        <>
            <NavBar/>
            <div className={styles.container}>{children}</div>
            <Footer />
        </>
    )
}

export default MainContainer