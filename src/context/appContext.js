import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({ id: 0, nome: '', email: '', senha: '', cpf: '', user_role: 'ALUNO', data_nascimento: '', sexo: 'Masculino', imagem: '' })

  const handleUsuarioInputChange = e => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value })
  }


  return (
    <AppContext.Provider value={
      {
        usuario,
        setUsuario,
        handleUsuarioInputChange
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)