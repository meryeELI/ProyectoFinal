package com.example.tienda.DTO;


import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Información pública de un usuario")
public class UsuarioDTO {

    @Schema(description = "ID único del usuario", example = "1")
    private Long id;

    @Schema(description = "Nombre del usuario", example = "Mery Acevedo")
    private String nombre;

    @Schema(description = "Correo electrónico del usuario", example = "mery@email.com")
    private String email;

    @Schema(description = "password usuario", example = "minimo 6 caracteres")
    private String password;

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String password() {
        return password;
    }
    public void  Setpassword(String password){this.password = password;

    }
}

