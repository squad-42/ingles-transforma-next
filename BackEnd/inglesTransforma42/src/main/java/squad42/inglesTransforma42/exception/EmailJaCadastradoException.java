package squad42.inglesTransforma42.exception;

public class EmailJaCadastradoException extends RuntimeException{
    private final String mensagem = "Email já cadastrado.";

    public EmailJaCadastradoException(){}

    public String getMensagem(){
        return this.mensagem;
    }

}
