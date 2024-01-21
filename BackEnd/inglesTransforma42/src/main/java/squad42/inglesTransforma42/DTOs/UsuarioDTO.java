package squad42.inglesTransforma42.DTOs;

import squad42.inglesTransforma42.enums.UserType;
import squad42.inglesTransforma42.model.Aluno;
import squad42.inglesTransforma42.model.Professor;

import java.util.Date;

public record UsuarioDTO(int id, String nome, String email, String senha, String cpf, UserType user_role, Date data_nascimento, String sexo, String imagem) {
    public UsuarioDTO(Aluno aluno){
        this(aluno.getId(), aluno.getNome(), aluno.getEmail(), aluno.getSenha(), aluno.getCpf(), aluno.getUser_role(), aluno.getData_nascimento(), aluno.getSexo(), aluno.getImagem());
    }

    public UsuarioDTO(Professor professor){
        this(professor.getId(), professor.getNome(), professor.getEmail(), professor.getSenha(), professor.getCpf(), professor.getUser_role(), professor.getData_nascimento(), professor.getSexo(), professor.getImagem());
    }
}
