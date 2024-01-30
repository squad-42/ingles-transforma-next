import { CardAula, CardCurso } from '@/components'
import { useAppContext } from '@/context/appContext'
import React, { useEffect } from 'react'
import aula from './aula'

const aulas = () => {
  const { curso, cursoSelecionado } = useAppContext()
  const { id, professor, nome, qtd_aulas, imagem, data_publicacao } = curso
  const aulas = Array.from({ length: qtd_aulas })

  useEffect(() => {
    console.log(cursoSelecionado)
  }, [])
  return (
    <main id='aulas'>


      <section class="playlist">
        <h1 class="heading" style={{ textAlign: 'center' }}>Detalhes da playlist</h1>

        <div class="row">
          <div class="col">
            <form action="" method="post" class="save-list">
              <button type="submit"><i class="far fa-bookmark"></i><span>salvar playlist</span></button>
            </form>
            <div class="thumb">
              <span>{qtd_aulas} vídeos</span>
              <img src={imagem} alt="" />
            </div>
          </div>

          <div class="col">
            <div class="tutor">
              <img src={professor.imagem} alt="" />
              <div>
                <h3>{professor.nome}</h3>
                <span>Professor</span>
              </div>
            </div>

            <div class="details">
              <h3>{nome}</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nostrum ipsum ut possimus veritatis
                fuga!</p>
              <div class="date">
                <i class="fas fa-calendar">
                  <span>{data_publicacao}</span>
                </i>
              </div>
            </div>
          </div>
        </div>


      </section>
      <section class="video-container">
        <h2 class="heading" style={{ textAlign: 'center' }}>Playlist</h2>

        <div class="box-container">
          {aulas.map((_, i) => (
            <CardAula
              key={i}
              imagem={imagem}
              i={i}
              curso={nome}
            />
          ))}
        </div>
      </section>
    </main>
  )
}

export default aulas