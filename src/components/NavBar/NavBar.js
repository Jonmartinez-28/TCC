import styles from '../../styles/NavBar/Nav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { useSession, signOut } from 'next-auth/react'

const NavBar = () => {
    const { data: session } = useSession;
    const handleSignOut = () => signOut({ redirect: false })

    return (
        <>
            <div className={styles.navbar}>

                <div className={styles.logo}>
                    <Link href="/">
                        <a> <Image src="/img/Logo.png" height={"90vh"} width={"350vh"} alt="Logo do Site"/> </a>
                    </Link>
                </div>

                <div  className={styles.barra}>
                  <input type="text" name="Pesquisar" placeholder="Pesquisar" id="barra"></input>
                  <div className={styles.lupa}>
                         <Image src="/img/Lupa.png" height={"10vh"} width={"40vh"} alt="Lupa de Pesquisa" />
                  </div>
                </div>

                <div className={styles.burguermenu}>
                    <AiOutlineMenu />
                </div>

                <div className={styles.favoritos}>
                    <Image src="/img/Favoritos.png" height={"25vh"} width={"30vh"} alt="Produtos Favoritos"/>
                </div>
                
                {!session ? (
                    <Link href={"/login"}>
                        <a> Login </a>
                    </Link>
                ):(
                    <div className={styles.perfil}>
                        <Image src="/img/Perfil.png" height={"28vh"} width={"32vh"} alt="Minha Conta" />
                    </div>

                )}
                    

                <div className={styles.carrinho}>
                    <Image src="/img/carrinho.png" width={"30vh"} height={"25vh"} alt="Carrinho da Página" />
                </div>
                
            </div>

            <div className={styles.navBar}>
                <ul> 
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
                        <Link href="/faleconosco">
                            <a> Fale Conosco </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
} 

export default NavBar
