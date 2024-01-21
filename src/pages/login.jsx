import { useAppContext } from '@/context/appContext'
import { useUsuario } from '@/hooks'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const login = () => {
  const { usuario, valido, setValido } = useAppContext()
  const { logarUsuario, mensagem, erro, setErro } = useUsuario()
  const [login, setLogin] = useState({ email: '', senha: '' })

  const handleInputChange = e => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const { email, senha } = login

  useEffect(() => {
    setErro(false)
    setLogin(false)
  }, [])

  useEffect(() => {
    console.log(usuario)
  }, [usuario])

  useEffect(() => {
    if (email != '' && senha != '') {
      setValido(true)
    } else {
      setValido(false)
    }
  }, [login])

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="form-container">
          <div id="form">
            <h3>Login</h3>
            <label>Email</label>
            <input type="email" placeholder="hp@email.com" maxLength="100" className="box" id="inpEmail" name="email" value={email} onChange={handleInputChange} required />
            <label>Senha</label>
            <input type="password" placeholder="Digite sua nova senha" maxLength="50" minLength={6} className="box" id="inpPassword" name="senha" value={senha} onChange={handleInputChange} required />
            {erro && <h2 className="alert alert-danger" role="alert">{mensagem}</h2>}
            <button type="submit" className={`btn btn-dark-blue ${valido ? '' : 'disabled'}`} id="btnLogin" onClick={() => logarUsuario(email, senha)}>Login</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default login