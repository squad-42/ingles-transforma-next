import { useAppContext } from '@/context/appContext'
import { useUsuario } from '@/hooks'
import Head from 'next/head'
import { useEffect } from 'react'

const cadastro = () => {
  const { usuario, handleUsuarioInputChange, erro, setErro } = useAppContext()
  const { nome, email, senha, data_nascimento, imagem, sexo, cpf, user_role } = usuario
  const { cadastrarUsuario, mensagem } = useUsuario()

  useEffect(() => {
    setErro(false)
  }, [])

  return (
    <>
      <Head>
        <title>Cadastro</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="form-container">
          <div id="form">
            <h3>Cadastrar</h3>
            <select className="box" id="type" name='user_role' value={user_role} onChange={handleUsuarioInputChange} required>
              <option value="ALUNO">Aluno(a)</option>
              <option value="PROFESSOR">Professor(a)</option>
            </select>
            <label>Nome <span>*</span></label>
            <input type="text" placeholder="Harry Potter" maxLength="100" className="box" id="name" name='nome' value={nome} onChange={handleUsuarioInputChange} required />
            <label>Email <span>*</span></label>
            <input type="email" placeholder="hp@email.com" maxLength="100" className="box" id="email" name='email' value={email} onChange={handleUsuarioInputChange} required />
            <label>CPF <span>*</span></label>
            <input type="text" placeholder="CPF" maxLength="100" className="box" name='cpf' required value={cpf} onChange={handleUsuarioInputChange} />
            <label>Data de Nascimento <span>*</span></label>
            <input type="date" className="box" name="data_nascimento" value={data_nascimento} onChange={handleUsuarioInputChange} required />
            <label>Sexo <span>*</span></label>
            <select className="box" name="sexo" value={sexo} onChange={handleUsuarioInputChange} required>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Nao_binario">Não Binário</option>
            </select>
            <label>Imagem <span>*</span></label>
            <input type="text" placeholder="Link da imagem" maxLength="100" className="box" name='imagem' required value={imagem} onChange={handleUsuarioInputChange} />
            <label>Senha <span>*</span></label>
            <input type="password" minLength="6" placeholder="Digite sua nova senha" name='senha' maxLength="50" className="box" id="password" value={senha} onChange={handleUsuarioInputChange} required />
            <label>Confirmar senha <span>*</span></label>
            <input type="password" minLength="6" placeholder="Confirme sua senha" maxLength="50" className="box" id="confPassword" required />
            {erro && <h2 className="alert alert-danger" role="alert">{mensagem}.</h2>}
            <button type="submit" className="btn btn-dark-blue" id="btnSignUp" onClick={() => cadastrarUsuario()}>Confirmar</button>
          </div>
        </section>
      </main>
    </>
  )
}

export default cadastro