import { useAppContext } from '@/context/appContext'
import axios from 'axios'

const useUsuario = () => {
  const URL = "http://localhost:8080/usuario"

  const { usuario } = useAppContext()

  const cadastrarUsuario = async () => {
    console.log(usuario)
    axios.post(URL, usuario)
      .then(() => console.log("Usuario cadastrado."))
      .catch(err => console.log(err))
  }

  return {
    cadastrarUsuario
  }
}

export default useUsuario