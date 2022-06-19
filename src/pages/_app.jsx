import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'
import MainContainer from '../components/MainContainer/MainContainer'

const MyApp = ({ Component, pageProps: { session, ...pageProps} }) => {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </SessionProvider>
  )
}

export default MyApp;