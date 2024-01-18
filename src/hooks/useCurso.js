import { useAppContext } from '@/context/appContext'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'

const useCurso = () => {
  const router = useRouter()

  const URL = "http://localhost:8080/cursos"

  const { curso } = useAppContext()
  const [cursos, setCursos] = useState([])

  /*   const handleCursoInputChange = e => {
      setCurso({ ...curso, [e.target.name]: e.target.value })
    } */

  const listarCursos = async () => {
    axios.get(URL)
      .then(res => setCursos(res.data))
      .catch(err => console.log(err))
  }

  const criarCurso = async () => {
    axios.post(URL, curso)
      .then(console.log("Cadastro realizado!!!"))
      .catch(err => console.log("err"))
      .finally(() => listarCursos())
  }

  const editarCurso = async (id) => {
    axios.put(`${URL}/${id}`, curso)
      .then(() => {
        console.log("Registro editado!!!")
        router.reload()

      })
      .catch(err => console.log(err))

  }

  const deletarCurso = async (id) => {
    axios.delete(`${URL}/${id}`)
      .then(console.log("Curso deletado!!!"))
      .catch(err => console.log(err))
      .finally(() => listarCursos())
  }

  /*   const buscarCurso = (prof_id) => {
      const result = cursos.filter(curso => curso.professor.id === prof_id)
      console.log(prof_id)
      console.log(cursos)
       setCurso(curso) 
    } */

  return {
    cursos,
    criarCurso,
    listarCursos,
    editarCurso,
    deletarCurso,
  }
}

export default useCurso