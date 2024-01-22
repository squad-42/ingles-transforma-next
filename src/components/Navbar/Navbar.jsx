import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FaSearch, FaBars, FaUser, FaMoon, FaSun } from "react-icons/fa";
import { LoginModal, UserModal } from '@/components';
import { useAppContext } from '@/context/appContext';

const Navbar = () => {
  const { usuario, setSidebarIsOpen, closeSidebar, openSidebar } = useAppContext()
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode, setDarkMode } = useAppContext()

  return (
    <header>
      <section className="d-flex align-items-center justify-content-between position-relative section-header">
        <Link href={"/"} className="logo">
          <Image
            src={` ${darkMode ? 'icons/logo-texto-branco.svg' : 'icons/logo-texto.svg'}`}
            width={80}
            height={54}
            alt='Logo'
          />
        </Link>

        <form action="" method="post" className="d-flex align-content-center search-form">
          <input type="text" name="search_box" placeholder="Buscar cursos" maxLength="100" required />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        <div className="icons">
          <div id="menu-btn" /* data-bs-toggle="offcanvas" data-bs-target="#sidebar" */ onClick={openSidebar}>
            <FaBars />
          </div>
          <div id="search-btn">
            <FaSearch />
          </div>
          <div id="user-btn" onClick={() => setIsOpen(prev => !prev)}>
            <FaUser />
          </div>
          <div id="toggle-btn" onClick={() => setDarkMode(prev => !prev)}>
            {!darkMode && <FaMoon />}
            {darkMode && <FaSun />}
          </div>
        </div>

        <div className={`profile position-absolute text-center ${isOpen ? 'active' : ''}`} id="profile-modal">
          {usuario.id == 0 ? <LoginModal /> : <UserModal usuario={usuario} location={'navbar'} />}
        </div>
      </section>
    </header>

  )
}

export default Navbar