package squad42.inglesTransforma42.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import squad42.inglesTransforma42.DTOs.CursoDTO;
import squad42.inglesTransforma42.model.Curso;
import squad42.inglesTransforma42.repository.CursosRepository;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/cursos")
public class CursosController {
    @Autowired
    private CursosRepository cursoRepository;

    @GetMapping
    public List<CursoDTO> listarCursos() {
        return cursoRepository.findAll().stream().map(CursoDTO::new).toList();
    }

    @PostMapping
    public Curso criarCurso(@RequestBody CursoDTO cursoDTO) {
        return cursoRepository.save(new Curso(cursoDTO));
    }

    @PutMapping("/{id}")
    public Curso editarCurso(@PathVariable String id, @RequestBody CursoDTO cursoDTO) {
        return cursoRepository.save(new Curso(cursoDTO));
    }

    @DeleteMapping("/{id}")
    public void deletarCurso(@PathVariable String id) {
        cursoRepository.deleteById(Integer.parseInt(id));
    }
}
