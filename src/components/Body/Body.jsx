import { useAppContext } from '@/context/appContext'
import React from 'react'

const Body = ({ children }) => {
  const { darkMode } = useAppContext()
  return (
    <div className={`body ${darkMode ? 'dark' : ''}`}>
      {children}
    </div>
  )
}

export default Body