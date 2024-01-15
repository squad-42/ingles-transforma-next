package squad42.inglesTransforma42.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;


import jakarta.persistence.*;
import squad42.inglesTransforma42.enums.UserType;

@Entity
@Table(name= "Professores")
public class Professor extends Usuario{

	public Professor(){
		super();
	}
	public Professor(Usuario usuario) {
		super(usuario);
	}

}
