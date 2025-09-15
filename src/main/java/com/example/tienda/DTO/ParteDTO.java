// DTO para Parte
package com.example.tienda.DTO;

public class ParteDTO {
    private Long id;
    private String nombreParte;
    private String descripcion;
    private float costo;
    private String maquinaNombre; // mostrar el nombre de la máquina en lugar del id

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNombreParte() { return nombreParte; }
    public void setNombreParte(String nombreParte) { this.nombreParte = nombreParte; }
    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }
    public float getCosto() { return costo; }
    public void setCosto(float costo) { this.costo = costo; }
    public String getMaquinaNombre() { return maquinaNombre; }
    public void setMaquinaNombre(String maquinaNombre) { this.maquinaNombre = maquinaNombre; }
}
