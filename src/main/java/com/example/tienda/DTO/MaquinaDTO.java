// DTO para Maquina
package com.example.tienda.DTO;

public class MaquinaDTO {
    private Long id;
    private String nombre;
    private String modelo;
    private String proveedorNombre; // en lugar de id

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }
    public String getModelo() { return modelo; }
    public void setModelo(String modelo) { this.modelo = modelo; }
    public String getProveedorNombre() { return proveedorNombre; }
    public void setProveedorNombre(String proveedorNombre) { this.proveedorNombre = proveedorNombre; }
}
