import React from 'react'
import Link from 'next/link'
import { useAppContext } from '@/context/appContext'

const UserModal = ({ usuario, location }) => {
  const { setUsuario } = useAppContext()
  const { nome, imagem, user_role } = usuario
  return (
    <>
      <img src={imagem} alt="Foto de Perfil" className="object-fit-cover" />
      <h3 className="name">{nome}</h3>
      <p className="role text-capitalize text-center ">{`${user_role.toLowerCase()}(a)`}</p>
      <Link href={"/usuario"} className="btn d-block w-100 btn-dark-blue">Ver perfil</Link>
      {location === 'navbar' && <div className="d-flex gap-3 mt-3">
        <Link
          href={"/"}
          className="btn btn-orange"
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