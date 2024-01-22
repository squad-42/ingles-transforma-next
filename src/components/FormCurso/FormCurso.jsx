import { useAppContext } from '@/context/appContext'
import { useCurso } from '@/hooks'
import React, { useEffect } from 'react'

const FormCurso = () => {
  const { curso, handleCursoInputChange, usuario, valido } = useAppContext()
  const { id, nome, qtd_aulas, data_publicacao, data_fechamento, imagem } = curso
  const { criarCurso, editarCurso, validarCurso } = useCurso()

  useEffect(() => {
    validarCurso()
  }, [curso])

  return (
    <div className="modal fade" id="teste" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header" >
            <h1 className="modal-title" id="exampleModalLabel">
              {id == 0 ? 'Cadastrar' : 'Atualizar'} curso
            </h1>
            <div data-bs-theme="dark">
              <button type="button" className="btn-close" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
          </div>
          <div className="px-5 mt-3">
            <form className="d-flex flex-column">
              <div className="mb-3">
                <input type="text" id="id" name="id" className="form-control" hidden value={id} readOnly />
              </div>

              <div className="mb-3">
                <input type="text" id="id" name="id" className="form-control" value={usuario.id} hidden readOnly />
              </div>

              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome:</label>
                <input type="text" id="nome" name="nome" className="form-control" onChange={handleCursoInputChange} value={nome} />
              </div>

              <div className="mb-3">
                <label htmlFor="qtd_aulas" className="form-label">Quantidade de aulas:</label>
                <input type="number" id="qtd_aulas" name="qtd_aulas" className="form-control" onChange={handleCursoInputChange} value={qtd_aulas} min={0} />
              </div>

              <div className="mb-3">
                <label htmlFor="dataPublicacaoo" className="form-label">Data de publicação:</label>
                <input type="date" id="data" name="data_publicacao" className="form-control" onChange={handleCursoInputChange} value={data_publicacao} />
              </div>

              <div className="mb-3">
                <label htmlFor="dataFechamento" className="form-label">Data de fechamento:</label>
                <input type="date" id="dataFechamento" name="data_fechamento" className="form-control" onChange={handleCursoInputChange} value={data_fechamento} />
              </div>

              <div className="mb-3">
                <label htmlFor="capa" className="form-label">Capa do curso:</label>
                <input type="text" id="capa" name="imagem" className="form-control" onChange={handleCursoInputChange} value={imagem} />
              </div>

              <div className="d-flex gap-2 justify-content-end mb-3">
                <a type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</a>
                <a
                  className={`btn btn-primary ${valido ? '' : 'disabled'}`}
                  data-bs-dismiss="modal"
                  onClick={() => id == 0 ? criarCurso() : editarCurso(id)}
                >
                  {id == 0 ? 'Cadastrar' : 'Atualizar'}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormCurso