package squad42.inglesTransforma42.config;

public class CustomException extends RuntimeException{

    private String msg;
    public CustomException(String msg){
        this.msg = msg;
    }

    public String getMsg() {
        return msg;
    }
}
