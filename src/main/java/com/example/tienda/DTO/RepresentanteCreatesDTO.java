package com.example.tienda.DTO;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Datos necesarios para crear un representante")
public class RepresentanteCreatesDTO {

    @Schema(description = "Nombre del representante", example = "Mery Acevedo", required = true)
    private String nombre;

    @Schema(description = "Correo electrónico del representante", example = "mery@email.com", required = true)
    private String email;

    @Schema(description = "dui del representante", example = "123456", required = true)
    private String dui;

    // Getters y Setters
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getDui() { return dui; }
    public void setDui(String password) { this.dui = password; }
}
