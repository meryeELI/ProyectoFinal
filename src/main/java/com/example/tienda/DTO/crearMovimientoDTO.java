package com.example.tienda.DTO;


public class crearMovimientoDTO {
    private String tipoMov;
    private String observacion;
    private int cantidad;
    private Long materialId; // 👈 lo manda el cliente

    public String getTipoMov() { return tipoMov; }
    public void setTipoMov(String tipoMov) { this.tipoMov = tipoMov; }

    public String getObservacion() { return observacion; }
    public void setObservacion(String observacion) { this.observacion = observacion; }

    public int getCantidad() { return cantidad; }
    public void setCantidad(int cantidad) { this.cantidad = cantidad; }

    public Long getMaterialId() { return materialId; }
    public void setMaterialId(Long materialId) { this.materialId = materialId; }
}
