import React from 'react'

const CardCurso = ({ curso }) => {
  const { professor, nome, qtd_aulas, imagem, data_publicacao, data_fechamento } = curso
  return (
    <div className="box">
      <div className="tutor">
        <img src={professor.imagem} alt="" />
        <div className="info">
          <h3>{professor.nome}</h3>
          <span>{data_publicacao}</span>
        </div>
      </div>
      <div className="thumb">
        <img src={imagem} alt="" />
        <span>{qtd_aulas} videos</span>
      </div>
      <h3 className="title">{nome}</h3>
      <a href="/curso" className="btn btn-dark-blue" onclick="setCurso(${cod})">ver playslist</a>
    </div>
  )
}

export default CardCurso