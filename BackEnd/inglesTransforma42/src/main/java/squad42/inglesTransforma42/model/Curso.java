package squad42.inglesTransforma42.model;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;
import squad42.inglesTransforma42.DTOs.CursoDTO;

import java.util.Date;

@Entity
@Table(name = "Cursos")
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    private Professor professor;

    @Column(nullable = false)
    private String nome;

    @Column(nullable = false)
    private int qtd_aulas;

    @Column(nullable = false)
    private String imagem;

    @Column(nullable = false)
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE, pattern = "yyyy-MM-dd")
    private String data_publicacao;

    @Column(nullable = false)
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE, pattern = "yyyy-MM-dd")
    private String data_fechamento;

    public Curso() {
    }

    public Curso(int id, Professor professor, String nome, int qtd_aulas, String data_publicacao, String data_fechamento, String imagem) {
        this.id = id;
        this.professor = professor;
        this.nome = nome;
        this.qtd_aulas = qtd_aulas;
        this.data_publicacao = data_publicacao;
        this.data_fechamento = data_fechamento;
        this.imagem = imagem;
    }

    public Curso(CursoDTO cursoDTO){
        this.id = cursoDTO.id();
        this.professor = cursoDTO.professor();
        this.nome = cursoDTO.nome();
        this.qtd_aulas = cursoDTO.qtd_aulas();
        this.data_publicacao = cursoDTO.data_publicacao();
        this.data_fechamento = cursoDTO.data_fechamento();
        this.imagem = cursoDTO.imagem();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Professor getProfessor() {
        return professor;
    }

    public void setProfessor(Professor professor) {
        this.professor = professor;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getQtd_aulas() {
        return qtd_aulas;
    }

    public void setQtd_aulas(int qtd_aulas) {
        this.qtd_aulas = qtd_aulas;
    }

    public String getData_publicacao() {
        return data_publicacao;
    }

    public void setData_publicacao(String data_publicacao) {
        this.data_publicacao = data_publicacao;
    }

    public String getData_fechamento() {
        return data_fechamento;
    }

    public void setData_fechamento(String data_fechamento) {
        this.data_fechamento = data_fechamento;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }
}
