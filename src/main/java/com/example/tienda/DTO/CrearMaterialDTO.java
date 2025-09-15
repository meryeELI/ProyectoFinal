package com.example.tienda.DTO;

public class CrearMaterialDTO {
    private String nombre;
    private String descripcion;
    private String unidadMedida;
    private int stockActual;
    private int stockMinimo;
    private float precioUnitario;
    private Long proveedorId; // 👈 lo manda el cliente

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public String getUnidadMedida() { return unidadMedida; }
    public void setUnidadMedida(String unidadMedida) { this.unidadMedida = unidadMedida; }

    public int getStockActual() { return stockActual; }
    public void setStockActual(int stockActual) { this.stockActual = stockActual; }

    public int getStockMinimo() { return stockMinimo; }
    public void setStockMinimo(int stockMinimo) { this.stockMinimo = stockMinimo; }

    public float getPrecioUnitario() { return precioUnitario; }
    public void setPrecioUnitario(float precioUnitario) { this.precioUnitario = precioUnitario; }

    public Long getProveedorId() { return proveedorId; }
    public void setProveedorId(Long proveedorId) { this.proveedorId = proveedorId; }
}
