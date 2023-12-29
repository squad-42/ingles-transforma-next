import React from 'react'

const CardProfessor = ({ professor }) => {
  const { prof, profPic, numDeVid } = professor
  return (
    <div class="box">
      <div class="tutor">
        <img src={`pic-${profPic}.jpg`} alt="" />
        <div className="info">
          <h3 class="title">{prof}</h3>
          <span>Professor</span>
        </div>
      </div>
      <div class="stats">
        <p>Playlist: <span>1</span></p>
        <p>Nº de vídeos: <span>{numDeVid}</span></p>
        <a href="../professor/professor.html" class="btn btn-dark-blue" onclick="setCurso(${cod})">Ver perfil</a>
      </div>
    </div>
  )
}

export default CardProfessor