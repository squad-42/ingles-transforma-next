	package squad42.inglesTransforma42.controller;
	
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.security.crypto.password.PasswordEncoder;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.PostMapping;
	import org.springframework.web.bind.annotation.RequestBody;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;
	
	import jakarta.persistence.EntityNotFoundException;
	import squad42.inglesTransforma42.DTOs.UsuarioDTO;
	import squad42.inglesTransforma42.enums.UserType;
	import squad42.inglesTransforma42.exception.CpfJaCadastradoException;
	import squad42.inglesTransforma42.exception.EmailJaCadastradoException;
	import squad42.inglesTransforma42.exception.SenhaIncorretaException;
	import squad42.inglesTransforma42.model.Aluno;
	import squad42.inglesTransforma42.model.Professor;
	import squad42.inglesTransforma42.repository.AlunoRepository;
	import squad42.inglesTransforma42.repository.ProfessorRepository;
	
	@RestController
	@RequestMapping("/usuario")
	@CrossOrigin(origins = "*")
	public class UsuariosController {
	@Autowired
	    private AlunoRepository alunoRepository;
	@Autowired
	    private ProfessorRepository professorRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
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
	        Aluno aluno = new Aluno(usuario);
	        aluno.setSenha(passwordEncoder.encode(usuario.senha()));
	        alunoRepository.save(aluno);
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
	        Professor professor = new Professor(usuario);
	        professor.setSenha(passwordEncoder.encode(usuario.senha())); 
	        professorRepository.save(professor);
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
	            	System.out.println("Usuario senha: " + usuario.senha());
	                System.out.println("Aluno senha: " + aluno.getSenha());

	                if (passwordEncoder.matches(usuario.senha(), aluno.getSenha())) {
	                    return new UsuarioDTO(aluno);
	                } else {
	                    System.out.println("Senha do aluno incorreta");
	                    throw new SenhaIncorretaException();
	
	                }
	            }
	            if (professor != null) {
	            	System.out.println("Usuario senha: " + usuario.senha());
	                System.out.println("Aluno senha: " + professor.getSenha());

	                if (passwordEncoder.matches(usuario.senha(), professor.getSenha())) {
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
