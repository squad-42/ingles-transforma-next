
package squad42.inglesTransforma42.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import squad42.inglesTransforma42.model.Aluno;


public interface AlunoRepository extends JpaRepository<Aluno, Integer> {
	Aluno findByEmail(String email);

	Aluno findByCpf(String cpf);
}