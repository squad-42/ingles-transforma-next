package squad42.inglesTransforma42.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import squad42.inglesTransforma42.model.Curso;
import squad42.inglesTransforma42.repository.CursosRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CursosController {
    @Autowired
    private CursosRepository cursoRepository;

    @GetMapping("/cursos")
    public List<Curso> listarCursos() {
        return cursoRepository.findAll();
    }

    @PostMapping("/cursos")
    public Curso criarCurso(@RequestBody Curso curso) {
        return cursoRepository.save(curso);
    }

    @PutMapping("/cursos/{id}")
    public Curso editarCurso(@PathVariable String id, @RequestBody Curso curso) {
        return cursoRepository.save(curso);
    }

    @DeleteMapping("/cursos/{id}")
    public void deletarCurso(@PathVariable String id) {
        cursoRepository.deleteById(Integer.parseInt(id));
    }
}
