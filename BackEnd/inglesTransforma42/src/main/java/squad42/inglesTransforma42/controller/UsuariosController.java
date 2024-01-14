package squad42.inglesTransforma42.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import squad42.inglesTransforma42.model.Aluno;
import squad42.inglesTransforma42.model.Professor;
import squad42.inglesTransforma42.model.Usuario;
import squad42.inglesTransforma42.repository.AlunoRepository;
import squad42.inglesTransforma42.repository.ProfessorRepository;

@RestController
@RequestMapping("/cadastro")
public class UsuariosController {
@Autowired
    private AlunoRepository alunoRepository;
@Autowired
    private ProfessorRepository professorRepository;

@PostMapping
    public void cadastrarUsuario(@RequestBody Usuario usuario){
    if(usuario.getUser_role().equals("ALUNO")){
        Aluno aluno = new Aluno();
        aluno.setNome(usuario.getNome());
        aluno.setEmail(usuario.getEmail());
        aluno.setSenha(usuario.getSenha());
        aluno.setCpf(usuario.getCpf());
        aluno.setData_nascimento(usuario.getData_nascimento());
        aluno.setSexo(usuario.getSexo());
        aluno.setUser_role(usuario.getUser_role());
        aluno.setImagem(usuario.getImagem());

        alunoRepository.save(aluno);
    }else{
        Professor professor = new Professor();
        professor.setNome(usuario.getNome());
        professor.setEmail(usuario.getEmail());
        professor.setSenha(usuario.getSenha());
        professor.setCpf(usuario.getCpf());
        professor.setData_nascimento(usuario.getData_nascimento());
        professor.setSexo(usuario.getSexo());
        professor.setUser_role(usuario.getUser_role());
        professor.setImagem(usuario.getImagem());

        professorRepository.save(professor);
    }

}

}
