import { useAppContext } from '@/context/appContext'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

const useUsuario = () => {
  const URL = "http://localhost:8080/usuario"
  const router = useRouter()

  const [erro, setErro] = useState(false)
  const { usuario, setUsuario, setValido } = useAppContext()
  const [mensagem, setMensagem] = useState('')

  const { nome, email, senha, cpf, data_nascimento, imagem } = usuario


  const validarUsuario = () => {
    if (nome != '' && email != '' && senha != '' && cpf != '' && data_nascimento != '' && imagem != '') {
      setValido(true)
    } else {
      setValido(false)
    }
  }

  const validarLogin = () => {
    if (email != '' && senha != '') {
      setValido(true)
    } else {
      setValido(false)
    }
  }



  const cadastrarUsuario = async () => {
    console.log(usuario)
    axios.post(`${URL}/cadastro`, usuario)
      .then(() => {
        console.log("Usuario cadastrado.")
        router.push('/')
      })
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
        router.push('/')
      })
      .catch(err => {
        console.error(err.response.data.mensagem)
        setMensagem(err.response.data.mensagem)
        setErro(true)
      })
  }

  return {
    erro,
    setErro,
    mensagem,
    cadastrarUsuario,
    logarUsuario,
    validarUsuario,
    validarLogin
  }
}

export default useUsuario