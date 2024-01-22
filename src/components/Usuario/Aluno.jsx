import React, { useEffect } from 'react'
import { CardCurso } from '..'
import { useCurso } from '@/hooks'
import { useAppContext } from '@/context/appContext'

const Aluno = () => {
  const { cursos } = useAppContext()
  const { listarCursos } = useCurso()
  useEffect(() => {
    listarCursos()
  }, [])
  return (
    <>
      <CardCurso curso={cursos[1]} />
      <CardCurso curso={cursos[2]} />
      <CardCurso curso={cursos[3]} />
    </>
  )
}

export default Aluno