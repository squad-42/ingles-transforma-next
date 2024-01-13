import React from 'react';
import { CardProfessor, CardCurso } from '@/components';
import * as data from '../constants/data';

const professor = () => {
    const professorData = data.listaCursos;
  const cursoData = data.listaCursos;
    return (
    <>
    <section>
        <div>
            <h1 className="heading">Perfil</h1>
        </div>
    </section>
        <div className="details">
        <CardProfessor professor={professorData} />
        </div>
    <section className="container" id="courses">
            <h2 className="heading">Cursos</h2>
        <div className="box-container">
        <CardCurso curso={cursoData} />
        </div>
    </section>
    </>
  )
}

export default professor