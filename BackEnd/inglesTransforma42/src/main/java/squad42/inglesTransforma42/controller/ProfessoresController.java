package squad42.inglesTransforma42.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import squad42.inglesTransforma42.model.Professor;
import squad42.inglesTransforma42.repository.ProfessorRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProfessoresController {
    @Autowired
    private ProfessorRepository professorRepository;

    @GetMapping("/professores")
    public List<Professor> listarProfessores(){
        return professorRepository.findAll();
    }
}
