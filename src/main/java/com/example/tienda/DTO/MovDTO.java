package com.example.tienda.DTO;

import java.time.LocalDateTime;

public class MovDTO {
    private Long id;
    private String tipoMov;
    private String observacion;
    private int cantidad;
    private LocalDateTime fecha;
    private String materialNombre; // 👈 en lugar de id

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTipoMov() { return tipoMov; }
    public void setTipoMov(String tipoMov) { this.tipoMov = tipoMov; }

    public String getObservacion() { return observacion; }
    public void setObservacion(String observacion) { this.observacion = observacion; }

    public int getCantidad() { return cantidad; }
    public void setCantidad(int cantidad) { this.cantidad = cantidad; }

    public LocalDateTime getFecha() { return fecha; }
    public void setFecha(LocalDateTime fecha) { this.fecha = fecha; }

    public String getMaterialNombre() { return materialNombre; }
    public void setMaterialNombre(String materialNombre) { this.materialNombre = materialNombre; }
}
