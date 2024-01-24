package squad42.inglesTransforma42.model;


import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.security.crypto.password.PasswordEncoder;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Transient;
import squad42.inglesTransforma42.DTOs.UsuarioDTO;
import squad42.inglesTransforma42.enums.UserType;

@MappedSuperclass
public class Usuario {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(nullable=false)
	private String nome;
	@Column(nullable=false)
	private String email;
	@Column(nullable=false)
	private String senha;
	@Column(nullable=false)
	private String cpf;
	@Enumerated(EnumType.STRING)
	@Column(nullable=false)
	private UserType user_role;
	@Column(nullable=false)
	@DateTimeFormat(iso = ISO.DATE, pattern = "yyyy-MM-dd")
	private Date data_nascimento;
	@Column(nullable=false)
	private String sexo;


 

	@Column(nullable = false)
	private String imagem;

	public Usuario() {
		super();
	}
	
		

	public Usuario(int id, String nome, String email, String senha, String cpf, UserType user_role, String sexo,
			Date data_nascimento, String imagem) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.cpf = cpf;
		this.user_role = user_role;
		this.sexo = sexo;
		this.data_nascimento = data_nascimento;
		this.imagem = imagem;
	}

	public Usuario(UsuarioDTO usuario){
		this.nome = usuario.nome();
		this.email = usuario.email();
		this.senha = usuario.senha();
		this.cpf = usuario.cpf();
		this.user_role = usuario.user_role();
		this.data_nascimento = usuario.data_nascimento();
		this.sexo = usuario.sexo();
		this.imagem = usuario.imagem();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public UserType getUser_role() {
		return user_role;
	}

	public void setUser_role(UserType user_role) {
		this.user_role = user_role;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public Date getData_nascimento() {
		return data_nascimento;
	}

	public void setData_nascimento(Date data_nascimento) {
		this.data_nascimento = data_nascimento;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}
	
	
}
