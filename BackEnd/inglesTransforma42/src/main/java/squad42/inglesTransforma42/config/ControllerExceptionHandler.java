package squad42.inglesTransforma42.config;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import squad42.inglesTransforma42.DTOs.ExceptionDTO;

@RestControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity usuarioNaoEncontrado(EntityNotFoundException exception){
        ExceptionDTO exceptionDTO = new ExceptionDTO("Usuario não encotrado.", "500");
        return ResponseEntity.internalServerError().body(exceptionDTO);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity senhaIncorreta(Exception exception){
        ExceptionDTO exceptionDTO = new ExceptionDTO("Email ou senha invalidos.", "500");
        return ResponseEntity.internalServerError().body(exceptionDTO);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity emailJaCadastrado(Exception exception){
        ExceptionDTO exceptionDTO = new ExceptionDTO("Email já cadastrado.", "500");
        return ResponseEntity.internalServerError().body(exceptionDTO);
    }
}