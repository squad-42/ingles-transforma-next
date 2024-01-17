import React from 'react'
import Link from 'next/link'

const LoginModal = () => {
  return (
    <>
      <h3 class="name">Por favor logar ou registrar</h3>
      <div class="d-flex gap-3 mt-3">
        <Link href={"/login"} class="btn btn-orange">Login</Link>
        <Link href={"/cadastro"} class="btn btn-orange">Registrar</Link>
      </div>
    </>
  )
}

export default LoginModal