import React from 'react'
import Link from 'next/link'

const UserModal = ({ usuario }) => {
  const { id, nome, imagem, user_role } = usuario
  return (
    <>
      <img src={imagem} alt="Foto de Perfil" class="object-fit-cover" />
      <h3 class="name">{nome}</h3>
      <p class="role text-capitalize text-center ">{user_role.toLowerCase()}</p>
      <Link href={"/usuario"} class="btn d-block w-100 btn-dark-blue">Ver perfil</Link>
    </>
  )
}

export default UserModal