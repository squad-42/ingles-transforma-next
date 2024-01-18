import React from 'react'
import Link from 'next/link'

const LoginModal = () => {
  return (
    <>
      <h3 className="name">Por favor logar ou registrar</h3>
      <div className="d-flex gap-3 mt-3">
        <Link href={"/login"} className="btn btn-orange">Login</Link>
        <Link href={"/cadastro"} className="btn btn-orange">Registrar</Link>
      </div>
    </>
  )
}

export default LoginModal