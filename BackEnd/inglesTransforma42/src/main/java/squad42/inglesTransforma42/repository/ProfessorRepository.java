
package squad42.inglesTransforma42.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import squad42.inglesTransforma42.model.Professor;
public interface ProfessorRepository extends JpaRepository<Professor, Integer> {
	Professor findByEmail(String email);
	Professor findByCpf(String cpf);
}