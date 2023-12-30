import { Footer, Navbar, Sidebar } from "@/components";

import 'bootstrap/dist/css/bootstrap.css'

import '@/styles/globals.css'
import '@/styles/index.css'
import '@/styles/cursos.css'
import '@/styles/professores.css'
import '@/styles/contato.css'
import '@/styles/sobre.css'
/* import '@/styles/aulas.css' */
import '@/styles/videoaula.css'
import '@/styles/login.css'
import '@/styles/cadastro.css'

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
