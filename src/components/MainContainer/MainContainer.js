import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import styles from '../../styles/MainContainer/mainContainer.module.css'
import favicon from '../../../public/favicon.ico'

const MainContainer = ({children}) => {
    return(
        <>
            <NavBar/>
                <div className={styles.menu}>{children}</div>
            <Footer />
        </>
    )
}

export default MainContainer;