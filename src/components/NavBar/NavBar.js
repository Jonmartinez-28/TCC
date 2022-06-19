import styles from '../../styles/NavBar/Nav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { signIn, signOut , useSession } from 'next-auth/react'

const NavBar = () => {
    const session = useSession;

    return (
        <>
            <div className={styles.navbar}>

                <div className={styles.logo}>
                    <Link href="/">
                        <a> <Image src="/img/Logo.png" width={"300vh"} height={"290vh"} alt="Logo do Site"/> </a>
                    </Link>
                </div>
                
                <div  className={styles.barra}>
                  <input type="text" name="Pesquisar" placeholder="Pesquisar" id="barra"></input>
                  <div className={styles.lupa}>
                         <Image src="/img/Lupa.png" width={"30vh"} height={"25vh"} alt="Lupa de Pesquisa" />
                  </div>
                </div>

                <div className={styles.burguermenu}>
                    <AiOutlineMenu />
                </div>

                <div className={styles.favoritos}>
                    <Image src="/img/Favoritos.png" width={"30vh"} height={"25vh"} alt="Produtos Favoritos" />
                </div>

                {!session ? (        
                    <div className={styles.perfil}>
                        <Image onClick={() => signOut()} src="/img/Perfil.png" width={"32vh"} height={"28vh"} alt="Minha Conta" />
                    </div>
                ) : (
                    <a onClick={() => signIn('google')} > Login </a>
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
