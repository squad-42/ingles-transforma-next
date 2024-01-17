import { sidebarOptions } from '@/constants/data'
import React, { useState } from 'react'
import Link from 'next/link'
import { MdLogout } from "react-icons/md";
import { LoginModal, UserModal } from '@/components';
import { useAppContext } from '@/context/appContext';

const Sidebar = () => {
  /* const [usuario, setUsuario] = useState(true) */
  const { usuario, setUsuario } = useAppContext()


  return (
    <div className="sidebar">
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebar">
        <div className="profile text-center" id="profile-sidebar">
          {usuario.id == 0 ? <LoginModal /> : <UserModal usuario={usuario} location={'sidebar'} />}
        </div>
        <nav className="navbar d-flex flex-column align-items-start justify-content-around ">
          {sidebarOptions.map(({ texto, icone, link }, i) => (
            <Link
              key={i}
              href={link}
            >
              <i>{icone()}</i>
              <span>{texto}</span>
            </Link>
          ))}
          {
            usuario.id != 0 &&
            <Link
              href={'/'}
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
              })}
            >
              <i><MdLogout /></i>
              <span>Logout</span>
            </Link>
          }

        </nav>
      </div >
    </div>
  )
}

export default Sidebar