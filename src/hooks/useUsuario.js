import { useAppContext } from '@/context/appContext'
import axios from 'axios'
import { useState } from 'react'

const useUsuario = () => {
  const URL = "http://localhost:8080/usuario"

  const { usuario, setErro } = useAppContext()

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

  return {
    mensagem,
    cadastrarUsuario
  }
}

export default useUsuario