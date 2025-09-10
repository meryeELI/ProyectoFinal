package com.example.tienda.DTO;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Información pública de un Proveedor")
public class RepresentanteDTO {

    @Schema(description = "ID único del Proveedor", example = "1")
    private Long id;

    @Schema(description = "Nombre del Proveedor", example = "Mery Acevedo")
    private String nombre;

    @Schema(description = "Correo electrónico del Proveedor", example = "mery@email.com")
    private String correo;

    @Schema(description = "dui Proveedor", example = "minimo 6 caracteres")
    private String dui;

    @Schema(description = "telefono Proveedor", example = "minimo 6 caracteres")
    private String telefono;

    @Schema(description = "direccion Proveedor", example = "minimo 6 caracteres")
    private String direccion;



    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    // Getters y Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }


    public String getDui() {
        return dui;
    }
    public void  setDui(String dui){this.dui = dui;

    }



}
