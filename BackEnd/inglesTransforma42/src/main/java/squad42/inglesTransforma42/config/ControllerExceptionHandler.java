package squad42.inglesTransforma42.config;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import squad42.inglesTransforma42.DTOs.ExceptionDTO;
import squad42.inglesTransforma42.exception.CpfJaCadastradoException;
import squad42.inglesTransforma42.exception.EmailJaCadastradoException;
import squad42.inglesTransforma42.exception.SenhaIncorretaException;

@RestControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity usuarioNaoEncontrado(EntityNotFoundException exception){
        ExceptionDTO exceptionDTO = new ExceptionDTO("Email ou senha invalidos.");
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exceptionDTO);
    }

    @ExceptionHandler(SenhaIncorretaException.class)
    public ResponseEntity senhaIncorreta(SenhaIncorretaException exception){
        ExceptionDTO exceptionDTO = new ExceptionDTO(exception.getMensagem());
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(exceptionDTO);
    }

    @ExceptionHandler(EmailJaCadastradoException.class)
    public ResponseEntity emailJaCadastrado(EmailJaCadastradoException exception){
        ExceptionDTO exceptionDTO = new ExceptionDTO(exception.getMensagem());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(exceptionDTO);
    }

    @ExceptionHandler(CpfJaCadastradoException.class)
    public ResponseEntity CpfJaCadastrado(CpfJaCadastradoException exception){
        ExceptionDTO exceptionDTO = new ExceptionDTO(exception.getMensagem());
        return ResponseEntity.status(HttpStatus.CONFLICT).body(exceptionDTO);
    }

}
