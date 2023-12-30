import { sidebarOptions } from '@/constants/data'
import React, { useState } from 'react'
import Link from 'next/link'
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const [usuario, setUsuario] = useState(1)
  return (
    <div className="sidebar">
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebar">
        <div className="profile text-center" id="profile-sidebar">
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
            usuario != null &&
            <Link
              href={'/'}
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