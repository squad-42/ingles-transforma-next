import { useAppContext } from '@/context/appContext'
import axios from 'axios'
import { useState } from 'react'

const useCurso = () => {
  const URL = "http://localhost:8080/cursos"

  const { curso, setValido, setCursos, setQtdCursos } = useAppContext()
  /*  const [cursos, setCursos] = useState([]) */

  const { nome, qtd_aulas, data_publicacao, data_fechamento, imagem } = curso

  const validarCurso = () => {
    if (nome != '' && qtd_aulas != 0 && data_publicacao != '' && data_fechamento != '' && imagem != '') {
      setValido(true)
    } else {
      setValido(false)
    }
  }

  const listarCursos = async () => {
    axios.get(URL)
      .then(res => setCursos(res.data))
      .catch(err => console.log(err))
      .finally(() => console.log("Listando..."))
  }

  const criarCurso = async () => {
    axios.post(URL, curso)
      .then(() => {
        console.log("Cadastro realizado!!!")
        setQtdCursos(prev => prev + 1)
      })
      .catch(err => console.log("err"))
      .finally(() => listarCursos())
  }

  const editarCurso = async (id) => {
    axios.put(`${URL}/${id}`, curso)
      .then(() => console.log("Registro editado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarCursos())
  }

  const deletarCurso = async (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => {
        console.log("Curso deletado!!!")
        setQtdCursos(prev => prev - 1)
      })
      .catch(err => console.log(err))
      .finally(() => listarCursos())
  }

  return {
    criarCurso,
    listarCursos,
    editarCurso,
    deletarCurso,
    validarCurso
  }
}

export default useCurso