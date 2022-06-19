import '../styles/globals.css'
import MainContainer from '../components/MainContainer'

const MyApp = ({ Component, pageProps }) => {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
