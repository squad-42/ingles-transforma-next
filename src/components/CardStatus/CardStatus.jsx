import React from 'react'

const CardStatus = ({ icon, texto, numero }) => {
  return (
    <div className="box">
      <div className="flex">
        <i>{icon()}</i>
        <div className='text-start '>
          <h3>{numero}</h3>
          <span>{texto}</span>
        </div>
      </div>
    </div>
  )
}

export default CardStatus