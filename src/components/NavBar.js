import styles from '../styles/NavBar/Nav.module.css'
import Link from 'next/link'
import Image from 'next/image'

const NavBar = () => {
    return (
        <>
            <ul className={styles.navbar}>
                <li>
                    <Image src={"/img/apenasfantasma.png"} width={"100px"} height={"65px"} alt="Logo do Site"/>
                </li>
                <li>
                    <Link href="/login">
                        <a> Login </a>
                    </Link>
                </li>
            </ul>
            <ul className={styles.navbar2}>
                <li>
                    <Link href="/produtos">
                        <a> Produtos </a>
                    </Link>
                </li>
                <li>
                    <Link href="/quemsomos">
                        <a> Quem Somos </a>
                    </Link>
                </li>
                <li>
                    <Link href="/contatos">
                        <a> Contatos </a>
                    </Link>
                </li>
            </ul>
        </>
    )
} 

export default NavBar
