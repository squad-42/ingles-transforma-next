package squad42.inglesTransforma42.model;

import java.util.Date;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import squad42.inglesTransforma42.enums.UserType;

@Entity
@Table(name= "Alunos")
public class Aluno extends Usuario{

    public Aluno(){
        super();
    }
   public Aluno(Usuario usuario){
       super(usuario);
   }
}