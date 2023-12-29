import { CardProfessor } from '@/components'
import { listaCursos } from '@/constants/data'
import Head from 'next/head'

const professores = () => {
  return (
    <>
      <Head>
        <title>Professores</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section class="teachers">
          <h1 class="heading">Professores</h1>

          <div class="box-container">
            <div class="box offer">
              <h3 class="title">Se torne um tutor</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, corporis?</p>
              <a href="" class="btn btn-dark-blue">Começar</a>
            </div>

            {listaCursos.map((professor, i) => (
              <CardProfessor
                key={i}
                professor={professor}
              />
            ))}

          </div>

        </section>
      </main>
    </>
  )
}

export default professores