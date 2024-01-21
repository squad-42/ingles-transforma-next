package squad42.inglesTransforma42.exception;

public class CpfJaCadastradoException extends RuntimeException{
    public final String mensagem = "CPF já cadastrado.";

    public CpfJaCadastradoException(){}

    public String getMensagem() {
        return mensagem;
    }
}
