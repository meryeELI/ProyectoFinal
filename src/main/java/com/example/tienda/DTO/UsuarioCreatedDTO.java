package com.example.tienda.DTO;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Datos necesarios para crear un usuario")
public class UsuarioCreatedDTO {

    @Schema(description = "Nombre del usuario", example = "Mery Acevedo", required = true)
    private String nombre;

    @Schema(description = "Correo electrónico del usuario", example = "mery@email.com", required = true)
    private String email;

    @Schema(description = "Contraseña del usuario", example = "123456", required = true)
    private String password;

    // Getters y Setters
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
