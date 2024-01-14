
package squad42.inglesTransforma42.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import squad42.inglesTransforma42.model.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Integer> {
	Aluno findByEmail(String email);

}