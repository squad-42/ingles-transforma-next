import { sidebarOptions } from '@/constants/data'
import React, { useState } from 'react'
import Link from 'next/link'
import { MdLogout } from "react-icons/md";
import { LoginModal, UserModal } from '@/components';
import { useAppContext } from '@/context/appContext';

const Sidebar = () => {
  const { usuario, setUsuario, darkMode, sidebarIsOpen, closeSidebar, animation } = useAppContext()


  return (
    <>
      <div className={`offcanvas offcanvas-start ${animation} ${darkMode ? 'text-bg-dark' : ''} ${sidebarIsOpen ? 'show' : ''}`} tabIndex="-1" id="sidebar">
        <div className="profile text-center" id="profile-sidebar">
          {usuario.id == 0 ? <LoginModal /> : <UserModal usuario={usuario} location={'sidebar'} />}
        </div>
        <nav className="navbar d-flex flex-column align-items-start justify-content-around ">
          {sidebarOptions.map(({ texto, icone, link }, i) => (
            <Link
              key={i}
              href={link}
              onClick={closeSidebar}
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
      {sidebarIsOpen && <div className={`offcanvas-backdrop fade show`} onClick={closeSidebar}></div>}
    </>
  )
}

export default Sidebar