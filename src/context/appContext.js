import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  /* const [erro, setErro] = useState(false) */

  const [usuario, setUsuario] = useState({ id: 0, nome: '', email: '', senha: '', cpf: '', user_role: 'ALUNO', data_nascimento: '', sexo: 'Masculino', imagem: '' })

  const [curso, setCurso] = useState({ id: 0, nome: "", qtd_aulas: 0, data_publicacao: "", data_fechamento: "", imagem: "", professor: { id: 0 } })

  const [darkMode, setDarkMode] = useState(false)


  const handleUsuarioInputChange = e => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value })
  }

  const handleCursoInputChange = e => {
    setCurso({ ...curso, [e.target.name]: e.target.value })
  }


  return (
    <AppContext.Provider value={
      {
        darkMode,
        setDarkMode,
        /*  erro,
         setErro, */
        usuario,
        setUsuario,
        curso,
        setCurso,
        handleCursoInputChange,
        handleUsuarioInputChange
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)