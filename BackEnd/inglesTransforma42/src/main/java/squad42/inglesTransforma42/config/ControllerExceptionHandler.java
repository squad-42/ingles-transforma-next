package squad42.inglesTransforma42.config;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import squad42.inglesTransforma42.DTOs.ExceptionDTO;

@RestControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity usuarioNaoEncontrado(EntityNotFoundException exception){
        ExceptionDTO exceptionDTO = new ExceptionDTO("Email ou senha incorretas", "401");
        return ResponseEntity.internalServerError().body(exceptionDTO);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity senhaIncorreta(Exception exception){
        ExceptionDTO exceptionDTO = new ExceptionDTO("Email ou senha invalidos", "510");
        return ResponseEntity.internalServerError().body(exceptionDTO);
    }

    @ExceptionHandler(CustomException.class)
    public ResponseEntity usuarioJaCadastrado(CustomException exception){
        ExceptionDTO exceptionDTO = new ExceptionDTO(exception.getMsg(), "500");
        return ResponseEntity.internalServerError().body(exceptionDTO);
    }

}
