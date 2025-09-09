package com.example.tienda.DTO;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Información pública de un representante")
public class RepresentanteDTO {

    @Schema(description = "ID único del representante", example = "1")
    private Long id;

    @Schema(description = "Nombre del representante", example = "Mery Acevedo")
    private String nombre;

    @Schema(description = "Correo electrónico del representante", example = "mery@email.com")
    private String email;

    @Schema(description = "dui representante", example = "minimo 6 caracteres")
    private String dui;

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getDui() {
        return dui;
    }
    public void  setDui(String dui){this.dui = dui;

    }



}
