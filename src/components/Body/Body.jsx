import { useAppContext } from '@/context/appContext'
import React from 'react'

const Body = ({ children }) => {
  const { darkMode } = useAppContext()
  return (
    <body className={darkMode ? 'dark' : ''}>
      {children}
    </body>
  )
}

export default Body