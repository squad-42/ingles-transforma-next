import React from 'react'

const CardCurso = ({ curso }) => {
  const { prof, data, numDeVid, nome, profPic, thumb } = curso
  return (
    <div className="box">
      <div className="tutor">
        <img src={`pic-${profPic}.jpg`} alt="" />
        <div className="info">
          <h3>{prof}</h3>
          <span>{data}</span>
        </div>
      </div>
      <div className="thumb">
        <img src={`thumb-${thumb}.png`} alt="" />
        <span>{numDeVid} videos</span>
      </div>
      <h3 className="title">{nome}</h3>
      <a href="/curso" className="btn btn-dark-blue" onclick="setCurso(${cod})">ver playslist</a>
    </div>
  )
}

export default CardCurso