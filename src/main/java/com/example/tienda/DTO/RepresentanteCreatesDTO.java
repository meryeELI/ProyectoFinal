package com.example.tienda.DTO;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Datos necesarios para crear un Proveedor")
public class RepresentanteCreatesDTO {


    @Schema(description = "Nombre del Proveedor", example = "Mery Acevedo", required = true)
    private String nombre;

    @Schema(description = "Correo electrónico del Proveedor", example = "mery@email.com", required = true)
    private String correo;

    @Schema(description = "dui del Proveedor", example = "123456", required = true)
    private String dui;
    @Schema(description = "telefono del Proveedor", example = "123456", required = true)
    private String telefono;
    @Schema(description = "direccion del Proveedor", example = "123456", required = true)
    private String direccion;



    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }



    // Getters y Setters
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }


    public String getDui() { return dui; }
    public void setDui(String password) { this.dui = password; }
}
