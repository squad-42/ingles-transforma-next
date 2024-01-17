import React from 'react'
import Link from 'next/link'
import { useAppContext } from '@/context/appContext'

const UserModal = ({ usuario, location }) => {
  const { setUsuario } = useAppContext()
  const { nome, imagem, user_role } = usuario
  return (
    <>
      <img src={imagem} alt="Foto de Perfil" class="object-fit-cover" />
      <h3 class="name">{nome}</h3>
      <p class="role text-capitalize text-center ">{user_role.toLowerCase()}</p>
      <Link href={"/usuario"} class="btn d-block w-100 btn-dark-blue">Ver perfil</Link>
      {location === 'navbar' && <div class="d-flex gap-3 mt-3">
        <Link
          href={"/"}
          class="btn btn-orange"
          onClick={() => setUsuario({
            id: 0,
            nome: '',
            email: '',
            senha: '',
            cpf: '',
            user_role: 'ALUNO',
            data_nascimento: '',
            sexo: 'Masculino',
            imagem: ''
          })}>Logout</Link>
      </div>}
    </>
  )
}

export default UserModal