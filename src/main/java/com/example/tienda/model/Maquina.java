package com.example.tienda.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "maquina")
public class Maquina {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "proveedor_id")
    @JsonBackReference(value = "rep-maq")
    private Proveedor proveedor;

    private String nombre;
    private String modelo;

    @OneToMany(mappedBy = "maquina", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<parte> partes;


    @OneToMany(mappedBy = "maquina", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonBackReference(value = "rep-fallo")
    private List<fallo> fallos;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Proveedor getProveedor() {
        return proveedor;
    }

    public void setProveedor(Proveedor proveedor) {
        this.proveedor = proveedor;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public List<parte> getParte() {
        return partes;
    }

    public void setParte(List<parte> parte) {
        this.partes = parte;
    }

    public List<fallo> getFallos() {
        return fallos;
    }

    public void setFallos(List<fallo> fallos) {
        this.fallos = fallos;
    }
}
