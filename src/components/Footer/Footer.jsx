import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="position-sticky bottom-0 end-0 start-0">
      &copy; 2023. Desenvolvido por <Link target='_blank' href={'https://github.com/squad-42'}>Squad 42</Link> | Todos os direitos reservados!
    </footer>
  )
}

export default Footer