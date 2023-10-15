import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '@/components/nav';
export default function App({ Component, pageProps }) {
  return (
  <>
  <Nav/>
  <Component {...pageProps} />

  </>
  )
}
