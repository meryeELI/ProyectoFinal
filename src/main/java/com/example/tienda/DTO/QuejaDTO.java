package com.example.tienda.DTO;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "Datos para crear una queja")
public class QuejaDTO {

    @Schema(description = "Descripción de la queja", example = "Producto roto")
    private String descripcion;

    @Schema(description = "Estado de la queja", example = "pendiente")
    private String estado;

    @Schema(description = "ID del representante asignado", example = "1")
    private Long representanteId;

    @Schema(description = "Nombre del representante asignado", example = "Carlos López")
    private String representanteNombre;

    @Schema(description = "ID del usuario asignado", example = "1")
    private Long usuarioId;


    // Getters y setters
    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }

    public Long getRepresentanteId() { return representanteId; }
    public void setRepresentanteId(Long representanteId) { this.representanteId = representanteId; }


    public String getRepresentanteNombre() { return representanteNombre; }
    public void setRepresentanteNombre(String representanteNombre) { this.representanteNombre = representanteNombre; }


    public Long getUsuarioId() {return usuarioId;
    }
    public void setUsuarioId(Long usuarioId) { this.usuarioId = usuarioId; }

}
