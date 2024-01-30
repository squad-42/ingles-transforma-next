import { useAppContext } from '@/context/appContext'
import { useCurso } from '@/hooks'
import React from 'react'
import Link from 'next/link'

const CardCursoCRUD = ({ curso }) => {
  const { setCurso } = useAppContext()
  const { id, imagem, qtd_aulas, nome } = curso
  const { deletarCurso } = useCurso()
  return (
    <div className="box">
      <div className="tutor">
      </div>
      <div className="thumb">
        <img src={imagem} alt="" />
        <span>{qtd_aulas} videos</span>
      </div>
      <h3 className="title">{nome}</h3>
      <div className="flex">
        <button
          className="btn btn-orange"
          data-bs-toggle="modal"
          data-bs-target="#teste"
          onClick={() => setCurso(curso)}
        >Editar</button>
        <button
          className="btn btn-red"
          onClick={() => deletarCurso(id)}
        >Deletar</button>
      </div>
      <Link href={`/aulas`} className="btn btn-dark-blue" onClick={() => setCurso(curso)}
      >Ver playslist</Link>
    </div>
  )
}

export default CardCursoCRUD