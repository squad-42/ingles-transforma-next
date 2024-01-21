package squad42.inglesTransforma42.model;

import jakarta.persistence.*;
import squad42.inglesTransforma42.DTOs.UsuarioDTO;

@Entity
@Table(name= "Alunos")
public class Aluno extends Usuario {

    public Aluno(){
        super();
    }
   public Aluno(UsuarioDTO usuario){
       super(usuario);
   }
}