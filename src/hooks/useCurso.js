import axios from 'axios'
import { useState } from 'react'

const useCurso = () => {

  const URL = "http://localhost:8080/cursos"

  const [curso, setCurso] = useState({})
  const [cursos, setCursos] = useState([])

  const handleCursoInputChange = e => {
    setCurso({ ...curso, [e.target.name]: e.target.value })
  }

  const listarCursos = async () => {
    axios.get(URL)
      .then(res => setCursos(res.data))
      .catch(err => console.log(err))
  }

  const criarCurso = async () => {
    axios.post(URL, curso)
      .then(console.log("Cadastro realizado!!!"))
      .catch(err => console.log("err"))
  }

  const editarCurso = async (id) => {
    axios.put(`${URL}/${id}`)
      .then(() => console.log("Registro editado!!!"))
      .catch(err => console.log(err))
  }

  const deletarCurso = async (id) => {
    axios.put(`${URL}/${id}`)
      .then(() => console.log("Curso deletado!!!"))
      .catch(err => console.log(err))
  }

  const buscarCurso = (prof_id) => {
    const result = cursos.filter(curso => curso.professor.id === prof_id)
    console.log(prof_id)
    console.log(cursos)
    setCurso(curso)
  }

  return {
    cursos,
    setCurso,
    handleCursoInputChange,
    criarCurso,
    listarCursos,
    editarCurso,
    deletarCurso,
    buscarCurso
  }
}

export default useCurso