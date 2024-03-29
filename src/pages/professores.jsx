import React, { useEffect } from 'react';
import Link from 'next/link';
import { CardProfessor } from '@/components'
//import { listaCursos } from '@/constants/data'
import Head from 'next/head'
import { useCurso, useProfessores } from '@/hooks';

const professores = () => {
  const { professores, listarProfessores } = useProfessores()
  const { listarCursos } = useCurso()

  useEffect(() => {
    listarCursos()
    listarProfessores()
  }, [])
  return (
    <>
      <Head>
        <title>Professores</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <section className="teachers">
          <h1 className="heading">Professores</h1>

          <div className="box-container">
            <div className="box offer">
              <h3 className="title">Se torne um tutor</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, corporis?</p>
              <a href="" className="btn btn-dark-blue">Começar</a>
            </div>

            {professores.map((professor, i) => (
              <CardProfessor professor={professor} />
            ))}

          </div>

        </section>
      </main>
    </>
  )
}

export default professores