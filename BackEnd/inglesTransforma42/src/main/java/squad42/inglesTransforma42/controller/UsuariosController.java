package squad42.inglesTransforma42.controller;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import squad42.inglesTransforma42.exception.CpfJaCadastradoException;
import squad42.inglesTransforma42.exception.EmailJaCadastradoException;
import squad42.inglesTransforma42.enums.UserType;
import squad42.inglesTransforma42.exception.SenhaIncorretaException;
import squad42.inglesTransforma42.model.Aluno;
import squad42.inglesTransforma42.model.Professor;
import squad42.inglesTransforma42.repository.AlunoRepository;
import squad42.inglesTransforma42.repository.ProfessorRepository;
import squad42.inglesTransforma42.DTOs.UsuarioDTO;

@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "http://localhost:3000")
public class UsuariosController {
@Autowired
    private AlunoRepository alunoRepository;
@Autowired
    private ProfessorRepository professorRepository;

@PostMapping("/cadastro")
    public void cadastrar(@RequestBody UsuarioDTO usuario){
    if(usuario.user_role() == UserType.ALUNO){
        if(professorRepository.findByEmail(usuario.email()) != null){
            throw new EmailJaCadastradoException();
        }
        if(professorRepository.findByCpf(usuario.cpf()) != null){
            throw new CpfJaCadastradoException();
        }
        if(alunoRepository.findByEmail(usuario.email()) != null){
            throw new EmailJaCadastradoException();
        }
        if(alunoRepository.findByCpf(usuario.cpf()) != null){
            throw new CpfJaCadastradoException();
        }
        alunoRepository.save(new Aluno(usuario));
    }else{
        if (alunoRepository.findByEmail(usuario.email()) != null){
            throw new EmailJaCadastradoException();
        }
        if (alunoRepository.findByCpf(usuario.cpf()) != null){
            throw new CpfJaCadastradoException();
        }
        if(professorRepository.findByEmail(usuario.email()) != null){
            throw new EmailJaCadastradoException();
        }
        if(professorRepository.findByCpf(usuario.cpf()) != null){
            throw new CpfJaCadastradoException();
        }
        professorRepository.save(new Professor(usuario));
    }
}

    @PostMapping("/login")
    public UsuarioDTO logar(@RequestBody UsuarioDTO usuario) throws Exception{

        Aluno aluno = alunoRepository.findByEmail(usuario.email());
        Professor professor = professorRepository.findByEmail(usuario.email());



        if(aluno == null && professor == null){
            System.out.println("Não achou usuario");
            throw new EntityNotFoundException("Email ou senha invalidos");
        }else {
            if (aluno != null) {
                if (usuario.senha().equals(aluno.getSenha())) {
                    return new UsuarioDTO(aluno);
                } else {
                    System.out.println("Senha do aluno incorreta");
                    throw new SenhaIncorretaException();

                }
            }
            if (professor != null) {
                if (usuario.senha().equals(professor.getSenha())) {
                    return new UsuarioDTO(professor);
                } else {
                    System.out.println("Senha do professor incorreta");
                    throw new SenhaIncorretaException();
                }
            }
        }
        return null;
    }

}
