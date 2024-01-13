import axios from 'axios'
import { useState } from 'react'

const useProfessores = () => {
  const [professores, setProfessores] = useState([])

  const URL = "http://localhost:8080/professores"

  const listarProfessores = async () => {
    axios.get(URL)
      .then(res => setProfessores(res.data))
      .catch(err => console.log(err))
  }

  return {
    professores,
    listarProfessores
  }
}

export default useProfessores