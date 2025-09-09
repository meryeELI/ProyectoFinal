// DTO para Fallo
package com.example.tienda.DTO;

import java.time.LocalDateTime;

public class FalloDTO {
    private Long id;
    private String descripcion;
    private String estado;
    private LocalDateTime fechaReporte;
    private String maquinaNombre;
    private String parteNombre;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
    public String getEstado() { return estado; }
    public void setEstado(String estado) { this.estado = estado; }
    public LocalDateTime getFechaReporte() { return fechaReporte; }
    public void setFechaReporte(LocalDateTime fechaReporte) { this.fechaReporte = fechaReporte; }
    public String getMaquinaNombre() { return maquinaNombre; }
    public void setMaquinaNombre(String maquinaNombre) { this.maquinaNombre = maquinaNombre; }
    public String getParteNombre() { return parteNombre; }
    public void setParteNombre(String parteNombre) { this.parteNombre = parteNombre; }
}
