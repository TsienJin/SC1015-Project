import '../styles/globals.css'
import 'tailwindcss/tailwind.css'


import Navbar from './components/common/navbar'
import Footer from './components/common/footer'


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
