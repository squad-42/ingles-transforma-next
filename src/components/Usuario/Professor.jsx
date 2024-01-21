import React, { useEffect } from 'react'
import { CardCursoCRUD, FormCurso } from '@/components'
import { useAppContext } from '@/context/appContext'
import { useCurso } from '@/hooks'

const Professor = () => {
  const { setCurso, usuario, cursos } = useAppContext()
  const { listarCursos } = useCurso()

  useEffect(() => {
    listarCursos()
  }, [])

  return (
    <>
      <div className="box" style={{ height: "fit-content" }}>
        <h3 className="title text-center">Adicionar nova playlist</h3>
        <button
          className="btn btn-dark-blue object-fit-contain"
          data-bs-toggle="modal"
          data-bs-target="#teste"
          onClick={() => setCurso({ id: 0, nome: "", qtd_aulas: 0, data_publicacao: "", data_fechamento: "", imagem: "", professor: { id: usuario.id } })}
        >
          Adicionar
        </button>
        <FormCurso />
      </div>
      <>
        {cursos.map((curso) => (
          curso.professor.id === usuario.id && <CardCursoCRUD curso={curso} key={curso.id} />
        ))}

      </>
    </>
  )
}

export default Professor