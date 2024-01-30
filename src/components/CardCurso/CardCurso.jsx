import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useAppContext } from '@/context/appContext'

const CardCurso = ({ curso }) => {
  const { id, professor, nome, qtd_aulas, imagem, data_publicacao } = curso
  const { setCurso } = useAppContext()
  return (
    <div className="box">
      <div className="tutor">
        <img
          src={professor.imagem}
          alt="professor"
          className='object-fit-cover'
        />
        <div className="info">
          <h3>{professor.nome}</h3>
          <span>{data_publicacao}</span>
        </div>
      </div>
      <div className="thumb">
        <img src={imagem} alt="curso" />
        <span>{qtd_aulas} videos</span>
      </div>
      <h3 className="title">{nome}</h3>
      <Link href={`/aulas`} className="btn btn-dark-blue" onClick={() => setCurso(curso)}
      >ver playslist</Link>
    </div>
  )
}

export default CardCurso