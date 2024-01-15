package squad42.inglesTransforma42.controller;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.*;
import squad42.inglesTransforma42.enums.UserType;
import squad42.inglesTransforma42.model.Aluno;
import squad42.inglesTransforma42.model.Professor;
import squad42.inglesTransforma42.model.Usuario;
import squad42.inglesTransforma42.repository.AlunoRepository;
import squad42.inglesTransforma42.repository.ProfessorRepository;

@RestController
@RequestMapping("/usuario")
public class UsuariosController {
@Autowired
    private AlunoRepository alunoRepository;
@Autowired
    private ProfessorRepository professorRepository;

@PostMapping
    public void cadastrar(@RequestBody Usuario usuario){
    if(usuario.getUser_role() == UserType.ALUNO){
        if(professorRepository.findByEmail(usuario.getEmail()) != null){
            throw new DataIntegrityViolationException("Email já cadastrado");
        }
        alunoRepository.save(new Aluno(usuario));
    }else{
        if (alunoRepository.findByEmail(usuario.getEmail()) != null){
            throw new DataIntegrityViolationException("Email já cadastrado");
        }
        professorRepository.save(new Professor(usuario));
    }
}

@GetMapping
    public Usuario logar(@RequestBody Usuario usuario) throws Exception{

    Aluno aluno = alunoRepository.findByEmail(usuario.getEmail());
    Professor professor = professorRepository.findByEmail(usuario.getEmail());

        System.out.println(usuario.getEmail());

    if(aluno == null && professor == null){
        System.out.println("Não achou usuario");
        throw new EntityNotFoundException("Email ou senha invalidos");
    }else {
        if (aluno != null) {
            if (usuario.getSenha().equals(aluno.getSenha())) {
                usuario = aluno;
                System.out.println("Aluno logado");
            } else {
                System.out.println("Senha do aluno incorreta");
                throw new Exception("Email ou senha invalidos");

            }
        }
        if (professor != null) {
            if (usuario.getSenha().equals(professor.getSenha())) {
                usuario = professor;
                System.out.println("Professor logado");
            } else {
                System.out.println("Senha do professor incorreta");
                throw new Exception("Email ou senha invalidos");
            }
        }
    }
    return usuario;
}
}
