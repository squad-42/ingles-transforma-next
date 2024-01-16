import { useAppContext } from '@/context/appContext'
import axios from 'axios'
import { useState } from 'react'

const useUsuario = () => {
  const URL = "http://localhost:8080/usuario"

  const { usuario, setUsuario, setErro } = useAppContext()

  const [mensagem, setMensagem] = useState('')

  const cadastrarUsuario = async () => {
    console.log(usuario)
    axios.post(`${URL}/cadastro`, usuario)
      .then(() => console.log("Usuario cadastrado."))
      .catch(err => {
        console.error(err.response.data.mensagem)
        setMensagem(err.response.data.mensagem)
        setErro(true)
      })
  }

  const logarUsuario = async (email, senha) => {
    axios.post(`${URL}/login`, { email: email, senha: senha })
      .then(res => {
        setUsuario(res.data)
        console.log("Usuario logado")

      })
      .catch(err => console.error(err.response.data))
  }

  return {
    mensagem,
    cadastrarUsuario,
    logarUsuario
  }
}

export default useUsuario