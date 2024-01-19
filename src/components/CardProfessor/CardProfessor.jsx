import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCurso } from '@/hooks';

const CardProfessor = ({ professor }) => {
  const { id, nome, imagem } = professor
  /*   const { listarCursos, cursos } = useCurso() */

  /*  const [curso, setCurso] = useState({ id: 1, qtd_aulas: 10 }) */

  /*   useEffect(() => {
      listarCursos()
    }, []) */

  /* useEffect(() => {
    const result = cursos.filter(curso => curso.professor.id === id)
    setCurso(result[0])
    console.log(curso)
  }, [cursos]) */



  return (
    <div className="box">
      <div className="tutor">
        <img src={imagem} alt="" />
        <div className="info">
          <h3 className="title">{nome}</h3>
          <span>Professor</span>
        </div>
      </div>
      <div className="stats">
        <p>Playlist: <span>1</span></p>
        {/* <p>Nº de vídeos: <span>{qtd_aulas}</span></p> */}
        <Link href={`/professor/${professor.id}`}>
          <span className="btn btn-dark-blue">Ver perfil</span>
        </Link>
      </div>
    </div>
  )
}

export default CardProfessor