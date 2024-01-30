import React from 'react'

const CardAula = ({ curso, i, imagem }) => {

  return (
    <a href="../videoaula/videoaula.html" class="box">
      <i class="fas fa-play"></i>
      <img src={imagem} alt="" />
      <span>Aula {i + 1}</span>
      <h3>{curso}</h3>
    </a>
  )
}

export default CardAula