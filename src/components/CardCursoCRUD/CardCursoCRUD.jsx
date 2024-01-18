import { useAppContext } from '@/context/appContext'
import { useCurso } from '@/hooks'
import React from 'react'

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
      <a href="../aulas/aulas.html" className="btn btn-dark-blue object-fit-contain">Ver playlist</a>
    </div>
  )
}

export default CardCursoCRUD