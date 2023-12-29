import React from 'react'

const CardSobre = ({ card }) => {
  const { img, titulo, texto } = card
  return (
    <div className="col-md-4">
      <div className="main">
        <div className="service">
          <div className="service-logo">
            <img src={`${img}.png`} alt="" />
          </div>
          <h4>{titulo}</h4>
          <p>{texto}</p>
        </div>
        <div className="sombra1"></div>
        <div className="sombra2"></div>
      </div>
    </div>
  )
}

export default CardSobre