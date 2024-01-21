package squad42.inglesTransforma42.DTOs;

import squad42.inglesTransforma42.model.Curso;
import squad42.inglesTransforma42.model.Professor;

import java.util.Date;

public record CursoDTO(int id, String nome, int qtd_aulas, String imagem, String data_publicacao, String data_fechamento, Professor professor) {
    public CursoDTO(Curso curso){
        this(curso.getId(), curso.getNome(), curso.getQtd_aulas(), curso.getImagem(), curso.getData_publicacao(), curso.getData_fechamento(), curso.getProfessor());
    }
}
