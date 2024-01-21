package squad42.inglesTransforma42.exception;

public class SenhaIncorretaException extends RuntimeException{
    private final String mensagem = "Email ou senha invalidos.";

    public SenhaIncorretaException(){}

    public String getMensagem() {
        return mensagem;
    }
}
