import React from 'react';
import Link from 'next/link';

const CardProfessor = ({ professor }) => {
  const { prof, profPic, numDeVid } = professor
  return (
    <div className="box">
      <div className="tutor">
        <img src={`pic-${profPic}.jpg`} alt="" />
        <div className="info">
          <h3 className="title">{prof}</h3>
          <span>Professor</span>
        </div>
      </div>
      <div className="stats">
        <p>Playlist: <span>1</span></p>
        <p>Nº de vídeos: <span>{numDeVid}</span></p>
        <Link href={`/professor/${professor.cod}`}>
          <span className="btn btn-dark-blue">Ver perfil</span>
        </Link>
      </div>
    </div>
  )
}

export default CardProfessor