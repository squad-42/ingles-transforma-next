import { Footer, Navbar, Sidebar } from "@/components";

import 'bootstrap/dist/css/bootstrap.css'

import '@/styles/globals.css'
import '@/styles/index.css'
import '@/styles/contato.css'
import '@/styles/sobre.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
