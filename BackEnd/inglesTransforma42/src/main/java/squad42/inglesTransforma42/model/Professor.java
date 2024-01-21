package squad42.inglesTransforma42.model;

import jakarta.persistence.*;
import squad42.inglesTransforma42.DTOs.UsuarioDTO;

@Entity
@Table(name= "Professores")
public class Professor extends Usuario {

	public Professor(){
		super();
	}
	public Professor(UsuarioDTO usuario) {
		super(usuario);
	}

}
