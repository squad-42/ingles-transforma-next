import Head from 'next/head'

const cadastro = () => {
  return (
    <>
      <Head>
        <title>Cadastro</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section class="form-container">
          <form action="../home/index.html" id="form">
            <h3>Cadastrar</h3>
            <label>Nome <span>*</span></label>
            <input type="text" placeholder="Harry Potter" maxlength="100" class="box" id="name" required />
            <label>Email <span>*</span></label>
            <input type="email" placeholder="hp@email.com" maxlength="100" class="box" id="email" required />
            <label>Tipo <span>*</span></label>
            <select class="box" id="type" required>
              <option value="aluno">Aluno(a)</option>
              <option value="professor">Professor(a)</option>
            </select>
            <label>Senha <span>*</span></label>
            <input type="password" minlength="6" placeholder="Digite sua nova senha" maxlength="50" class="box"
              id="password" required />
            <label>Confirmar senha <span>*</span></label>
            <input type="password" minlength="6" placeholder="Confirme sua senha" maxlength="50" class="box"
              id="confPassword" required />
            <button type="submit" class="btn btn-dark-blue" id="btnSignUp">Confirmar</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default cadastro